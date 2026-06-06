import React from 'react';
import { heroConfig } from '../../config.ts';
import { AsciiMoonField } from './AsciiMoonField.jsx';

export const Hero = () => {
  return (
    <section className="relative w-full pt-24 pb-0 bg-black overflow-hidden">
      <div className="flex h-screen">
        {/* Left panel: Editorial content */}
        <div className="w-2/5 flex flex-col justify-center px-12 py-16 border-r border-white/10">
          <div className="max-w-sm">
            <div className="text-xs font-mono text-white/50 uppercase tracking-widest mb-6">
              {heroConfig.eyebrow}
            </div>

            <h1 className="font-mono text-4xl font-black text-white mb-8 leading-tight">
              {heroConfig.titleLines.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </h1>

            <p className="font-mono text-sm text-white/70 leading-relaxed mb-8">
              {heroConfig.leadText}
            </p>

            <div className="space-y-3">
              {heroConfig.supportingNotes.map((note, i) => (
                <div key={i} className="font-mono text-xs text-white/50 flex items-start gap-3">
                  <span className="text-white/30 mt-1">▪</span>
                  <span>{note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right panel: ASCII moon field */}
        <div className="w-3/5 relative bg-black">
          <AsciiMoonField className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};
