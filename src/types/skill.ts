import type { JSX } from 'solid-js';

export interface Skill {
  title: string;
  items: SkillItem[];
}

export type SkillItem = {
  icon?: JSX.Element; // svg in jsx
  name: string;
};
