import { For } from 'solid-js';
import Title from '@components/UI/Title';
import Block from '@components/UI/Block';
import styles from './Skills.module.scss';
import { skills } from '@constants/skills';

const Skills = () => {
  return (
    <Block>
      <Title size="large" bottomMargin>
        My skills
      </Title>

      <For each={skills}>
        {({ title, items }) => (
          <div class={styles.category}>
            <Title>{title}</Title>

            <div class={styles.skillsList}>
              <For each={items}>
                {({ icon, name }) => (
                  <div class={styles.skillItem}>
                    {icon && <div class={styles.skillIcon}>{icon}</div>}
                    <div class={styles.skillName}>{name}</div>
                  </div>
                )}
              </For>
            </div>
          </div>
        )}
      </For>
    </Block>
  );
};

export default Skills;
