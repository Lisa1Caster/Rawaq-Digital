import React, { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import Button from './ui/Button';

/**
 * Sticky 3-Zone Luxury Navbar with Language Switcher and Responsive Mobile Panel.
 * Zone 1: Single text element wordmark.
 * Zone 2: Smooth-scroll text navigation links.
 * Zone 3: Language Switcher + Primary WhatsApp CTA.
 */
export default function Navbar({ content, contact, onToggleLanguage }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { nav, businessName } = content;
  const primaryHref = contact.whatsappUrl || `tel:${contact.phoneRaw}`;

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`.trim()}>
      <div className="container navbar__inner">
        {/* Zone 1: Single text element wordmark */}
        <a href="#top" className="navbar__brand">
          {businessName}
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav aria-label={businessName}>
          <ul className="navbar__links">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="navbar__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Zone 3: Language Changer + Primary Action */}
        <div className="navbar__actions">
          <button
            type="button"
            onClick={onToggleLanguage}
            className="lang-switch"
            aria-label={nav.langSwitchAria}
          >
            <Globe size={16} aria-hidden="true" />
            <span>{nav.langSwitchLabel}</span>
          </button>

          <div className="navbar__cta-desktop">
            <Button
              href={primaryHref}
              variant="primary"
              size="sm"
              external={Boolean(contact.whatsappUrl)}
            >
              {nav.ctaLabel}
            </Button>
          </div>

          <button
            type="button"
            className="navbar__menu-toggle"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={
              mobileMenuOpen ? nav.mobileMenuCloseAria : nav.mobileMenuOpenAria
            }
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileMenuOpen && (
        <div className="navbar__mobile-panel">
          <ul className="navbar__mobile-list">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="navbar__mobile-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            href={primaryHref}
            variant="primary"
            external={Boolean(contact.whatsappUrl)}
          >
            {nav.ctaLabel}
          </Button>
        </div>
      )}
    </header>
  );
}
