
export interface Experience {
  company: string;
  department: string;
  period: string;
  responsibilities: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  grade: string;
  achievements: string[];
}

export interface Organization {
  name: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface Project {
  title: string;
  role: string;
  year: string;
}

export interface Achievement {
  title: string;
  competition: string;
  year: string;
}

export interface SkillSet {
  category: string;
  items: string[];
}
