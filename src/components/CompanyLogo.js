import React, { useState } from 'react';

export default function CompanyLogo({ logo, company, initials, className = '' }) {
  const [failed, setFailed] = useState(false);

  if (!logo || failed) {
    return (
      <span className={`font-black text-slate-600 tracking-widest ${className}`}>
        {initials}
      </span>
    );
  }

  return (
    <img
      src={logo}
      alt={`${company.trim()} logo`}
      className={`object-contain ${className}`}
      onError={() => setFailed(true)}
    />
  );
}

export function CompanyLogoBadge({ logo, company, initials, gradient }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-glow border border-white/20 overflow-hidden p-2 z-10">
      {!logo || failed ? (
        <span className={`w-full h-full rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-xs font-bold text-white`}>
          {initials}
        </span>
      ) : (
        <img
          src={logo}
          alt={`${company.trim()} logo`}
          className="w-full h-full object-contain"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
