import type { ParentComponent } from 'solid-js';
import styles from './Title.module.scss';

interface Props {
  class?: string;
  hasGradient?: boolean;
  size?: 'small' | 'medium' | 'large';
  bottomMargin?: boolean;
}

const Title: ParentComponent<Props> = ({ class: className, hasGradient = false, size = 'medium', bottomMargin = false, children }) => {
  return (
    <div
      classList={{
        [styles[size]]: !!size,
        [className || '']: !!className,
        [styles.gradientLine]: hasGradient,
        [styles.bottomMargin]: bottomMargin
      }}
    >
      {children}
    </div>
  );
};

export default Title; 