import React, { useState } from 'react';
import Button from './ui/Button';

/**
 * Full-height Hero Section (min-height: 90vh) with full-bleed background image,
 * single tonal overlay, clear typographic hierarchy, and quiet trust bar.
 */
export default function Hero({ content, contact, images }) {
  const { hero, openingHours } = content;
  const [imgSrc, setImgSrc] = useState(images.hero);
  const [imgError, setImgError] = useState(false);

  const handleImageError = () => {
    if (
      images.unsplashFallbacks?.hero &&
      imgSrc !== images.unsplashFallbacks.hero
    ) {
      setImgSrc(images.unsplashFallbacks.hero);
    } else {
      setImgError(true);
    }
  };

  const primaryHref = contact.whatsappUrl || `tel:${contact.phoneRaw}`;

  return (
    <section id="top" className="hero">
      <div className="hero__media" aria-hidden="true">
        {!imgError && (
          <img
            src={imgSrc}
            alt=""
            className="hero__img"
            referrerPolicy="no-referrer"
            onError={handleImageError}
          />
        )}
        <div className="hero__overlay" />
      </div>

      <div className="container">
        <div className="hero__content">
          <span className="eyebrow eyebrow--on-dark">{hero.eyebrow}</span>

          <h1 className="hero__headline">{hero.headline}</h1>

          <p className="hero__subheadline">{hero.subheadline}</p>

          <div className="hero__actions">
            <Button
              href={primaryHref}
              variant="primary"
              external={Boolean(contact.whatsappUrl)}
            >
              {hero.primaryCta}
            </Button>

            <Button href="#services" variant="outline-light">
              {hero.secondaryCta}
            </Button>
          </div>

          <div className="hero__trust">
            <span>{hero.trustLinePrefix}</span>
            {contact.phoneRaw && (
              <>
                <span aria-hidden="true">{hero.trustLineSeparator}</span>
                <span>{hero.trustLinePhoneLabel}</span>
                <a
                  href={`tel:${contact.phoneRaw}`}
                  className="hero__trust-phone tabular-nums"
                >
                  {contact.phoneDisplay}
                </a>
              </>
            )}
            {openingHours && (
              <>
                <span aria-hidden="true">{hero.trustLineSeparator}</span>
                <span>{openingHours}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
