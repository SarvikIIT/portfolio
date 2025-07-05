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
    id: 'project-2',
    title: 'Project 2',
    description: 'Coming soon...',
    image: '/projects/placeholder.jpg',
    technologies: ['C++', 'Python', 'Algorithms'],
    githubUrl: '#',
    liveUrl: '#',
    featured: true
  },
  {
    id: 'project-3',
    title: 'Project 3',
    description: 'Coming soon...',
    image: '/projects/placeholder.jpg',
    technologies: ['C++', 'Python', 'Algorithms'],
    githubUrl: '#',
    liveUrl: '#',
    featured: true
  }
]; 