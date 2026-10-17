import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import { CLUB_INFO } from '../data/clubData';

interface NavbarProps {
  onOpenJoinModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Next Ride', href: '#next-ride' },
    { name: 'Rides & Events', href: '#rides' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Safety', href: '#safety' },
    { name: 'Community', href: '#community' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleAudioToggle = () => {
    setIsMuted(!isMuted);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-dark-950/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/60'
          : 'py-5 bg-gradient-to-b from-dark-950/90 via-dark-950/40 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-moto-red via-moto-orange to-moto-blue shadow-lg shadow-moto-red/20 group-hover:shadow-moto-red/50 transition-all duration-300 transform group-hover:scale-105">
                <img
                  src={CLUB_INFO.logoUrl}
                  alt="MIT-WPU Riders Official Logo"
                  className="w-full h-full object-cover rounded-full bg-white"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-moto-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-moto-red border-2 border-dark-950"></span>
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-lg sm:text-xl tracking-wider text-white group-hover:text-moto-red transition-colors">
                  MIT-WPU <span className="text-moto-red">RIDERS</span>
                </span>
                <span className="hidden md:inline-flex items-center px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-moto-red/20 text-moto-red border border-moto-red/30">
                  EST. 2025
                </span>
              </div>
              <span className="text-[11px] font-medium tracking-wider text-gray-400 uppercase hidden sm:block">
                India's 1st University Riding Club
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-xs xl:text-sm font-semibold text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all tracking-wide relative group"
              >
                {link.name}
                <span className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-gradient-to-r from-moto-red to-moto-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>

          {/* Desktop Right Action Area */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Ambient Audio Toggle */}
            <button
              onClick={handleAudioToggle}
              title={isMuted ? "Enable Ambient Sound" : "Mute Sound"}
              className="p-2.5 rounded-lg bg-dark-800/80 border border-white/10 text-gray-400 hover:text-white hover:border-moto-red/40 transition-colors"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-moto-red animate-pulse" />}
            </button>

            {/* Join Button CTA */}
            <button
              onClick={onOpenJoinModal}
              className="relative group overflow-hidden px-5 py-2.5 bg-gradient-to-r from-moto-red to-moto-orange text-white font-display font-bold text-xs sm:text-sm tracking-wider uppercase rounded-lg shadow-lg shadow-moto-red/30 hover:shadow-moto-red/60 transform hover:-translate-y-0.5 transition-all duration-300 racing-slant"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Join The Ride
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenJoinModal}
              className="px-3 py-1.5 bg-moto-red text-white text-xs font-bold rounded uppercase tracking-wider"
            >
              Join
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-dark-800 text-gray-200 hover:text-white border border-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-moto-red" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-dark-950/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 mt-3 animate-fadeIn">
          <div className="flex flex-col space-y-2">
            <div className="py-2 px-3 mb-2 rounded-lg bg-dark-900 border border-moto-red/30 flex items-center justify-between">
              <span className="text-xs text-gray-300 font-medium">India's 1st University Riding Club</span>
              <span className="text-[10px] bg-moto-red text-white font-bold px-2 py-0.5 rounded">PUNE</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-200 hover:text-white hover:bg-white/10 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-moto-red" />
              </a>
            ))}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoinModal();
                }}
                className="w-full py-3 bg-gradient-to-r from-moto-red to-moto-orange text-white font-bold text-center rounded-lg shadow-lg tracking-wider uppercase text-sm"
              >
                Join MIT-WPU Riders
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
