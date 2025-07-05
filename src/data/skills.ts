export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'languages';
  icon?: string;
}

export const skills: Skill[] = [
  // Programming Languages
  { name: 'C++', level: 95, category: 'languages', icon: '⚙️' },
  { name: 'Python', level: 85, category: 'languages', icon: '🐍' },
  { name: 'Java', level: 75, category: 'languages', icon: '☕' },
  { name: 'JavaScript', level: 70, category: 'languages', icon: '🟨' },
  
  // Algorithms & Data Structures
  { name: 'Algorithms', level: 90, category: 'frontend', icon: '🧮' },
  { name: 'Data Structures', level: 90, category: 'frontend', icon: '📊' },
  { name: 'Competitive Programming', level: 85, category: 'frontend', icon: '🏆' },
  { name: 'Dynamic Programming', level: 80, category: 'frontend', icon: '⚡' },
  
  // Mathematical Modeling
  { name: 'Mathematical Modeling', level: 85, category: 'backend', icon: '📐' },
  { name: 'Numerical Methods', level: 80, category: 'backend', icon: '🔢' },
  { name: 'Optimization', level: 75, category: 'backend', icon: '🎯' },
  { name: 'Statistics', level: 70, category: 'backend', icon: '📈' },
  
  // Quantitative Finance
  { name: 'Financial Modeling', level: 75, category: 'database', icon: '💰' },
  { name: 'Risk Management', level: 70, category: 'database', icon: '🛡️' },
  { name: 'Trading Algorithms', level: 65, category: 'database', icon: '📈' },
  
  // Tools & Technologies
  { name: 'Git', level: 85, category: 'devops', icon: '📝' },
  { name: 'VS Code', level: 90, category: 'tools', icon: '💻' },
  { name: 'Linux', level: 80, category: 'tools', icon: '🐧' },
  { name: 'Docker', level: 65, category: 'tools', icon: '🐳' },
];

export const skillCategories = {
  frontend: 'Algorithms & Data Structures',
  backend: 'Mathematical Modeling',
  database: 'Quantitative Finance',
  devops: 'DevOps & Tools',
  tools: 'Development Tools',
  languages: 'Programming Languages'
}; 