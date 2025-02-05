import SocialLinks from './SocialLinks';
import NameCard from './NameCard';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header class={styles.header}>
      <NameCard />
      <SocialLinks />
    </header>
  );
};

export default Header; 