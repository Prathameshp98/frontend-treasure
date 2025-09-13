// Application constants
export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1200,
} as const;

export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const;

export const Z_INDEX = {
  dropdown: 1000,
  modal: 1050,
  tooltip: 1100,
  overlay: 1200,
} as const;

export const ARIA_LABELS = {
  navigation: 'Main navigation',
  search: 'Search',
  close: 'Close',
  menu: 'Menu',
  loading: 'Loading content',
} as const;
