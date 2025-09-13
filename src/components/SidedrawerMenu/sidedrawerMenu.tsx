
import { memo } from "react";
import Image from "next/image";

// Utility function to conditionally join class names
const classNames = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

import menu_ from '../../Data/Images/app.webp';
import search_ from '../../Data/Images/search_.webp';

import styles from './sidedrawerMenu.module.css';
import SideDrawerMenuProps from "./sidedrawerMenu.d";

const SidedrawerMenu = memo(({
    onSearchOpen,
}: SideDrawerMenuProps) => {

    return (
        <div className={classNames(styles.SidedrawerMenuMain)}>
            <button
                type="button"
                onClick={onSearchOpen}
                aria-label="Open search"
                className={styles.searchButton}
            >
                <Image 
                    src={search_}
                    alt=""
                    height={25}
                    width={25}
                    aria-hidden="true"
                />
            </button>
            <span className={styles.separator} aria-hidden="true">|</span>
            <button
                type="button"
                aria-label="Open menu"
                className={styles.menuButton}
            >
                <Image 
                    src={menu_}
                    alt=""
                    height={30}
                    width={30}
                    aria-hidden="true"
                />
            </button>
        </div>
    );
});

SidedrawerMenu.displayName = 'SidedrawerMenu';

export default SidedrawerMenu;