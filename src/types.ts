export interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  period: string;
  type: 'education' | 'experience';
  points: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface Certification {
  id: string;
  title: string;
  description?: string;
  issuer?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  feedback: string;
}

export interface SkillItem {
  name: string;
  level: number; // percentage out of 100
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}
