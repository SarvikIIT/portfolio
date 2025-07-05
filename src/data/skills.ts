export interface Skill {
  name: string;
  proficiency: 'Expert' | 'Advanced' | 'Intermediate' | 'Proficient';
  category: 'high-performance' | 'competitive-programming' | 'core-cs' | 'development-tools';
  icon?: string;
  description?: string;
}

export const skills: Skill[] = [
  // High Performance Programming
  { 
    name: 'High Performance C++', 
    proficiency: 'Expert', 
    category: 'high-performance', 
    icon: '⚡',
    description: 'Advanced C++ with focus on performance optimization, memory management, and system-level programming'
  },
  { 
    name: 'Rust', 
    proficiency: 'Advanced', 
    category: 'high-performance', 
    icon: '🦀',
    description: 'Systems programming with memory safety, zero-cost abstractions, and concurrent programming'
  },
  
  // Competitive Programming
  { 
    name: 'Competitive Programming', 
    proficiency: 'Expert', 
    category: 'competitive-programming', 
    icon: '🏆',
    description: 'Advanced algorithms, data structures, and problem-solving techniques'
  },
  { 
    name: 'Algorithms & Data Structures', 
    proficiency: 'Expert', 
    category: 'competitive-programming', 
    icon: '🧮',
    description: 'Mastery of complex algorithms, optimization techniques, and efficient data structure implementation'
  },
  
  // Core Computer Science
  { 
    name: 'Computer Science Fundamentals', 
    proficiency: 'Advanced', 
    category: 'core-cs', 
    icon: '💻',
    description: 'Operating systems, computer architecture, networks, and software engineering principles'
  },
  { 
    name: 'Mathematical Modeling', 
    proficiency: 'Advanced', 
    category: 'core-cs', 
    icon: '📐',
    description: 'Mathematical analysis, optimization algorithms, and computational modeling'
  },
  { 
    name: 'Machine Learning', 
    proficiency: 'Intermediate', 
    category: 'core-cs', 
    icon: '🤖',
    description: 'Statistical learning, neural networks, and predictive modeling techniques'
  },
  
  // Development Tools
  { 
    name: 'Docker & Containerization', 
    proficiency: 'Advanced', 
    category: 'development-tools', 
    icon: '🐳',
    description: 'Container orchestration, microservices architecture, and deployment automation'
  },
  { 
    name: 'Git & Version Control', 
    proficiency: 'Advanced', 
    category: 'development-tools', 
    icon: '📝',
    description: 'Distributed version control, collaborative development, and workflow optimization'
  },
];

export const skillCategories = {
  'high-performance': 'High Performance Programming',
  'competitive-programming': 'Competitive Programming',
  'core-cs': 'Computer Science Fundamentals',
  'development-tools': 'Development Tools'
}; 