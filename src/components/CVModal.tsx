import { motion } from 'motion/react';
import { X, Printer, FileText, Check, MapPin, Phone, Mail, Award, BookOpen, Briefcase, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  if (!isOpen) return null;

  const handlePrintPDF = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Chantal Mutuyimana - CV Resume</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
          
          body {
            font-family: 'Inter', sans-serif;
            color: #1a1a1a;
            background: #ffffff;
            line-height: 1.5;
            margin: 0;
            padding: 40px;
          }

          .resume-container {
            max-width: 800px;
            margin: 0 auto;
          }

          header {
            border-bottom: 2px solid #111111;
            padding-bottom: 20px;
            margin-bottom: 25px;
          }

          h1 {
            font-size: 28px;
            font-weight: 800;
            letter-spacing: -0.02em;
            text-transform: uppercase;
            margin: 0 0 5px 0;
            color: #000000;
          }

          .title {
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: #555555;
            margin: 0 0 15px 0;
          }

          .contact-info {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            font-size: 11px;
            color: #444444;
            font-family: monospace;
          }

          .contact-item {
            display: flex;
            align-items: center;
            gap: 5px;
          }

          .section-title {
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            border-bottom: 1.5px solid #222222;
            padding-bottom: 4px;
            margin-top: 25px;
            margin-bottom: 15px;
            color: #000000;
          }

          .summary {
            font-size: 12.5px;
            color: #333333;
            text-align: justify;
            margin: 0 0 15px 0;
          }

          .item {
            margin-bottom: 18px;
          }

          .item-header {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            font-weight: 700;
            font-size: 13px;
            margin-bottom: 4px;
            color: #111111;
          }

          .item-subtitle {
            font-style: italic;
            font-size: 12px;
            color: #444444;
            margin-bottom: 6px;
          }

          .item-bullets {
            margin: 0;
            padding-left: 18px;
            font-size: 12px;
            color: #333333;
          }

          .item-bullets li {
            margin-bottom: 4px;
          }

          .skills-grid {
            display: grid;
            grid-template-cols: repeat(2, 1fr);
            gap: 15px;
            font-size: 12px;
            margin-bottom: 15px;
          }

          .skills-category {
            margin-bottom: 5px;
          }

          .skills-category-title {
            font-weight: 700;
            margin-bottom: 4px;
            color: #111111;
          }

          .skills-list {
            color: #444444;
          }

          .projects-grid {
            display: grid;
            grid-template-cols: 1fr;
            gap: 12px;
          }

          .project-item {
            border-left: 2px solid #dddddd;
            padding-left: 12px;
          }

          .project-title {
            font-weight: 700;
            font-size: 13px;
            color: #111111;
          }

          .project-desc {
            font-size: 12px;
            color: #444444;
            margin: 3px 0 0 0;
          }

          .references {
            display: grid;
            grid-template-cols: repeat(2, 1fr);
            gap: 12px;
            font-size: 12px;
          }

          .reference-card {
            border: 1px solid #eeeeee;
            padding: 8px 12px;
            border-radius: 4px;
            background: #fafafa;
          }

          .reference-name {
            font-weight: 700;
            color: #111111;
          }

          .reference-company {
            color: #555555;
            font-size: 11px;
          }

          @media print {
            body {
              padding: 0;
              font-size: 11px;
            }
            .no-print {
              display: none !important;
            }
          }
        </style>
      </head>
      <body>
        <div class="resume-container">
          <header>
            <h1>Chantal Mutuyimana</h1>
            <div class="title">Software Developer | Full-Stack Developer | Mobile App Developer</div>
            <div class="contact-info">
              <div class="contact-item">📍 Muhanga District, Rwanda</div>
              <div class="contact-item">📞 +250 793 436 871</div>
              <div class="contact-item">✉️ mutuyimanachantal16@gmail.com</div>
            </div>
          </header>

          <div class="section-title">Professional Summary</div>
          <p class="summary">
            Passionate and dedicated Software Developer with over three years of experience in software development, web technologies, and mobile application development. Currently pursuing Software Development studies at Kiyumba Technical Secondary School (Kiyumba TSS) in Muhanga District, Rwanda. Skilled in developing innovative digital solutions using modern technologies including React, Node.js, Laravel, Flutter, Python, and databases. Enthusiastic about problem-solving, continuous learning, and building impactful software that addresses real-world challenges.
          </p>

          <div class="section-title">Education</div>
          <div class="item">
            <div class="item-header">
              <span>Kiyumba Technical Secondary School (Kiyumba TSS)</span>
              <span>2023 - 2026</span>
            </div>
            <div class="item-subtitle">Software Development Studies (Advanced Level - A-Level)</div>
            <ul class="item-bullets">
              <li>Level Five (L5) Specialization in Software Systems & Development</li>
              <li>Level Four (L4) Comprehensive Programming & Systems Design</li>
              <li>Level Three (L3) Foundations of ICT and Algorithms</li>
            </ul>
          </div>
          
          <div class="item">
            <div class="item-header">
              <span>Kiyumba Technical Secondary School (Kiyumba TSS)</span>
              <span>2020 - 2023</span>
            </div>
            <div class="item-subtitle">Ordinary Level (O-Level) - Senior 1 to Senior 3 studies</div>
          </div>

          <div class="section-title">Professional Experience</div>
          <div class="item">
            <div class="item-header">
              <span>Software Developer (Independent & School Enterprise Projects)</span>
              <span>2023 - 2026</span>
            </div>
            <div class="item-subtitle">Muhanga District, Rwanda</div>
            <ul class="item-bullets">
              <li>Developed responsive, highly interactive web and mobile applications including EPMS, Stock Management, and Foodie apps.</li>
              <li>Designed and implemented modern, user-friendly dashboards and admin interfaces.</li>
              <li>Collaborated on local software initiatives and applied agile development practices.</li>
              <li>Applied problem-solving, debugging, and testing techniques to optimize system speed and database queries.</li>
            </ul>
          </div>

          <div class="item">
            <div class="item-header">
              <span>Software Development Intern</span>
              <span>2025 - 2026</span>
            </div>
            <div class="item-subtitle">EdTech Solution Center (Remote)</div>
            <ul class="item-bullets">
              <li>Assisted in crafting learning management system portals and administrative dashboards for online classrooms.</li>
              <li>Participated in comprehensive application testing, system debugging, and software maintenance workflows.</li>
              <li>Supported system documentation, writing clear onboarding guides and user manuals for non-technical users.</li>
            </ul>
          </div>

          <div class="item">
            <div class="item-header">
              <span>Software Developer Intern</span>
              <span>2024</span>
            </div>
            <div class="item-subtitle">IshConnect Internship Program (Rwanda)</div>
            <ul class="item-bullets">
              <li>Built web application components, modern user interfaces, and robust backend modules.</li>
              <li>Worked on frontend integration tasks and database configurations under senior developer guidance.</li>
              <li>Collaborated with mentors and fellow developers to build real-world digital projects addressing local business needs.</li>
            </ul>
          </div>

          <div class="section-title">Certifications & Training</div>
          <ul class="item-bullets" style="padding-left: 18px;">
            <li><strong>Certified Software Developer</strong> - Kiyumba TSS Academic Board</li>
            <li><strong>Wavumbuzi Entrepreneurship Program (Cohort 6)</strong> - Wavumbuzi Association</li>
            <li><strong>Ingazi Program Participant</strong> - Ingazi Initiative</li>
            <li><strong>IshConnect Internship Program Graduate</strong> - IshConnect Group</li>
            <li><strong>DevQueens Training in Cybersecurity & Networking</strong> - DevQueens Network</li>
          </ul>

          <div class="section-title">Technical Skills</div>
          <div class="skills-grid">
            <div class="skills-category">
              <div class="skills-category-title">Programming Languages</div>
              <div class="skills-list">JavaScript (ES6+), Python, PHP, HTML5, CSS3</div>
            </div>
            <div class="skills-category">
              <div class="skills-category-title">Frontend Engineering</div>
              <div class="skills-list">React.js, Vue.js, Tailwind CSS</div>
            </div>
            <div class="skills-category">
              <div class="skills-category-title">Backend & Mobile</div>
              <div class="skills-list">Node.js (Express), Laravel (PHP), Flutter (Dart)</div>
            </div>
            <div class="skills-category">
              <div class="skills-category-title">Databases & Other</div>
              <div class="skills-list">MySQL, NoSQL Databases, Git/GitHub, Networking, Machine Learning</div>
            </div>
          </div>

          <div class="section-title">Featured Projects</div>
          <div class="projects-grid">
            <div class="project-item">
              <div class="project-title">Enterprise Project Management System (EPMS)</div>
              <div class="project-desc">A secure and easy-to-use business management platform that helps teams coordinate tasks, track project stages, and view visual progress reports. Developed with React, Node.js, and MySQL.</div>
            </div>
            <div class="project-item">
              <div class="project-title">Stock Management System</div>
              <div class="project-desc">An automated inventory system designed to monitor stock levels, manage supplier agreements, and generate clear sales reports. Developed with Laravel, PHP, and MySQL.</div>
            </div>
            <div class="project-item">
              <div class="project-title">Car Parking Management System</div>
              <div class="project-desc">A digital parking reservation system featuring real-time space tracking, digital ticket barcodes, and clear payment logs. Developed with Vue.js, Python, and Flask.</div>
            </div>
            <div class="project-item">
              <div class="project-title">Food Delivery App</div>
              <div class="project-desc">A fast, user-friendly mobile application for browsing local restaurant menus, managing food carts, and tracking delivery status. Developed with Flutter, Dart, and Firebase.</div>
            </div>
            <div class="project-item">
              <div class="project-title">Fitness App</div>
              <div class="project-desc">An active personal health companion application that helps users log physical exercises, track calories, and measure weight loss progress. Developed with React Native, Expo, and SQLite.</div>
            </div>
          </div>

          <div class="section-title">References</div>
          <div class="references">
            <div class="reference-card">
              <div class="reference-name">Sandrine</div>
              <div class="reference-company">CEO, Inzira Technologies</div>
            </div>
            <div class="reference-card">
              <div class="reference-name">Kevin Ishimwe</div>
              <div class="reference-company">CEO, IshVexa</div>
            </div>
            <div class="reference-card">
              <div class="reference-name">Yvonne</div>
              <div class="reference-company">Professional Reference, Software Architect</div>
            </div>
            <div class="reference-card">
              <div class="reference-name">Claude</div>
              <div class="reference-company">CEO, IshConnect</div>
            </div>
          </div>
        </div>
        <script>
          window.onload = function() {
            window.print();
          };
        </script>
      </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  const handleDownloadTXT = () => {
    const textContent = `CHANTAL MUTUYIMANA
Software Developer | Full-Stack Developer | Mobile App Developer

Location: Muhanga District, Rwanda
Phone: +250 793 436 871
Email: mutuyimanachantal16@gmail.com
Secure Email: mutuyimanachantal16@gmail.com

================================================================================
PROFESSIONAL SUMMARY
================================================================================
Passionate and dedicated Software Developer with over three years of experience in software development, web technologies, and mobile application development. Currently pursuing Software Development studies at Kiyumba Technical Secondary School (Kiyumba TSS) in Muhanga District, Rwanda. Skilled in developing innovative digital solutions using modern technologies including React, Node.js, Laravel, Flutter, Python, and databases. Enthusiastic about problem-solving, continuous learning, and building impactful software that addresses real-world challenges.

================================================================================
EDUCATION
================================================================================
Kiyumba Technical Secondary School (Kiyumba TSS)
Muhanga District, Rwanda
Software Development Program (Advanced Level / A-Level): 2023 - 2026
* Level Five (L5) Specialization in Software Systems & Development
* Level Four (L4) Comprehensive Programming & Systems Design
* Level Three (L3) Foundations of ICT and Algorithms

Kiyumba Technical Secondary School (Kiyumba TSS)
Ordinary Level (O-Level) Studies: 2020 - 2023
* Senior 1 (S1) to Senior 3 (S3) Core technology and science courses

================================================================================
PROFESSIONAL EXPERIENCE
================================================================================
Software Developer
Independent & School Enterprise Projects | 2023 - 2026
* Developed responsive web and mobile applications (EPMS, Stock Manager, Food Delivery).
* Designed and implemented modern user interfaces and client dashboards.
* Collaborated on software projects using agile development practices.
* Applied problem-solving and debugging techniques to improve database and app speeds.

Software Development Intern
EdTech Solution Center | 2025 - 2026
* Assisted in developing educational technology solutions and virtual portals.
* Participated in application testing, debugging, and continuous maintenance.
* Supported system documentation, creating simple guides for non-tech users.

Software Developer Intern
IshConnect Internship Program | 2024
* Built web application components, layouts, and backend routes.
* Worked on frontend integration and database design steps.
* Collaborated with mentors and developers to build real-world products.

================================================================================
CERTIFICATIONS & TRAINING
================================================================================
* Certified Software Developer (Kiyumba TSS Academic Board)
* Wavumbuzi Entrepreneurship Program - Cohort 6 Participant
* Ingazi Program Participant (Professional Readiness)
* IshConnect Internship Program Graduate
* DevQueens Training in Cybersecurity and Networking

================================================================================
TECHNICAL SKILLS
================================================================================
* Programming Languages: JavaScript, Python, PHP, HTML5, CSS3
* Frontend Technologies: React.js, Vue.js, Tailwind CSS
* Backend Technologies: Node.js, Laravel
* Mobile Development: Flutter, Dart
* Databases: MySQL, NoSQL Databases
* Additional: Machine Learning Fundamentals, Git/GitHub, Networking, DevOps

================================================================================
PROJECTS
================================================================================
1. Enterprise Project Management System (EPMS)
   A secure project management dashboard with login roles, progress tracking, and charts.
2. Stock Management System
   An automated inventory tracker for monitoring stock, low stock warning alerts, and suppliers.
3. Car Parking Management System
   A parking terminal with live slot map grids, ticket booking, and mobile money checkout simulation.
4. Food Delivery App
   A food ordering and restaurant search application with active cart status notifications.
5. Fitness App
   A wellness companion for logging workout sets/reps, water intake, and body progress history.

================================================================================
SOFT SKILLS
================================================================================
Communication, Leadership, Teamwork, Problem Solving, Adaptability, Time Management, Creativity, Continuous Learning.

================================================================================
REFERENCES
================================================================================
* Sandrine, CEO Inzira Technologies
* Kevin Ishimwe, CEO IshVexa
* Yvonne, Software Architect Reference
* Claude, CEO IshConnect
`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Chantal_Mutuyimana_CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-hidden">
      {/* Dark overlay backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black backdrop-blur-md"
      />

      {/* Modal Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', duration: 0.5 }}
        className="relative w-full max-w-4xl h-[90vh] bg-[#0c0c0c] border border-white/10 rounded-3xl overflow-hidden shadow-[0_25px_65px_rgba(0,0,0,0.9)] flex flex-col z-10"
      >
        {/* Modal Action Header */}
        <div className="px-6 py-4 border-b border-white/10 bg-[#0e0e0e] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <h2 className="text-sm font-mono uppercase tracking-widest text-gray-300 font-bold">Chantal's Detailed CV</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrintPDF}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-mono font-bold tracking-wider uppercase transition-colors cursor-pointer"
              title="Download beautifully formatted PDF"
            >
              <Printer size={13} />
              <span>Save as PDF</span>
            </button>
            <button
              onClick={handleDownloadTXT}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-white hover:bg-white/10 text-xs font-mono font-bold tracking-wider uppercase transition-colors cursor-pointer"
              title="Download clean plain text CV"
            >
              <FileText size={13} />
              <span>Raw Text</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Visual Paper-like Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8 bg-[#090909] select-text">
          
          {/* Header Block */}
          <div className="border-b border-white/10 pb-6 text-left">
            <h1 className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight uppercase leading-none">
              Chantal Mutuyimana
            </h1>
            <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest mt-2 font-bold">
              Software Developer &bull; Full-Stack Developer &bull; Mobile App Developer
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 text-xs text-gray-400 font-mono">
              <div className="flex items-center gap-2">
                <MapPin size={13} className="text-gray-500" />
                <span>Muhanga District, Rwanda</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={13} className="text-gray-500" />
                <span>+250 793 436 871</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-gray-500" />
                <a href="mailto:mutuyimanachantal16@gmail.com" className="hover:text-white transition-colors">mutuyimanachantal16@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-3 text-left">
            <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500 font-bold border-l-2 border-emerald-500 pl-2.5">
              Professional Summary
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed font-light">
              Passionate and dedicated Software Developer with over three years of experience in software development, web technologies, and mobile application development. Currently pursuing Software Development studies at Kiyumba Technical Secondary School (Kiyumba TSS) in Muhanga District, Rwanda. Skilled in developing innovative digital solutions using modern technologies including React, Node.js, Laravel, Flutter, Python, and databases. Enthusiastic about problem-solving, continuous learning, and building impactful software that addresses real-world challenges.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-4 text-left">
            <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500 font-bold border-l-2 border-emerald-500 pl-2.5">
              Education
            </h3>
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/[0.01] border border-white/5">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <h4 className="text-sm font-bold text-white">Kiyumba Technical Secondary School (Kiyumba TSS)</h4>
                  <span className="text-xs font-mono text-emerald-400 font-bold">2023 - 2026</span>
                </div>
                <p className="text-xs font-mono text-gray-400 mt-0.5">Software Development Program (Advanced Level - A-Level)</p>
                <ul className="mt-3 space-y-1.5 text-xs text-gray-300 font-light list-disc list-inside pl-1">
                  <li>Level Five (L5) Specialization in Software Systems & Development</li>
                  <li>Level Four (L4) Comprehensive Programming & Systems Design</li>
                  <li>Level Three (L3) Foundations of ICT and Algorithms</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.01] border border-white/5">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <h4 className="text-sm font-bold text-white">Kiyumba Technical Secondary School (Kiyumba TSS)</h4>
                  <span className="text-xs font-mono text-gray-400">2020 - 2023</span>
                </div>
                <p className="text-xs font-mono text-gray-400 mt-0.5">Ordinary Level (O-Level) - Senior 1 to Senior 3 studies</p>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-4 text-left">
            <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500 font-bold border-l-2 border-emerald-500 pl-2.5">
              Professional Experience
            </h3>
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/[0.01] border border-white/5">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <h4 className="text-sm font-bold text-white">Software Developer</h4>
                  <span className="text-xs font-mono text-emerald-400 font-bold">2023 - 2026</span>
                </div>
                <p className="text-xs font-mono text-gray-400 mt-0.5">Independent & School Enterprise Projects (Muhanga, Rwanda)</p>
                <ul className="mt-3 space-y-1.5 text-xs text-gray-300 font-light list-disc list-inside pl-1">
                  <li>Developed responsive web and mobile applications including EPMS, Stock Management, and Foodie apps.</li>
                  <li>Designed and implemented modern, user-friendly dashboards and admin interfaces.</li>
                  <li>Collaborated on local software initiatives and applied agile development practices.</li>
                  <li>Applied problem-solving, debugging, and testing techniques to optimize system speed and database queries.</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.01] border border-white/5">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <h4 className="text-sm font-bold text-white">Software Development Intern</h4>
                  <span className="text-xs font-mono text-emerald-400 font-bold">2025 - 2026</span>
                </div>
                <p className="text-xs font-mono text-gray-400 mt-0.5">EdTech Solution Center (Remote)</p>
                <ul className="mt-3 space-y-1.5 text-xs text-gray-300 font-light list-disc list-inside pl-1">
                  <li>Assisted in crafting learning management system portals and administrative dashboards for online classrooms.</li>
                  <li>Participated in comprehensive application testing, system debugging, and software maintenance workflows.</li>
                  <li>Supported system documentation, writing clear onboarding guides and user manuals for non-technical users.</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.01] border border-white/5">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <h4 className="text-sm font-bold text-white">Software Developer Intern</h4>
                  <span className="text-xs font-mono text-emerald-400 font-bold">2024</span>
                </div>
                <p className="text-xs font-mono text-gray-400 mt-0.5">IshConnect Internship Program (Rwanda)</p>
                <ul className="mt-3 space-y-1.5 text-xs text-gray-300 font-light list-disc list-inside pl-1">
                  <li>Built web application components, modern user interfaces, and robust backend modules.</li>
                  <li>Worked on frontend integration tasks and database configurations under senior developer guidance.</li>
                  <li>Collaborated with mentors and fellow developers to build real-world digital projects addressing local business needs.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3 text-left">
            <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500 font-bold border-l-2 border-emerald-500 pl-2.5">
              Certifications & Training
            </h3>
            <ul className="space-y-2 text-xs text-gray-300">
              <li className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.01] border border-white/5">
                <Award size={14} className="text-emerald-400 shrink-0" />
                <span><strong>Certified Software Developer</strong> &bull; Issued by Kiyumba TSS Academic Board</span>
              </li>
              <li className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.01] border border-white/5">
                <Award size={14} className="text-emerald-400 shrink-0" />
                <span><strong>Wavumbuzi Entrepreneurship Program (Cohort 6)</strong> &bull; Issued by Wavumbuzi Association</span>
              </li>
              <li className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.01] border border-white/5">
                <Award size={14} className="text-emerald-400 shrink-0" />
                <span><strong>Ingazi Program Participant</strong> &bull; Professional readiness and career mapping by Ingazi</span>
              </li>
              <li className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.01] border border-white/5">
                <Award size={14} className="text-emerald-400 shrink-0" />
                <span><strong>IshConnect Internship Program Graduate</strong> &bull; Software engineering team-project validation</span>
              </li>
              <li className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.01] border border-white/5">
                <Award size={14} className="text-emerald-400 shrink-0" />
                <span><strong>DevQueens Training in Cybersecurity & Networking</strong> &bull; Network architecture & defense safeguards</span>
              </li>
            </ul>
          </div>

          {/* Skills Grid */}
          <div className="space-y-3 text-left">
            <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500 font-bold border-l-2 border-emerald-500 pl-2.5">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-2xl bg-white/[0.01] border border-white/5 space-y-1">
                <p className="font-bold text-white uppercase tracking-wider font-mono text-[10px] text-gray-400">Programming Languages</p>
                <p className="text-gray-300 font-light">JavaScript (ES6+), Python, PHP, HTML5, CSS3</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.01] border border-white/5 space-y-1">
                <p className="font-bold text-white uppercase tracking-wider font-mono text-[10px] text-gray-400">Frontend Frameworks</p>
                <p className="text-gray-300 font-light">React.js, Vue.js, Tailwind CSS</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.01] border border-white/5 space-y-1">
                <p className="font-bold text-white uppercase tracking-wider font-mono text-[10px] text-gray-400">Backend & Mobile Development</p>
                <p className="text-gray-300 font-light">Node.js (Express), Laravel (PHP), Flutter (Dart)</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.01] border border-white/5 space-y-1">
                <p className="font-bold text-white uppercase tracking-wider font-mono text-[10px] text-gray-400">Databases & Tools</p>
                <p className="text-gray-300 font-light">MySQL, NoSQL Databases, Git & GitHub, Computer Networks, Machine Learning</p>
              </div>
            </div>
          </div>

          {/* References */}
          <div className="space-y-3 text-left">
            <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500 font-bold border-l-2 border-emerald-500 pl-2.5">
              References
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white/[0.01] border border-white/5">
                <p className="font-bold text-white">Sandrine</p>
                <p className="text-gray-500 text-[10px] font-mono uppercase">CEO, Inzira Tech</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.01] border border-white/5">
                <p className="font-bold text-white">Kevin Ishimwe</p>
                <p className="text-gray-500 text-[10px] font-mono uppercase">CEO, IshVexa</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.01] border border-white/5">
                <p className="font-bold text-white">Yvonne</p>
                <p className="text-gray-500 text-[10px] font-mono uppercase">Software Architect</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.01] border border-white/5">
                <p className="font-bold text-white">Claude</p>
                <p className="text-gray-500 text-[10px] font-mono uppercase">CEO, IshConnect</p>
              </div>
            </div>
            <p className="text-[10px] font-mono text-gray-500 text-center mt-2">Professional references available upon request.</p>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#0c0c0c] flex items-center justify-center shrink-0">
          <p className="text-[10px] font-mono text-gray-500">
            Chantal Mutuyimana &bull; Software Developer Portfolio 2026
          </p>
        </div>
      </motion.div>
    </div>
  );
}
