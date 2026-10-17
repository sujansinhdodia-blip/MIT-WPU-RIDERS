import React from 'react';
import { Instagram, Youtube, Heart, ChevronRight, MapPin, Shield } from 'lucide-react';
import { CLUB_INFO } from '../data/clubData';

interface FooterProps {
  onOpenJoinModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenJoinModal }) => {
  const footerLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Next Ride', href: '#next-ride' },
    { name: 'Rides & Events', href: '#rides' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Safety', href: '#safety' },
    { name: 'Community', href: '#community' },
    { name: 'Instagram', href: CLUB_INFO.instagramUrl },
    { name: 'Join Us', href: '#join' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-dark-950 border-t border-white/10 relative overflow-hidden">
      {/* Top Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-moto-red to-transparent" />

      {/* CTA Section */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-wide">
                Ready to ride with us?
              </h3>
              <p className="text-gray-400 text-sm mt-1">Join India's premier university motorcycle brotherhood.</p>
            </div>
            <div className="flex gap-3">
              <a
                href={CLUB_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl border border-white/15 text-white text-sm font-bold flex items-center gap-2 hover:border-moto-orange/50 transition-colors"
              >
                <Instagram className="w-4 h-4 text-moto-orange" />
                Follow
              </a>
              <button
                onClick={onOpenJoinModal}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-moto-red to-moto-orange text-white text-sm font-bold flex items-center gap-2 shadow-lg hover:scale-105 transition-transform"
              >
                Join The Ride
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Brand Column */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-14 h-14 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-moto-red via-moto-orange to-moto-blue shadow-lg">
                <img src={CLUB_INFO.logoUrl} alt="MIT-WPU Riders" className="w-full h-full object-cover rounded-full bg-white" />
              </div>
              <div>
                <div className="font-display font-black text-xl text-white tracking-wider">MIT-WPU <span className="text-moto-red">RIDERS</span></div>
                <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Est. 2025 · Pune, India</div>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              India's first official university-level motorcycle riding club. Awarded by Bosch & Radon Riders for excellence in student riding culture and road safety.
            </p>

            <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
              <MapPin className="w-3.5 h-3.5 text-moto-orange" />
              <span>MIT World Peace University, Kothrud, Pune 411038</span>
            </div>

            <p className="font-display font-bold text-sm text-moto-orange italic tracking-wide">
              "Ride Beyond Limits. Ride Together."
            </p>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-5">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 rounded-full bg-moto-red group-hover:bg-moto-orange transition-colors shrink-0" />
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Safety Pledge */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-5">Safety Pledge</h4>
            <div className="p-4 rounded-xl bg-moto-red/5 border border-moto-red/15 mb-5">
              <Shield className="w-5 h-5 text-moto-red mb-2" />
              <p className="text-xs text-gray-400 leading-relaxed">
                <span className="text-white font-bold">ATGATT Policy:</span> Every MIT-WPU Rider commits to wearing All The Gear, All The Time on every group ride. Safety is non-negotiable.
              </p>
            </div>

            <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">Social Media</h4>
            <div className="flex gap-3">
              <a
                href={CLUB_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-dark-850 border border-white/10 text-gray-400 hover:text-white hover:border-moto-orange/50 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={CLUB_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-dark-850 border border-white/10 text-gray-400 hover:text-red-500 hover:border-red-500/30 transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © 2026 MIT-WPU Riders. All Rights Reserved. · MIT World Peace University, Pune.
          </p>
          <p className="text-xs text-gray-600 flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-moto-red" /> for the brotherhood
          </p>
        </div>
      </div>
    </footer>
  );
};
