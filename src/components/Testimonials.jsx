import React from 'react';
import SectionHeading from './ui/SectionHeading';

/**
 * Testimonials Section — Rendered ONLY if real testimonials exist in src/config/business.js.
 * Never fabricates reviews or placeholder filler.
 */
export default function Testimonials({ testimonials, content }) {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const { testimonialsSection, langCode } = content;

  return (
    <section id="testimonials" className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow={testimonialsSection.eyebrow}
          title={testimonialsSection.title}
        />

        <div className="testimonials-grid">
          {testimonials.map((item, idx) => {
            const quote =
              typeof item.quote === 'object'
                ? item.quote[langCode]
                : item.quote;
            const author =
              typeof item.author === 'object'
                ? item.author[langCode]
                : item.author;
            const role =
              typeof item.role === 'object' ? item.role[langCode] : item.role;

            return (
              <blockquote key={idx} className="testimonial-card">
                <p className="testimonial-card__quote">“{quote}”</p>
                <footer>
                  <div className="testimonial-card__author">{author}</div>
                  {role && <div className="testimonial-card__role">{role}</div>}
                </footer>
              </blockquote>
            );
          })}
        </div>
      </div>
    </section>
  );
}
