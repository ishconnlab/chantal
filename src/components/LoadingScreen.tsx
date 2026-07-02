import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
  key?: string;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalDuration = 1800; // 1.8 seconds loading experience
    const intervalTime = 30;
    const step = 100 / (totalDuration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 300); // short pause at 100%
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -50, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        className="fixed inset-0 bg-[#050505] z-[9999] flex flex-col items-center justify-center select-none"
        id="app-loader-screen"
      >
        <div className="flex flex-col items-center space-y-6 relative z-10">
          
          {/* Main Logo Text Fade */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-display font-extrabold tracking-[0.3em] text-white text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-400 to-neutral-600"
          >
            CHANTAL
          </motion.h1>

          <div className="flex flex-col items-center space-y-2">
            {/* Loading Bar */}
            <div className="w-48 h-[1px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-white rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Percentage Display */}
            <p className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
              System Booting ... {Math.floor(progress).toString().padStart(3, '0')}%
            </p>
          </div>

        </div>

        {/* Bottom copyright watermark */}
        <div className="absolute bottom-10 text-[9px] font-mono text-neutral-600 tracking-widest uppercase">
          Kiyumba TSS Systems Lab Node
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
