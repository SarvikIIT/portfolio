export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/username',
    icon: 'github',
    color: 'hover:text-gray-400'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/username',
    icon: 'linkedin',
    color: 'hover:text-blue-400'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/username',
    icon: 'twitter',
    color: 'hover:text-blue-400'
  },
  {
    name: 'Email',
    url: 'mailto:john.doe@example.com',
    icon: 'mail',
    color: 'hover:text-red-400'
  },
  {
    name: 'Portfolio',
    url: 'https://portfolio.com',
    icon: 'globe',
    color: 'hover:text-green-400'
  }
]; 