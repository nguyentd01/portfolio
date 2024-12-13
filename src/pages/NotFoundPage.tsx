import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="space-y-8 text-center">
        <h1 className="text-4xl md:text-6xl font-light tracking-[-0.05em] text-neutral-900 dark:text-white">
          404 - Page Not Found
        </h1>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed tracking-tight text-lg max-w-2xl mx-auto">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
        >
          Go back to the homepage
        </Link>
      </div>
    </div>
  );
}
