export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'devops' | 'languages';
  icon?: string;
}

export const skills: Skill[] = [
  // Core Programming
  { name: 'C++', level: 95, category: 'languages', icon: '⚙️' },
  { name: 'Rust', level: 75, category: 'languages', icon: '🦀' },
  
  // High Performance & Competitive Programming
  { name: 'High Performance C++', level: 90, category: 'frontend', icon: '🚀' },
  { name: 'Competitive Programming', level: 90, category: 'frontend', icon: '🏆' },
  { name: 'Algorithms & Data Structures', level: 90, category: 'frontend', icon: '🧮' },
  
  // Core CS & Mathematical
  { name: 'Core CS Subjects', level: 85, category: 'backend', icon: '💻' },
  { name: 'Mathematical Modeling', level: 85, category: 'backend', icon: '📐' },
  { name: 'Machine Learning', level: 70, category: 'backend', icon: '🤖' },
  
  // Development & Tools
  { name: 'Docker', level: 80, category: 'devops', icon: '🐳' },
  { name: 'Git & GitHub', level: 85, category: 'devops', icon: '📝' },
];

export const skillCategories = {
  frontend: 'High Performance & Competitive Programming',
  backend: 'Core CS & Mathematical',
  devops: 'Development & Tools',
  languages: 'Programming Languages'
}; 