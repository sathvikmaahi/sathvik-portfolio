import React from 'react';

const TOKENS = [
  'RAG', 'LLM', 'FAISS', 'λ', 'θ', 'embed', 'tensor', '0x4F', '∇', 'GPT',
  'BM25', 'MLOps', 'agent', 'vector', 'torch', 'σ', 'π', 'API', 'R²',
];

const FloatingAITokens = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    {TOKENS.map((token, i) => (
      <span
        key={token}
        className="absolute font-mono text-[10px] md:text-xs text-cyan-500/20 select-none animate-float-token"
        style={{
          left: `${(i * 17 + 5) % 92}%`,
          top: `${(i * 23 + 8) % 88}%`,
          animationDelay: `${i * 0.7}s`,
          animationDuration: `${14 + (i % 6) * 3}s`,
        }}
      >
        {token}
      </span>
    ))}
  </div>
);

export default FloatingAITokens;
