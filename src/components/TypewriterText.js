import React, { useState, useEffect } from 'react';

function TypewriterText({ phrases, typingSpeed = 70, deletingSpeed = 40, pauseMs = 2000 }) {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = currentPhrase.slice(0, displayText.length + 1);
        setDisplayText(next);

        if (next === currentPhrase) {
          setTimeout(() => setIsDeleting(true), pauseMs);
        }
      } else {
        const next = currentPhrase.slice(0, displayText.length - 1);
        setDisplayText(next);

        if (next === '') {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseMs]);

  return (
    <span className="text-ai-cyan font-mono">
      {displayText}
      <span className="inline-block w-[3px] h-[1em] bg-ai-cyan ml-1 animate-blink align-middle" />
    </span>
  );
}

export default TypewriterText;
