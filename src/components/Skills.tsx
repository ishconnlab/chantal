import { motion } from 'motion/react';
import { Code2, Terminal, Layers, Database, Sparkles, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data';

export default function Skills() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 size={18} className="text-white" />;
      case 1:
        return <Layers size={18} className="text-white" />;
      case 2:
        return <Database size={18} className="text-white" />;
      default:
        return <Sparkles size={18} className="text-white" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 bg-[#050505] border-t border-white/5 overflow-hidden">
      {/* Background radial glowing light element */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[1px] bg-white/30" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">Expertise</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white" id="skills-section-title">
            Technical Skills
          </h2>
          <p className="text-sm text-gray-400 font-light mt-2 max-w-md">
            A comprehensive overview of my tech stack, frameworks, database schemas, and modern engineering tools.
          </p>
        </div>

        {/* Skill Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: catIdx * 0.1, duration: 0.6 }}
              key={category.title}
              className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 backdrop-blur-sm relative overflow-hidden flex flex-col justify-between shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            >
              {/* Glossy top highlight border */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 mb-6 border-b border-white/5">
                  <div className="p-2 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
                    {getCategoryIcon(catIdx)}
                  </div>
                  <h3 className="text-base md:text-lg font-display font-bold text-white tracking-wide">
                    {category.title}
                  </h3>
                </div>

                {/* Progress Bars */}
                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-mono text-gray-300 font-medium tracking-wide flex items-center gap-1.5">
                          <CheckCircle2 size={11} className="text-gray-500" />
                          {skill.name}
                        </span>
                        <span className="font-mono text-gray-400">{skill.level}%</span>
                      </div>
                      
                      {/* Bar Container */}
                      <div className="h-1.5 w-full bg-neutral-900 rounded-full overflow-hidden border border-white/5 relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-neutral-300 via-white to-neutral-400 rounded-full relative"
                        >
                          {/* Inner shimmer light */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative category badge in background */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/[0.01] rounded-full pointer-events-none filter blur-xl" />
            </motion.div>
          ))}
        </div>

        {/* Extra Premium feature: Interactive Certifications block inside Skills section */}
        <div className="mt-16 pt-16 border-t border-white/5">
          <div className="flex flex-col items-start mb-10 space-y-2">
            <h3 className="text-lg md:text-xl font-display font-bold text-white tracking-wide" id="certifications-heading">
              Certifications & Achievements
            </h3>
            <p className="text-xs text-gray-400 font-light font-mono">Verified honors and technical specializations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Certified Software Developer",
                issuer: "Kiyumba TSS Board",
                badge: "CSD"
              },
              {
                title: "Wavumbuzi Entrepreneurship Program",
                issuer: "Cohort 6 - Startup Builder",
                badge: "WEP"
              },
              {
                title: "Ingazi Program Participant",
                issuer: "Career Readiness Initiative",
                badge: "ING"
              },
              {
                title: "IshConnect Internship Graduate",
                issuer: "Software Industry Experience",
                badge: "ICIP"
              },
              {
                title: "DevQueens Cyber & Networking",
                issuer: "Trainee Specialization",
                badge: "DQN"
              }
            ].map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                whileHover={{ y: -5, borderColor: 'rgba(255, 255, 255, 0.15)' }}
                className="p-5 rounded-2xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.02] flex items-start gap-4 transition-all duration-300 relative group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 group-hover:border-white/20 flex items-center justify-center shrink-0 font-mono text-xs font-bold text-white">
                  {cert.badge}
                </div>
                <div>
                  <h4 className="text-xs md:text-sm font-display font-bold text-white tracking-wide group-hover:text-white transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-[10px] font-mono text-gray-500 mt-1 uppercase tracking-wider">{cert.issuer}</p>
                </div>
                <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-white/20 rounded-full group-hover:bg-white transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
