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
    title: 'IDD (Integrated Dual Degree) - EEE',
    subtitle: 'Indian Institute of Technology, BHU',
    description: 'Pursuing Integrated Dual Degree in Electrical & Electronics Engineering (2024-2029). Specializing in high-performance computing, advanced algorithms, and mathematical modeling. Maintaining excellent academic performance while actively participating in competitive programming and quantitative finance research. Currently in 2nd year with strong foundation in system-level programming and optimization techniques.',
    period: '2024 - 2029',
    type: 'education',
    icon: '🎓',
    tags: ['Electrical & Electronics Engineering', 'High-Performance Computing', 'Algorithms', 'System Programming']
  },
  {
    id: 'worldquant-research',
    title: 'Research Consultant',
    subtitle: 'WorldQuant Brain',
    description: 'Working as a research consultant on quantitative finance projects. Developing algorithmic trading strategies, financial models, and risk management systems. Collaborating with global teams on cutting-edge quantitative research and contributing to innovative financial technology solutions.',
    period: '2024 - Present',
    type: 'work',
    icon: '💼',
    tags: ['Quantitative Finance', 'Algorithmic Trading', 'Financial Modeling', 'Python', 'C++']
  },
  {
    id: 'competitive-programming',
    title: 'Competitive Programming',
    subtitle: 'Codeforces, CodeChef, LeetCode',
    description: 'Active competitive programmer with exceptional problem-solving skills. Regular participation in international coding contests with consistent high rankings. Specialized in dynamic programming, graph algorithms, and advanced data structures. Achieved significant milestones in algorithmic competitions and continuously improving problem-solving techniques.',
    period: '2024 - Present',
    type: 'education',
    icon: '🏆',
    tags: ['C++', 'Algorithms', 'Data Structures', 'Problem Solving', 'Dynamic Programming']
  },
  {
    id: 'quantitative-finance',
    title: 'Quantitative Finance Research',
    subtitle: 'Self-Study & Research',
    description: 'Comprehensive study of quantitative finance concepts including financial modeling, risk management, and algorithmic trading strategies. Developing expertise in statistical analysis, time series modeling, and portfolio optimization. Actively researching advanced quantitative methods and their applications in modern financial markets.',
    period: '2024 - Present',
    type: 'education',
    icon: '💰',
    tags: ['Financial Modeling', 'Risk Management', 'Python', 'Statistics', 'Portfolio Optimization']
  }
]; 