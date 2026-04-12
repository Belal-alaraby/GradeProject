import React from 'react';

export function SectionWrapper({ id, className = '', children }) {
  return (
    <section id={id} className={`py-16 md:py-24 relative ${className}`}>
      {children}
    </section>
  );
}
