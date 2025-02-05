import type { ParentComponent } from 'solid-js';
import styles from './Block.module.scss';

interface Props {
  class?: string;
  fullWidth?: boolean;
}

const Block: ParentComponent<Props> = ({ class: className, children, fullWidth = false }) => {
  return (
    <div
      classList={{
        [styles.block]: true,
        [className || '']: !!className,
        [styles.fullWidth]: fullWidth,
      }}
    >
      {children}
    </div>
  );
};

export default Block; 