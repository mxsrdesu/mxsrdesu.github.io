import Block from '@UI/Block';
import Link from '@UI/Link';
import { socialLinks } from '@constants/socialLinks';
import { For } from 'solid-js';
import styles from './SocialLinks.module.scss';

const SocialLinks = () => {
  return (
    <Block class={styles.links}>
      <For each={socialLinks}>
        {({ url, icon, title }) => (
          <Link href={url} target="_blank" class={styles.link}>
            <i class={icon} />
            <span>{title}</span>
          </Link>
        )}
      </For>
    </Block>
  );
};

export default SocialLinks;
