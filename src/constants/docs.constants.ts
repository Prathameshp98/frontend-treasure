import { DocsOption } from '@/types/docs.types';
import docsLabel from '../Data/docsLabel.json';

export const DOCS_DATA: DocsOption[] = docsLabel as DocsOption[];

export const DOCS_SIDEBAR_CONFIG = {
  width: {
    desktop: '300px',
    mobile: '100%'
  },
  breakpoints: {
    mobile: '768px'
  }
} as const;
