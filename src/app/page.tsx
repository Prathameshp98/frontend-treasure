"use client";

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { useWindowDimensions } from '@/hooks';

// Utility function to conditionally join class names
const classNames = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import Loader from '@/components/Loader/loading';

import styles from './page.module.css';
import './zz_base_style.css';

// Dynamic import for better code splitting
const UI = dynamic(() => import('@/components/UI/ui'), {
  loading: () => <Loader />,
  ssr: false,
});

export default function Home() {
  const { width: windowWidth, isMobile } = useWindowDimensions();
  const isInitialized = windowWidth > 0;

  return (
    <ErrorBoundary>
      <main className={classNames(styles.homeMain)} role="main">
        <Suspense fallback={<Loader />}>
          {!isInitialized ? (
            <Loader />
          ) : (
            <UI />
          )}
        </Suspense>
      </main>
    </ErrorBoundary>
  );
}
