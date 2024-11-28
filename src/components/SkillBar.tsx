import React from 'react';

interface SkillBarProps {
  name: string;
  level: number;
  maxLevel?: number;
}

export function SkillBar({ name, level, maxLevel = 10 }: SkillBarProps) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-baseline">
        <span className="text-sm font-light text-neutral-800 dark:text-neutral-200">{name}</span>
        <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">Lv. {level}</span>
      </div>
      <div className="h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-neutral-800 dark:bg-white rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${(level / maxLevel) * 100}%` }}
        />
      </div>
    </div>
  );
}