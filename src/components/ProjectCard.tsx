import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  year: string;
  link: string;
}

export default function ProjectCard({ title, description, year, link }: ProjectCardProps) {
  return (
    <article className="group border-b border-neutral-200 pb-8 last:border-0">
      <div className="flex items-baseline justify-between mb-2">
        <h2 className="text-sm font-light">
          <a 
            href={link}
            className="hover:text-neutral-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
        </h2>
        <span className="text-neutral-400 text-xs font-light">{year}</span>
      </div>
      <p className="text-neutral-600 font-light text-sm">{description}</p>
    </article>
  );
}