import Block from '@components/UI/Block';
import Title from '@components/UI/Title';
import { skills } from '@constants/skills';
import { For } from 'solid-js';
import styles from './Skills.module.scss';

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
