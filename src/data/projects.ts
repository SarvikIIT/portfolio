export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'multithreaded-game-engine',
    title: 'Multithreaded C++ Game Engine',
    description: 'A high-performance game engine built with modern C++ featuring multithreading, efficient memory management, and real-time rendering capabilities. Designed for complex game development with optimal performance.',
    image: '/projects/game-engine.jpg',
    technologies: ['C++', 'OpenGL', 'Multithreading', 'Memory Management', 'Performance Optimization'],
    githubUrl: 'https://github.com/SarvikIIT/multithreaded-game-engine',
    liveUrl: '#',
    featured: true
  },
  {
    id: 'competitive-programming-solutions',
    title: 'Competitive Programming Solutions',
    description: 'A comprehensive collection of my solutions to competitive programming problems from Codeforces, CodeChef, and LeetCode. Organized by difficulty and topic with detailed explanations.',
    image: '/projects/cp-solutions.jpg',
    technologies: ['C++', 'Algorithms', 'Data Structures', 'Problem Solving'],
    githubUrl: 'https://github.com/SarvikIIT/cp-solutions',
    liveUrl: '#',
    featured: true
  },
  {
    id: 'quantitative-finance-tools',
    title: 'Quantitative Finance Tools',
    description: 'A collection of tools and models for quantitative finance including backtesting frameworks, risk management systems, and algorithmic trading strategies.',
    image: '/projects/quant-tools.jpg',
    technologies: ['C++', 'Python', 'Financial Modeling', 'Risk Management'],
    githubUrl: 'https://github.com/SarvikIIT/quantitative-finance-tools',
    liveUrl: '#',
    featured: true
  }
]; 