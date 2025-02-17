import { skillsIcons } from '@assets/skillsIcons';
import type { Skill } from '@customTypes/skill';

export const skills: Skill[] = [
  {
    title: 'Programming languages',
    items: [
      {
        icon: skillsIcons.html,
        name: 'HTML',
      },
      {
        icon: skillsIcons.css,
        name: 'CSS',
      },
      {
        icon: skillsIcons.scss,
        name: 'SCSS',
      },
      {
        icon: skillsIcons.javascript,
        name: 'JavaScript',
      },
      {
        icon: skillsIcons.typescript,
        name: 'TypeScript',
      },
      {
        icon: skillsIcons.python,
        name: 'Python',
      },
    ],
  },
  {
    title: 'Databases',
    items: [
      {
        icon: skillsIcons.mysql,
        name: 'MySQL',
      },
      {
        icon: skillsIcons.postgresql,
        name: 'PostgreSQL',
      },
      {
        icon: skillsIcons.redis,
        name: 'Redis',
      },
    ],
  },
  {
    title: 'Libraries & Frameworks',
    items: [
      {
        icon: skillsIcons.solid,
        name: 'Solid',
      },
      {
        icon: skillsIcons.next,
        name: 'Next',
      },
      {
        icon: skillsIcons.react,
        name: 'React',
      },
      {
        icon: skillsIcons.astro,
        name: 'Astro',
      },
      {
        icon: skillsIcons.rxjs,
        name: 'RxJS',
      },
      {
        icon: skillsIcons.redux,
        name: 'Redux',
      },
      {
        icon: skillsIcons.zustand,
        name: 'Zustand',
      },
      {
        icon: skillsIcons.mobx,
        name: 'MobX',
      },
    ],
  },
  {
    title: 'Testing',
    items: [
      {
        icon: skillsIcons.jest,
        name: 'Jest',
      },
      {
        icon: skillsIcons.vitest,
        name: 'Vitest',
      },
      {
        icon: skillsIcons.cypress,
        name: 'Cypress',
      },
      {
        icon: skillsIcons.storybook,
        name: 'Storybook',
      },
    ],
  },
  {
    title: 'Tools',
    items: [
      {
        icon: skillsIcons.chatgpt,
        name: 'ChatGPT',
      },
      {
        icon: skillsIcons.deepseek,
        name: 'DeepSeek',
      },
      {
        icon: skillsIcons.docker,
        name: 'Docker',
      },
      {
        icon: skillsIcons.linux,
        name: 'Linux',
      },
      {
        icon: skillsIcons.git,
        name: 'Git',
      },
      {
        icon: skillsIcons.webpack,
        name: 'Webpack',
      },
      {
        icon: skillsIcons.vite,
        name: 'Vite',
      },
      {
        icon: skillsIcons.rest,
        name: 'REST',
      },
      {
        icon: skillsIcons.graphql,
        name: 'GraphQL',
      },
      {
        icon: skillsIcons.socketio,
        name: 'WebSockets',
      },
    ],
  },
  {
    title: 'Languages',
    items: [
      {
        name: 'English (B2)',
      },
      {
        name: 'Russian (Native)',
      },
      {
        name: 'Spanish (A2)',
      },
    ],
  },
] as const;
