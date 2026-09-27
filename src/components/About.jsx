import React, { useState } from 'react';
import { Building2 } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';

/**
 * Refined Two-Column About Section introducing Rawaq Digital in Faisaliyah Dist., Jeddah.
 */
export default function About({ content, contact, images }) {
  const { aboutSection } = content;
  const [imgSrc, setImgSrc] = useState(images.about);
  const [imgFailed, setImgFailed] = useState(false);

  const handleImageError = () => {
    if (
      images.unsplashFallbacks?.about &&
      imgSrc !== images.unsplashFallbacks.about
    ) {
      setImgSrc(images.unsplashFallbacks.about);
    } else {
      setImgFailed(true);
    }
  };

  const primaryHref = contact.whatsappUrl || `tel:${contact.phoneRaw}`;

  return (
    <section id="about" className="section section--alt">
      <div className="container">
        <div className="about-grid">
          <div className="about__media">
            {!imgFailed ? (
              <img
                src={imgSrc}
                alt={aboutSection.title}
                className="about__img"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={handleImageError}
              />
            ) : (
              <div className="img-fallback" aria-hidden="true">
                <Building2 size={36} />
                <span>{content.businessName}</span>
              </div>
            )}
          </div>

          <div>
            <SectionHeading
              eyebrow={aboutSection.eyebrow}
              title={aboutSection.title}
            />

            <div className="about__paragraphs">
              {aboutSection.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="about__meta-row">
              <div>
                <span className="about__meta-label">
                  {aboutSection.locationLabel}
                </span>
                <span className="about__meta-value">
                  {aboutSection.locationValue}
                </span>
              </div>

              {contact.phoneRaw && (
                <div>
                  <span className="about__meta-label">
                    {aboutSection.directContactLabel}
                  </span>
                  <a
                    href={`tel:${contact.phoneRaw}`}
                    className="about__meta-value tabular-nums"
                  >
                    {contact.phoneDisplay}
                  </a>
                </div>
              )}
            </div>

            <Button
              href={primaryHref}
              variant="navy"
              external={Boolean(contact.whatsappUrl)}
            >
              {aboutSection.ctaLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
