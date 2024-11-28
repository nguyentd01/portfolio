import React from 'react';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a
      href={href}
      className="text-neutral-600 hover:text-black transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}