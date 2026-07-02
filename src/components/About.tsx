import { motion } from 'motion/react';
import { User, MapPin, GraduationCap, Laptop, Calendar, Award, Shield, Zap } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface AboutProps {
  onOpenCV: () => void;
}

export default function About({ onOpenCV }: AboutProps) {
  const getIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case 'name':
        return <User size={16} className="text-white" />;
      case 'location':
        return <MapPin size={16} className="text-white" />;
      case 'school':
        return <GraduationCap size={16} className="text-white" />;
      case 'program':
        return <Laptop size={16} className="text-white" />;
      case 'experience':
        return <Calendar size={16} className="text-white" />;
      default:
        return <Award size={16} className="text-white" />;
    }
  };

  return (
    <section id="about" className="relative py-24 bg-[#050505] border-t border-white/5 overflow-hidden">
      {/* Visual lighting aura background element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[1px] bg-white/30" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">Discover</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white" id="about-section-title">
            About Me
          </h2>
        </div>

        {/* Grid Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Story Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between p-8 md:p-10 rounded-3xl bg-white/[0.01] border border-white/5 backdrop-blur-sm relative overflow-hidden"
            id="about-bio-card"
          >
            {/* Glossy linear overlay */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            <div className="space-y-6">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                <Laptop size={18} className="text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-semibold text-white tracking-wide">
                Building the Future through Code
              </h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed font-light">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Micro Stats inside Bio Card */}
            <div className="grid grid-cols-3 gap-4 pt-10 border-t border-white/5 mt-8">
              <div>
                <h4 className="text-2xl md:text-3xl font-display font-bold text-white">03+</h4>
                <p className="text-[10px] font-mono tracking-wider text-gray-500 uppercase mt-1">Years Coding</p>
              </div>
              <div>
                <h4 className="text-2xl md:text-3xl font-display font-bold text-white">15+</h4>
                <p className="text-[10px] font-mono tracking-wider text-gray-500 uppercase mt-1">Completed Systems</p>
              </div>
              <div>
                <h4 className="text-2xl md:text-3xl font-display font-bold text-white">05+</h4>
                <p className="text-[10px] font-mono tracking-wider text-gray-500 uppercase mt-1">Key Certifications</p>
              </div>
            </div>

            {/* View Full Detailed CV Button for laypersons */}
            <div className="pt-6 border-t border-white/5 mt-6 flex justify-start">
              <button
                onClick={onOpenCV}
                className="flex items-center gap-2 px-5 py-2.5 bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/10 text-white text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer"
              >
                <Award size={13} className="text-emerald-400" />
                <span>View & Print Detailed CV (PDF)</span>
              </button>
            </div>
          </motion.div>

          {/* Quick Info Grid Cards Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Metadata Bento Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 backdrop-blur-sm flex-1 relative overflow-hidden"
              id="about-metadata-card"
            >
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <h3 className="text-sm font-mono uppercase tracking-widest text-gray-400 mb-6">Profile Information</h3>
              
              <ul className="space-y-4" id="about-metadata-list">
                {PERSONAL_INFO.details.map((detail) => (
                  <li key={detail.label} className="flex items-start gap-4 pb-3 border-b border-white/5 last:border-0 last:pb-0">
                    <div className="mt-0.5 p-2 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0">
                      {getIcon(detail.label)}
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-gray-500">{detail.label}</p>
                      <p className="text-sm text-gray-200 font-medium mt-0.5">{detail.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Visual Mini Achievement Badge Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="p-6 rounded-3xl bg-white/[0.01] border border-white/5 backdrop-blur-sm relative overflow-hidden"
              id="about-badges-card"
            >
              <h3 className="text-sm font-mono uppercase tracking-widest text-gray-400 mb-4">Milestone Badges</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                  <Award size={16} className="text-white shrink-0" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-300">Certified Developer</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                  <Shield size={16} className="text-white shrink-0" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-300">Cybersecurity Specialist</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                  <Zap size={16} className="text-white shrink-0" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-300">Wavumbuzi Entrepreneur</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                  <GraduationCap size={16} className="text-white shrink-0" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-300">Software Graduate</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
