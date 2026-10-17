import React, { useState } from 'react';
import { MapPin, Mail, Instagram, Send, Youtube, ExternalLink, Loader2, CheckCircle } from 'lucide-react';
import { CLUB_INFO } from '../data/clubData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-dark-900/70 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-moto-orange/40 to-transparent" />
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-moto-red/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-850 border border-white/10 text-xs font-mono text-gray-400 tracking-widest uppercase mb-3">
            Get In Touch
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white">
            Contact <span className="text-moto-orange">MIT-WPU Riders</span>
          </h2>
          <p className="mt-3 text-base text-gray-300">
            Questions, collaborations, media inquiries or simply want to connect — we're reachable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            {/* Club Identity */}
            <div className="glass-panel-glow rounded-2xl p-6 border border-moto-red/20">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-moto-red/50">
                  <img src={CLUB_INFO.logoUrl} alt="MIT-WPU Riders" className="w-full h-full object-cover bg-white" />
                </div>
                <div>
                  <h3 className="font-display font-black text-xl text-white">{CLUB_INFO.name}</h3>
                  <p className="text-xs text-moto-red font-bold uppercase tracking-wider">India's 1st University Riding Club</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-moto-orange/10 text-moto-orange">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Campus Address</div>
                    <div className="text-sm text-gray-200 font-medium mt-0.5">{CLUB_INFO.university}</div>
                    <div className="text-xs text-gray-400">{CLUB_INFO.campus}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-moto-red/10 text-moto-red">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Email</div>
                    <a href={`mailto:${CLUB_INFO.email}`} className="text-sm text-gray-200 font-medium hover:text-moto-orange transition-colors mt-0.5 block">{CLUB_INFO.email}</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-panel rounded-2xl p-6 border border-white/10">
              <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-4">Connect With Us</h4>
              <div className="space-y-3">
                <a
                  href={CLUB_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-[#833ab4]/10 via-[#fd1d1d]/10 to-[#fcb045]/10 border border-white/10 hover:border-moto-orange/50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Instagram className="w-5 h-5 text-moto-orange" />
                    <div>
                      <div className="text-sm font-bold text-white">{CLUB_INFO.instagramHandle}</div>
                      <div className="text-xs text-gray-400">1,047 followers</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-moto-orange transition-colors" />
                </a>

                <a
                  href={CLUB_INFO.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-red-500/5 border border-red-500/15 hover:border-red-500/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Youtube className="w-5 h-5 text-red-500" />
                    <div>
                      <div className="text-sm font-bold text-white">@mitwpu.riders</div>
                      <div className="text-xs text-gray-400">Ride videos & events</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-red-400 transition-colors" />
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="glass-panel rounded-2xl overflow-hidden border border-white/10 h-[200px] relative">
              <div className="w-full h-full bg-dark-850 flex items-center justify-center">
                <a
                  href="https://maps.google.com/?q=MIT+World+Peace+University+Kothrud+Pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-moto-red/10 border border-moto-red/30 flex items-center justify-center text-moto-red group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-semibold text-gray-300 group-hover:text-white">Open in Google Maps</span>
                  <span className="text-xs text-gray-500">MIT-WPU, Kothrud, Pune</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10">
            <h3 className="font-display font-bold text-xl text-white mb-6 uppercase tracking-wide">
              Send Us a Message
            </h3>

            {sent ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto" />
                <h4 className="font-display font-bold text-xl text-white">Message Sent!</h4>
                <p className="text-sm text-gray-300">We'll get back to you within 24–48 hours.</p>
                <button onClick={() => setSent(false)} className="px-6 py-2 rounded-lg border border-white/20 text-sm text-gray-300 hover:text-white">
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-white/10 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-moto-orange focus:ring-1 focus:ring-moto-orange/30"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-white/10 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-moto-orange focus:ring-1 focus:ring-moto-orange/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Subject *</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData(p => ({ ...p, subject: e.target.value }))}
                    placeholder="e.g., Collaboration inquiry, Membership query"
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-white/10 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-moto-orange focus:ring-1 focus:ring-moto-orange/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Message *</label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-white/10 text-white text-sm placeholder-gray-600 resize-none focus:outline-none focus:border-moto-orange focus:ring-1 focus:ring-moto-orange/30"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-moto-red to-moto-orange text-white font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-moto-red/40 hover:scale-[1.01] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
