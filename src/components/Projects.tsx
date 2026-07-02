import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Check, Monitor, LayoutList, Smartphone, Sparkles, FolderCode } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getSystemIcon = (tags: string[]) => {
    if (tags.includes('Flutter') || tags.includes('React Native')) {
      return <Smartphone size={20} className="text-white" />;
    }
    return <Monitor size={20} className="text-white" />;
  };

  return (
    <section id="projects" className="relative py-24 bg-[#050505] border-t border-white/5 overflow-hidden">
      {/* Visual glowing aura */}
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-white/[0.01] rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[1px] bg-white/30" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">Works</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white" id="projects-section-title">
            Featured Systems
          </h2>
          <p className="text-sm text-gray-400 font-light mt-2 max-w-md">
            Click on any system card to view detailed architectural specifications, mock flows, and code details.
          </p>
        </div>

        {/* Project Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects-grid">
          {PROJECTS.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group p-6 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-white/10 hover:bg-white/[0.02] backdrop-blur-sm cursor-pointer transition-all duration-300 flex flex-col justify-between relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] h-96"
            >
              {/* Glossy card divider highlight */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              
              <div>
                {/* Card Icon & Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 group-hover:border-white/20 flex items-center justify-center shrink-0 transition-all duration-300">
                    {getSystemIcon(project.tags)}
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-[9px] font-mono tracking-widest text-gray-400 uppercase">
                    System #{index + 1}
                  </div>
                </div>

                {/* Card Info */}
                <h3 className="text-lg md:text-xl font-display font-bold text-white tracking-wide group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-gray-500 mt-0.5 uppercase tracking-wider">{project.subtitle}</p>
                <p className="text-xs text-gray-400 leading-relaxed font-light mt-3 line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Tags & Action row */}
              <div className="mt-6 pt-4 border-t border-white/5 flex flex-col gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-white/[0.02] border border-white/5 text-[9px] font-mono tracking-wide text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-0.5 rounded bg-white/[0.02] border border-white/5 text-[9px] font-mono tracking-wide text-gray-400">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-gray-400 font-semibold uppercase tracking-wider group-hover:text-white transition-colors">
                  <span>Explore Architecture</span>
                  <ExternalLink size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Modal Overlay Drawer */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-hidden" id="project-modal-container">
              {/* Back drop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/90 backdrop-blur-md"
              />

              {/* Drawer Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="relative w-full max-w-4xl max-h-[90vh] bg-luxury-card border border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-y-auto overflow-x-hidden z-10 flex flex-col justify-between"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                  id="project-modal-close"
                >
                  <span className="text-xs font-mono tracking-widest mr-1">CLOSE</span>
                  [ESC]
                </button>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white shrink-0">
                      {getSystemIcon(selectedProject.tags)}
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-display font-extrabold text-white leading-none">
                        {selectedProject.title}
                      </h3>
                      <p className="text-xs md:text-sm font-mono text-gray-400 mt-1 uppercase tracking-widest font-bold">
                        {selectedProject.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Split info column */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8">
                    
                    {/* Left Column: Description & System Flowchart */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="space-y-2">
                        <p className="text-[10px] font-mono uppercase tracking-widest text-gray-500 font-bold">Overview</p>
                        <p className="text-sm md:text-base text-gray-300 leading-relaxed font-light">
                          {selectedProject.description}
                        </p>
                      </div>

                      {/* Schematic Flowchart mapping mock logic */}
                      <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
                        <p className="text-[10px] font-mono uppercase tracking-widest text-gray-500 font-bold flex items-center gap-1.5">
                          <FolderCode size={11} className="text-white animate-pulse" />
                          System Logical Schematic Architecture
                        </p>
                        
                        <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono text-gray-400">
                          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col justify-center items-center gap-1">
                            <span className="text-white text-[11px] font-bold">Client UI</span>
                            <span>React/Flutter Frame</span>
                          </div>
                          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col justify-center items-center gap-1 relative">
                            {/* Directional arrow dots */}
                            <div className="absolute top-1/2 -left-2 -translate-y-1/2 text-white/20">➔</div>
                            <span className="text-white text-[11px] font-bold">Router API</span>
                            <span>Node / Laravel</span>
                            <div className="absolute top-1/2 -right-2 -translate-y-1/2 text-white/20">➔</div>
                          </div>
                          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col justify-center items-center gap-1">
                            <span className="text-white text-[11px] font-bold">Database</span>
                            <span>MySQL / NoSQL</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Dynamic Features & Tech Stack */}
                    <div className="lg:col-span-5 space-y-6">
                      <div className="space-y-3">
                        <p className="text-[10px] font-mono uppercase tracking-widest text-gray-500 font-bold">Core Features</p>
                        <ul className="space-y-2.5">
                          {selectedProject.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                              <div className="p-1 rounded bg-white/5 flex items-center justify-center text-white shrink-0 mt-0.5">
                                <Check size={11} />
                              </div>
                              <span className="text-xs text-gray-300 leading-relaxed font-light">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <p className="text-[10px] font-mono uppercase tracking-widest text-gray-500 font-bold">Integrated Stack</p>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[10px] font-mono tracking-wider text-white"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Footer Links */}
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white text-black hover:bg-neutral-100 px-4 py-2 rounded-full text-[11px] font-mono tracking-widest uppercase font-bold cursor-pointer transition-colors"
                    >
                      <Github size={12} />
                      CODE REPO
                    </a>
                    <button
                      onClick={() => alert(`Mock Launching Dev Environment for ${selectedProject.title}...`)}
                      className="flex items-center gap-2 bg-transparent text-white border border-white/20 hover:bg-white/5 px-4 py-2 rounded-full text-[11px] font-mono tracking-widest uppercase font-bold cursor-pointer transition-colors"
                    >
                      <Sparkles size={12} />
                      LIVE MOCK
                    </button>
                  </div>

                  <span className="hidden sm:inline text-[10px] font-mono text-gray-500">
                    ID: {selectedProject.id.toUpperCase()}
                  </span>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
