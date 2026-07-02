import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';
import { EDUCATION_TIMELINE, EXPERIENCE_TIMELINE } from '../data';

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-24 bg-[#050505] border-t border-white/5 overflow-hidden">
      {/* Decorative blurred backdrop glow */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-white/[0.01] rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[1px] bg-white/30" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">Chronology</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white" id="timeline-section-title">
            Education & Experience
          </h2>
          <p className="text-sm text-gray-400 font-light mt-2 max-w-md">
            Tracing my 3-year evolutionary journey as a software developer, engineer, and academic student.
          </p>
        </div>

        {/* Dual Column Layout (Desktop side-by-side, Mobile stacked) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Education Column */}
          <div className="space-y-8" id="education-timeline-column">
            <div className="flex items-center gap-3 pb-4 border-b border-white/5">
              <div className="p-2 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
                <GraduationCap size={20} className="text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-display font-bold text-white tracking-wide">
                Education
              </h3>
            </div>

            <div className="relative pl-6 border-l border-white/10 space-y-12">
              {EDUCATION_TIMELINE.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  key={item.id}
                  className="relative group"
                >
                  {/* Glowing timeline node dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-black border border-white/30 flex items-center justify-center group-hover:border-white transition-colors duration-300">
                    <div className="w-1.5 h-1.5 bg-white rounded-full group-hover:scale-125 transition-transform duration-300" />
                  </div>

                  {/* Glass Card */}
                  <div className="p-6 md:p-8 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 hover:bg-white/[0.02] backdrop-blur-sm transition-all duration-300 relative overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.01] rounded-bl-full pointer-events-none" />
                    
                    {/* Time & Location Tags */}
                    <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-mono text-gray-500">
                      <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-[10px] text-gray-300 font-semibold uppercase tracking-wider">
                        <Calendar size={10} />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1.5 text-gray-400">
                        <MapPin size={10} />
                        {item.location}
                      </span>
                    </div>

                    <h4 className="text-base md:text-lg font-display font-bold text-white group-hover:text-white transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs md:text-sm font-mono text-gray-400 font-medium mt-1">
                      {item.subtitle}
                    </p>

                    {/* Bullet Points */}
                    <ul className="mt-4 space-y-2 text-xs text-gray-400 font-light">
                      {item.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 bg-white rounded-full shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div className="space-y-8" id="experience-timeline-column">
            <div className="flex items-center gap-3 pb-4 border-b border-white/5">
              <div className="p-2 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
                <Briefcase size={20} className="text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-display font-bold text-white tracking-wide">
                Experience
              </h3>
            </div>

            <div className="relative pl-6 border-l border-white/10 space-y-12">
              {EXPERIENCE_TIMELINE.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  key={item.id}
                  className="relative group"
                >
                  {/* Glowing timeline node dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-black border border-white/30 flex items-center justify-center group-hover:border-white transition-colors duration-300">
                    <div className="w-1.5 h-1.5 bg-white rounded-full group-hover:scale-125 transition-transform duration-300" />
                  </div>

                  {/* Glass Card */}
                  <div className="p-6 md:p-8 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 hover:bg-white/[0.02] backdrop-blur-sm transition-all duration-300 relative overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.01] rounded-bl-full pointer-events-none" />

                    {/* Time & Location Tags */}
                    <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-mono text-gray-500">
                      <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-[10px] text-gray-300 font-semibold uppercase tracking-wider">
                        <Calendar size={10} />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1.5 text-gray-400">
                        <MapPin size={10} />
                        {item.location}
                      </span>
                    </div>

                    <h4 className="text-base md:text-lg font-display font-bold text-white group-hover:text-white transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs md:text-sm font-mono text-gray-400 font-medium mt-1">
                      {item.subtitle}
                    </p>

                    {/* Bullet Points */}
                    <ul className="mt-4 space-y-2 text-xs text-gray-400 font-light">
                      {item.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 bg-white rounded-full shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
