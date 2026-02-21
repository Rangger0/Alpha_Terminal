import { useEffect, useState, useRef } from 'react';
import { useTheme } from '@/hooks/useTheme';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
  cursorChar?: string;
}

export function TypewriterText({ 
  text, 
  speed = 50, 
  delay = 0, 
  className = '',
  showCursor = true,
  cursorChar = '▋'
}: TypewriterTextProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [showBlinkCursor, setShowBlinkCursor] = useState(true);
  
  // Use ref untuk tracking
  const indexRef = useRef(0);
  const textRef = useRef(text);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Reset saat text berubah
  useEffect(() => {
    if (textRef.current !== text) {
      textRef.current = text;
      indexRef.current = 0;
      setDisplayedText('');
      setIsComplete(false);
    }
  }, [text]);

  // Typing effect - HANYA JALAN SEKALI per text change
  useEffect(() => {
    // Clear any existing intervals/timeouts
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // Reset jika text kosong atau sudah complete
    if (displayedText.length >= text.length && text.length > 0) {
      setIsComplete(true);
      return;
    }

    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        if (indexRef.current < text.length) {
          setDisplayedText(text.slice(0, indexRef.current + 1));
          indexRef.current += 1;
        } else {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setIsComplete(true);
        }
      }, speed);
    }, delay);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, speed, delay]);

  // Blinking cursor effect
  useEffect(() => {
    if (!isComplete || !showCursor) return;
    
    const blinkInterval = setInterval(() => {
      setShowBlinkCursor(prev => !prev);
    }, 530);

    return () => clearInterval(blinkInterval);
  }, [isComplete, showCursor]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (
        <span 
          className={`inline-block ml-0.5 ${showBlinkCursor ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            color: isDark ? '#00FF88' : '#2563EB',
            transition: 'opacity 0.1s ease'
          }}
        >
          {cursorChar}
        </span>
      )}
    </span>
  );
}