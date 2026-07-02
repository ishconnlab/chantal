import { useState, useEffect, useRef, MouseEvent } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { ArrowDown, Download, Github, Linkedin, Twitter } from 'lucide-react';

const typewriterWords = [
  "Software Developer",
  "Full Stack Developer",
  "Mobile App Developer",
  "Tech Enthusiast",
  "Future AI Engineer"
];

interface HeroProps {
  onOpenCV: () => void;
}

export default function Hero({ onOpenCV }: HeroProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Mouse hover glow card effect variables
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const mouseX = event.clientX - rect.left - rect.width / 2;
    const mouseY = event.clientY - rect.top - rect.height / 2;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  // Typewriter loop
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullWord = typewriterWords[wordIndex];
    
    const tick = () => {
      if (!isDeleting) {
        setCurrentText((prev) => fullWord.substring(0, prev.length + 1));
        if (currentText === fullWord) {
          timer = setTimeout(() => setIsDeleting(true), 1500);
        } else {
          timer = setTimeout(tick, 100);
        }
      } else {
        setCurrentText((prev) => fullWord.substring(0, prev.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % typewriterWords.length);
          timer = setTimeout(tick, 200);
        } else {
          timer = setTimeout(tick, 50);
        }
      }
    };

    timer = setTimeout(tick, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex]);

  // Canvas particle backdrop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 1.5 + 0.5;
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.25 + 0.05})`;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
      }
    }

    const particles: Particle[] = Array.from({ length: 60 }, () => new Particle());

    const animate = () => {
      ctx.fillStyle = 'rgba(5, 5, 5, 0.2)'; // semi-clear background for subtle trail
      ctx.fillRect(0, 0, width, height);

      // Draw lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - dist / 150) * 0.04})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    // Generate a premium styled CV mock file in TXT format
    const cvText = `
========================================
CHANTAL - SOFTWARE & MOBILE DEVELOPER
========================================
Location: Muhanga District, Rwanda
Email: mutuyimanachantal16@gmail.com
Phone: +250793436871
GitHub: https://github.com/chantal-dev-rw

----------------------------------------
SUMMARY
----------------------------------------
Dedicated Software Development student from Rwanda with 3 years of 
experience building responsive web suites, mobile applications, and 
interactive systems. Highly passionate about learning new paradigms 
and aspiring to specialize in AI & Machine Learning.

----------------------------------------
TECHNICAL SKILLS
----------------------------------------
- Languages: JavaScript (ES6+), Python, PHP, HTML5, CSS3
- Frontend: React/Vite, Vue.js, Flutter, Tailwind CSS
- Backend: Node.js (Express), Laravel
- Databases: MySQL, NoSQL Databases
- Competencies: Mobile App Development, Git/GitHub, Networking, DevOps

----------------------------------------
KEY PROJECTS
----------------------------------------
1. EPMS (Enterprise Project Management System)
   Tech: React, Node.js, MySQL, Tailwind CSS
2. Stock Management System
   Tech: PHP, Laravel, MySQL
3. Car Parking Management System
   Tech: Vue.js, Python, Flask
4. Foodie Delivery App
   Tech: Flutter, Dart, Firebase

----------------------------------------
EDUCATION
----------------------------------------
- Kiyumba Technical Secondary School (Kiyumba TSS)
   Program: Software Development (Level 3, Level 4, Level 5)
   Dates: 2021 - 2026

========================================
Designed with Passion by Chantal @ 2026
========================================
`;
    const blob = new Blob([cvText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Chantal_Developer_CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-black"
    >
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Decorative luxury blur elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-zinc-900 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-800 rounded-full blur-[120px] opacity-30 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 lg:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 border border-white/10 bg-black min-h-[calc(100vh-120px)] mt-4 gap-0">
        
        {/* Left Rail: Socials */}
        <div className="hidden lg:flex lg:col-span-1 flex-col justify-between items-center py-10 border-r border-white/10">
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-white/30"></div>
          <span className="[writing-mode:vertical-rl] rotate-180 text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-mono">Follow — Socials</span>
          <div className="flex flex-col gap-4 text-zinc-400">
            <a 
              href="https://github.com/chantal-dev-rw" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 border border-zinc-800 hover:border-white text-zinc-400 hover:text-white transition-colors"
            >
              <Github size={14} />
            </a>
            <a 
              href="https://linkedin.com/in/chantal-dev-rw" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 border border-zinc-800 hover:border-white text-zinc-400 hover:text-white transition-colors"
            >
              <Linkedin size={14} />
            </a>
            <a 
              href="https://twitter.com/chantal_dev" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 border border-zinc-800 hover:border-white text-zinc-400 hover:text-white transition-colors"
            >
              <Twitter size={14} />
            </a>
          </div>
        </div>

        {/* Center: Content */}
        <div className="col-span-12 lg:col-span-7 p-8 lg:p-16 flex flex-col justify-center text-left border-b lg:border-b-0 lg:border-r border-white/10">
          <div className="mb-4 px-3 py-1 bg-zinc-900 border border-zinc-800 inline-block w-fit text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-mono">
            Software Developer & AI Aspirant
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter mb-4 text-white uppercase font-display select-none">
            CHAN<span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>TAL.</span>
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-white"></div>
            <div className="text-sm md:text-base font-light text-zinc-300 uppercase tracking-widest font-mono flex items-center">
              <span>{currentText}</span>
              <span className="inline-block w-[2px] h-[14px] bg-white ml-1 animate-[ping_1s_infinite]" />
            </div>
          </div>

          <p className="max-w-md text-zinc-400 text-sm leading-relaxed mb-10">
            Crafting world-class digital experiences from Rwanda. 3+ years of expertise in building innovative software solutions that blend technical precision with minimalist luxury aesthetics.
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors rounded-none cursor-pointer"
            >
              View Projects
            </button>
            <button 
              onClick={onOpenCV}
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold text-xs uppercase tracking-widest hover:bg-zinc-900 transition-colors rounded-none cursor-pointer flex items-center justify-center gap-2"
            >
              <Download size={13} />
              <span>Download CV / Resume</span>
            </button>
          </div>
        </div>

        {/* Right: Profile Card & Quick Stats */}
        <div className="col-span-12 lg:col-span-4 flex flex-col bg-black">
          <div className="flex-1 p-8 lg:p-10 flex items-center justify-center border-b border-white/10">
            <div className="relative group">
              <div className="absolute -inset-4 bg-white/5 blur-xl group-hover:bg-white/10 transition-all rounded-none"></div>
              <div className="relative w-64 h-80 bg-zinc-900 border border-white/10 p-2 overflow-hidden rounded-none">
                <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-700 overflow-hidden relative">
                  <img
                    src="/img/profile_chantal.jpg"
                    alt="Chantal Mutuyimana - Software Developer Portrait"
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-4 left-4 text-left pointer-events-none">
                    <p className="text-[10px] text-white/40 uppercase tracking-widest">Based In</p>
                    <p className="text-sm font-medium text-white">Muhanga, Rwanda</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 border border-white/10 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm rounded-none">
                 <span className="text-xs font-bold text-white">3+</span>
                 <span className="text-[8px] uppercase text-zinc-500 font-mono">Years XP</span>
              </div>
            </div>
          </div>
          
          {/* Stats Footer */}
          <div className="h-44 grid grid-cols-2 bg-black">
            <div className="border-r border-white/10 p-6 flex flex-col justify-between text-left">
              <span className="text-[10px] uppercase text-zinc-500 tracking-widest font-mono font-medium">Projects</span>
              <span className="text-3xl font-light text-white font-display">14+</span>
            </div>
            <div className="p-6 flex flex-col justify-between text-left">
              <span className="text-[10px] uppercase text-zinc-500 tracking-widest font-mono font-medium">Tech Stack</span>
              <div className="flex flex-wrap gap-1.5">
                 {["RT", "FL", "PY", "ND", "LV"].map((acronym) => (
                    <div 
                      key={acronym} 
                      className="w-6 h-6 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[8px] font-mono text-zinc-400 hover:border-white hover:text-white transition-colors"
                      title={acronym}
                    >
                      {acronym}
                    </div>
                 ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Floating Scroll Indicator arrow */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer z-20" onClick={() => scrollToSection('about')}>
        <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown size={12} className="text-gray-400" />
        </motion.div>
      </div>
    </section>
  );
}
