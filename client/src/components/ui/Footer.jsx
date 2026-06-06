import React from 'react';
import { footerConfig } from '../../config.ts';

export const Footer = () => {
  return (
    <footer className="w-full bg-black text-white border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 gap-8 font-mono text-xs text-white/50">
          <p>{footerConfig.copyrightText}</p>
          <p className="text-right">{footerConfig.statusText}</p>
        </div>
      </div>
    </footer>
  );
};
