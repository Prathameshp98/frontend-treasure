"use client";

import { memo } from "react";
import { useWindowDimensions } from "@/hooks";
import { classNames } from "@/utils";
import Logo from "../Logo/logo";
import HeaderList from "../Headerlist/headerList";
import Search from "../Search/search";
import Socials from "../Socials/socials"; 
import SidedrawerMenu from "../SidedrawerMenu/sidedrawerMenu";

import styles from './header.module.css';
import screen from '../../Data/dimensions.json';
import HeaderProps from "./headerProps";

const Header = memo(({
    onSearchOpen
}: HeaderProps) => {
    const { width } = useWindowDimensions();

    return (
        <header className={classNames(styles.headerMain)} role="banner">
            <div className={styles.headerMainInner}>
                <div className={styles.headerMainLeft}>
                    <div className={styles.headerMainLeftInner}>
                        <Logo />
                        {width >= screen.MAX_TABLET_WIDTH && <HeaderList />}  
                    </div>
                    <Search 
                        onSearchOpen={onSearchOpen} 
                    />
                </div>
                <div className={styles.headerMainRight}>
                    {width >= screen.MAX_SMALL_TABLET_WIDTH
                    ? <Socials />
                    : <SidedrawerMenu 
                        onSearchOpen={onSearchOpen} 
                        />}
                </div>
            </div>
        </header>
    );
});

Header.displayName = 'Header';

export default Header;