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
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, payment integration, and admin dashboard.',
    image: '/projects/ecommerce.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Tailwind CSS'],
    githubUrl: 'https://github.com/username/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.com',
    featured: true
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React, TypeScript, and Socket.io.',
    image: '/projects/task-app.jpg',
    technologies: ['React', 'TypeScript', 'Socket.io', 'Node.js', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/username/task-management',
    liveUrl: 'https://task-app-demo.com',
    featured: true
  },
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot',
    description: 'An intelligent chatbot powered by OpenAI GPT-3, featuring natural language processing, conversation memory, and integration with various messaging platforms.',
    image: '/projects/chatbot.jpg',
    technologies: ['Python', 'OpenAI API', 'FastAPI', 'React', 'WebSocket', 'Redis'],
    githubUrl: 'https://github.com/username/ai-chatbot',
    liveUrl: 'https://chatbot-demo.com',
    featured: true
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and Tailwind CSS. Features dark mode, smooth animations, and optimized performance.',
    image: '/projects/portfolio.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    githubUrl: 'https://github.com/username/portfolio',
    liveUrl: 'https://portfolio-demo.com',
    featured: false
  },
  {
    id: 'weather-app',
    title: 'Weather Dashboard',
    description: 'A weather application that displays current weather conditions and forecasts for multiple locations. Features interactive maps and detailed weather analytics.',
    image: '/projects/weather.jpg',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'Leaflet', 'CSS3'],
    githubUrl: 'https://github.com/username/weather-app',
    liveUrl: 'https://weather-demo.com',
    featured: false
  },
  {
    id: 'blog-platform',
    title: 'Blog Platform',
    description: 'A content management system for blogs with markdown support, SEO optimization, and analytics dashboard. Built with Next.js and Prisma.',
    image: '/projects/blog.jpg',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/username/blog-platform',
    liveUrl: 'https://blog-demo.com',
    featured: false
  }
]; 