import React from 'react';
import { Globe } from 'lucide-react';

/**
 * Calm, minimal Footer with business details, navigation, address, and language switch.
 */
export default function Footer({ content, contact, onToggleLanguage }) {
  const {
    businessName,
    tagline,
    fullAddress,
    openingHours,
    nav,
    footer,
  } = content;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <a href="#top" className="footer__brand">
              {businessName}
            </a>
            <div className="footer__tagline">{tagline}</div>
            <p className="footer__desc">{footer.description}</p>
          </div>

          <div>
            <h4 className="footer__heading">{footer.quickLinksTitle}</h4>
            <ul className="footer__list">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer__heading">{footer.contactTitle}</h4>
            <ul className="footer__list">
              <li>{fullAddress}</li>
              {contact.phoneRaw && (
                <li>
                  <a
                    href={`tel:${contact.phoneRaw}`}
                    className="footer__link tabular-nums"
                  >
                    {contact.phoneDisplay}
                  </a>
                </li>
              )}
              {contact.whatsappUrl && (
                <li>
                  <a
                    href={contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__link"
                  >
                    WhatsApp: <span className="tabular-nums">{contact.phoneDisplay}</span>
                  </a>
                </li>
              )}
              {contact.email && (
                <li>
                  <a href={`mailto:${contact.email}`} className="footer__link">
                    {contact.email}
                  </a>
                </li>
              )}
              {openingHours && <li>{openingHours}</li>}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <div>
            © {currentYear} {businessName}. {footer.rightsReserved}
          </div>

          <button
            type="button"
            onClick={onToggleLanguage}
            className="lang-switch"
            aria-label={nav.langSwitchAria}
          >
            <Globe size={15} aria-hidden="true" />
            <span>{nav.langSwitchLabel}</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
