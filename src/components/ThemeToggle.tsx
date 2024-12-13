import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { cn } from '../utils/classNames';

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'z-50',
        'p-3 rounded-full',
        'transform transition-all duration-500 ease-in-out',
        'hover:scale-105 active:scale-95',
        'focus:outline-none focus-visible:ring-1',
        'backdrop-blur-sm',
        isDark
          ? 'bg-black/30 hover:bg-black/40'
          : 'bg-white/30 hover:bg-white/40',
        'group flex items-center justify-center',
        className
      )}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div 
        className={cn(
          "relative transition-transform duration-500 ease-in-out",
          "group-hover:rotate-45"
        )}
      >
        {isDark ? (
          <Sun 
            size={18} 
            className={cn(
              "text-neutral-400",
              "transition-all duration-500 ease-in-out",
              "group-hover:text-neutral-300"
            )}
          />
        ) : (
          <Moon 
            size={18} 
            className={cn(
              "text-neutral-500",
              "transition-all duration-500 ease-in-out",
              "group-hover:text-neutral-600"
            )}
          />
        )}
      </div>
    </button>
  );
}
