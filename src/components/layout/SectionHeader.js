import React from 'react';

const SectionHeader = ({ badge, title, subtitle }) => (
  <div className="text-center mb-14 animate-fade-in-up">
    {badge && (
      <span className="section-badge mb-4 inline-flex animate-badge-glow">
        {badge}
      </span>
    )}
    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 tracking-tight">{title}</h2>
    {subtitle && (
      <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
    )}
    <div className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent animate-line-expand" />
  </div>
);

export default SectionHeader;
