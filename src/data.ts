import { Project, TimelineItem, Certification, Testimonial, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Chantal Mutuyimana",
  titles: ["Software Developer", "Full Stack Developer", "Mobile App Developer", "Tech Enthusiast", "Future AI Engineer"],
  bio: "I am Chantal Mutuyimana, a passionate and dedicated Software Developer with over three years of experience in software development, web technologies, and mobile application development. Currently pursuing Software Development studies at Kiyumba Technical Secondary School (Kiyumba TSS) in Muhanga District, Rwanda. Skilled in developing innovative digital solutions using modern technologies including React, Node.js, Laravel, Flutter, Python, and databases. Enthusiastic about problem-solving, continuous learning, and building impactful software that addresses real-world challenges.",
  details: [
    { label: "Name", value: "Chantal Mutuyimana" },
    { label: "Location", value: "Muhanga District, Rwanda" },
    { label: "School", value: "Kiyumba Technical Secondary School (Kiyumba TSS)" },
    { label: "Program", value: "Software Development Studies (L3 - L5)" },
    { label: "Experience", value: "3 Years (2023 - 2026)" },
  ],
  contacts: {
    email: "mutuyimanachantal16@gmail.com",
    phone: "+250793436871",
    location: "Muhanga District, Southern Province, Rwanda",
    github: "https://github.com/chantal-dev-rw",
    linkedin: "https://linkedin.com/in/chantal-dev-rw",
    instagram: "https://instagram.com/chantal_dev",
    facebook: "https://facebook.com/chantal.dev",
    twitter: "https://twitter.com/chantal_dev",
  }
};

export const EDUCATION_TIMELINE: TimelineItem[] = [
  {
    id: "edu-1",
    title: "Kiyumba Technical Secondary School (Kiyumba TSS)",
    subtitle: "Advanced Level (A-Level) - Software Development Program",
    location: "Muhanga District, Rwanda",
    period: "2023 - 2026",
    type: "education",
    points: [
      "Level 5 (L5) Specialization in Software Systems & Development",
      "Level 4 (L4) Comprehensive Programming & Systems Design",
      "Level 3 (L3) Foundations of ICT and Algorithms"
    ]
  },
  {
    id: "edu-2",
    title: "Kiyumba Technical Secondary School (Kiyumba TSS)",
    subtitle: "Ordinary Level (O-Level)",
    location: "Muhanga District, Rwanda",
    period: "2020 - 2023",
    type: "education",
    points: [
      "Senior 3 (S3) Board Examinations Preparation & Computer Fundamentals",
      "Senior 2 (S2) Mathematics, Physics, and Intro to Logic",
      "Senior 1 (S1) Basic Scientific Concepts and Technology Foundations"
    ]
  }
];

export const EXPERIENCE_TIMELINE: TimelineItem[] = [
  {
    id: "exp-0",
    title: "Software Developer",
    subtitle: "Independent & School Enterprise Projects",
    location: "Muhanga District, Rwanda",
    period: "2023 - 2026",
    type: "experience",
    points: [
      "Developed responsive, highly interactive web and mobile applications including EPMS, Stock Management, and Foodie apps.",
      "Designed and implemented modern, user-friendly dashboards and admin interfaces.",
      "Collaborated on local software initiatives and applied agile development practices.",
      "Applied problem-solving, debugging, and testing techniques to optimize system speed and database queries."
    ]
  },
  {
    id: "exp-1",
    title: "Software Development Intern",
    subtitle: "EdTech Solution Center",
    location: "Kigali, Rwanda (Remote)",
    period: "2025 - 2026",
    type: "experience",
    points: [
      "Assisted in crafting learning management system portals and administrative dashboards for online classrooms.",
      "Participated in comprehensive application testing, system debugging, and software maintenance workflows.",
      "Supported system documentation, writing clear onboarding guides and user manuals for non-technical users."
    ]
  },
  {
    id: "exp-2",
    title: "Software Developer Intern",
    subtitle: "IshConnect Internship Program",
    location: "Rwanda",
    period: "2024",
    type: "experience",
    points: [
      "Built web application components, modern user interfaces, and robust backend modules.",
      "Worked on frontend integration tasks and database configurations under senior developer guidance.",
      "Collaborated with mentors and fellow developers to build real-world digital projects addressing local business needs."
    ]
  },
  {
    id: "exp-3",
    title: "Cybersecurity & Networking Trainee",
    subtitle: "DevQueens Training",
    location: "Muhanga, Rwanda",
    period: "2023",
    type: "experience",
    points: [
      "Deepened expertise in computer networking architecture, router/switch configuration, and server defense methods.",
      "Practiced penetration testing, basic threat modeling, and application vulnerability remediation.",
      "Secured system entry points and databases against standard cyber threats and authorization leaks."
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-1",
    title: "Certified Software Developer",
    description: "Verified assessment in web engineering, data structures, and object-oriented paradigms.",
    issuer: "Kiyumba TSS Academic Board"
  },
  {
    id: "cert-2",
    title: "Wavumbuzi Entrepreneurship Program – Cohort 6",
    description: "Intensive training in technological entrepreneurship, business model creation, and scaling digital startups.",
    issuer: "Wavumbuzi Association"
  },
  {
    id: "cert-3",
    title: "Ingazi Program Participant",
    description: "Professional readiness training, soft skills masterclasses, and career transition mapping.",
    issuer: "Ingazi Initiative"
  },
  {
    id: "cert-4",
    title: "IshConnect Internship Program Graduate",
    description: "Successful validation of active software engineering internship milestones and team project releases.",
    issuer: "IshConnect Group"
  },
  {
    id: "cert-5",
    title: "DevQueens Cybersecurity & Networking Training",
    description: "Hands-on certificate in web security safeguards, router configurations, and server defense methods.",
    issuer: "DevQueens Network"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "Python", level: 85 },
      { name: "PHP", level: 80 },
      { name: "HTML5 & CSS3", level: 95 }
    ]
  },
  {
    title: "Frontend Engineering",
    skills: [
      { name: "React / Vite", level: 88 },
      { name: "Vue.js", level: 75 },
      { name: "Flutter", level: 82 }
    ]
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js (Express)", level: 85 },
      { name: "Laravel (PHP)", level: 80 },
      { name: "MySQL", level: 88 },
      { name: "NoSQL Databases", level: 75 }
    ]
  },
  {
    title: "Core Competencies",
    skills: [
      { name: "Mobile App Development", level: 85 },
      { name: "Machine Learning (Aspiring AI)", level: 70 },
      { name: "Git & GitHub", level: 92 },
      { name: "Networking & Security", level: 80 },
      { name: "DevOps & Cloud Run", level: 72 }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "EPMS System",
    subtitle: "Enterprise Project Management System",
    description: "A secure and easy-to-use business management platform that helps teams coordinate tasks, track project stages, and view visual progress reports.",
    features: [
      "Secure Logins: Custom access levels so different team members see only what they are allowed to",
      "Interactive Dashboard: Real-time project boards showing current status of tasks",
      "Progress Reports: Simple, beautiful visual charts showing team productivity and achievements",
      "Data Protection: High-security encryption and automatic lockouts to keep corporate records safe"
    ],
    tags: ["React", "Node.js", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com/chantal-dev-rw/epms-system"
  },
  {
    id: "proj-2",
    title: "Stock Management System",
    subtitle: "Inventory & Supplier Hub",
    description: "An automated inventory system designed to monitor stock levels, manage supplier agreements, and generate clear sales reports.",
    features: [
      "Smart Stock Counts: Automated tracking that warns you when product stock is running low",
      "One-Click Invoices: Instant creation of clean, printable sales and tax tables",
      "Supplier Tracking: Easy history records of previous supply batches and contact info",
      "Performance Summary: Visual display of hot-selling items and overall business health"
    ],
    tags: ["Laravel", "PHP", "MySQL", "Chart.js"],
    githubUrl: "https://github.com/chantal-dev-rw/stock-manager"
  },
  {
    id: "proj-3",
    title: "Car Parking Management System",
    subtitle: "Real-Time Spot Hub",
    description: "A digital parking reservation system featuring real-time space tracking, digital ticket barcodes, and clear payment logs.",
    features: [
      "Live Spot Map: Interactive digital map showing vacant and filled parking slots instantly",
      "Easy Bookings: Fast reservation calendar that generates a unique entry ticket barcode",
      "Payment History: Clear MTN Mobile Money and Airtel Money transaction logs",
      "Busy-Hours Charts: Simple graphs displaying the busiest parking times of the day"
    ],
    tags: ["Vue.js", "Python", "Flask", "Tailwind CSS"],
    githubUrl: "https://github.com/chantal-dev-rw/parking-system"
  },
  {
    id: "proj-4",
    title: "Food Delivery App",
    subtitle: "Mobile Culinary Delivery",
    description: "A fast, user-friendly mobile application for browsing local restaurant menus, managing food carts, and tracking delivery status.",
    features: [
      "Simple Ordering: Fast visual shopping cart and checkout with custom cooking instructions",
      "Restaurant Guide: Search local eateries by rating, specialty cuisines, or price category",
      "Mobile Payments: Seamless and secure checkout with simulated Mobile Money (MTN & Airtel)",
      "Live Deliveries: Real-time notifications on order status and estimated arrival times"
    ],
    tags: ["Flutter", "Dart", "Firebase", "State Management"],
    githubUrl: "https://github.com/chantal-dev-rw/foodie-app"
  },
  {
    id: "proj-5",
    title: "Fitness App",
    subtitle: "Workout & Health Coach",
    description: "An active personal health companion application that helps users log physical exercises, track calories, and measure weight loss progress.",
    features: [
      "Exercise Logs: Easily track workout routines, reps, and sets with helpful rest timers",
      "Daily Health Trackers: Simple logs for daily steps, calories burned, and water intake",
      "Goal Progress: Clear visual graphs showing weight loss milestones and habits",
      "Tailored Workouts: Dynamic exercise programs customized to your individual fitness level"
    ],
    tags: ["React Native", "Expo", "SQLite", "Tailwind CSS"],
    githubUrl: "https://github.com/chantal-dev-rw/fitness-coach"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Sandrine",
    role: "CEO",
    company: "Inzira Technologies",
    feedback: "Chantal is a talented and dedicated developer with exceptional problem-solving abilities and a strong passion for innovation."
  },
  {
    id: "test-2",
    name: "Kevin Ishimwe",
    role: "CEO",
    company: "IshVexa",
    feedback: "She consistently demonstrates professionalism, creativity, and excellent technical skills."
  },
  {
    id: "test-3",
    name: "Yvonne",
    role: "Software Architect",
    company: "Kiyumba Alumni Network",
    feedback: "Chantal is hardworking, collaborative, and always eager to learn emerging technologies."
  },
  {
    id: "test-4",
    name: "Celestin",
    role: "Student Peer Leader",
    company: "Kiyumba TSS",
    feedback: "Her leadership, teamwork, and programming abilities inspire fellow students."
  },
  {
    id: "test-5",
    name: "Claude",
    role: "CEO",
    company: "IshConnect",
    feedback: "Chantal possesses remarkable potential and a strong commitment to creating impactful digital solutions."
  }
];
