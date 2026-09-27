import React, { useState } from 'react';
import { ArrowUpLeft, ArrowUpRight, Layers } from 'lucide-react';

/**
 * Elevated Service Pillar Card with 4:3 image, resilient fallback, highlights list, and WhatsApp inquiry link.
 */
export default function ServiceCard({
  pillar,
  imageSrc,
  fallbackSrc,
  includedLabel,
  ctaLabel,
  whatsappUrl,
  dir = 'rtl',
}) {
  const [imgSrc, setImgSrc] = useState(imageSrc);
  const [imgFailed, setImgFailed] = useState(false);

  const handleImageError = () => {
    if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    } else {
      setImgFailed(true);
    }
  };

  const ArrowIcon = dir === 'rtl' ? ArrowUpLeft : ArrowUpRight;
  const whatsappMessage = encodeURIComponent(pillar.title);
  const targetHref = whatsappUrl
    ? `${whatsappUrl}?text=${whatsappMessage}`
    : '#contact';

  return (
    <article className="service-card">
      <div className="service-card__media">
        {!imgFailed ? (
          <img
            src={imgSrc}
            alt={pillar.title}
            className="service-card__img"
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={handleImageError}
          />
        ) : (
          <div className="img-fallback" aria-hidden="true">
            <Layers size={32} />
            <span>{pillar.title}</span>
          </div>
        )}
      </div>

      <div className="service-card__body">
        <span className="service-card__index">{pillar.number}</span>
        <h3 className="service-card__title">{pillar.title}</h3>
        <p className="service-card__desc">{pillar.description}</p>

        {pillar.highlights && pillar.highlights.length > 0 && (
          <div>
            {includedLabel && (
              <div className="service-card__list-label">{includedLabel}</div>
            )}
            <ul className="service-card__highlights">
              {pillar.highlights.map((item) => (
                <li key={item} className="service-card__highlight-item">
                  <span className="service-card__dot" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <a
          href={targetHref}
          target={whatsappUrl ? '_blank' : undefined}
          rel={whatsappUrl ? 'noopener noreferrer' : undefined}
          className="service-card__cta"
        >
          <span>{ctaLabel}</span>
          <ArrowIcon size={16} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
