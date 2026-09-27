import React from 'react';

/**
 * Reusable SectionHeading with eyebrow label, H2 title, and optional subtitle.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'start',
  onDark = false,
}) {
  const alignClass = align === 'center' ? 'section-heading--center' : '';
  const eyebrowClass = onDark ? 'eyebrow eyebrow--on-dark' : 'eyebrow';

  return (
    <div className={`section-heading ${alignClass}`.trim()}>
      {eyebrow && <span className={eyebrowClass}>{eyebrow}</span>}
      <h2
        className="section-heading__title"
        style={onDark ? { color: '#FFFFFF' } : undefined}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="section-heading__subtitle"
          style={onDark ? { color: 'rgba(250, 249, 246, 0.80)' } : undefined}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
