import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'rag', label: 'RAG Lab' },
  { id: 'skills', label: 'Skills' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = ({ activeSection, onNavClick }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (id) => {
    onNavClick(id);
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/[0.06] bg-[#030712]/80 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button
            type="button"
            onClick={() => handleClick('about')}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 p-[2px] shadow-glow group-hover:shadow-glow-lg transition-shadow duration-300">
              <div className="w-full h-full rounded-[10px] bg-[#030712] flex items-center justify-center font-bold text-sm text-cyan-400 font-mono">
                SS
              </div>
            </div>
            <span className="text-lg font-bold gradient-text hidden sm:block">Sathvik Sanka</span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((nav) => (
              <button
                key={nav.id}
                type="button"
                onClick={() => handleClick(nav.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeSection === nav.id
                    ? 'nav-link-active bg-cyan-500/10'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {nav.label}
                {activeSection === nav.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                )}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-slate-300 hover:text-cyan-400"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-1 border-t border-white/10 pt-4">
            {NAV_ITEMS.map((nav) => (
              <button
                key={nav.id}
                type="button"
                onClick={() => handleClick(nav.id)}
                className={`px-4 py-3 text-left rounded-lg text-sm font-medium ${
                  activeSection === nav.id ? 'bg-cyan-500/15 text-cyan-400' : 'text-slate-400'
                }`}
              >
                {nav.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
