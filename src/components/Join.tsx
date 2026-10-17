import React, { useState } from 'react';
import { ChevronRight, User, Mail, Phone, Bike, Instagram, BookOpen, CheckCircle, X, Loader2 } from 'lucide-react';
import { CLUB_INFO } from '../data/clubData';
import { RegistrationFormData } from '../types';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<RegistrationFormData>({
    fullName: '', mitEmail: '', prnNumber: '', department: '', year: '',
    phoneNumber: '', motorcycle: '', ridingExperience: '', instagramHandle: '',
    whyJoin: '', emergencyContact: '', hasFullGear: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    setForm(prev => ({
      ...prev,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1800);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative glass-panel-glow rounded-2xl border border-moto-red/30 max-w-2xl w-full my-8">
        {/* Header */}
        <div className="relative overflow-hidden rounded-t-2xl p-6 sm:p-8 bg-gradient-to-r from-dark-900 to-dark-850">
          <div className="absolute inset-0 bg-gradient-to-r from-moto-red/10 to-moto-orange/5 pointer-events-none" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-dark-800 border border-white/15 text-gray-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-4 relative">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-moto-red/50">
              <img src={CLUB_INFO.logoUrl} alt="MIT-WPU Riders" className="w-full h-full object-cover bg-white" />
            </div>
            <div>
              <div className="text-xs font-mono text-moto-red uppercase tracking-widest">Membership Application</div>
              <h2 className="font-display font-black text-xl sm:text-2xl text-white uppercase">
                Join MIT-WPU Riders
              </h2>
              <p className="text-xs text-gray-400">India's 1st University-Level Riding Club</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-20 h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-500/40 flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10 text-emerald-400" />
              </div>
              <h3 className="font-display font-black text-2xl text-white uppercase">Welcome To The Brotherhood!</h3>
              <p className="text-gray-300 text-sm max-w-md mx-auto">
                Your application has been received. Our team will review your details and reach out within 48 hours via your MIT email. 
                <span className="text-moto-orange font-semibold"> Keep your gear ready!</span>
              </p>
              <div className="p-4 rounded-xl bg-dark-900/80 border border-moto-red/20 text-xs text-gray-400">
                📧 Confirmation sent to <span className="text-white font-mono">{form.mitEmail || 'your email'}</span>
              </div>
              <button
                onClick={onClose}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-moto-red to-moto-orange text-white font-bold text-sm uppercase tracking-wider"
              >
                Ride On!
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Personal Info */}
              <div>
                <h3 className="text-xs font-mono text-moto-orange uppercase tracking-widest mb-3">Personal Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField icon={User} label="Full Name *" name="fullName" type="text" value={form.fullName} onChange={handleChange} placeholder="Your full name" required />
                  <FormField icon={Mail} label="MIT-WPU Email *" name="mitEmail" type="email" value={form.mitEmail} onChange={handleChange} placeholder="prn@mitwpu.edu.in" required />
                  <FormField icon={BookOpen} label="PRN Number" name="prnNumber" type="text" value={form.prnNumber} onChange={handleChange} placeholder="Your PRN" />
                  <FormField icon={Phone} label="Phone Number *" name="phoneNumber" type="tel" value={form.phoneNumber} onChange={handleChange} placeholder="+91 9876543210" required />
                </div>
              </div>

              {/* Academic Info */}
              <div>
                <h3 className="text-xs font-mono text-moto-orange uppercase tracking-widest mb-3">Academic Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField icon={BookOpen} label="Department / Course *" name="department" type="text" value={form.department} onChange={handleChange} placeholder="e.g., Computer Engineering" required />
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Year of Study *</label>
                    <select
                      name="year"
                      value={form.year}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-white/10 text-white text-sm focus:outline-none focus:border-moto-orange focus:ring-1 focus:ring-moto-orange/30"
                    >
                      <option value="">Select Year</option>
                      <option value="FE (First Year)">FE (First Year)</option>
                      <option value="SE (Second Year)">SE (Second Year)</option>
                      <option value="TE (Third Year)">TE (Third Year)</option>
                      <option value="BE (Final Year)">BE (Final Year)</option>
                      <option value="PG">PG / Masters</option>
                      <option value="Faculty / Staff">Faculty / Staff</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Riding Info */}
              <div>
                <h3 className="text-xs font-mono text-moto-orange uppercase tracking-widest mb-3">Riding Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField icon={Bike} label="Motorcycle / Vehicle" name="motorcycle" type="text" value={form.motorcycle} onChange={handleChange} placeholder="e.g., Yamaha R15 V4, Royal Enfield" />
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Riding Experience</label>
                    <select
                      name="ridingExperience"
                      value={form.ridingExperience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-white/10 text-white text-sm focus:outline-none focus:border-moto-orange focus:ring-1 focus:ring-moto-orange/30"
                    >
                      <option value="">Select Experience Level</option>
                      <option value="Beginner (0-1 year)">Beginner (0-1 year)</option>
                      <option value="Novice (1-2 years)">Novice (1-2 years)</option>
                      <option value="Intermediate (2-4 years)">Intermediate (2-4 years)</option>
                      <option value="Experienced (4+ years)">Experienced (4+ years)</option>
                      <option value="Non-rider but interested">Non-rider but interested</option>
                    </select>
                  </div>
                  <FormField icon={Instagram} label="Instagram Handle" name="instagramHandle" type="text" value={form.instagramHandle} onChange={handleChange} placeholder="@your_username" />
                  <FormField icon={Phone} label="Emergency Contact" name="emergencyContact" type="text" value={form.emergencyContact} onChange={handleChange} placeholder="Name + Phone" />
                </div>
              </div>

              {/* Why Join */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Why do you want to join MIT-WPU Riders? *</label>
                <textarea
                  name="whyJoin"
                  value={form.whyJoin}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder="Tell us your riding story, passion, and why you want to be part of this brotherhood..."
                  className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-white/10 text-white text-sm resize-none focus:outline-none focus:border-moto-orange focus:ring-1 focus:ring-moto-orange/30 placeholder-gray-500"
                />
              </div>

              {/* ATGATT Pledge */}
              <div className="p-4 rounded-xl bg-moto-red/5 border border-moto-red/20">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="hasFullGear"
                    checked={form.hasFullGear}
                    onChange={handleChange}
                    className="mt-1 accent-moto-red w-4 h-4"
                  />
                  <span className="text-xs text-gray-300 leading-relaxed">
                    <span className="font-bold text-white">I acknowledge the ATGATT Policy:</span> I commit to wearing a DOT/ECE certified helmet, armored jacket, gloves, and ankle boots on every MIT-WPU Riders group rollout. I understand that violations result in immediate removal from the convoy.
                  </span>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading || !form.hasFullGear}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-moto-red to-moto-orange text-white font-display font-black text-sm uppercase tracking-wider shadow-xl shadow-moto-red/30 hover:shadow-moto-red/60 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting Application...
                  </>
                ) : (
                  <>
                    Submit Membership Application
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-gray-500">
                {!form.hasFullGear && 'Please accept the ATGATT safety pledge to submit your application.'}
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

interface FormFieldProps {
  icon: React.FC<{ className?: string }>;
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({ icon: Icon, label, name, type, value, onChange, placeholder, required }) => (
  <div>
    <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">{label}</label>
    <div className="relative">
      <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full pl-10 pr-4 py-3 rounded-xl bg-dark-900 border border-white/10 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-moto-orange focus:ring-1 focus:ring-moto-orange/30"
      />
    </div>
  </div>
);

export const JoinSection: React.FC<{ onOpenJoinModal: () => void }> = ({ onOpenJoinModal }) => {
  return (
    <section id="join" className="py-24 bg-dark-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 to-dark-950 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-moto-red to-transparent" />

      {/* Background Cinematic Image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img src="/assets/club/hero-convoy.jpg" alt="" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/80 via-dark-950/50 to-dark-950" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-850/90 border border-moto-red/30 text-xs font-mono text-moto-red tracking-widest uppercase mb-4">
          Membership Open
        </div>

        <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white mb-4">
          The Road Is <span className="racing-gradient-text">Waiting.</span>
        </h2>

        <p className="text-lg sm:text-xl text-gray-200 mb-3 font-medium">
          Are you ready to become part of a community that lives for the journey?
        </p>

        <p className="text-base text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you are an experienced veteran or simply passionate about motorcycles and riding culture,
          MIT-WPU Riders is a place where <span className="text-white font-semibold">riders become a family</span>.
        </p>

        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-10">
          {[
            { emoji: '🏆', text: 'National Recognition' },
            { emoji: '🛡️', text: 'Safety First' },
            { emoji: '🤝', text: 'Brotherhood' },
          ].map((item) => (
            <div key={item.text} className="glass-panel p-4 rounded-xl border border-white/10 text-center">
              <div className="text-2xl mb-1">{item.emoji}</div>
              <div className="text-xs font-semibold text-gray-300">{item.text}</div>
            </div>
          ))}
        </div>

        <button
          onClick={onOpenJoinModal}
          className="inline-flex items-center gap-3 px-12 py-5 rounded-2xl bg-gradient-to-r from-moto-red to-moto-orange text-white font-display font-black text-base uppercase tracking-wider shadow-2xl shadow-moto-red/40 hover:shadow-moto-red/70 hover:scale-105 transition-all"
        >
          <ChevronRight className="w-5 h-5" />
          Join MIT-WPU Riders
          <ChevronRight className="w-5 h-5" />
        </button>

        <p className="mt-5 text-xs text-gray-500">
          Your MIT-WPU university email address is required. Club membership is free for all enrolled students.
        </p>
      </div>
    </section>
  );
};
