import type { SocialLink } from '@customTypes/socialLink';

export const socialLinks: SocialLink[] = [
  {
    url: 'https://github.com/mxsrdesu',
    icon: 'fa-brands fa-github',
    title: 'GitHub',
  },
  {
    url: 'https://linkedin.com/in/mxsrdesu',
    icon: 'fa-brands fa-linkedin',
    title: 'LinkedIn',
  },
  {
    url: 'https://t.me/mxsrdesu',
    icon: 'fa-brands fa-telegram',
    title: 'Telegram',
  },
  {
    url: 'https://leetcode.com/mxsrdesu',
    icon: 'fa-solid fa-code',
    title: 'LeetCode',
  },
  {
    url: 'mailto:maxim.sirenev@icloud.com',
    icon: 'fa-solid fa-envelope',
    title: 'Mail',
  },
] as const;
