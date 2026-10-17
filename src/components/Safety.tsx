import React, { useState } from 'react';
import { Shield, Radio, Ban, Wrench, HeartHandshake, ShieldAlert, ChevronDown } from 'lucide-react';
import { SAFETY_DOCTRINE, HAND_SIGNALS } from '../data/clubData';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  ShieldAlert, Radio, HandMetal: Shield, Ban, Wrench, HeartHandshake,
};

export const Safety: React.FC = () => {
  const [expandedSignal, setExpandedSignal] = useState<number | null>(null);

  return (
    <section id="safety" className="py-24 bg-dark-900/60 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-moto-red to-transparent" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-moto-red/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-850 border border-moto-red/30 text-xs font-mono text-moto-red tracking-widest uppercase mb-3">
            <Shield className="w-3.5 h-3.5" />
            Safety Doctrine
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white">
            Ride Fast. <span className="text-moto-red">Think Faster.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300">
            Safety is not a constraint — it is the foundation of freedom on two wheels. Our protocols are non-negotiable.
          </p>
        </div>

        {/* Safety Doctrine Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {SAFETY_DOCTRINE.map((rule, index) => {
            const IconComp = iconMap[rule.icon] || Shield;
            const accent = index % 3 === 0 ? 'border-moto-red/30 hover:border-moto-red' :
                           index % 3 === 1 ? 'border-moto-orange/20 hover:border-moto-orange' :
                           'border-blue-500/20 hover:border-blue-500';
            const iconBg = index % 3 === 0 ? 'bg-moto-red/10 text-moto-red' :
                           index % 3 === 1 ? 'bg-moto-orange/10 text-moto-orange' :
                           'bg-blue-500/10 text-blue-400';

            return (
              <div key={index} className={`glass-panel p-6 rounded-2xl border transition-all duration-300 ${accent} group`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBg} mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-base sm:text-lg text-white mb-3 group-hover:text-moto-orange transition-colors">
                  {rule.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {rule.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Hand Signals Section */}
        <div>
          <div className="text-center mb-10">
            <h3 className="font-display font-bold text-2xl uppercase tracking-wider text-white">
              Formation & Hand Signals
            </h3>
            <p className="text-sm text-gray-400 mt-2">
              Every MIT-WPU Rider is trained in standard formation signals before joining any convoy
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {HAND_SIGNALS.map((sig, i) => (
              <div
                key={i}
                onClick={() => setExpandedSignal(expandedSignal === i ? null : i)}
                className="cursor-pointer glass-panel rounded-xl p-4 border border-white/10 hover:border-moto-orange/40 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-moto-red/10 border border-moto-red/30 flex items-center justify-center text-sm font-mono text-moto-red font-bold">
                      {i + 1}
                    </div>
                    <span className="font-bold text-white text-sm">{sig.signal}</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-moto-orange transition-transform ${expandedSignal === i ? 'rotate-180' : ''}`} />
                </div>
                {expandedSignal === i && (
                  <div className="mt-3 pt-3 border-t border-white/10 space-y-2 pl-11">
                    <div>
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Gesture: </span>
                      <span className="text-xs text-gray-200">{sig.gesture}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Purpose: </span>
                      <span className="text-xs text-moto-orange font-semibold">{sig.purpose}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ATGATT Visual Banner */}
        <div className="mt-16 relative overflow-hidden rounded-2xl border border-moto-red/30 glass-panel-glow p-8 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-moto-red/5 via-transparent to-moto-orange/5 pointer-events-none" />
          <Shield className="w-12 h-12 text-moto-red mx-auto mb-3" />
          <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-wide mb-2">
            ATGATT — All The Gear, All The Time
          </h3>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
            This is our sacred protocol. No rider rolls with MIT-WPU Riders without a certified helmet, 
            armored jacket, gloves, riding pants, and boots. <span className="text-moto-red font-semibold">Zero exceptions. Zero compromise.</span>
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {['Certified Helmet', 'Armored Jacket', 'Riding Gloves', 'CE-Rated Trousers', 'Ankle Boots', 'Back Protector'].map((gear) => (
              <span key={gear} className="text-xs font-bold uppercase px-3 py-1.5 rounded-full bg-moto-red/10 border border-moto-red/30 text-moto-red tracking-wider">
                {gear}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
