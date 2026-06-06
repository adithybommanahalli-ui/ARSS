import React, { useState } from 'react';
import { facilitiesConfig } from '../../config.ts';

export const Facilities = () => {
  const [selectedFacility, setSelectedFacility] = useState(null);

  if (!facilitiesConfig.items.length) return null;

  if (selectedFacility) {
    const facility = facilitiesConfig.items.find((f) => f.slug === selectedFacility);
    if (!facility) return null;

    return (
      <section id="facilities" className="relative w-full min-h-screen py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <button
            onClick={() => setSelectedFacility(null)}
            className="font-mono text-xs text-white/50 hover:text-white mb-12 transition-colors"
          >
            {facilitiesConfig.detailBackText}
          </button>

          <div className="grid grid-cols-2 gap-12">
            {/* Image */}
            <div>
              <img
                src={facility.image}
                alt={facility.name}
                className="w-full aspect-[3/4] object-cover border border-white/10"
              />
            </div>

            {/* Details */}
            <div>
              <h2 className="font-mono text-3xl font-bold mb-2">{facility.name}</h2>
              <p className="font-mono text-xs text-white/50 mb-8">{facility.code}</p>

              <div className="space-y-4 mb-10 font-mono text-sm">
                {facility.address && (
                  <div>
                    <p className="text-white/50 text-xs mb-1">ADDRESS</p>
                    <p className="text-white">{facility.address}</p>
                  </div>
                )}
                {facility.status && (
                  <div>
                    <p className="text-white/50 text-xs mb-1">STATUS</p>
                    <p className="text-white">{facility.status}</p>
                  </div>
                )}
                {facility.email && (
                  <div>
                    <p className="text-white/50 text-xs mb-1">EMAIL</p>
                    <p className="text-white">{facility.email}</p>
                  </div>
                )}
                {facility.phone && (
                  <div>
                    <p className="text-white/50 text-xs mb-1">PHONE</p>
                    <p className="text-white">{facility.phone}</p>
                  </div>
                )}
              </div>

              {facility.ctaText && facility.ctaHref && (
                <a
                  href={facility.ctaHref}
                  className="inline-block font-mono text-xs text-white border border-white/30 hover:border-white px-6 py-3 transition-colors"
                >
                  {facility.ctaText}
                </a>
              )}

              <div className="mt-16 pt-12 border-t border-white/10">
                <h3 className="font-mono text-lg font-bold mb-6">
                  {facility.article.title}
                </h3>
                <div className="space-y-4 font-mono text-sm text-white/70 leading-relaxed">
                  {facility.article.paragraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="facilities" className="relative w-full py-20 bg-black text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs text-white/50 uppercase tracking-widest mb-12">
          {facilitiesConfig.sectionLabel}
        </p>

        <div className="grid grid-cols-2 gap-8">
          {facilitiesConfig.items.map((facility) => (
            <button
              key={facility.slug}
              onClick={() => setSelectedFacility(facility.slug)}
              className="group cursor-pointer transition-all"
            >
              <div className="mb-4 overflow-hidden border border-white/10 group-hover:border-white/30 transition-colors aspect-[3/4]">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-mono text-sm font-bold mb-1 text-left group-hover:text-white/80 transition-colors">
                {facility.name}
              </h3>
              <p className="font-mono text-xs text-white/40 text-left">
                {facility.code}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
