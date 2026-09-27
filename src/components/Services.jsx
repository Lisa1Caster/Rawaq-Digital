import React, { useState } from 'react';
import { ArrowUpLeft, ArrowUpRight } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import ServiceCard from './ui/ServiceCard';

/**
 * Services Section:
 * 1. Three elevated image cards for core pillars (3 across desktop, 1 mobile).
 * 2. Complete 12-service directory with interactive category filter tabs.
 */
export default function Services({ content, contact, images }) {
  const { servicesSection, dir } = content;
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices =
    activeCategory === 'all'
      ? servicesSection.allServices
      : servicesSection.allServices.filter(
          (service) => service.category === activeCategory
        );

  const ArrowIcon = dir === 'rtl' ? ArrowUpLeft : ArrowUpRight;

  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeading
          eyebrow={servicesSection.eyebrow}
          title={servicesSection.title}
          subtitle={servicesSection.subtitle}
        />

        {/* 3 Elevated Pillar Image Cards */}
        <div className="pillars-grid">
          {servicesSection.pillars.map((pillar) => (
            <ServiceCard
              key={pillar.id}
              pillar={pillar}
              imageSrc={images.pillars[pillar.imageKey]}
              fallbackSrc={images.unsplashFallbacks?.[pillar.imageKey]}
              includedLabel={servicesSection.includedServicesLabel}
              ctaLabel={servicesSection.inquireServiceLabel}
              whatsappUrl={contact.whatsappUrl}
              dir={dir}
            />
          ))}
        </div>

        {/* Complete 12-Service Interactive Capability Index */}
        <div>
          <div className="directory-header">
            <div>
              <span className="eyebrow">{servicesSection.directoryEyebrow}</span>
              <h3>{servicesSection.directoryTitle}</h3>
            </div>

            <div
              className="filter-tabs"
              role="tablist"
              aria-label={servicesSection.directoryTitle}
            >
              {servicesSection.categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`filter-tab ${
                      isActive ? 'filter-tab--active' : ''
                    }`.trim()}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="directory-grid">
            {filteredServices.map((service) => {
              const serviceMsg = encodeURIComponent(service.title);
              const serviceHref = contact.whatsappUrl
                ? `${contact.whatsappUrl}?text=${serviceMsg}`
                : '#contact';

              return (
                <article key={service.id} className="directory-item">
                  <div>
                    <div className="directory-item__top">
                      <span className="directory-item__num">
                        {service.index}.
                      </span>
                      <h4 className="directory-item__title">{service.title}</h4>
                    </div>
                    <p className="directory-item__desc">
                      {service.description}
                    </p>
                  </div>

                  <a
                    href={serviceHref}
                    target={contact.whatsappUrl ? '_blank' : undefined}
                    rel={
                      contact.whatsappUrl ? 'noopener noreferrer' : undefined
                    }
                    className="directory-item__link"
                  >
                    <span>{servicesSection.inquireServiceLabel}</span>
                    <ArrowIcon size={15} aria-hidden="true" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
