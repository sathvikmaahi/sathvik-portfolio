import React, { useState } from 'react';
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaChevronDown,
  FaChevronUp,
  FaRocket,
} from 'react-icons/fa';
import CompanyLogo, { CompanyLogoBadge } from './CompanyLogo';

function useInView(options) {
  const ref = React.useRef();
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      options
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

function ExperienceCard({ exp, idx, isLast }) {
  const [expanded, setExpanded] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.15 });
  const visibleBullets = expanded ? exp.bullets : exp.bullets.slice(0, 3);
  const hasMore = exp.bullets.length > 3;

  return (
    <div
      ref={ref}
      className={`relative flex gap-0 md:gap-8 transition-all duration-700 ${
        inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
      style={{ transitionDelay: `${idx * 120}ms` }}
    >
      {/* Timeline rail with logo badge */}
      <div className="hidden md:flex flex-col items-center flex-shrink-0 w-16">
        <CompanyLogoBadge
          logo={exp.logo}
          company={exp.company}
          initials={exp.initials}
          gradient={exp.gradient}
        />
        {!isLast && (
          <div className="flex-1 w-0.5 min-h-[2rem] my-2 bg-gradient-to-b from-ai-cyan/60 via-ai-indigo/40 to-transparent" />
        )}
      </div>

      {/* Card */}
      <div className="flex-1 mb-10 md:mb-12">
        <div className="ai-glass rounded-3xl overflow-hidden group hover:shadow-glow transition-all duration-300">
          <div className={`relative h-2 bg-gradient-to-r ${exp.gradient}`} />

          <div className="p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              {/* Large company logo panel */}
              <div className="flex-shrink-0">
                <div className={`relative w-full sm:w-48 h-36 rounded-2xl bg-gradient-to-br ${exp.gradient} p-[1px] shadow-lg group-hover:shadow-glow transition-shadow`}>
                  <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center p-5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white" />
                    <CompanyLogo
                      logo={exp.logo}
                      company={exp.company}
                      initials={exp.initials}
                      className="relative z-10 max-h-20 max-w-[85%] w-auto h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Role info */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-ai-cyan mb-1">
                      {exp.period.includes('Present') ? '● Current Role' : 'Past Role'}
                    </p>
                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-1">{exp.role}</h4>
                    <p className="text-lg text-ai-cyan font-semibold">{exp.company.trim()}</p>
                  </div>
                  <div className="flex flex-col gap-1.5 text-sm">
                    <span className="flex items-center gap-2 text-slate-400 font-mono">
                      <FaCalendarAlt className="text-ai-purple flex-shrink-0" size={12} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-2 text-slate-500 font-mono">
                      <FaMapMarkerAlt className="text-ai-cyan flex-shrink-0" size={12} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {exp.metric && (
                  <div className="inline-flex items-center gap-3 mb-5 px-4 py-2.5 rounded-xl bg-ai-indigo/10 border border-ai-indigo/25">
                    <FaRocket className="text-ai-cyan flex-shrink-0" size={14} />
                    <span className="text-2xl font-bold ai-gradient-text">{exp.metric.value}</span>
                    <span className="text-sm text-slate-400">{exp.metric.label}</span>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 text-slate-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-3 border-t border-white/5 pt-5">
              {visibleBullets.map((bullet, i) => (
                <div
                  key={i}
                  className="flex gap-3 p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                >
                  <span className={`flex-shrink-0 w-6 h-6 rounded-lg bg-gradient-to-br ${exp.gradient} flex items-center justify-center text-[10px] font-bold text-white`}>
                    {i + 1}
                  </span>
                  <p className="text-slate-400 text-sm leading-relaxed">{bullet}</p>
                </div>
              ))}
            </div>

            {hasMore && (
              <button
                type="button"
                onClick={() => setExpanded(!expanded)}
                className="mt-4 flex items-center gap-2 text-sm font-mono text-ai-cyan hover:text-white transition-colors"
              >
                {expanded ? (
                  <>Show less <FaChevronUp size={12} /></>
                ) : (
                  <>Show {exp.bullets.length - 3} more achievements <FaChevronDown size={12} /></>
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="md:hidden absolute -left-1 top-6 w-3 h-3 rounded-full bg-gradient-to-br from-ai-cyan to-ai-purple" />
    </div>
  );
}

export default function ExperienceTimeline({ experiences }) {
  return (
    <div className="relative max-w-5xl mx-auto pl-6 md:pl-0">
      <div className="md:hidden absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-ai-cyan via-ai-indigo to-ai-purple" />
      <div className="space-y-0">
        {experiences.map((exp, idx) => (
          <ExperienceCard
            key={`${exp.company}-${exp.period}`}
            exp={exp}
            idx={idx}
            isLast={idx === experiences.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
