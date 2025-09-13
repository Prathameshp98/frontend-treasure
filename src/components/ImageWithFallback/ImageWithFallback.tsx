"use client";

import { useState, useCallback } from 'react';
import Image from 'next/image';
import styles from './ImageWithFallback.module.css';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fallbackIcon?: React.ReactNode;
  priority?: boolean;
}

const ImageWithFallback = ({
  src,
  alt,
  width = 400,
  height = 200,
  className = '',
  fallbackIcon,
  priority = false
}: ImageWithFallbackProps) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoading(false);
  }, []);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  if (hasError) {
    return (
      <div 
        className={`${styles.fallback} ${className}`}
        style={{ width, height }}
        role="img"
        aria-label={alt}
      >
        {fallbackIcon || (
          <div className={styles.fallbackContent}>
            <svg 
              className={styles.fallbackIcon}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-4.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" 
              />
            </svg>
            <span className={styles.fallbackText}>Image not available</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`${styles.imageContainer} ${className}`}>
      {isLoading && (
        <div 
          className={styles.loadingPlaceholder}
          style={{ width, height }}
        >
          <div className={styles.loadingSpinner} />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onError={handleError}
        onLoad={handleLoad}
        priority={priority}
        className={`${styles.image} ${isLoading ? styles.loading : ''}`}
      />
    </div>
  );
};

export default ImageWithFallback;
