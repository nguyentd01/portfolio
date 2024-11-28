import React from 'react';

export default function CopycatsPage() {
  return (
    <div className="space-y-8">
      <h2 className="text-lg font-normal tracking-tight mb-6">Copycats</h2>
      
      <div className="space-y-6 text-sm">
        <p className="text-neutral-600 leading-relaxed tracking-tight">
          Websites created by plagiarizing the source code of this portfolio site are listed here.
        </p>
        
        <p className="text-neutral-600 leading-relaxed tracking-tight">
          It's completely normal to feel inspired by someone's work and want to imitate it, 
          and that's how I've honed my skills as well. What I hate are idiots who just copy 
          the source code and release it as their own.
        </p>
        
        <p className="text-neutral-600 leading-relaxed tracking-tight">
          If you find any website that has stolen my website's code, please let me know.
          (your.email@example.com)
        </p>
      </div>
    </div>
  );
}