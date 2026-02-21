// src/components/about/AnimatedSection.tsx
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import type { ReactNode } from 'react';
import { useRef } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  className?: string;
}

export default function AnimatedSection({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = '' 
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const directions = {
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
    up: { x: 0, y: 100 },
    down: { x: 0, y: -100 }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directions[direction] }}
      transition={{ 
        duration: 0.6, 
        delay, 
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
