import React, { useState } from 'react';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';

/**
 * Contact Section — Direct channels (WhatsApp, Phone, Address, Directions, optional Email/Hours)
 * alongside a validated frontend inquiry form.
 */
export default function Contact({ content, contact }) {
  const { contactSection, servicesSection, fullAddress, openingHours } =
    content;
  const { form: formCopy } = contactSection;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const directionsHref =
    contact.googleMapsLink || contact.directionsFallbackUrl;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = formData.name.trim();
    const trimmedPhone = formData.phone.trim();
    const digitsOnly = trimmedPhone.replace(/[\s+\-()]/g, '');

    if (!trimmedName || !trimmedPhone || !formData.service) {
      setErrorMsg(formCopy.errorRequired);
      return;
    }

    if (!/^\d{9,15}$/.test(digitsOnly)) {
      setErrorMsg(formCopy.errorPhone);
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  const buildWhatsAppSummaryUrl = () => {
    const summaryLines = [
      `${content.businessName}`,
      `${formCopy.nameLabel}: ${formData.name}`,
      `${formCopy.phoneLabel}: ${formData.phone}`,
      `${formCopy.serviceLabel}: ${formData.service}`,
      formData.message ? `${formCopy.messageLabel}: ${formData.message}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    return `${contact.whatsappUrl}?text=${encodeURIComponent(summaryLines)}`;
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading
          eyebrow={contactSection.eyebrow}
          title={contactSection.title}
          subtitle={contactSection.subtitle}
        />

        <div className="contact-grid">
          {/* Direct Contact Card */}
          <div className="contact-info">
            <h3 className="contact-info__title">
              {contactSection.directChannelsTitle}
            </h3>

            <div className="contact-info__blocks">
              <div>
                <span className="contact-info__label">
                  {contactSection.addressTitle}
                </span>
                <p className="contact-info__value">{fullAddress}</p>
              </div>

              {contact.phoneRaw && (
                <div>
                  <span className="contact-info__label">
                    {contactSection.phoneTitle}
                  </span>
                  <a
                    href={`tel:${contact.phoneRaw}`}
                    className="contact-info__value tabular-nums"
                  >
                    {contact.phoneDisplay}
                  </a>
                </div>
              )}

              {contact.email && (
                <div>
                  <span className="contact-info__label">Email</span>
                  <a
                    href={`mailto:${contact.email}`}
                    className="contact-info__value"
                  >
                    {contact.email}
                  </a>
                </div>
              )}

              {openingHours && (
                <div>
                  <span className="contact-info__label">
                    {contactSection.hoursTitle}
                  </span>
                  <p className="contact-info__value">{openingHours}</p>
                </div>
              )}
            </div>

            <div className="contact-info__actions">
              {contact.whatsappUrl && (
                <Button href={contact.whatsappUrl} variant="primary" external>
                  {contactSection.whatsappButton}
                </Button>
              )}

              {contact.phoneRaw && (
                <Button
                  href={`tel:${contact.phoneRaw}`}
                  variant="outline-light"
                >
                  {contactSection.callButton}
                </Button>
              )}

              {directionsHref && (
                <Button href={directionsHref} variant="outline-light" external>
                  {contactSection.directionsButton}
                </Button>
              )}
            </div>
          </div>

          {/* Usable Validated Contact Form */}
          <div className="contact-form-card">
            <h3 className="contact-form__title">{formCopy.title}</h3>

            {submitted ? (
              <div className="form-success" role="status">
                <h4 className="form-success__title">{formCopy.successTitle}</h4>
                <p className="form-success__desc">{formCopy.successMessage}</p>
                <div className="form-success__actions">
                  {contact.whatsappUrl && (
                    <Button
                      href={buildWhatsAppSummaryUrl()}
                      variant="primary"
                      external
                    >
                      {formCopy.whatsappDirectSubmit}
                    </Button>
                  )}
                  <Button
                    variant="outline-navy"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        service: '',
                        message: '',
                      });
                    }}
                  >
                    {formCopy.resetButton}
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {errorMsg && (
                  <div className="form-error" role="alert">
                    {errorMsg}
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    {formCopy.nameLabel}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder={formCopy.namePlaceholder}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-phone" className="form-label">
                    {formCopy.phoneLabel}
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    dir="ltr"
                    className="form-control"
                    placeholder={formCopy.phonePlaceholder}
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-service" className="form-label">
                    {formCopy.serviceLabel}
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    className="form-control"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">{formCopy.servicePlaceholder}</option>
                    {servicesSection.allServices.map((srv) => (
                      <option key={srv.id} value={srv.title}>
                        {srv.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    {formCopy.messageLabel}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className="form-control"
                    placeholder={formCopy.messagePlaceholder}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <Button type="submit" variant="navy">
                  {formCopy.submitButton}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
