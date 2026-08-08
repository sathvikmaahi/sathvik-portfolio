import React, { useState, useEffect } from 'react';

const TYPING_ROLES = ['Generative AI', 'MLOps', 'RAG Systems', 'Agentic AI', 'LLM Engineering'];

const TypingRoles = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % TYPING_ROLES.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <span className="inline-flex items-center font-mono font-medium">
      <span className="text-shimmer animate-fade-in-up" key={idx}>
        {TYPING_ROLES[idx]}
      </span>
      <span className="text-cyan-400 ml-0.5 animate-blink" aria-hidden="true">|</span>
    </span>
  );
};

export default TypingRoles;
