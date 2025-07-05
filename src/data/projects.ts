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
    id: 'algorithm-visualizer',
    title: 'Algorithm Visualizer',
    description: 'An interactive web application that visualizes various algorithms like sorting, pathfinding, and graph algorithms. Built with C++ backend and React frontend for educational purposes.',
    image: '/projects/algo-viz.jpg',
    technologies: ['C++', 'React', 'JavaScript', 'D3.js', 'WebAssembly'],
    githubUrl: 'https://github.com/SarvikIIT/algorithm-visualizer',
    liveUrl: '#',
    featured: true
  },
  {
    id: 'trading-strategy-backtester',
    title: 'Trading Strategy Backtester',
    description: 'A quantitative finance tool for backtesting trading strategies using historical market data. Implements various technical indicators and risk management features.',
    image: '/projects/trading.jpg',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Financial Data APIs'],
    githubUrl: 'https://github.com/SarvikIIT/trading-backtester',
    liveUrl: '#',
    featured: true
  },
  {
    id: 'mathematical-modeling-library',
    title: 'Mathematical Modeling Library',
    description: 'A C++ library for mathematical modeling and optimization problems. Includes implementations of numerical methods, optimization algorithms, and statistical analysis tools.',
    image: '/projects/math-lib.jpg',
    technologies: ['C++', 'Eigen', 'Boost', 'CMake', 'Unit Testing'],
    githubUrl: 'https://github.com/SarvikIIT/math-modeling-lib',
    liveUrl: '#',
    featured: true
  },
  {
    id: 'competitive-programming-solutions',
    title: 'Competitive Programming Solutions',
    description: 'A collection of my solutions to competitive programming problems from platforms like Codeforces, CodeChef, and LeetCode. Organized by difficulty and topic.',
    image: '/projects/cp-solutions.jpg',
    technologies: ['C++', 'Algorithms', 'Data Structures', 'Problem Solving'],
    githubUrl: 'https://github.com/SarvikIIT/cp-solutions',
    liveUrl: '#',
    featured: false
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and Tailwind CSS. Features dark mode, smooth animations, and optimized performance.',
    image: '/projects/portfolio.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    githubUrl: 'https://github.com/SarvikIIT/portfolio',
    liveUrl: '#',
    featured: false
  },
  {
    id: 'data-structures-implementation',
    title: 'Data Structures Implementation',
    description: 'A comprehensive implementation of various data structures in C++ with detailed documentation and performance analysis. Includes custom allocators and memory optimization.',
    image: '/projects/ds-impl.jpg',
    technologies: ['C++', 'STL', 'Memory Management', 'Performance Analysis'],
    githubUrl: 'https://github.com/SarvikIIT/data-structures',
    liveUrl: '#',
    featured: false
  }
]; 