import React from 'react';
import { ChevronRight, Award, Compass, Flame, ArrowDown } from 'lucide-react';
import { CLUB_INFO } from '../data/clubData';

interface HeroProps {
  onOpenJoinModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoinModal }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-950 pt-20">
      {/* Background Image with Cinematic Motorsport Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={CLUB_INFO.heroImage}
          alt="MIT-WPU Riders Convoy in Western Ghats"
          className="w-full h-full object-cover object-center transform scale-105 filter brightness-[0.45] contrast-125 transition-transform duration-10000 hover:scale-110"
        />
        {/* Dynamic Vignette and Carbon Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/60 to-dark-950/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/50 to-dark-950/80" />
        
        {/* Subtle glowing engine pulse */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-moto-red/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-moto-orange/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Speed lines effect */}
        <div className="speed-particle left-[15%] h-32 top-10" />
        <div className="speed-particle left-[35%] h-48 top-28" />
        <div className="speed-particle left-[75%] h-40 top-16" />
        <div className="speed-particle left-[88%] h-24 top-40" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center">
        
        {/* University & Pioneer Milestone Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-dark-900/90 border border-moto-red/40 shadow-xl shadow-moto-red/15 backdrop-blur-md mb-6 animate-pulse-glow">
          <Award className="w-4 h-4 text-moto-orange" />
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-white">
            India's First University-Level Riding Club
          </span>
          <span className="hidden md:inline-block w-1 h-1 rounded-full bg-gray-500" />
          <span className="hidden md:inline-block text-xs font-semibold text-moto-red uppercase tracking-wider">
            MIT World Peace University, Pune
          </span>
        </div>

        {/* Cinematic Headline */}
        <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase max-w-5xl leading-[1.05] drop-shadow-2xl">
          MIT-WPU <br className="hidden sm:inline" />
          <span className="racing-gradient-text tracking-normal">
            RIDERS
          </span>
        </h1>

        {/* Tagline */}
        <p className="mt-4 font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-wide text-gray-200">
          Ride Beyond Limits. <span className="text-moto-orange">Ride Together.</span>
        </p>

        {/* Mission Statement */}
        <p className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-gray-300/90 font-medium leading-relaxed">
          The official motorcycle brotherhood representing MIT World Peace University. 
          Forged by passion, guided by unyielding safety doctrine, and awarded by <span className="text-white font-semibold">Bosch & Radon Riders</span>.
        </p>

        {/* Primary CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#about"
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-dark-800/90 hover:bg-dark-750 text-white font-display font-bold text-sm tracking-wider uppercase border border-white/15 hover:border-moto-orange/50 transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group backdrop-blur-sm"
          >
            <Compass className="w-4 h-4 text-moto-orange group-hover:rotate-45 transition-transform" />
            Explore The Club
          </a>

          <button
            onClick={onOpenJoinModal}
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-moto-red via-moto-red to-moto-orange text-white font-display font-bold text-sm tracking-wider uppercase shadow-2xl shadow-moto-red/40 hover:shadow-moto-red/70 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group racing-slant"
          >
            <Flame className="w-4 h-4 group-hover:scale-125 transition-transform" />
            Join The Ride
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* Quick Highlights Bar */}
        <div className="mt-14 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-8 border-t border-white/10">
          
          <div className="glass-panel p-3.5 rounded-xl border border-white/5 flex flex-col items-center">
            <span className="font-display font-black text-2xl sm:text-3xl text-white">
              28<span className="text-moto-red">+</span>
            </span>
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-gray-400 mt-0.5">
              Rides Completed
            </span>
          </div>

          <div className="glass-panel p-3.5 rounded-xl border border-white/5 flex flex-col items-center">
            <span className="font-display font-black text-2xl sm:text-3xl text-white">
              24.5k<span className="text-moto-orange">+</span>
            </span>
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-gray-400 mt-0.5">
              KM Covered
            </span>
          </div>

          <div className="glass-panel p-3.5 rounded-xl border border-white/5 flex flex-col items-center">
            <span className="font-display font-black text-2xl sm:text-3xl text-white">
              165<span className="text-moto-blue">+</span>
            </span>
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-gray-400 mt-0.5">
              Riders Connected
            </span>
          </div>

          <div className="glass-panel p-3.5 rounded-xl border border-white/5 flex flex-col items-center">
            <span className="font-display font-black text-2xl sm:text-3xl text-moto-red">
              100%
            </span>
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-gray-400 mt-0.5">
              Safety Record
            </span>
          </div>

        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="mt-10 flex flex-col items-center text-gray-400 hover:text-white transition-colors group"
        >
          <span className="text-[11px] uppercase tracking-widest font-semibold mb-1">Scroll to Explore</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-moto-red" />
        </a>

      </div>
    </section>
  );
};
