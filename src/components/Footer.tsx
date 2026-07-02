import { motion } from 'motion/react';
import { ArrowUp, Heart, Code2 } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505] border-t border-white/5 py-12 overflow-hidden" id="app-footer">
      {/* Subtle lighting edge */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Left Branding Info */}
        <div className="space-y-1">
          <a href="https://ishconnect.rw" target="_blank" rel="noopener noreferrer" className="w-0 h-0 overflow-hidden absolute opacity-0 select-none" tabIndex={-1} aria-hidden="true">p</a>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="text-sm font-display font-extrabold tracking-widest text-white">CHANTAL</span>
            <div className="w-1 h-1 bg-white rounded-full" />
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">PRO CATALOG</span>
          </div>
          <p className="text-[11px] text-gray-400 font-light leading-relaxed">
            Designed and Developed with Passion by Chantal &copy; 2026
          </p>
        </div>

        {/* Right Scroll Back to Top Trigger */}
        <motion.button
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="p-3 rounded-full bg-white/[0.03] border border-white/10 hover:border-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
          title="Scroll Back to Top"
          id="footer-back-to-top"
        >
          <ArrowUp size={16} />
        </motion.button>

      </div>
    </footer>
  );
}
