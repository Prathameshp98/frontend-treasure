
import { memo } from 'react';

// Utility function to conditionally join class names
const classNames = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

// ARIA labels for accessibility
const ARIA_LABELS = {
  loading: 'Loading content, please wait',
} as const;

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