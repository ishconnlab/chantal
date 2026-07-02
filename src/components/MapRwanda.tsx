import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Globe2, Compass, CheckCircle } from 'lucide-react';

export default function MapRwanda() {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [activeInfo, setActiveInfo] = useState(true);

  return (
    <section id="map-rwanda" className="relative py-20 bg-[#050505] border-t border-white/5 overflow-hidden">
      {/* Visual lighting background elements */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Description Column */}
          <div className="lg:col-span-5 space-y-6 flex flex-col items-start text-left">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[1px] bg-white/30" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">Geography</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
              Located in Muhanga
            </h2>
            
            <p className="text-sm md:text-base text-gray-400 leading-relaxed font-light">
              My engineering base is located in **Muhanga District**, Southern Province, Rwanda. This is where I study, collaborate, and engineer systems at Kiyumba Technical Secondary School (Kiyumba TSS).
            </p>

            <div className="space-y-3 w-full pt-4">
              {[
                { label: "Coordinates", value: "2.0792° S, 29.7542° E" },
                { label: "District Base", value: "Muhanga District, Southern Province" },
                { label: "Key Centers", value: "Kiyumba TSS Academic Lab" }
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs">
                  <span className="font-mono text-gray-500 uppercase tracking-wider">{item.label}</span>
                  <span className="text-gray-200 font-semibold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Vector Map Column */}
          <div className="lg:col-span-7 flex justify-center items-center relative">
            
            {/* Outline box container */}
            <div className="relative w-full max-w-md p-6 rounded-3xl bg-white/[0.01] border border-white/5 backdrop-blur-sm shadow-[0_12px_40px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col justify-center items-center">
              
              <div className="absolute top-4 left-4 flex items-center gap-2 font-mono text-[9px] text-gray-500 uppercase tracking-widest font-bold">
                <Globe2 size={12} className="animate-spin-slow" />
                <span>Rwanda Vector Node Grid</span>
              </div>

              {/* Minimalist Vector Outline SVG representation of Rwanda */}
              <svg
                viewBox="0 0 500 350"
                className="w-full h-auto text-gray-600 stroke-white/10 select-none cursor-pointer mt-6"
                id="rwanda-svg-map"
              >
                {/* Background Grid Pattern for high tech look */}
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" stroke="none" />

                {/* Northern Province */}
                <path
                  d="M 120,40 Q 250,10 380,50 L 320,120 Q 220,110 160,115 Z"
                  fill={hoveredRegion === "Northern" ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.01)"}
                  onMouseEnter={() => setHoveredRegion("Northern")}
                  onMouseLeave={() => setHoveredRegion(null)}
                  className="transition-all duration-300 stroke-white/10 stroke-dasharray-[2,2]"
                />
                
                {/* Eastern Province */}
                <path
                  d="M 380,50 Q 480,120 470,280 L 350,290 Q 300,180 320,120 Z"
                  fill={hoveredRegion === "Eastern" ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.01)"}
                  onMouseEnter={() => setHoveredRegion("Eastern")}
                  onMouseLeave={() => setHoveredRegion(null)}
                  className="transition-all duration-300 stroke-white/10 stroke-dasharray-[2,2]"
                />

                {/* Western Province */}
                <path
                  d="M 120,40 L 160,115 Q 120,200 40,220 L 50,300 Q 150,290 150,240 L 150,160 Z"
                  fill={hoveredRegion === "Western" ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.01)"}
                  onMouseEnter={() => setHoveredRegion("Western")}
                  onMouseLeave={() => setHoveredRegion(null)}
                  className="transition-all duration-300 stroke-white/10 stroke-dasharray-[2,2]"
                />

                {/* Kigali City */}
                <path
                  d="M 230,140 Q 280,150 280,190 Q 230,200 210,180 Z"
                  fill={hoveredRegion === "Kigali" ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.01)"}
                  onMouseEnter={() => setHoveredRegion("Kigali")}
                  onMouseLeave={() => setHoveredRegion(null)}
                  className="transition-all duration-300 stroke-white/10 stroke-dasharray-[2,2]"
                />

                {/* Southern Province (Where Muhanga is!) */}
                <path
                  d="M 150,160 Q 210,180 210,180 Q 230,200 280,190 L 350,290 L 220,320 Q 150,290 150,240 Z"
                  fill={hoveredRegion === "Southern" || hoveredRegion === "Muhanga" ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.02)"}
                  onMouseEnter={() => setHoveredRegion("Southern")}
                  onMouseLeave={() => setHoveredRegion(null)}
                  className="transition-all duration-300 stroke-white/20 stroke-[1.5]"
                  id="southern-province-svg"
                />

                {/* Glow dot coordinate beacon highlighting Muhanga District */}
                <g 
                  className="cursor-pointer"
                  onClick={() => setActiveInfo(!activeInfo)}
                  onMouseEnter={() => setHoveredRegion("Muhanga")}
                  onMouseLeave={() => setHoveredRegion(null)}
                >
                  {/* Outer breathing pulse radar rings */}
                  <circle cx="210" cy="185" r="14" fill="rgba(255,255,255,0.04)" className="animate-ping" />
                  <circle cx="210" cy="185" r="8" fill="rgba(255,255,255,0.1)" />
                  {/* Core glowing dot */}
                  <circle cx="210" cy="185" r="4.5" fill="#ffffff" />
                </g>

                {/* Text Labels */}
                <text x="250" y="80" textAnchor="middle" fill="#555" fontSize="10" fontFamily="monospace">Northern</text>
                <text x="400" y="180" textAnchor="middle" fill="#555" fontSize="10" fontFamily="monospace">Eastern</text>
                <text x="100" y="150" textAnchor="middle" fill="#555" fontSize="10" fontFamily="monospace">Western</text>
                <text x="248" y="170" textAnchor="middle" fill="#666" fontSize="8" fontFamily="monospace">Kigali</text>
                <text x="270" y="260" textAnchor="middle" fill="#ffffff" fontSize="11" fontFamily="monospace" fontWeight="bold">Southern</text>
              </svg>

              {/* District Hover/Active Information Popover Card */}
              <AnimatePresence>
                {activeInfo && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.8)] z-20 flex flex-col gap-2"
                    id="map-popover-card"
                  >
                    <div className="flex justify-between items-center pb-2 border-b border-white/5">
                      <div className="flex items-center gap-2">
                        <MapPin size={12} className="text-white animate-pulse" />
                        <span className="font-display font-bold text-xs text-white">Muhanga District</span>
                      </div>
                      <span className="font-mono text-[9px] text-gray-500 font-bold uppercase tracking-widest">Selected Base</span>
                    </div>
                    
                    <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                      Coordinates: **2.0792° S, 29.7542° E**. Muhanga is Rwanda's technological secondary industrial hub. Proudly hosting Kiyumba TSS.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
