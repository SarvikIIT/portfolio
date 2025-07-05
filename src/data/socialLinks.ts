export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/SarvikIIT',
    icon: 'github',
    color: 'hover:text-gray-400'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/sarvik-iit',
    icon: 'linkedin',
    color: 'hover:text-blue-400'
  },
  {
    name: 'Codeforces',
    url: 'https://codeforces.com/profile/sarvik',
    icon: 'codeforces',
    color: 'hover:text-blue-600'
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/sarvik',
    icon: 'leetcode',
    color: 'hover:text-yellow-400'
  },
  {
    name: 'Email',
    url: 'mailto:sarvik.student.cd.eee24@iitbhu.ac.in',
    icon: 'mail',
    color: 'hover:text-red-400'
  }
]; 