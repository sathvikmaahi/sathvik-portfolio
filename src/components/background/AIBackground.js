import React from 'react';
import NeuralNetworkCanvas from './NeuralNetworkCanvas';
import FloatingAITokens from './FloatingAITokens';

const AIBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
    <div className="absolute inset-0 bg-[#030712]" />

    <NeuralNetworkCanvas />

    <FloatingAITokens />

    <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-500/20 blur-[120px] animate-pulse-glow" />
    <div
      className="absolute top-[30%] right-[-15%] w-[500px] h-[500px] rounded-full bg-violet-600/25 blur-[100px] animate-pulse-glow"
      style={{ animationDelay: '1s' }}
    />
    <div
      className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] rounded-full bg-fuchsia-600/15 blur-[90px] animate-pulse-glow"
      style={{ animationDelay: '2s' }}
    />

    <div
      className="absolute inset-0 opacity-[0.12] animate-grid-drift"
      style={{
        backgroundImage: `
          linear-gradient(rgba(6, 182, 212, 0.35) 1px, transparent 1px),
          linear-gradient(90deg, rgba(6, 182, 212, 0.35) 1px, transparent 1px)
        `,
        backgroundSize: '64px 64px',
      }}
    />

    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030712_70%)]" />

    <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-scanline opacity-40" />
    <div
      className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent animate-scanline opacity-25"
      style={{ animationDelay: '4s', animationDuration: '12s' }}
    />
  </div>
);

export default AIBackground;
