import React from 'react';
import { manifestoConfig } from '../../config.ts';

export const Manifesto = () => {
  return (
    <section className="relative w-full py-20 bg-white text-black border-t border-black/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left: Video or Placeholder */}
          {manifestoConfig.videoPath ? (
            <div className="aspect-video bg-black/5 border border-black/20 overflow-hidden">
              <video
                src={manifestoConfig.videoPath}
                className="w-full h-full object-cover"
                loop
                muted
                autoPlay
                playsInline
              />
            </div>
          ) : (
            <div className="aspect-video bg-black/10 border border-black/20 flex items-center justify-center">
              <p className="font-mono text-xs text-black/40">VIDEO STREAM</p>
            </div>
          )}

          {/* Right: Text */}
          <div>
            <p className="font-mono text-sm text-black/60 uppercase tracking-widest mb-6">
              MANIFESTO
            </p>
            <p className="font-mono text-base leading-relaxed text-black/80">
              {manifestoConfig.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
