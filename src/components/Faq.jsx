import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

/**
 * FAQ Section — Clean 4-question accordion addressing practical local business questions.
 */
export default function Faq({ content }) {
  const { faqSection } = content;
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqSection?.items || faqSection.items.length === 0) {
    return null;
  }

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section id="faq" className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow={faqSection.eyebrow}
          title={faqSection.title}
          subtitle={faqSection.subtitle}
          align="center"
        />

        <div className="faq-list">
          {faqSection.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? 'faq-item--open' : ''}`.trim()}
              >
                <button
                  type="button"
                  className="faq-item__trigger"
                  aria-expanded={isOpen}
                  onClick={() => handleToggle(index)}
                >
                  <span>{item.question}</span>
                  <span className="faq-item__icon" aria-hidden="true">
                    <ChevronDown size={18} />
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-item__content">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
