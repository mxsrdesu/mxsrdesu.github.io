import type { Component, JSX } from 'solid-js';
import styles from './Tooltip.module.scss';

interface Props {
  text: string;
  children: JSX.Element;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip: Component<Props> = ({ text, children, position = 'top' }) => {
  return (
    <div class={styles.tooltipContainer}>
      <span class={styles.tooltipChildren}>{children}</span>
      <div
        classList={{
          [styles.tooltip]: true,
          [styles[position || 'top']]: true,
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
