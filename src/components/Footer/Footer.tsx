import styles from './Footer.module.scss';

const Footer = () => {
  const year = new Date().getFullYear();

  const usernameHtml = (
    <span class="comment-wrap">
      <span class={styles.comment}>/*</span>mxsrdesu
      <span class={styles.comment}>*/</span>
    </span>
  );

  return (
    <footer class={styles.footer}>
      &copy; <span class={styles.year}>{year}</span> Maxim {usernameHtml}{' '}
      Sirenev. All rights reserved.
    </footer>
  );
};

export default Footer;
