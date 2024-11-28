import React from 'react';
import { cn } from '../utils/classNames';

interface SkillCardProps {
  skill: string;
  level: 'novice' | 'intermediate' | 'advanced';
  description: string;
}

export function SkillCard({ skill, level, description }: SkillCardProps) {
  return (
    <div className="group relative">
      <div className={cn(
        'relative overflow-hidden rounded-lg',
        'bg-gradient-to-br from-neutral-50 to-neutral-100',
        'dark:from-neutral-900 dark:to-neutral-800',
        'transition-all duration-500 ease-out',
        'hover:translate-y-[-4px] hover:shadow-lg',
        'border border-neutral-200 dark:border-neutral-700'
      )}>
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-light text-neutral-900 dark:text-white">
              {skill}
            </h3>
            <span className={cn(
              'px-3 py-1 rounded-full text-xs uppercase tracking-wider',
              level === 'novice' && 'bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400',
              level === 'intermediate' && 'bg-neutral-300 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300',
              level === 'advanced' && 'bg-neutral-800 dark:bg-neutral-200 text-white dark:text-neutral-800'
            )}>
              {level}
            </span>
          </div>
          
          <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
            {description}
          </p>
          
          <div className={cn(
            'h-1 w-full rounded-full overflow-hidden bg-neutral-200 dark:bg-neutral-700',
            'transition-transform duration-700 ease-out transform origin-left',
            'group-hover:scale-x-100 scale-x-0'
          )}>
            <div className={cn(
              'h-full rounded-full',
              level === 'novice' && 'w-1/3 bg-neutral-400 dark:bg-neutral-500',
              level === 'intermediate' && 'w-2/3 bg-neutral-600 dark:bg-neutral-400',
              level === 'advanced' && 'w-full bg-neutral-800 dark:bg-white'
            )} />
          </div>
        </div>
      </div>
    </div>
  );
}