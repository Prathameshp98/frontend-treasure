"use client";
import { useRef, useEffect, useCallback, memo } from "react";
import Image from "next/image";
import { classNames } from "@/utils";

import styles from './searchBox.module.css';
import search_ from '../../Data/Images/search.webp';
import SearchBoxProps from './searchBox.d';

const SearchBox = memo(({
    onClose,
    isOpen
}: SearchBoxProps) => {

    const boxRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClose = useCallback(() => {
        onClose?.();
    }, [onClose]);

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => { 
                inputRef?.current?.focus();
            }, 200);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
            handleClose();
          }
        };

        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscapeKey);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
          document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [handleClose]);

    return (
        <div 
            className={classNames(styles.SearchBoxMain)}
            ref={boxRef}
            role="dialog"
            aria-label="Search documentation"
            aria-modal="true"
        >
            <div className={styles.SearchBoxHeader}>
                <div className={styles.SearchMain}>
                    <Image 
                        src={search_}
                        alt=""
                        height={18}
                        width={18}
                        aria-hidden="true"
                    />
                    <input 
                        className={styles.Search}
                        spellCheck="false"
                        type="text"
                        placeholder="Search Docs"
                        ref={inputRef}
                        tabIndex={0}
                        aria-label="Search input"
                    />
                </div>
            </div>
            <div className={styles.SearchBoxBody}>
                {/* Search results will be displayed here */}
            </div>
            <div className={styles.SearchBoxFooter}>
                {/* Search footer content */}
            </div>
        </div>
    );
});

SearchBox.displayName = 'SearchBox';

export default SearchBox;