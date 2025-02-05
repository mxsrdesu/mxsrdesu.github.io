import { Component, JSX } from 'solid-js';
import styles from './Link.module.scss';

interface Props extends JSX.AnchorHTMLAttributes<HTMLAnchorElement> {
  class?: string;
}

const Link: Component<Props> = ({ children, class: className, ...props }) => {
  return (
    <a
      {...props}
      class={`${styles.link} ${className || ''}`}
    >
      {children}
    </a>
  );
};

export default Link;