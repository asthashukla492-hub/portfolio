export interface Project {
  id: number;
  number: string;
  name: string;
  tagline: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  learned: string;
  liveUrl: string;
  githubUrl: string;
  image: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface LearningItem {
  number: string;
  icon: string;
  title: string;
  description: string;
}
