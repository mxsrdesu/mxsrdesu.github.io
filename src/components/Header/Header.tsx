import styles from './Header.module.scss';
import NameCard from './NameCard';
import SocialLinks from './SocialLinks';

const Header = () => {
  return (
    <header class={styles.header}>
      <NameCard />
      <SocialLinks />
    </header>
  );
};

export default Header;
