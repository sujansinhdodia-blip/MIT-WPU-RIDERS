import React, { useState } from 'react';
import { Trophy, Award, Calendar, CheckCircle, Flag, Star, ArrowUpRight, Sparkles } from 'lucide-react';
import { CLUB_INFO, INITIAL_STATS } from '../data/clubData';

export const Achievements: React.FC = () => {
  const [activeMilestone, setActiveMilestone] = useState<number>(3); // Bosch award selected by default

  const milestones = [
    {
      year: "Early 2025",
      title: "Club Formation & University Charter",
      category: "Club Formation",
      icon: Flag,
      description: "Founded by passionate student riders with official faculty endorsement at MIT World Peace University, establishing India's first formal university-level riding club framework.",
      badge: "Inception",
      accent: "text-blue-400 border-blue-500/30",
    },
    {
      year: "Mid 2025",
      title: "First Campus Rollout & Sahyadri Run",
      category: "Major Rides",
      icon: Calendar,
      description: "Inaugural convoy rollout with 25+ student motorcycles cruising through Chandani Chowk to Lonavala, executing flawless staggered formation and zero-incident protocols.",
      badge: "First Rollout",
      accent: "text-amber-400 border-amber-500/30",
    },
    {
      year: "Late 2025",
      title: "Distinguished Gentleman's Ride (DGR) Partnership",
      category: "Collaborations",
      icon: Star,
      description: "Collaborated with the global DGR charity movement in Pune, riding in dapper vintage attire to raise critical funds and awareness for prostate cancer and men's mental health.",
      badge: "Global Cause",
      accent: "text-purple-400 border-purple-500/30",
    },
    {
      year: "August 2026",
      title: "National Honor: Bosch & Radon Riders Award",
      category: "Awards & Recognition",
      icon: Trophy,
      description: "Awarded national recognition as India's 1st Institute-Level Riding Club by automotive engineering giant Bosch and Radon Riders, commending exceptional road safety and student leadership.",
      badge: "Pinnacle Milestone",
      accent: "text-moto-red border-moto-red/50",
      featured: true,
    },
    {
      year: "Late 2026",
      title: "Freshers Induction & Badge Investiture",
      category: "Events",
      icon: Award,
      description: "Official badge investiture ceremony welcoming over 80+ aspiring freshers into the club brotherhood, establishing dedicated safety marshal and ride captain wings.",
      badge: "Expansion",
      accent: "text-emerald-400 border-emerald-500/30",
    },
    {
      year: "2027 & Beyond",
      title: "All-India Inter-University Motorcycle Summit",
      category: "Future Journey",
      icon: Sparkles,
      description: "Pioneering the first collegiate road safety and touring summit across premier Indian technical universities, inspiring the next generation of responsible riders.",
      badge: "Future Vision",
      accent: "text-cyan-400 border-cyan-500/30",
    }
  ];

  return (
    <section id="achievements" className="py-24 bg-dark-900/90 relative overflow-hidden carbon-texture">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-moto-red/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-800 border border-moto-red/30 text-xs font-mono text-moto-red tracking-widest uppercase mb-3">
            <Trophy className="w-3.5 h-3.5" />
            Milestones & Legacy
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white">
            India's First Official <br />
            <span className="racing-gradient-text">University-Level Riding Club</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
            Our journey from a shared passion in university classrooms to receiving national accolades from industry leaders.
          </p>
        </div>

        {/* Major Feature Card: Bosch & Radon Riders Award */}
        <div className="mb-20 rounded-2xl overflow-hidden glass-panel-glow border border-moto-red/30 p-6 sm:p-8 lg:p-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Real Award Photo from Instagram */}
            <div className="lg:col-span-5 relative group">
              <div className="rounded-xl overflow-hidden border border-white/20 shadow-2xl shadow-black/80">
                <img
                  src={CLUB_INFO.awardImage}
                  alt="MIT-WPU Riders Award Ceremony with Bosch & Radon Riders"
                  className="w-full h-[320px] sm:h-[380px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute top-4 left-4 px-3 py-1 bg-dark-950/90 backdrop-blur-md rounded border border-moto-red/40 text-[11px] font-bold text-moto-red uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-yellow-400" />
                Official Award Photo
              </div>
              <div className="mt-2 text-center text-xs text-gray-400 font-mono">
                Awarded at MIT-WPU Campus, Pune
              </div>
            </div>

            {/* Award Description & Citation */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 text-xs font-bold uppercase tracking-wider w-fit">
                <Star className="w-3.5 h-3.5 fill-yellow-400" />
                Historic National Recognition
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-wide">
                Honoured by <span className="text-moto-red">Bosch & Radon Riders</span>
              </h3>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                The <span className="text-white font-semibold">MIT-WPU Riders Club</span> has been officially recognised 
                as India's 1st Institute-Level Riding Club. Presented by global automotive technology pioneer <strong className="text-white">Bosch</strong> alongside premier motorcycle fraternity <strong className="text-white">Radon Riders</strong>.
              </p>

              <div className="p-4 rounded-xl bg-dark-950/80 border border-white/10 space-y-2">
                <div className="text-xs uppercase font-mono text-gray-400">Award Citation Highlights</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-moto-red" />
                    <span>Excellence in Road Safety Culture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-moto-red" />
                    <span>Pioneering University Riding Structure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-moto-red" />
                    <span>Team Camaraderie & Mentorship</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-moto-red" />
                    <span>Defensive Formation Disciplines</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <a
                  href={CLUB_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-dark-800 hover:bg-dark-750 text-white text-xs sm:text-sm font-bold uppercase tracking-wider border border-white/15 hover:border-moto-red transition-all"
                >
                  View Official Post On Instagram
                  <ArrowUpRight className="w-4 h-4 text-moto-red" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Live Counters Stats Bar */}
        <div className="mb-24 grid grid-cols-2 lg:grid-cols-5 gap-4">
          
          <div className="p-5 rounded-xl glass-panel border border-white/10 text-center hover:border-moto-red/40 transition-all">
            <div className="font-display font-black text-3xl sm:text-4xl text-white">
              {INITIAL_STATS.ridesCompleted}<span className="text-moto-red">+</span>
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mt-1">
              Rides Completed
            </div>
            <div className="text-[10px] text-gray-500 mt-0.5">Sahyadris, Konkan & Ghats</div>
          </div>

          <div className="p-5 rounded-xl glass-panel border border-white/10 text-center hover:border-moto-orange/40 transition-all">
            <div className="font-display font-black text-3xl sm:text-4xl text-white">
              {(INITIAL_STATS.kilometersCovered).toLocaleString()}<span className="text-moto-orange">+</span>
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mt-1">
              Kilometres Covered
            </div>
            <div className="text-[10px] text-gray-500 mt-0.5">Asphalt, rain & switchbacks</div>
          </div>

          <div className="p-5 rounded-xl glass-panel border border-white/10 text-center hover:border-blue-500/40 transition-all">
            <div className="font-display font-black text-3xl sm:text-4xl text-white">
              {INITIAL_STATS.ridersConnected}<span className="text-blue-400">+</span>
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mt-1">
              Riders Connected
            </div>
            <div className="text-[10px] text-gray-500 mt-0.5">Across all departments</div>
          </div>

          <div className="p-5 rounded-xl glass-panel border border-white/10 text-center hover:border-purple-500/40 transition-all">
            <div className="font-display font-black text-3xl sm:text-4xl text-white">
              {INITIAL_STATS.eventsConducted}<span className="text-purple-400">+</span>
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mt-1">
              Events Conducted
            </div>
            <div className="text-[10px] text-gray-500 mt-0.5">DGR, Orientation, Rallies</div>
          </div>

          <div className="col-span-2 lg:col-span-1 p-5 rounded-xl glass-panel border border-white/10 text-center hover:border-emerald-500/40 transition-all">
            <div className="font-display font-black text-3xl sm:text-4xl text-emerald-400">
              {INITIAL_STATS.safetyScorePercentage}%
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mt-1">
              Safety Record
            </div>
            <div className="text-[10px] text-gray-500 mt-0.5">Zero tolerance compliance</div>
          </div>

        </div>

        {/* Timeline-Style Journey Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="font-display font-bold text-2xl uppercase tracking-wider text-white">
              The Journey of MIT-WPU Riders
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              From our founding moments to future horizons
            </p>
          </div>

          <div className="relative">
            {/* Center Timeline Spine on Desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-moto-red via-moto-orange to-moto-blue -translate-x-1/2" />

            <div className="space-y-8 lg:space-y-12">
              {milestones.map((item, index) => {
                const isEven = index % 2 === 0;
                const IconComponent = item.icon;
                const isSelected = activeMilestone === index;

                return (
                  <div
                    key={item.title}
                    onClick={() => setActiveMilestone(index)}
                    className={`cursor-pointer transition-all duration-300 relative flex flex-col lg:flex-row items-center ${
                      isEven ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Content Box */}
                    <div className="w-full lg:w-1/2 px-0 lg:px-8">
                      <div
                        className={`p-6 rounded-xl transition-all duration-300 border ${
                          isSelected
                            ? 'glass-panel-glow border-moto-red/50 shadow-2xl'
                            : 'glass-panel border-white/10 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-xs font-mono font-bold text-moto-red">
                            {item.year}
                          </span>
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border bg-dark-950 ${item.accent}`}>
                            {item.badge}
                          </span>
                        </div>

                        <h4 className="font-display font-bold text-lg text-white mb-2">
                          {item.title}
                        </h4>

                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                          {item.description}
                        </p>

                        <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-gray-500">
                          <span>Category: {item.category}</span>
                          <span className="text-moto-orange font-semibold">Click to highlight</span>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Node Center Marker */}
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-dark-950 border-2 border-moto-red items-center justify-center text-white shadow-lg shadow-moto-red/40 z-20">
                      <IconComponent className="w-4 h-4 text-moto-orange" />
                    </div>

                    {/* Empty spacer for the other half */}
                    <div className="hidden lg:block w-1/2" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
