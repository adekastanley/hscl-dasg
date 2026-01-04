'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function BentoCard({ children, className, delay = 0 }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className={cn(
        'relative overflow-hidden rounded-[2rem] border-4 border-black',
        'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]', // Hard shadow for "brutalist" pop
        className
      )}
    >
      {children}
    </motion.div>
  );
}
