import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayText === texts[currentIndex]) {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(texts[currentIndex].slice(0, displayText.length + 1));
        }, typingSpeed);
      }
    } else {
      if (displayText === '') {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deletingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isTyping, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="inline-block min-w-[20ch]">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterText;