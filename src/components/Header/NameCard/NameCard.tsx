import Block from '@UI/Block';
import Title from '@UI/Title';
import styles from './NameCard.module.scss';


const NameCard = () => {
  return (
    <Block>
      <Title class={styles.name} hasGradient size='large'>Maxim Sirenev<span class={styles.nameEmoji}>🌸</span></Title>
      <Title class={styles.occupation} size='medium'>Fullstack Engineer<span class={styles.occupationEmoji}>💻</span></Title>
    </Block>
  );
};

export default NameCard;
