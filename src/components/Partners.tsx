import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Globe, Laptop, Award, Zap, Sparkles, Terminal, CheckCircle2, ArrowRight, RefreshCw, Layers } from 'lucide-react';

// Import images directly for Vite bundling
import blueTintDev from '../assets/images/blue_tint_dev_1783001955256.jpg';
import laptopDev from '../assets/images/laptop_dev_1783001972586.jpg';
import recordingDev from '../assets/images/recording_dev_1783001987348.jpg';
import chantalSitting from '../assets/images/chantal_sitting_1783002002688.jpg';
import inziraLogo from '../assets/images/inzira_logo_1783002017814.jpg';

interface Partner {
  id: string;
  url: string;
  title: string;
  role: string;
  category: string;
  image: string;
  color: string;
  glowColor: string;
  description: string;
  contribution: string;
  milestones: string[];
}

const PARTNERS: Partner[] = [
  {
    id: "part-1",
    url: "https://ishconnect.rw/",
    title: "IshConnect Group",
    role: "Full Stack Developer Intern",
    category: "Web Engineering & Infrastructure",
    image: blueTintDev,
    color: "from-blue-600 to-indigo-600",
    glowColor: "rgba(59, 130, 246, 0.15)",
    description: "IshConnect is Rwanda's premium gateway for technological incubation, connecting high-potential youth developers to real-world industrial projects.",
    contribution: "Coordinated database design matrices, implemented core REST APIs with Express/Node, and engineered responsive user-facing panels in React and Tailwind CSS.",
    milestones: [
      "Completed intensive 6-month developer incubation program",
      "Built and deployed 3+ active full-stack portals for local business clients",
      "Voted Lead Backend Coordinator in team project releases"
    ]
  },
  {
    id: "part-2",
    url: "https://wavumbuzi.africa/rwanda/",
    title: "Wavumbuzi Association",
    role: "Wavumbuzi Entrepreneurship Fellow",
    category: "Technological Startup Incubation",
    image: laptopDev,
    color: "from-amber-500 to-orange-600",
    glowColor: "rgba(245, 158, 11, 0.15)",
    description: "Wavumbuzi is an elite pan-African entrepreneurship initiative cultivating a new generation of tech-minded problem solvers across Rwanda.",
    contribution: "Participated in rigorous entrepreneurship cycles, applying software systems engineering paradigms to design, mock, and pitch digital products addressing local community needs.",
    milestones: [
      "Secured Technological Innovation Certificate - Cohort 6",
      "Pitched customized automated system to regional business mentors",
      "Collaborated with developers to align software architecture with business models"
    ]
  },
  {
    id: "part-3",
    url: "https://www.edtechsolutions.rw/",
    title: "EdTech Solution Center",
    role: "E-Learning Platforms Intern",
    category: "Interactive Education Software",
    image: recordingDev,
    color: "from-red-500 to-rose-600",
    glowColor: "rgba(239, 68, 68, 0.15)",
    description: "EdTech Solutions Rwanda is a pioneering hub specializing in modernizing educational paradigms through bespoke web portals, multimedia, and digital content.",
    contribution: "Developed front-end modules for administrative boards, integrated interactive e-learning tools, and optimized system performance for schools across Rwanda.",
    milestones: [
      "Refactored database queries to lower bandwidth consumption by 25%",
      "Engineered automated school dashboard tracking 500+ student profiles",
      "Coordinated with audio-visual team for virtual classroom media syncing"
    ]
  },
  {
    id: "part-4",
    url: "https://kiyumbatvet.vercel.app/",
    title: "Kiyumba TVET (Kiyumba TSS)",
    role: "Software Development Student Leader",
    category: "Academic Specialist & Mentor",
    image: chantalSitting,
    color: "from-emerald-500 to-teal-600",
    glowColor: "rgba(16, 185, 129, 0.15)",
    description: "Kiyumba Technical Secondary School is a premier center of excellence in software systems engineering, computer networking, and ICT.",
    contribution: "Served as a peer tutor in object-oriented programming, designed official school landing pages, and represented the institution in national tech competitions.",
    milestones: [
      "Maintained top ranking in Advanced Software Engineering assessments (Level 3-5)",
      "Coached 20+ junior peers in React, HTML, and Python fundamentals",
      "Developed custom digital scheduler utility for academic staff"
    ]
  },
  {
    id: "part-5",
    url: "https://inzira.io",
    title: "Inzira Technologies",
    role: "Technical UX/UI Collaborator",
    category: "Digital Transformation & Branding",
    image: inziraLogo,
    color: "from-cyan-500 to-emerald-600",
    glowColor: "rgba(6, 182, 212, 0.15)",
    description: "Inzira Technologies focuses on modernizing business workflows through digital automation, high-impact user experiences, and technological empowerment.",
    contribution: "Refined user interface interactions, designed clean layout systems, and collaborated with senior engineers to implement aesthetic animations.",
    milestones: [
      "Engineered sleek, responsive branding guidelines and asset systems",
      "Collaborated on 2 complex commercial digital transformation layouts",
      "Received stellar technical endorsement from CEO Sandrine"
    ]
  }
];

export default function Partners() {
  const [activeTab, setActiveTab] = useState<string>("part-1");
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const activePartner = PARTNERS.find(p => p.id === activeTab) || PARTNERS[0];

  const triggerRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 800);
  };

  return (
    <section id="partners" className="relative py-28 bg-black border-t border-white/10 overflow-hidden">
      {/* Dynamic Cyber Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-white/[0.003] rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 text-left">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[1px] bg-white/30" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400">Collaborations</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white uppercase">
              Partners & Ecosystem
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 text-sm leading-relaxed text-left">
            Proudly affiliated with Rwanda's premier technology incubators, educational centers of excellence, and entrepreneurship initiatives.
          </p>
        </div>

        {/* Live Ecosystem Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Interactive Nodes */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-2xl mb-2 text-left">
              <div className="flex items-center gap-2 mb-1">
                <Terminal size={14} className="text-zinc-400" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Link Terminal v1.0.4</span>
              </div>
              <p className="text-xs text-zinc-500">Select a collaborative node to inspect project integrations, live URLs, and Chantal's contributions.</p>
            </div>

            <div className="space-y-3">
              {PARTNERS.map((partner) => {
                const isActive = partner.id === activeTab;
                return (
                  <motion.button
                    key={partner.id}
                    onClick={() => {
                      setActiveTab(partner.id);
                      triggerRefresh();
                    }}
                    className={`w-full text-left p-4 rounded-2xl border transition-all relative overflow-hidden flex items-center justify-between group cursor-pointer ${
                      isActive 
                        ? 'bg-zinc-900 border-white/20 shadow-lg' 
                        : 'bg-zinc-950/40 border-white/5 hover:border-white/10 hover:bg-zinc-900/30'
                    }`}
                    whileHover={{ x: isActive ? 0 : 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Glowing Accent Border left */}
                    {isActive && (
                      <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${partner.color}`} />
                    )}

                    <div className="flex items-center gap-4">
                      {/* Logo / Thumbnail frame */}
                      <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10 relative shrink-0">
                        <img 
                          src={partner.image} 
                          alt={partner.title} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all" />
                      </div>

                      <div className="space-y-0.5">
                        <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">{partner.category}</p>
                        <h4 className="text-sm font-semibold text-white group-hover:text-white transition-colors">
                          {partner.title}
                        </h4>
                        <p className="text-[10.5px] font-mono text-zinc-400 font-light">
                          {partner.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <div className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white animate-pulse' : 'bg-zinc-700'}`} />
                      <ArrowRight size={12} className={`text-zinc-500 group-hover:text-white transition-colors ${isActive ? 'translate-x-0' : '-translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Immersive Web Browser Simulation */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative"
            >
              {/* Browser Header Bar */}
              <div className="bg-zinc-900 border-b border-white/10 px-4 py-3 flex items-center justify-between gap-4">
                {/* Window Actions */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                </div>

                {/* URL Bar */}
                <div className="flex-1 max-w-lg bg-black border border-white/5 rounded-lg px-3 py-1 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <Globe size={11} className="text-zinc-500 shrink-0" />
                    <span className="text-[10.5px] font-mono text-zinc-400 truncate select-all select-none">
                      {activePartner.url}
                    </span>
                  </div>
                  <button 
                    onClick={triggerRefresh}
                    className="p-1 rounded hover:bg-zinc-900 text-zinc-500 hover:text-white transition-colors cursor-pointer"
                    title="Refresh connection"
                  >
                    <RefreshCw size={10} className={isRefreshing ? "animate-spin" : ""} />
                  </button>
                </div>

                {/* Status Indicator */}
                <div className="flex items-center gap-2 shrink-0">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] font-mono uppercase tracking-wider text-emerald-400">Connected</span>
                </div>
              </div>

              {/* Browser Content Area */}
              <div className="p-6 md:p-8 min-h-[460px] flex flex-col justify-between relative bg-black/90">
                {/* Futuristic background circuitry wire overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePartner.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6 text-left relative z-10 flex-1 flex flex-col justify-between"
                  >
                    <div>
                      {/* Category Pill and Title */}
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="px-2.5 py-0.5 bg-zinc-900 border border-white/10 text-[9px] font-mono uppercase tracking-wider text-zinc-300">
                          {activePartner.category}
                        </span>
                        <span className="flex items-center gap-1 text-[9px] font-mono uppercase tracking-wider text-zinc-500">
                          <Layers size={9} />
                          Active Integration
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-display font-extrabold text-white tracking-wide">
                        {activePartner.title}
                      </h3>

                      <p className="text-[13px] text-zinc-400 leading-relaxed font-light mt-2 max-w-xl">
                        {activePartner.description}
                      </p>

                      {/* Collaborative Role & Contributions */}
                      <div className="mt-6 bg-zinc-900/30 border border-white/5 rounded-2xl p-4 space-y-3">
                        <div className="flex items-center gap-2">
                          <Laptop size={13} className="text-white" />
                          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-300 font-semibold">Chantal's Integration Contribution</span>
                        </div>
                        <p className="text-[12.5px] text-zinc-300 leading-relaxed font-light">
                          {activePartner.contribution}
                        </p>
                      </div>

                      {/* Key Milestones */}
                      <div className="mt-6 space-y-2.5">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block">Verified Milestones</span>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
                          {activePartner.milestones.map((m, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-400 bg-zinc-950 border border-white/5 p-2 rounded-xl">
                              <CheckCircle2 size={13} className="text-white shrink-0 mt-0.5" />
                              <span className="font-light">{m}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Section */}
                    <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
                      <div className="flex items-center gap-3">
                        {/* Circle Thumbnail */}
                        <div className="w-9 h-9 rounded-full overflow-hidden border border-white/20 shrink-0">
                          <img 
                            src={activePartner.image} 
                            alt={activePartner.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-[9px] font-mono uppercase tracking-wider text-zinc-500">Portfolio Anchor</p>
                          <p className="text-xs font-semibold text-white">{activePartner.role}</p>
                        </div>
                      </div>

                      <a
                        href={activePartner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-white text-black font-semibold text-[11px] uppercase tracking-widest hover:bg-zinc-200 transition-colors rounded-none flex items-center justify-center gap-2 shrink-0 group/btn"
                      >
                        Visit Website
                        <ExternalLink size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
