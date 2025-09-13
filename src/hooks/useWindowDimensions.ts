"use client";

import { useState, useEffect, useCallback } from 'react';

interface WindowDimensions {
  width: number;
  height: number;
}

interface UseWindowDimensionsReturn extends WindowDimensions {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
} as const;

const useWindowDimensions = (): UseWindowDimensionsReturn => {
  const [dimensions, setDimensions] = useState<WindowDimensions>({
    width: 0,
    height: 0,
  });

  const updateDimensions = useCallback(() => {
    if (typeof window !== 'undefined') {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }, []);

  useEffect(() => {
    // Initialize dimensions
    updateDimensions();

    // Add event listener with passive option for better performance
    window.addEventListener('resize', updateDimensions, { passive: true });
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, [updateDimensions]);

  return {
    ...dimensions,
    isMobile: dimensions.width < BREAKPOINTS.mobile,
    isTablet: dimensions.width >= BREAKPOINTS.mobile && dimensions.width < BREAKPOINTS.tablet,
    isDesktop: dimensions.width >= BREAKPOINTS.tablet,
  };
};

export default useWindowDimensions;
