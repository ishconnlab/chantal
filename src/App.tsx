import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Component Imports
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import MapRwanda from './components/MapRwanda';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CVModal from './components/CVModal';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isDesktop, setIsDesktop] = useState(false);
  const [isCVOpen, setIsCVOpen] = useState(false);

  // Monitor mouse movements for glowing halos and custom cursors
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const checkDevice = () => {
      setIsDesktop(window.innerWidth > 1024 && ('ontouchstart' in window === false));
    };

    checkDevice();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', checkDevice);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  return (
    <>
      {/* Premium Preloader Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="min-h-screen bg-luxury-black text-gray-200 relative overflow-x-hidden selection:bg-white selection:text-black"
          id="app-main-layout"
        >
          {/* Custom Cursor Dot & Ambient Glow Halo (Desktop only) */}
          {isDesktop && (
            <>
              {/* Central pinpoint cursor node */}
              <motion.div
                className="pointer-events-none fixed w-2.5 h-2.5 bg-white rounded-full z-[9999] mix-blend-difference"
                animate={{
                  x: mousePos.x - 5,
                  y: mousePos.y - 5
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 28 }}
              />
              {/* Hovering outer halo ring */}
              <motion.div
                className="pointer-events-none fixed w-8 h-8 border border-white/20 rounded-full z-[9998] mix-blend-difference"
                animate={{
                  x: mousePos.x - 16,
                  y: mousePos.y - 16
                }}
                transition={{ type: 'spring', stiffness: 250, damping: 22 }}
              />
              {/* Massive subtle background ambient glow */}
              <div
                className="pointer-events-none fixed w-[500px] h-[500px] rounded-full bg-white/[0.008] blur-[120px] z-0 -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${mousePos.x}px`,
                  top: `${mousePos.y}px`
                }}
              />
            </>
          )}

          {/* Sticky Navigation Header */}
          <Header />

          {/* Main Sections Body */}
          <main className="relative z-10">
            {/* Hero Banner Section */}
            <Hero onOpenCV={() => setIsCVOpen(true)} />

            {/* About Profile Section */}
            <About onOpenCV={() => setIsCVOpen(true)} />

            {/* Symmetrical Dual Timeline Section */}
            <Timeline />

            {/* Technical Skills & Honor Certifications */}
            <Skills />

            {/* Interactive Showcase Portfolio Grid */}
            <Projects />

            {/* Partners & Ecosystem Integration */}
            <Partners />

            {/* Staggered Peer/Leader Endorsements */}
            <Testimonials />

            {/* Interactive Vector GIS Map of Rwanda */}
            <MapRwanda />

            {/* Custom Interactive Feedback Contact Frame */}
            <Contact />
          </main>

          {/* Symmetrical Credit Sign-off Footer */}
          <Footer />

          {/* Interactive Detailed CV Modal */}
          <AnimatePresence>
            {isCVOpen && (
              <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
}
