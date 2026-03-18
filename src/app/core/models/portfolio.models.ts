export interface NavItem {
  label: string;
  fragment: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  description: string[];
  tags: string[];
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface Language {
  name: string;
  level: string;
  flag: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Education {
  institution: string;
  degree: string;
  track: string;
  period: string;
  current?: boolean;
}
