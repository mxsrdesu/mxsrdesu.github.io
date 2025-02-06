import type { Component, JSX } from 'solid-js';
import styles from './Text.module.scss';

interface Props {
  class?: string;
  children: JSX.Element;
}

const Text: Component<Props> = ({ children, class: className }) => {
  return <p class={`${styles.text} ${className || ''}`}>{children}</p>;
};

export default Text;
