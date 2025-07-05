export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'devops' | 'languages';
  icon?: string;
}

export const skills: Skill[] = [
  // Core Programming
  { name: 'C++', level: 95, category: 'languages', icon: '⚙️' },
  { name: 'Python', level: 85, category: 'languages', icon: '🐍' },
  
  // Algorithms & Problem Solving
  { name: 'Competitive Programming', level: 90, category: 'frontend', icon: '🏆' },
  { name: 'Algorithms & Data Structures', level: 90, category: 'frontend', icon: '🧮' },
  { name: 'Dynamic Programming', level: 85, category: 'frontend', icon: '⚡' },
  
  // Mathematical & Financial
  { name: 'Mathematical Modeling', level: 85, category: 'backend', icon: '📐' },
  { name: 'Quantitative Finance', level: 80, category: 'backend', icon: '💰' },
  { name: 'Optimization', level: 80, category: 'backend', icon: '🎯' },
  
  // Development Tools
  { name: 'Git', level: 85, category: 'devops', icon: '📝' },
  { name: 'Linux', level: 80, category: 'devops', icon: '🐧' },
];

export const skillCategories = {
  frontend: 'Algorithms & Problem Solving',
  backend: 'Mathematical & Financial',
  devops: 'Development Tools',
  languages: 'Programming Languages'
}; 