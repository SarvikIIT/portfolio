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
    id: 'dual-degree',
    title: 'B.Tech + M.Tech Dual Degree',
    subtitle: 'Indian Institute of Technology, BHU',
    description: 'Currently pursuing dual degree in Electrical Engineering with focus on high-performance computing, algorithms, and mathematical modeling. Active in competitive programming and quantitative finance research.',
    period: '2023 - Present',
    type: 'education',
    icon: '🎓',
    tags: ['C++', 'Algorithms', 'Mathematical Modeling', 'Competitive Programming']
  },
  {
    id: 'competitive-programming',
    title: 'Competitive Programming',
    subtitle: 'Codeforces, CodeChef, LeetCode',
    description: 'Active competitive programmer solving algorithmic problems. Participating in coding contests and improving problem-solving skills.',
    period: '2023 - Present',
    type: 'education',
    icon: '🏆',
    tags: ['C++', 'Algorithms', 'Data Structures', 'Problem Solving']
  },
  {
    id: 'quantitative-finance',
    title: 'Quantitative Finance Research',
    subtitle: 'Self-Study & Projects',
    description: 'Exploring quantitative finance concepts including financial modeling, risk management, and algorithmic trading strategies.',
    period: '2023 - Present',
    type: 'education',
    icon: '💰',
    tags: ['Financial Modeling', 'Risk Management', 'Python', 'Statistics']
  }
]; 