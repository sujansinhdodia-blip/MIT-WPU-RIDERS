import React, { useState } from 'react';
import { Flame, Compass, Users, ShieldCheck, GraduationCap, Trophy, ChevronRight, CheckCircle2 } from 'lucide-react';
import { CLUB_INFO } from '../data/clubData';

export const About: React.FC = () => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      icon: Flame,
      title: "Passion for Riding",
      badge: "Pure Adrenaline",
      color: "from-moto-red to-moto-orange",
      shortDesc: "From 150cc singles to litre-class superbikes, what connects us is the relentless thrum of an engine.",
      fullDesc: "Whether it's weekend apex carving through Lavasa, serene early morning highway cruises, or vintage cafe racers, our heart beats for two wheels. We embrace riders of all motorcycle genres.",
      highlights: ["All engine displacements welcomed", "Weekend sprints & dawn runs", "Track day and apex cornering workshops"]
    },
    {
      icon: Compass,
      title: "Adventure & Exploration",
      badge: "Beyond Horizons",
      color: "from-amber-500 to-orange-600",
      shortDesc: "Uncharted Sahyadri trails, coastal Konkan twists, and multi-state endurance expeditions.",
      fullDesc: "Pune is the gateway to some of the world's most breathtaking ghats. We explore winding mountain roads, hidden valley viewpoints, and remote backwaters with meticulous planning and navigation.",
      highlights: ["Ghat explorations (Tamhini, Varandha, Malshej)", "Endurance tours across Maharashtra & Goa", "Off-grid camping and sunrise points"]
    },
    {
      icon: Users,
      title: "Brotherhood",
      badge: "Family on Wheels",
      color: "from-blue-600 to-indigo-600",
      shortDesc: "No rider is left behind. When one engine roars, the entire pack rolls together.",
      fullDesc: "Beyond the helmets and rev limiters lies an unbreakable bond. Seniors mentor juniors, engineering peers exchange technical mods, and riders support each other both on asphalt and throughout college life.",
      highlights: ["Strict Lead & Sweep pack hierarchy", "24/7 Roadside breakdown support", "Lifelong friendships across academic batches"]
    },
    {
      icon: ShieldCheck,
      title: "Responsible Riding",
      badge: "Zero Compromise",
      color: "from-emerald-500 to-teal-600",
      shortDesc: "ATGATT (All The Gear, All The Time) and disciplined formation protocols on every rollout.",
      fullDesc: "Speed is nothing without control. We enforce strict international safety standards, conduct safety drills with partners like Bosch, and train every member in defensive cornering and emergency braking.",
      highlights: ["Mandatory certified gear verification", "Formation signals & staggered lane discipline", "Zero substance tolerance policy"]
    },
    {
      icon: GraduationCap,
      title: "University Community",
      badge: "MIT-WPU Pride",
      color: "from-purple-600 to-pink-600",
      shortDesc: "Bridging diverse academic disciplines under the iconic MIT World Peace University banner.",
      fullDesc: "Mechanical engineers tuning suspension, design students crafting club livery, and computer scientists tracking route telemetry. MIT-WPU Riders reflects the spirit of holistic education and leadership.",
      highlights: ["Officially endorsed student club", "Campus showcase & orientation rallies", "Collaboration with academic departments"]
    },
    {
      icon: Trophy,
      title: "Achievements",
      badge: "National Pioneer",
      color: "from-yellow-400 to-amber-600",
      shortDesc: "Awarded by Bosch & Radon Riders as India's 1st Institute-Level Riding Club.",
      fullDesc: "Recognized nationally by industry leaders and motorsport bodies for revolutionizing student riding culture and creating a certified benchmark for university motorcycle clubs across India.",
      highlights: ["Bosch & Radon Riders National Award", "Official partner in Distinguished Gentleman's Ride", "Over 24,000 incident-free group kilometers"]
    }
  ];

  return (
    <section id="about" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-moto-red/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-10 right-0 w-80 h-80 bg-moto-blue/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-850 border border-white/10 text-xs font-mono text-moto-orange tracking-widest uppercase mb-3">
            About The Club
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white">
            More Than A Club. <br />
            <span className="racing-gradient-text">A Brotherhood.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
            <span className="text-white font-semibold">MIT-WPU Riders</span> is a community built by students 
            who share a common passion for motorcycles, adventure, exploration and responsible riding.
            As India's first official university-level riding club, we set the national standard for student riding culture.
          </p>
        </div>

        {/* Narrative Feature Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          
          {/* Left: Authentic Photo Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl shadow-black/80 group">
              <img
                src={CLUB_INFO.heroImage}
                alt="MIT-WPU Riders Convoy"
                className="w-full h-[380px] sm:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent" />
              
              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel border border-white/15 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-moto-red/20 text-moto-red border border-moto-red/30">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">India's First Official University Club</h3>
                    <p className="text-xs text-gray-300">Awarded by Bosch & Radon Riders for excellence in student motorcycling</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent border highlight */}
            <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-moto-red pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-moto-orange pointer-events-none" />
          </div>

          {/* Right: Mission Story */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                The club brings together riders from different backgrounds, engineering disciplines, and experience levels, 
                creating a tight-knit community that represents <span className="text-white font-medium">teamwork, friendship, discipline, and the true spirit of riding</span>.
              </p>
              <p>
                Founded on the prestigious campus of <span className="text-white font-medium">MIT World Peace University in Kothrud, Pune</span>, 
                our club transforms riding from an individual pastime into an organised, university-backed discipline of safety, camaraderie, and leadership.
              </p>
              <p className="border-l-2 border-moto-red pl-4 text-gray-200 italic">
                "We don't ride to escape life; we ride so life doesn't escape us. On every road, our bikes carry the pride of MIT-WPU."
              </p>
            </div>

            {/* Quick Badges List */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-dark-900 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-moto-red shrink-0" />
                <span className="text-xs font-semibold text-gray-200">Strict Safety Code</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-dark-900 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-moto-orange shrink-0" />
                <span className="text-xs font-semibold text-gray-200">Sahyadri Expeditions</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-dark-900 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-moto-blue shrink-0" />
                <span className="text-xs font-semibold text-gray-200">All Motorcycle Classes</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-dark-900 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-yellow-500 shrink-0" />
                <span className="text-xs font-semibold text-gray-200">National Recognition</span>
              </div>
            </div>
          </div>

        </div>

        {/* 6 Core Pillars Interactive Grid */}
        <div>
          <div className="text-center mb-8">
            <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wider text-white">
              The 6 Core Pillars of Our Brotherhood
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Select each pillar to explore the values that guide every throttle twist
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              const isActive = activePillar === index;

              return (
                <div
                  key={pillar.title}
                  onClick={() => setActivePillar(index)}
                  className={`cursor-pointer rounded-xl p-6 transition-all duration-300 relative border ${
                    isActive
                      ? 'glass-panel-glow border-moto-red/50 translate-y-[-4px]'
                      : 'glass-panel border-white/10 hover:border-white/20 hover:bg-dark-900/90'
                  }`}
                >
                  {/* Top Row: Icon & Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${pillar.color} text-white shadow-lg`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-gray-400 px-2 py-0.5 rounded bg-dark-850 border border-white/5">
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="font-display font-bold text-lg text-white mb-2 group-hover:text-moto-red transition-colors">
                    {pillar.title}
                  </h4>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                    {pillar.shortDesc}
                  </p>

                  {/* Expanded Highlights if Active */}
                  {isActive ? (
                    <div className="pt-3 border-t border-white/10 space-y-2 animate-fadeIn">
                      <p className="text-xs text-gray-300 leading-relaxed font-medium">
                        {pillar.fullDesc}
                      </p>
                      <ul className="space-y-1.5 pt-2">
                        {pillar.highlights.map((h, i) => (
                          <li key={i} className="text-[11px] text-gray-400 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-moto-red shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="text-xs text-moto-orange font-semibold flex items-center gap-1">
                      <span>Click to read details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
