"use client";

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { DocsOption } from '@/types/docs.types';
import { useToggle } from '@/hooks';
import { conditionalClasses } from '@/utils';
import styles from './docsSidebar.module.css';
import googleForms from '../../Data/Images/google-forms.webp';
import { DOCS_DATA } from '../../constants/docs.constants';

interface DocsSidebarProps {
  onOptionSelect?: (option: string) => void;
  className?: string;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

const DocsSidebar = ({ 
  onOptionSelect, 
  className = '', 
  isCollapsed = false,
  onToggleCollapse 
}: DocsSidebarProps) => {
  const [activeOption, setActiveOption] = useState<string | null>(null);
  const { isOpen: expandedSections, toggle: toggleSection } = useToggle(true);

  // Memoize the click handler to prevent unnecessary re-renders
  const handleOptionClick = useCallback((option: string) => {
    setActiveOption(option);
    onOptionSelect?.(option);
  }, [onOptionSelect]);

  // Memoize keyboard handler
  const handleKeyDown = useCallback((e: React.KeyboardEvent, option: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleOptionClick(option);
    }
  }, [handleOptionClick]);

  return (
    <aside 
      className={conditionalClasses(styles.docsSidebar, {
        [styles.collapsed]: isCollapsed,
        [className]: Boolean(className)
      })}
      aria-label="Documentation navigation"
    >
      <div className={styles.sidebarHeader}>
        <button
          type="button"
          className={styles.toggleButton}
          onClick={onToggleCollapse}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          aria-expanded={!isCollapsed}
        >
          <svg 
            className={conditionalClasses(styles.toggleIcon, {
              [styles.rotated]: isCollapsed
            })}
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </button>
        {!isCollapsed && (
          <h2 className={styles.sidebarTitle}>Documentation</h2>
        )}
      </div>
      
      {!isCollapsed && (
        <nav>
          <ul className={styles.docsNavList}>
            {DOCS_DATA.map((section: DocsOption, sectionIndex: number) => (
              <li key={section.title} className={styles.section}>
                <button
                  type="button"
                  className={styles.sectionTitle}
                  onClick={toggleSection}
                  aria-expanded={expandedSections}
                >
                  <svg 
                    className={styles.sectionIcon}
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10,9 9,9 8,9"/>
                  </svg>
                  <span>{section.title}</span>
                  <svg 
                    className={conditionalClasses(styles.expandIcon, {
                      [styles.rotated]: expandedSections
                    })}
                    width="12" 
                    height="12" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>
                
                {expandedSections && (
                  <ul className={styles.optionList}>
                    {section.options.map((option: string, optionIndex: number) => (
                      <li key={`${sectionIndex}-${optionIndex}`}>
                        <button
                          type="button"
                          className={conditionalClasses(styles.option, {
                            [styles.active]: activeOption === option
                          })}
                          onClick={() => handleOptionClick(option)}
                          onKeyDown={(e) => handleKeyDown(e, option)}
                          aria-current={activeOption === option ? 'page' : undefined}
                        >
                          {option}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </aside>
  );
};

export default DocsSidebar;