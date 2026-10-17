import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/clubData';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Rides', 'Events', 'Riders', 'Bikes', 'Memories'];

  const filtered = filter === 'All' ? GALLERY_ITEMS : GALLERY_ITEMS.filter(i => i.category === filter);

  return (
    <section id="gallery" className="py-24 bg-dark-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 via-dark-950 to-dark-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-850 border border-white/10 text-xs font-mono text-gray-400 tracking-widest uppercase mb-3">
            Photo Gallery
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white">
            Captured <span className="text-moto-orange">On The Road.</span>
          </h2>
          <p className="mt-3 text-base text-gray-300">
            Raw moments, roaring engines, and brotherhood captured frame by frame.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${
                filter === cat
                  ? 'bg-moto-orange text-white border-moto-orange shadow-lg shadow-moto-orange/20'
                  : 'bg-dark-850/80 text-gray-300 border-white/10 hover:border-moto-orange/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="break-inside-avoid cursor-pointer group rounded-xl overflow-hidden border border-white/10 hover:border-moto-orange/50 transition-all duration-300 hover:shadow-xl hover:shadow-moto-orange/10 relative"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                style={{ display: 'block' }}
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs font-mono text-moto-orange uppercase tracking-wider">{item.category}</div>
                    <h4 className="text-sm font-bold text-white mt-0.5">{item.title}</h4>
                    <p className="text-[11px] text-gray-300 mt-1 line-clamp-2">{item.caption}</p>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-moto-orange/20 text-moto-orange flex items-center justify-center ml-3 shrink-0">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram View More CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm mb-4">
            More adventures are live on our Instagram
          </p>
          <a
            href="https://www.instagram.com/mitwpu.riders/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-bold text-sm tracking-wider uppercase shadow-xl hover:scale-105 transition-transform"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            View Full Gallery on Instagram
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxItem(null)}
        >
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-dark-900/90 text-gray-300 hover:text-white flex items-center justify-center border border-white/20 z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={lightboxItem.imageUrl}
              alt={lightboxItem.title}
              className="w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-white/10"
            />
            <div className="mt-4 px-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <div className="text-xs font-mono text-moto-orange uppercase tracking-wider">{lightboxItem.category} · {lightboxItem.date}</div>
                  <h3 className="text-lg font-bold text-white mt-0.5">{lightboxItem.title}</h3>
                </div>
                {lightboxItem.location && (
                  <div className="text-xs text-gray-400 flex items-center gap-1">
                    <span>📍</span> {lightboxItem.location}
                  </div>
                )}
              </div>
              <p className="text-sm text-gray-300 mt-2">{lightboxItem.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
