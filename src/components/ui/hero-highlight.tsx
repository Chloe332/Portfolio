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
        // Signal-orange marker, matching the site's one accent color.
        backgroundImage:
          'linear-gradient(to right, rgb(194 65 12 / 0.18), rgb(194 65 12 / 0.18))',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        display: 'inline',
      }}
      className={`relative inline rounded-[2px] px-1 py-0.5 text-ink ${className}`}
    >
      {children}
    </motion.span>
  );
}