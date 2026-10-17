import React, { useState } from 'react';
import { MapPin, Calendar, Navigation, ChevronRight, Gauge, Clock } from 'lucide-react';
import { RIDES_AND_EVENTS } from '../data/clubData';
import { RideEvent } from '../types';

export const Rides: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedRide, setSelectedRide] = useState<RideEvent | null>(null);

  const categories = ['All', 'Long Distance', 'Adventure', 'Weekend', 'University', 'Road Safety', 'Collaborations'];

  const filtered = selectedCategory === 'All'
    ? RIDES_AND_EVENTS
    : RIDES_AND_EVENTS.filter(r => r.category === selectedCategory);

  const diffColors: Record<string, string> = {
    Easy: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    Moderate: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    Challenging: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    Expert: 'bg-red-500/20 text-red-400 border-red-500/30',
  };

  const catColors: Record<string, string> = {
    'Long Distance': 'bg-blue-500/20 text-blue-400',
    'Adventure': 'bg-orange-500/20 text-orange-400',
    'Weekend': 'bg-purple-500/20 text-purple-400',
    'University': 'bg-green-500/20 text-green-400',
    'Road Safety': 'bg-red-500/20 text-red-400',
    'Collaborations': 'bg-yellow-500/20 text-yellow-400',
  };

  return (
    <section id="rides" className="py-24 bg-dark-900/80 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-moto-orange/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-800 border border-white/10 text-xs font-mono text-gray-400 tracking-widest uppercase mb-3">
            Rides & Events
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white">
            Every Road <span className="text-moto-orange">Has A Story.</span>
          </h2>
          <p className="mt-3 text-base text-gray-300">
            From misty Sahyadri ghats to campus rallies and national charity rides.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${
                selectedCategory === cat
                  ? 'bg-moto-red text-white border-moto-red shadow-lg shadow-moto-red/30'
                  : 'bg-dark-850/80 text-gray-300 border-white/10 hover:border-moto-orange/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Ride Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((ride) => (
            <div
              key={ride.id}
              onClick={() => setSelectedRide(ride)}
              className="cursor-pointer glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-moto-red/40 hover:shadow-xl hover:shadow-moto-red/10 transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Cover Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={ride.coverImage}
                  alt={ride.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent" />
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${catColors[ride.category] || 'bg-gray-500/20 text-gray-400'}`}>
                    {ride.category}
                  </span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${diffColors[ride.difficulty]}`}>
                    {ride.difficulty}
                  </span>
                </div>
                {ride.registrationOpen && (
                  <div className="absolute top-3 right-3 px-2 py-0.5 bg-emerald-500/90 text-white text-[10px] font-bold uppercase tracking-wider rounded-full animate-pulse">
                    Open
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-white mb-1 group-hover:text-moto-orange transition-colors">
                  {ride.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-4 line-clamp-2">
                  {ride.shortDescription}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <MapPin className="w-3.5 h-3.5 text-moto-orange shrink-0" />
                    <span className="truncate">{ride.destination}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Gauge className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{ride.distance}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Calendar className="w-3.5 h-3.5 text-moto-red shrink-0" />
                    <span className="truncate">{ride.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Clock className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span>{ride.duration}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold text-moto-orange group-hover:text-white transition-colors">
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ride Detail Modal */}
      {selectedRide && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedRide(null)}
        >
          <div
            className="glass-panel-glow rounded-2xl border border-moto-red/30 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56 overflow-hidden rounded-t-2xl">
              <img src={selectedRide.coverImage} alt={selectedRide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />
              <button
                onClick={() => setSelectedRide(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-dark-950/90 text-gray-300 hover:text-white flex items-center justify-center text-xl border border-white/20"
              >
                ×
              </button>
              <div className="absolute bottom-4 left-5">
                <div className="text-xs font-mono text-moto-orange uppercase tracking-widest">{selectedRide.category}</div>
                <h3 className="font-display font-black text-2xl text-white">{selectedRide.title}</h3>
              </div>
            </div>

            <div className="p-6 space-y-5">
              <p className="text-sm text-gray-300 leading-relaxed">{selectedRide.fullDescription}</p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Date', value: selectedRide.date, icon: Calendar },
                  { label: 'Destination', value: selectedRide.destination, icon: MapPin },
                  { label: 'Distance', value: selectedRide.distance, icon: Gauge },
                  { label: 'Meeting Point', value: selectedRide.meetingPoint, icon: Navigation },
                  { label: 'Departure', value: selectedRide.departureTime, icon: Clock },
                  { label: 'Cruise Pace', value: selectedRide.pace, icon: Gauge },
                ].map(({ label, value, icon: Icon }) => (
                  <div key={label} className="flex items-start gap-2.5">
                    <Icon className="w-4 h-4 text-moto-orange mt-0.5 shrink-0" />
                    <div>
                      <div className="text-[10px] uppercase text-gray-500 font-mono">{label}</div>
                      <div className="text-xs font-semibold text-gray-200">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">Route Waypoints</div>
                <div className="flex flex-wrap gap-2">
                  {selectedRide.routeHighlights.map((p, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-dark-850 border border-white/10 text-gray-300">{p}</span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">Mandatory Safety Gear</div>
                <ul className="space-y-1.5">
                  {selectedRide.mandatoryGear.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-moto-red shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setSelectedRide(null)}
                className="w-full py-3.5 bg-gradient-to-r from-moto-red to-moto-orange text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg"
              >
                {selectedRide.registrationOpen ? 'Register For This Ride' : 'Back to Rides'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
