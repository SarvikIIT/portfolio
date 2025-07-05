export interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  period: string;
  type: 'work' | 'education';
  icon: string;
  tags?: string[];
}

export const experience: TimelineItem[] = [
  // Work Experience
  {
    id: 'senior-developer',
    title: 'Senior Full Stack Developer',
    subtitle: 'TechCorp Inc.',
    description: 'Led development of enterprise web applications using React, Node.js, and cloud technologies. Mentored junior developers and implemented best practices for code quality and performance.',
    period: '2022 - Present',
    type: 'work',
    icon: '💼',
    tags: ['React', 'Node.js', 'AWS', 'MongoDB', 'Team Leadership']
  },
  {
    id: 'full-stack-developer',
    title: 'Full Stack Developer',
    subtitle: 'StartupXYZ',
    description: 'Built and maintained multiple web applications from concept to deployment. Collaborated with design and product teams to deliver user-centric solutions.',
    period: '2020 - 2022',
    type: 'work',
    icon: '🚀',
    tags: ['React', 'Python', 'PostgreSQL', 'Docker', 'Agile']
  },
  {
    id: 'junior-developer',
    title: 'Junior Developer',
    subtitle: 'Digital Solutions Ltd.',
    description: 'Developed frontend components and backend APIs. Participated in code reviews and contributed to team documentation.',
    period: '2019 - 2020',
    type: 'work',
    icon: '👨‍💻',
    tags: ['JavaScript', 'Node.js', 'MongoDB', 'Git', 'Testing']
  },
  
  // Education
  {
    id: 'masters-degree',
    title: 'Master of Science in Computer Science',
    subtitle: 'Stanford University',
    description: 'Specialized in software engineering and artificial intelligence. Completed thesis on machine learning applications in web development.',
    period: '2017 - 2019',
    type: 'education',
    icon: '🎓',
    tags: ['Machine Learning', 'Software Engineering', 'Research']
  },
  {
    id: 'bachelors-degree',
    title: 'Bachelor of Science in Computer Science',
    subtitle: 'University of California, Berkeley',
    description: 'Graduated with honors. Focused on web development, algorithms, and data structures. Active member of the Computer Science Club.',
    period: '2013 - 2017',
    type: 'education',
    icon: '📚',
    tags: ['Algorithms', 'Data Structures', 'Web Development']
  },
  {
    id: 'certifications',
    title: 'Professional Certifications',
    subtitle: 'Various Institutions',
    description: 'AWS Certified Developer, Google Cloud Professional Developer, and various other industry-recognized certifications.',
    period: '2019 - Present',
    type: 'education',
    icon: '🏆',
    tags: ['AWS', 'Google Cloud', 'Certifications']
  }
]; 