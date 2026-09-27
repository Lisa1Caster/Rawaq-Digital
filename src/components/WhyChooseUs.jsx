import React from 'react';
import SectionHeading from './ui/SectionHeading';

/**
 * Why Choose Us — 4 concise, honest trust points with editorial numbering.
 */
export default function WhyChooseUs({ content }) {
  const { whyChooseUsSection } = content;

  return (
    <section id="why-us" className="section">
      <div className="container">
        <SectionHeading
          eyebrow={whyChooseUsSection.eyebrow}
          title={whyChooseUsSection.title}
          subtitle={whyChooseUsSection.subtitle}
        />

        <div className="why-grid">
          {whyChooseUsSection.points.map((point) => (
            <article key={point.number} className="why-card">
              <span className="why-card__number">{point.number}</span>
              <h3 className="why-card__title">{point.title}</h3>
              <p>{point.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
