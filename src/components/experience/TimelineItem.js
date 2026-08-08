import React from 'react';
import { FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import { useInView } from '../../hooks/useInView';

const TimelineItem = ({ exp, idx }) => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`relative md:flex md:items-center md:justify-between md:space-x-8 ${
        idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      } transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${idx * 100}ms` }}
    >
      <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 z-10">
        <span
          className={`block w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 border-4 border-[#030712] shadow-glow transition-transform duration-700 ${
            inView ? 'scale-110' : 'scale-75'
          }`}
        />
      </div>
      <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
        <div className="glass-card-hover p-8 animate-fade-in-up">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
            <div>
              <h4 className="text-2xl font-bold text-slate-100 mb-2">{exp.role}</h4>
              <div className="flex items-center gap-2 flex-wrap">
                <p className="text-xl text-cyan-400 font-semibold">{exp.company}</p>
                {exp.website && (
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                    title={`Visit ${exp.company} website`}
                  >
                    <FaExternalLinkAlt size={16} />
                  </a>
                )}
              </div>
              {exp.client && (
                <p className="text-slate-200 mt-1">
                  Client: <span className="text-cyan-400">{exp.client}</span>
                </p>
              )}
              {exp.domain && <p className="text-sm text-slate-500 mt-1 font-mono">{exp.domain}</p>}
            </div>
            <div className="text-right mt-4 lg:mt-0">
              <p className="text-slate-400 font-medium font-mono text-sm">{exp.period}</p>
              <p className="text-slate-500 text-sm">{exp.location}</p>
            </div>
          </div>
          {exp.projects ? (
            <div className="space-y-6">
              {exp.projects.map((project, pIdx) => (
                <div key={pIdx} className="rounded-xl bg-white/[0.02] border border-white/5 p-4">
                  <h5 className="text-base font-semibold text-violet-300 mb-3 border-l-2 border-violet-500 pl-3 leading-snug">
                    {project.name}
                  </h5>
                  <ul className="space-y-3">
                    {project.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                        <FaStar className="text-cyan-500 mt-1 flex-shrink-0" size={10} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <ul className="space-y-3">
              {exp.bullets?.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                  <FaStar className="text-cyan-500 mt-1 flex-shrink-0" size={10} />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="md:w-1/2" />
    </div>
  );
};

export default TimelineItem;
