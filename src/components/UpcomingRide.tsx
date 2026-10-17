import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Navigation, Gauge, AlertTriangle, ChevronRight, Calendar } from 'lucide-react';
import { UPCOMING_RIDE } from '../data/clubData';

interface UpcomingRideProps {
  onOpenJoinModal: () => void;
}

export const UpcomingRide: React.FC<UpcomingRideProps> = ({ onOpenJoinModal }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-09-20T05:30:00');
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff <= 0) {
        clearInterval(interval);
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const difficultyColors = {
    Easy: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    Moderate: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    Challenging: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    Expert: 'bg-red-500/20 text-red-400 border-red-500/30',
  };

  return (
    <section id="next-ride" className="py-24 bg-dark-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950 to-dark-950/80 z-0" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-moto-red to-transparent" />
      <div className="absolute -top-20 right-0 w-[500px] h-[500px] bg-moto-orange/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-850 border border-moto-orange/30 text-xs font-mono text-moto-orange tracking-widest uppercase mb-3">
            <Navigation className="w-3.5 h-3.5" />
            Next Expedition
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white">
            Where Are We <span className="text-moto-orange">Riding Next?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Countdown + Ride Details */}
          <div className="lg:col-span-7 space-y-6">
            {/* Countdown Timer */}
            <div className="glass-panel-glow rounded-2xl p-6 sm:p-8 border border-moto-red/30">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-moto-red" />
                <span className="text-xs font-mono text-moto-red uppercase tracking-widest">Time Until Next Ride</span>
              </div>
              <div className="grid grid-cols-4 gap-3 text-center">
                {[
                  { value: timeLeft.days, label: 'Days' },
                  { value: timeLeft.hours, label: 'Hours' },
                  { value: timeLeft.minutes, label: 'Minutes' },
                  { value: timeLeft.seconds, label: 'Seconds' },
                ].map((item) => (
                  <div key={item.label} className="bg-dark-950/80 rounded-xl p-3 sm:p-4 border border-white/10">
                    <div className="font-display font-black text-3xl sm:text-5xl text-white tabular-nums">
                      {String(item.value).padStart(2, '0')}
                    </div>
                    <div className="text-[10px] sm:text-xs font-mono text-moto-red uppercase tracking-widest mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ride Name + Quick Details */}
            <div className="glass-panel rounded-2xl p-6 border border-white/10">
              <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                <div>
                  <h3 className="font-display font-black text-xl sm:text-2xl text-white mb-1">
                    {UPCOMING_RIDE.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{UPCOMING_RIDE.date}</span>
                  </div>
                </div>
                <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${difficultyColors[UPCOMING_RIDE.difficulty]}`}>
                  {UPCOMING_RIDE.difficulty}
                </span>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed mb-5">
                {UPCOMING_RIDE.fullDescription}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-5">
                <div className="space-y-3">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-moto-orange mt-0.5 shrink-0" />
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-gray-500 font-mono">Meeting Point</div>
                      <div className="text-xs font-semibold text-gray-200">{UPCOMING_RIDE.meetingPoint}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-moto-red mt-0.5 shrink-0" />
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-gray-500 font-mono">Departure Time</div>
                      <div className="text-xs font-semibold text-gray-200">{UPCOMING_RIDE.departureTime}</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2.5">
                    <Gauge className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-gray-500 font-mono">Cruise Pace</div>
                      <div className="text-xs font-semibold text-gray-200">{UPCOMING_RIDE.pace}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Navigation className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-gray-500 font-mono">Total Distance</div>
                      <div className="text-xs font-semibold text-gray-200">{UPCOMING_RIDE.distance}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Route Highlights */}
              <div className="mb-5">
                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2">Route Waypoints</div>
                <div className="flex flex-wrap gap-2">
                  {UPCOMING_RIDE.routeHighlights.map((point, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-dark-850 border border-white/10 text-gray-300">
                      {point}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenJoinModal}
                className="w-full py-4 bg-gradient-to-r from-moto-red to-moto-orange text-white font-display font-bold text-sm tracking-wider uppercase rounded-xl shadow-xl shadow-moto-red/30 hover:shadow-moto-red/60 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
              >
                Register For This Ride
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right: Cover Image + Mandatory Gear */}
          <div className="lg:col-span-5 space-y-5">
            <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl relative group">
              <img
                src={UPCOMING_RIDE.coverImage}
                alt={UPCOMING_RIDE.title}
                className="w-full h-[280px] sm:h-[320px] object-cover group-hover:scale-105 transition-transform duration-600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="text-xs font-mono text-moto-orange uppercase tracking-wider">Destination</div>
                <div className="text-lg font-display font-bold text-white">{UPCOMING_RIDE.destination}</div>
              </div>
            </div>

            {/* Mandatory Gear Checklist */}
            <div className="glass-panel rounded-2xl p-5 border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-4 h-4 text-moto-red" />
                <span className="text-sm font-bold text-white uppercase tracking-wider">Mandatory Safety Gear</span>
              </div>
              <p className="text-xs text-gray-400 mb-4">
                All items must be worn before departure. Riders without proper gear will not be permitted to join the convoy.
              </p>
              <ul className="space-y-2.5">
                {UPCOMING_RIDE.mandatoryGear.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-200">
                    <div className="w-5 h-5 rounded border-2 border-moto-red bg-moto-red/10 flex items-center justify-center mt-0.5 shrink-0">
                      <div className="w-2 h-2 rounded-sm bg-moto-red" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-5 p-3 rounded-xl bg-moto-red/10 border border-moto-red/20 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-moto-red shrink-0 mt-0.5" />
                <p className="text-xs text-gray-300">
                  <span className="font-bold text-moto-red">ATGATT Policy:</span> All The Gear, All The Time is a mandatory non-negotiable protocol on every MIT-WPU Riders rollout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
