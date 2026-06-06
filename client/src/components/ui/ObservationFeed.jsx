import React, { useState, useEffect } from 'react';
import { observationConfig } from '../../config.ts';

export const ObservationFeed = () => {
  const [lat, setLat] = useState(observationConfig.initialLat);
  const [lon, setLon] = useState(observationConfig.initialLon);

  useEffect(() => {
    const interval = setInterval(() => {
      setLat((prev) => prev + (Math.random() - 0.5) * 0.1);
      setLon((prev) => prev + (Math.random() - 0.5) * 0.1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="observations" className="relative w-full py-20 bg-white text-black border-t border-black/10">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs text-black/50 uppercase tracking-widest mb-12">
          {observationConfig.sectionLabel}
        </p>

        <div className="grid grid-cols-3 gap-8 mb-12">
          {/* Video or Placeholder */}
          <div className="col-span-2">
            {observationConfig.videoPath ? (
              <div className="aspect-video bg-black border border-black/20 overflow-hidden">
                <video
                  src={observationConfig.videoPath}
                  className="w-full h-full object-cover"
                  loop
                  muted
                  autoPlay
                  playsInline
                />
              </div>
            ) : (
              <div className="aspect-video bg-black/10 border border-black/20 flex items-center justify-center">
                <p className="font-mono text-xs text-black/40">LIVE STREAM</p>
              </div>
            )}
          </div>

          {/* Status and Coordinates */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="font-mono text-xs text-black/50 uppercase tracking-widest mb-6">
                {observationConfig.statusText}
              </p>
            </div>

            <div className="space-y-6 font-mono text-sm">
              <div>
                <p className="text-black/50 text-xs mb-2">{observationConfig.latLabel}</p>
                <p className="text-black font-bold text-lg">{lat.toFixed(4)}°</p>
              </div>
              <div>
                <p className="text-black/50 text-xs mb-2">{observationConfig.lonLabel}</p>
                <p className="text-black font-bold text-lg">{lon.toFixed(4)}°</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
