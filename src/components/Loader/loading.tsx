
import { memo } from 'react';
import { classNames, ARIA_LABELS } from '@/utils';

import styles from './loader.module.css';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Loader = memo(({ size = 'medium', className }: LoaderProps) => {
  return (
    <div 
      className={classNames(styles.LoaderMain, className)}
      role="status"
      aria-label={ARIA_LABELS.loading}
    >
      <div 
        className={classNames(styles.clockLoader, styles[size])}
        aria-hidden="true"
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
});

Loader.displayName = 'Loader';

export default Loader;