import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, Facebook, Twitter, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    
    // Construct email content for direct delivery
    const recipient = PERSONAL_INFO.contacts.email || "mutuyimanachantal16@gmail.com";
    const mailSubject = subject ? `[Portfolio Contact] ${subject}` : `[Portfolio Contact] Message from ${name}`;
    const mailBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    // Create direct mailto link
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
    
    // Execute direct mailto transmission to open user email composer
    setTimeout(() => {
      window.location.href = mailtoUrl;
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      
      // Auto clear success popup after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 800);
  };

  const socialLinks = [
    { name: 'GitHub', icon: <Github size={16} />, url: PERSONAL_INFO.contacts.github },
    { name: 'LinkedIn', icon: <Linkedin size={16} />, url: PERSONAL_INFO.contacts.linkedin },
    { name: 'Instagram', icon: <Instagram size={16} />, url: PERSONAL_INFO.contacts.instagram },
    { name: 'Facebook', icon: <Facebook size={16} />, url: PERSONAL_INFO.contacts.facebook },
    { name: 'Twitter', icon: <Twitter size={16} />, url: PERSONAL_INFO.contacts.twitter },
  ];

  return (
    <section id="contact" className="relative py-24 bg-[#050505] border-t border-white/5 overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/[0.01] rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[1px] bg-white/30" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">Interaction</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white" id="contact-section-title">
            Contact Me
          </h2>
          <p className="text-sm text-gray-400 font-light mt-2 max-w-md">
            Have a project, system proposal, or recruitment request? Send a secure message or link up via networks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column Contacts & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8" id="contact-details-column">
            
            <div className="space-y-6">
              <h3 className="text-lg md:text-xl font-display font-bold text-white tracking-wide">
                Secure Channels
              </h3>

              <div className="space-y-4">
                {/* Location card */}
                <div className="p-4 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 hover:bg-white/[0.02] flex items-center gap-4 transition-all duration-300">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-[9px] font-mono uppercase text-gray-500 tracking-wider">Location</p>
                    <p className="text-xs md:text-sm text-gray-200 mt-0.5">{PERSONAL_INFO.contacts.location}</p>
                  </div>
                </div>

                {/* Email card */}
                <a 
                  href={`mailto:${PERSONAL_INFO.contacts.email}`}
                  className="p-4 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 hover:bg-white/[0.02] flex items-center gap-4 transition-all duration-300 group"
                >
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white group-hover:border-white/20 transition-colors">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-[9px] font-mono uppercase text-gray-500 tracking-wider">Secure Email</p>
                    <p className="text-xs md:text-sm text-gray-200 mt-0.5 group-hover:text-white transition-colors">
                      {PERSONAL_INFO.contacts.email}
                    </p>
                  </div>
                </a>

                {/* Phone card */}
                <a 
                  href={`tel:${PERSONAL_INFO.contacts.phone}`}
                  className="p-4 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 hover:bg-white/[0.02] flex items-center gap-4 transition-all duration-300 group"
                >
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white group-hover:border-white/20 transition-colors">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-[9px] font-mono uppercase text-gray-500 tracking-wider">Secure Line</p>
                    <p className="text-xs md:text-sm text-gray-200 mt-0.5 group-hover:text-white transition-colors">
                      {PERSONAL_INFO.contacts.phone}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Social network floating card */}
            <div className="p-6 rounded-3xl bg-white/[0.01] border border-white/5 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 font-bold">
                Social Networks Links
              </h4>
              <div className="flex flex-wrap gap-2" id="contact-social-chips">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/5 text-[11px] font-mono text-gray-400 hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column Glass Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-10 rounded-3xl bg-white/[0.01] border border-white/5 backdrop-blur-sm relative overflow-hidden flex flex-col shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
              id="contact-form-card"
            >
              {/* Glossy top outline line */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <h3 className="text-lg md:text-xl font-display font-bold text-white tracking-wide mb-6">
                Transmit Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Chantal"
                      className="w-full bg-white/[0.02] border border-white/5 focus:border-white/20 rounded-xl px-4 py-3 text-sm text-white outline-0 focus:ring-0 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. chantal@example.com"
                      className="w-full bg-white/[0.02] border border-white/5 focus:border-white/20 rounded-xl px-4 py-3 text-sm text-white outline-0 focus:ring-0 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">Subject</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Project Collaboration Offer"
                    className="w-full bg-white/[0.02] border border-white/5 focus:border-white/20 rounded-xl px-4 py-3 text-sm text-white outline-0 focus:ring-0 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">Message Content *</label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type details about your proposal here..."
                    className="w-full bg-white/[0.02] border border-white/5 focus:border-white/20 rounded-xl px-4 py-3 text-sm text-white outline-0 focus:ring-0 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-white text-black hover:bg-neutral-100 px-6 py-3.5 rounded-xl text-xs font-display font-bold tracking-widest uppercase cursor-pointer transition-colors"
                  id="contact-form-submit-btn"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={12} />
                      Transmit Message
                    </>
                  )}
                </button>
              </form>

              {/* Form success popup inside card */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 bg-black/95 flex flex-col items-center justify-center text-center p-8 z-20"
                    id="contact-success-frame"
                  >
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', damping: 15 }}
                    >
                      <CheckCircle2 size={48} className="text-white mb-4 animate-pulse" />
                    </motion.div>
                    
                    <h3 className="text-xl font-display font-bold text-white tracking-wide">
                      Transmission Success!
                    </h3>
                    <p className="text-xs text-gray-400 mt-2 max-w-xs leading-relaxed font-light">
                      Chantal has received your communication packet. A response will be issued back shortly.
                    </p>
                    
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="mt-6 px-4 py-2 bg-white/10 hover:bg-white/15 border border-white/10 text-white rounded-lg text-[10px] font-mono tracking-widest uppercase cursor-pointer transition-colors"
                    >
                      Dismiss Window
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
