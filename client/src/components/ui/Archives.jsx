import React, { useState } from 'react';
import { archivesConfig } from '../../config.ts';

export const Archives = () => {
  const [selectedArchive, setSelectedArchive] = useState(null);

  if (!archivesConfig.items.length) return null;

  return (
    <section id="archives" className="relative w-full py-20 bg-black text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs text-white/50 uppercase tracking-widest mb-12">
          {archivesConfig.sectionLabel}
        </p>

        <div className="grid grid-cols-4 gap-6">
          {archivesConfig.items.map((archive, i) => (
            <button
              key={i}
              onClick={() => setSelectedArchive(i)}
              className="group cursor-pointer transition-all"
            >
              <div className="mb-4 overflow-hidden border border-white/10 group-hover:border-white/30 transition-colors aspect-square">
                <img
                  src={archive.src}
                  alt={archive.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 grayscale"
                />
              </div>
              <p className="font-mono text-xs text-white/50 group-hover:text-white/70 transition-colors">
                {archive.label}
              </p>
            </button>
          ))}
        </div>

        {/* Vault Button */}
        <div className="text-center mt-16">
          <button className="font-mono text-xs text-white border border-white/30 hover:border-white px-8 py-4 transition-colors uppercase tracking-widest">
            {archivesConfig.vaultTitle}
          </button>
        </div>

        {/* Archive Viewer Modal */}
        {selectedArchive !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
            onClick={() => setSelectedArchive(null)}
          >
            <div
              className="w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-square bg-black border border-white/20 overflow-hidden">
                <img
                  src={archivesConfig.items[selectedArchive].src}
                  alt={archivesConfig.items[selectedArchive].label}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between mt-6">
                <p className="font-mono text-sm text-white/70">
                  {archivesConfig.items[selectedArchive].label}
                </p>
                <button
                  onClick={() => setSelectedArchive(null)}
                  className="font-mono text-xs text-white/50 hover:text-white transition-colors"
                >
                  {archivesConfig.closeText}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
