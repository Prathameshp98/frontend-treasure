"use client";

import { memo } from "react";
import { useToggle } from "@/hooks";

// Utility function for conditional CSS classes
const conditionalClasses = (
  baseClass: string,
  conditionalClasses: Record<string, boolean>
): string => {
  const classNames = (...classes: (string | undefined | null | false)[]): string => {
    return classes.filter(Boolean).join(' ');
  };
  
  const additional = Object.entries(conditionalClasses)
    .filter(([, condition]) => condition)
    .map(([className]) => className);
  
  return classNames(baseClass, ...additional);
};
import Header from "../header/header";
import Body from "../Body/body";
import Features from "../Features/features";
import Footer from "../footer/footer";
import SearchBox from "../Search/searchBox";

import styles from './ui.module.css';

const UI = memo(() => {
  const { isOpen: isSearchOpen, open: openSearch, close: closeSearch } = useToggle(false);

  return (
    <div className={styles.UIMain}>
      <div 
        className={conditionalClasses(styles.mainContainer, {
          [styles.MainContainerBlur]: isSearchOpen
        })}
      >
        <Header onSearchOpen={openSearch} />
        <Body />
        <Features />
        <Footer />
      </div>
      
      {isSearchOpen && (
        <SearchBox 
          isOpen={isSearchOpen}
          onClose={closeSearch}
        />
      )}
    </div>
  );
});

UI.displayName = 'UI';

export default UI;