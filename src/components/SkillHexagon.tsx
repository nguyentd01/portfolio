import React from 'react';
import { cn } from '../utils/classNames';

interface SkillHexagonProps {
  skill: string;
  level: 'novice' | 'intermediate' | 'advanced';
}

export function SkillHexagon({ skill, level }: SkillHexagonProps) {
  return (
    <div className="group relative">
      <div className={cn(
        'hexagon relative w-32 h-36 flex items-center justify-center p-4 transition-all duration-300',
        'before:content-[""] before:absolute before:w-full before:h-full',
        'before:bg-neutral-100 dark:before:bg-neutral-800/50',
        'before:transition-all before:duration-300',
        'hover:before:bg-neutral-200 dark:hover:before:bg-neutral-700/50',
        level === 'advanced' && 'before:border-2 before:border-neutral-300 dark:before:border-neutral-600',
      )}>
        <div className="relative z-10 text-center">
          <span className="block text-sm font-light text-neutral-800 dark:text-neutral-200 mb-2">
            {skill}
          </span>
          <span className={cn(
            'text-xs uppercase tracking-wider',
            level === 'novice' && 'text-neutral-500 dark:text-neutral-400',
            level === 'intermediate' && 'text-neutral-600 dark:text-neutral-300',
            level === 'advanced' && 'text-neutral-800 dark:text-white font-medium'
          )}>
            {level}
          </span>
        </div>
      </div>
    </div>
  );
}