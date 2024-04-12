"use client"

import Logo from "../Logo/logo";
import HeaderList from "../Headerlist/headerList";
import Search from "../Search/search";
import Socials from "../Socials/socials"; 
import SidedrawerMenu from "../SidedrawerMenu/sidedrawerMenu";

import Styles from './header.module.css';

import useWindowDimensions from "@/Utils/useWindowDimensions";

import screen from '../../Data/dimensions.json';

const Header = () => {

    return (
        <div className={`${Styles.headerMain}`}>
            <div className={`${Styles.headerMainInner}`}>
                <div className={`${Styles.headerMainLeft}`}>
                    <div className={`${Styles.headerMainLeftInner}`}>
                        <Logo />
                        {useWindowDimensions?.() >= screen.MAX_MOBILE_WIDTH && <HeaderList />}
                    </div>
                    <Search />
                </div>
                <div className={`${Styles.headerMainRight}`}>
                    {useWindowDimensions?.() >= screen.MAX_MOBILE_WIDTH 
                    ? <Socials />
                    : <SidedrawerMenu />}
                </div>
            </div>
        </div>
    )
}

export default Header;