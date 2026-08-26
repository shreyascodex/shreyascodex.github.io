export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  category: 'Frontend' | 'Backend' | 'Full Stack' | 'Python' | 'Contribution';
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Languages' | 'Databases' | 'Soft Skills' | 'Programming';
  level?: number;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}
