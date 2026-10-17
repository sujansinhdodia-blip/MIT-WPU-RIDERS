import React from 'react';
import { ExternalLink, Heart, MessageCircle } from 'lucide-react';
import { INSTAGRAM_POSTS, CLUB_INFO, STORY_HIGHLIGHTS } from '../data/clubData';

export const InstagramSection: React.FC = () => {
  return (
    <section id="instagram" className="py-24 bg-dark-900/70 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/30 to-dark-950/60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-850 border border-white/10 text-xs font-mono text-gray-400 tracking-widest uppercase mb-3">
            Follow The Journey
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white">
            Follow The <span className="racing-gradient-text">Journey.</span>
          </h2>
          <p className="mt-3 text-base text-gray-300">
            Every mile documented. Every moment celebrated.
          </p>

          {/* Instagram Handle Badge */}
          <a
            href={CLUB_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-5 px-5 py-3 rounded-2xl border border-white/15 bg-dark-900/80 backdrop-blur-sm hover:border-moto-orange/50 transition-all group"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-moto-orange/50">
              <img src={CLUB_INFO.logoUrl} alt="MIT-WPU Riders" className="w-full h-full object-cover bg-white" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white group-hover:text-moto-orange transition-colors">{CLUB_INFO.instagramHandle}</div>
              <div className="text-xs text-gray-400">1,047 Followers · 49 Posts</div>
            </div>
            <ExternalLink className="w-4 h-4 text-moto-orange ml-2" />
          </a>
        </div>

        {/* Story Highlights Bar */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-12 overflow-x-auto pb-2">
          {STORY_HIGHLIGHTS.map((highlight) => (
            <a
              key={highlight.id}
              href={CLUB_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 group shrink-0"
            >
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full p-0.5 bg-gradient-to-tr from-moto-red via-moto-orange to-moto-blue group-hover:scale-105 transition-transform shadow-lg">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-dark-950 bg-dark-800">
                  <img
                    src={highlight.imageUrl}
                    alt={highlight.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <span className="text-[10px] text-gray-400 font-medium text-center w-16 truncate">{highlight.title}</span>
            </a>
          ))}
        </div>

        {/* Instagram Feed Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group rounded-xl overflow-hidden border border-white/10 hover:border-moto-orange/50 transition-all aspect-square"
            >
              <img
                src={post.imageUrl}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {post.isVideo && (
                <div className="absolute top-2 right-2 w-5 h-5 bg-dark-950/80 rounded flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="white" className="w-3 h-3"><polygon points="5,3 19,12 5,21" /></svg>
                </div>
              )}
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-dark-950/75 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-3">
                <div className="flex items-center gap-3 text-white text-xs font-semibold">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-moto-red text-moto-red" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5" />
                    {post.comments}
                  </span>
                </div>
                <p className="text-[10px] text-gray-300 text-center line-clamp-3">{post.caption}</p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href={CLUB_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl text-white font-bold text-sm tracking-wider uppercase shadow-2xl hover:scale-105 transition-transform"
            style={{ background: 'linear-gradient(90deg, #833ab4, #fd1d1d, #fcb045)' }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow @mitwpu.riders on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};
