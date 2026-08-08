import React from 'react';
import { FaBrain, FaRobot, FaNetworkWired } from 'react-icons/fa';

const SATELLITES = [
  { Icon: FaRobot, angle: 0, color: 'text-violet-400', glow: 'shadow-[0_0_20px_rgba(167,139,250,0.45)]' },
  { Icon: FaNetworkWired, angle: 120, color: 'text-fuchsia-400', glow: 'shadow-[0_0_20px_rgba(232,121,249,0.45)]' },
  { Icon: FaBrain, angle: 240, color: 'text-cyan-400', glow: 'shadow-[0_0_20px_rgba(34,211,238,0.45)]' },
];

const HeroVisual = () => (
  <div className="relative w-full max-w-md mx-auto aspect-square hidden lg:block">
    <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-orbit-slow" />
    <div
      className="absolute inset-4 rounded-full border border-violet-500/25 animate-orbit-slow"
      style={{ animationDirection: 'reverse', animationDuration: '18s' }}
    />
    <div className="absolute inset-8 rounded-full border border-fuchsia-500/15 animate-pulse-ring" />
    <div className="absolute inset-12 rounded-full border border-cyan-500/10 animate-pulse-ring" style={{ animationDelay: '1s' }} />

    {/* Orbiting satellites */}
    <div className="absolute inset-0 animate-orbit-slow" style={{ animationDuration: '28s' }}>
      {SATELLITES.map(({ Icon, angle, color, glow }) => (
        <div
          key={angle}
          className="absolute left-1/2 top-1/2 -ml-7 -mt-7"
          style={{
            transform: `rotate(${angle}deg) translateY(-130px)`,
          }}
        >
          <div className={`w-14 h-14 rounded-xl glass-card flex items-center justify-center ${glow} animate-float`}>
            <Icon className={`text-xl ${color}`} />
          </div>
        </div>
      ))}
    </div>

    <div className="absolute inset-[28%] rounded-2xl glass-card flex flex-col items-center justify-center gap-2 shadow-glow animate-float ai-hub-glow overflow-hidden">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-violet-500/15 animate-pulse-glow" />
      <FaBrain className="text-4xl text-cyan-400 relative z-10 animate-brain-pulse" />
      <span className="font-mono text-xs text-cyan-400/80 tracking-wider relative z-10">NEURAL CORE</span>
      <span className="font-mono text-[10px] text-emerald-400/80 relative z-10 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        active
      </span>
    </div>

    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 200 200">
      <defs>
        <linearGradient id="heroLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
      {[
        { x2: 100, y2: 22 },
        { x2: 172, y2: 172 },
        { x2: 28, y2: 172 },
      ].map((line, i) => (
        <line
          key={i}
          x1="100"
          y1="100"
          x2={line.x2}
          y2={line.y2}
          stroke="url(#heroLineGrad)"
          strokeWidth="0.8"
          strokeDasharray="5 8"
          className="hero-dash-line"
          style={{ animationDelay: `${i * 0.6}s` }}
        />
      ))}
      <circle cx="100" cy="100" r="4" fill="#22d3ee" className="animate-pulse-glow" />
    </svg>
  </div>
);

export default HeroVisual;
