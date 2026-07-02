import { motion } from 'motion/react';
import { Quote, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data';

// Map of testimonials to their actual portrait images from /public/img/
const TESTIMONIAL_AVATARS: Record<string, string> = {
  "test-1": "/img/sandrin.png", // Sandrine, CEO Inzira Technologies
  "test-2": "/img/kevin.jpeg", // Kevin Ishimwe, CEO IshVexa
  "test-3": "/img/yvon.jpg", // Yvonne, Software Architect
  "test-5": "/img/claude.jpeg", // Claude, CEO IshConnect
};

export default function Testimonials() {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  // We duplicate the list to ensure seamless infinite looping marquee scroll
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" className="relative py-28 bg-black border-t border-white/10 overflow-hidden">
      {/* Visual luxury atmospheric gradient highlights */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-white/[0.003] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-white/[0.003] rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 text-left">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[1px] bg-white/30" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400">Endorsements</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white uppercase">
              Ecosystem Feedback
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 text-sm leading-relaxed text-left">
            What digital leaders, project sponsors, and software colleagues say about Chantal's system design capabilities and team cooperation.
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Marquee Track scrolling from Right to Left */}
      <div className="relative w-full overflow-hidden py-4 select-none">
        
        {/* Elegant horizontal vignette gradients on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />

        {/* Marquee Wrapper Container using Motion for linear smooth scroll */}
        <div className="flex w-max gap-8 px-4">
          <motion.div
            className="flex gap-8 shrink-0"
            animate={{ x: ["0%", "-33.3333%"] }}
            transition={{
              ease: "linear",
              duration: 35,
              repeat: Infinity,
            }}
            style={{ display: "flex" }}
            whileHover={{ style: { animationPlayState: "paused" } }} // Pauses marquee on hover for legibility
          >
            {marqueeItems.map((test, index) => {
              const avatarImage = TESTIMONIAL_AVATARS[test.id] || "";
              
              return (
                <div
                  key={`${test.id}-${index}`}
                  className="w-[350px] md:w-[420px] p-8 md:p-10 rounded-2xl bg-zinc-950/40 border border-white/5 hover:border-white/20 hover:bg-zinc-900/30 transition-all duration-500 relative flex flex-col justify-between shrink-0 group shadow-xl"
                >
                  {/* Glowing card highlight elements */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  
                  <div className="space-y-6 text-left">
                    <div className="flex items-center justify-between">
                      <Quote size={20} className="text-zinc-700 group-hover:text-white transition-colors duration-500 rotate-180" />
                      <div className="flex items-center gap-1 text-[8.5px] font-mono uppercase text-zinc-500 tracking-widest bg-zinc-900/50 px-2.5 py-1 border border-white/5 rounded-full">
                        <Sparkles size={8} className="text-zinc-400" />
                        Verified Partner
                      </div>
                    </div>

                    <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-light italic">
                      "{test.feedback}"
                    </p>
                  </div>

                  {/* Endorser Info Footer */}
                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Avatar container using either the uploaded profile/context image or initials */}
                      <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10 bg-zinc-900 flex items-center justify-center font-mono text-xs font-bold text-white shrink-0 group-hover:border-white/40 transition-all duration-300">
                        {avatarImage ? (
                          <img 
                            src={avatarImage} 
                            alt={test.name} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          />
                        ) : (
                          <span>{getInitials(test.name)}</span>
                        )}
                      </div>
                      <div>
                        <h4 className="text-xs md:text-sm font-bold text-white leading-tight">
                          {test.name}
                        </h4>
                        <p className="text-[10px] font-mono text-zinc-500 mt-0.5 uppercase tracking-wider">
                          {test.role}, <span className="text-zinc-400 font-semibold">{test.company}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

      </div>

      {/* Marquee Navigation Note */}
      <div className="container mx-auto px-6 max-w-7xl mt-6 flex justify-center">
        <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
          Hover over a testimonial to pause scrolling
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
        </p>
      </div>
    </section>
  );
}
