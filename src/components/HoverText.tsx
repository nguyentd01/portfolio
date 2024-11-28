import React from 'react';
import { cn } from '../utils/classNames';

interface HoverTextProps {
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
}

export function HoverText({ children, className, isActive }: HoverTextProps) {
  return (
    <span className={cn(
      'relative group inline-block',
      className
    )}>
      <span 
        className={cn(
          'inline-block transition-all duration-300 ease-in-out',
          'group-hover:opacity-0 group-hover:scale-0',
          'group-hover:translate-y-1',
          isActive && 'opacity-0 scale-0 translate-y-1'
        )}
      >
        {children}
      </span>
      <span
        className={cn(
          'absolute left-0 top-1/2 -translate-y-1/2',
          'w-2 h-2 rounded-full bg-neutral-900 dark:bg-white',
          'transition-all duration-300 ease-in-out',
          'opacity-0 scale-0',
          'group-hover:opacity-100 group-hover:scale-100',
          isActive && 'opacity-100 scale-100'
        )}
      />
    </span>
  );
}