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
  // Education
  {
    id: 'idd-degree',
    title: 'IDD (Integrated Dual Degree)',
    subtitle: 'Indian Institute of Technology, BHU',
    description: 'Pursuing Integrated Dual Degree in Electrical Engineering. Focus on high-performance computing, algorithms, and mathematical modeling. Maintaining strong academic performance while exploring advanced topics.',
    period: '2023 - Present',
    type: 'education',
    icon: '🎓',
    tags: ['Electrical Engineering', 'High-Performance Computing', 'Algorithms']
  },
  {
    id: 'competitive-programming',
    title: 'Competitive Programming',
    subtitle: 'Codeforces, CodeChef, LeetCode',
    description: 'Active competitive programmer with strong problem-solving skills. Regular participation in coding contests and continuous improvement in algorithmic thinking.',
    period: '2023 - Present',
    type: 'education',
    icon: '🏆',
    tags: ['C++', 'Algorithms', 'Data Structures', 'Problem Solving']
  },
  {
    id: 'quantitative-finance',
    title: 'Quantitative Finance',
    subtitle: 'Self-Study & Research',
    description: 'Deep dive into quantitative finance concepts. Studying financial modeling, risk management, and algorithmic trading strategies through self-directed learning.',
    period: '2023 - Present',
    type: 'education',
    icon: '💰',
    tags: ['Financial Modeling', 'Risk Management', 'Python', 'Statistics']
  },
  {
    id: 'academic-projects',
    title: 'Academic Projects',
    subtitle: 'Coursework & Personal Projects',
    description: 'Working on various academic and personal projects including mathematical modeling, algorithm implementation, and software development.',
    period: '2023 - Present',
    type: 'education',
    icon: '🔬',
    tags: ['C++', 'Python', 'Mathematical Modeling', 'Software Development']
  }
]; 