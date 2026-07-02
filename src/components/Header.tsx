import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Code, Terminal as TerminalIcon } from 'lucide-react';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Timeline', id: 'timeline' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Partners', id: 'partners' },
  { label: 'Showroom', id: 'interactive-showroom' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Contact', id: 'contact' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Is scrolled
      setIsScrolled(window.scrollY > 20);

      // Scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Active section detection
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-white z-[100] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
        id="scroll-progress-indicator"
      />

      <header
        className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-500 ${
          isScrolled
            ? 'bg-black/90 border-white/10 backdrop-blur-md py-3'
            : 'bg-black/40 border-white/5 backdrop-blur-sm py-5'
        }`}
        id="app-header"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          {/* Logo / Branding */}
          <motion.button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-3 text-white font-display cursor-pointer"
            whileHover={{ scale: 1.02 }}
            id="brand-logo"
          >
            <div className="w-9 h-9 bg-white flex items-center justify-center rounded-sm text-black font-black text-lg">
              C
            </div>
            <span className="tracking-[0.3em] font-light text-sm uppercase text-white">
              Chantal<span className="text-zinc-500">.dev</span>
            </span>
          </motion.button>
 
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" id="desktop-nav">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative py-1 text-[11px] uppercase tracking-widest font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'text-white border-b border-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
 
          {/* Right Action Button (Interactive quick-jump) */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05, bg: '#ffffff', color: '#000000' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo('interactive-showroom')}
              className="px-6 py-2 border border-white/20 text-[11px] uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors rounded-none font-medium cursor-pointer"
              id="showroom-cta"
            >
              LAUNCH SHOWROOM
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-1 hover:bg-white/10 rounded-full cursor-pointer transition-colors"
            id="mobile-menu-toggle"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-black/95 z-40 flex flex-col justify-center items-center lg:hidden"
            id="mobile-drawer"
          >
            <div className="flex flex-col items-center gap-6 p-6">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`text-lg font-display tracking-widest uppercase transition-colors cursor-pointer ${
                      isActive ? 'text-white font-bold text-xl' : 'text-gray-500 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                );
              })}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                onClick={() => scrollTo('interactive-showroom')}
                className="mt-4 px-8 py-3 border border-white/20 text-xs uppercase tracking-widest text-white bg-transparent hover:bg-white hover:text-black transition-colors rounded-none font-medium cursor-pointer"
              >
                LAUNCH SHOWROOM
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
