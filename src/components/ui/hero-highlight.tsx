import React from 'react';
import { motion } from 'motion/react';

type HighlightProps = {
  children: React.ReactNode;
  className?: string;
};

export function Highlight({ children, className = '' }: HighlightProps) {
  return (
    <motion.span
      initial={{ backgroundSize: '0% 100%' }}
      whileInView={{ backgroundSize: '100% 100%' }}
      viewport={{ once: true }}
      transition={{
        duration: 0.9,
        ease: 'easeInOut',
        delay: 0.15,
      }}
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        display: 'inline',
      }}
      className={`relative inline rounded-lg bg-gradient-to-r from-indigo-200 to-purple-200 px-1 py-0.5 text-gray-800 ${className}`}
    >
      {children}
    </motion.span>
  );
}