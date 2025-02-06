import Block from '@UI/Block';
import Text from '@UI/Text';
import Title from '@UI/Title';
import { getMyAge } from '@utils/getMyAge';
import styles from './About.module.scss';

const About = () => {
  const age = getMyAge();

  return (
    <Block>
      <Title class={styles.title} size="large" bottomMargin>
        Hey there! <span class={styles.wave}>👋</span>
      </Title>
      <Text>
        I'm {age} y.o. guy from Russia. <br />
        I'm into IT since 16, yet still don't know what I'm doing. <br />I like
        chatting with GPT about pretty much anything and touching grass <br />
        (sometimes)
      </Text>
    </Block>
  );
};

export default About;
