export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'languages';
  icon?: string;
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 95, category: 'frontend', icon: '⚛️' },
  { name: 'TypeScript', level: 90, category: 'frontend', icon: '📘' },
  { name: 'JavaScript', level: 95, category: 'frontend', icon: '🟨' },
  { name: 'HTML/CSS', level: 90, category: 'frontend', icon: '🌐' },
  { name: 'Tailwind CSS', level: 85, category: 'frontend', icon: '🎨' },
  { name: 'Next.js', level: 80, category: 'frontend', icon: '⚡' },
  
  // Backend
  { name: 'Node.js', level: 90, category: 'backend', icon: '🟢' },
  { name: 'Express.js', level: 85, category: 'backend', icon: '🚂' },
  { name: 'Python', level: 80, category: 'backend', icon: '🐍' },
  { name: 'Django', level: 75, category: 'backend', icon: '🎯' },
  { name: 'FastAPI', level: 70, category: 'backend', icon: '⚡' },
  
  // Database
  { name: 'MongoDB', level: 85, category: 'database', icon: '🍃' },
  { name: 'PostgreSQL', level: 80, category: 'database', icon: '🐘' },
  { name: 'Redis', level: 75, category: 'database', icon: '🔴' },
  
  // DevOps
  { name: 'Docker', level: 80, category: 'devops', icon: '🐳' },
  { name: 'AWS', level: 75, category: 'devops', icon: '☁️' },
  { name: 'Git', level: 90, category: 'devops', icon: '📝' },
  { name: 'CI/CD', level: 70, category: 'devops', icon: '🔄' },
  
  // Tools
  { name: 'VS Code', level: 95, category: 'tools', icon: '💻' },
  { name: 'Figma', level: 70, category: 'tools', icon: '🎨' },
  { name: 'Postman', level: 85, category: 'tools', icon: '📮' },
  
  // Languages
  { name: 'C++', level: 85, category: 'languages', icon: '⚙️' },
  { name: 'Java', level: 75, category: 'languages', icon: '☕' },
  { name: 'Go', level: 65, category: 'languages', icon: '🐹' },
];

export const skillCategories = {
  frontend: 'Frontend Development',
  backend: 'Backend Development',
  database: 'Database & Storage',
  devops: 'DevOps & Tools',
  tools: 'Development Tools',
  languages: 'Programming Languages'
}; 