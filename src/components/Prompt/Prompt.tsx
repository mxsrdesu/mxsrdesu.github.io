import styles from './Prompt.module.scss';

const Prompt = () => {
  return (
    <div class={styles.prompt}>
      <span class={styles.user}>mxsrdesu</span>
      <span class={styles.at}>@</span>
      <span class={styles.host}>void</span>
      <span class={styles.cursor} />
    </div>
  );
};

export default Prompt;
