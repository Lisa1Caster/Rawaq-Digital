import React from 'react';

/**
 * Reusable Button / Link component adhering to the 8px radius & single-line contract.
 */
export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  type = 'button',
  external = false,
  className = '',
  ariaLabel,
}) {
  const variantClass =
    variant === 'primary'
      ? 'btn--primary'
      : variant === 'navy'
      ? 'btn--navy'
      : variant === 'outline-light'
      ? 'btn--outline-light'
      : 'btn--outline-navy';

  const sizeClass = size === 'sm' ? 'btn--sm' : '';
  const combinedClass = `btn ${variantClass} ${sizeClass} ${className}`.trim();

  if (href) {
    const isExternalLink =
      external || href.startsWith('http://') || href.startsWith('https://');

    return (
      <a
        href={href}
        className={combinedClass}
        aria-label={ariaLabel}
        target={isExternalLink ? '_blank' : undefined}
        rel={isExternalLink ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClass}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
