
import { memo } from "react";
import Image from "next/image";
import { useWindowDimensions } from "@/hooks";

// Utility function to conditionally join class names
const classNames = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

import styles from './search.module.css';
import search_ from '../../Data/Images/search_.webp';
import dimension from '../../Data/dimensions.json';
import SearchProps from './search.d';

const Search = memo(({
    onSearchOpen
}: SearchProps) => {
    const { width } = useWindowDimensions();

    if (width < dimension.MAX_SMALL_TABLET_WIDTH) {
        return null;
    }

    return (
        <div 
            className={classNames(styles.SearchMain)}
            onClick={onSearchOpen}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSearchOpen?.();
                }
            }}
            aria-label="Open search"
        >
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
                placeholder="Search"
                readOnly
                tabIndex={-1}
            />
        </div>
    );
});

Search.displayName = 'Search';

export default Search;