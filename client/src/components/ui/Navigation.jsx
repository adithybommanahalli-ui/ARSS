import React from 'react';
import { navigationConfig, siteConfig } from '../../config.ts';

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <div className="max-w-full px-6 py-4 flex items-center justify-between">
        <div className="font-mono text-white text-sm font-bold tracking-wider">
          {navigationConfig.brandName}
        </div>
        <div className="flex items-center gap-8">
          {navigationConfig.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-white/60 hover:text-white text-xs uppercase tracking-wider transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
