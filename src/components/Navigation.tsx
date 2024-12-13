import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '../utils/classNames';
import { HoverText } from './HoverText';

export default function Navigation() {
  const links = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/info', label: 'Info' },
    { path: '/contact', label: 'Contact' },
    { path: '/faq', label: 'FAQ' }
  ];

  return (
    <nav className="w-full py-4 md:py-0">
      <ul className="flex flex-row md:flex-col gap-2 md:gap-2 w-full overflow-x-auto md:overflow-x-visible justify-evenly md:justify-start">
        {links.map((link) => (
          <li key={link.path} className="whitespace-nowrap">
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'block text-sm tracking-[-0.02em]',
                  'text-neutral-600 dark:text-neutral-300',
                  'hover:text-black dark:hover:text-white',
                  isActive && 'text-black dark:text-white'
                )
              }
            >
              {({ isActive }) => (
                <HoverText isActive={isActive}>
                  {link.label}
                </HoverText>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

