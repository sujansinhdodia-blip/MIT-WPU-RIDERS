import React, { useState } from 'react';
import { Instagram, User, Bike } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/clubData';

export const Community: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState('All');
  const categories = ['All', 'Club Leadership', 'Core Team', 'Ride Captains', 'Members'];

  const filtered = selectedCat === 'All'
    ? TEAM_MEMBERS
    : TEAM_MEMBERS.filter(m => m.category === selectedCat);

  const catColors: Record<string, string> = {
    'Club Leadership': 'from-moto-red to-moto-orange',
    'Core Team': 'from-blue-600 to-indigo-600',
    'Ride Captains': 'from-emerald-500 to-teal-600',
    'Members': 'from-purple-600 to-pink-600',
  };

  return (
    <section id="community" className="py-24 bg-dark-950 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-850 border border-white/10 text-xs font-mono text-gray-400 tracking-widest uppercase mb-3">
            Our Community
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white">
            One University. One Passion.{' '}
            <span className="blue-gradient-text">One Brotherhood.</span>
          </h2>
          <p className="mt-3 text-base text-gray-300">
            The faces behind the helmets — our leadership, ride captains, and the founding brotherhood of MIT-WPU Riders.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${
                selectedCat === cat
                  ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/20'
                  : 'bg-dark-850/80 text-gray-300 border-white/10 hover:border-blue-500/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Team Member Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((member) => (
            <div key={member.id} className="glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 group">
              {/* Photo Area */}
              <div className="relative h-56 overflow-hidden bg-dark-800">
                <img
                  src={member.photoUrl}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />

                {/* Category Badge */}
                <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white bg-gradient-to-r ${catColors[member.category] || 'from-gray-600 to-gray-700'}`}>
                  {member.category}
                </div>

                {/* Instagram Link */}
                <a
                  href={`https://instagram.com/${member.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-dark-950/90 text-gray-300 hover:text-white flex items-center justify-center border border-white/10 hover:border-white/30 transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-white">{member.name}</h3>
                <p className="text-xs font-semibold text-moto-orange uppercase tracking-wider mt-0.5 mb-3">{member.role}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <User className="w-3.5 h-3.5 shrink-0" />
                    <span>{member.department} · {member.year}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Bike className="w-3.5 h-3.5 text-moto-red shrink-0" />
                    <span className="text-gray-300 font-medium">{member.motorcycle}</span>
                  </div>
                </div>

                {member.quote && (
                  <p className="text-xs text-gray-400 italic border-l-2 border-moto-red/50 pl-3 line-clamp-2">
                    "{member.quote}"
                  </p>
                )}

                <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-gray-400">
                  <Instagram className="w-3.5 h-3.5 text-moto-orange" />
                  <span className="font-mono text-moto-orange">{member.instagram}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join CTA Banner */}
        <div className="mt-16 text-center p-8 rounded-2xl glass-panel border border-blue-500/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10 pointer-events-none" />
          <h3 className="font-display font-black text-2xl text-white uppercase">
            Your Profile Could Be Here
          </h3>
          <p className="text-gray-300 text-sm mt-2 max-w-lg mx-auto">
            Apply now to join the brotherhood and represent MIT-WPU Riders on every adventure ahead.
          </p>
          <a
            href="#join"
            className="mt-5 inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm uppercase tracking-wider rounded-xl transition-colors shadow-lg"
          >
            Apply for Membership
          </a>
        </div>
      </div>
    </section>
  );
};
