"use client"

import Logo from "../Logo/logo";
import HeaderList from "../Headerlist/headerList";
import Search from "../Search/search";
import Socials from "../Socials/socials"; 
import SidedrawerMenu from "../SidedrawerMenu/sidedrawerMenu";

import Styles from './header.module.css';

import useWindowDimensions from "@/Utils/useWindowDimensions";

import screen from '../../Data/dimensions.json';

import HeaderProps from "./headerProps";

const Header = ({
    setSearchBox
}: HeaderProps) => {

    return (
        <div className={`${Styles.headerMain}`}>
            <div className={`${Styles.headerMainInner}`}>
                <div className={`${Styles.headerMainLeft}`}>
                    <div className={`${Styles.headerMainLeftInner}`}>
                        <Logo />
                        {useWindowDimensions?.() >= screen.MAX_TABLET_WIDTH && <HeaderList />}
                    </div>
                    <Search 
                        setSearchBox={setSearchBox} 
                    />
                </div>
                <div className={`${Styles.headerMainRight}`}>
                    {useWindowDimensions?.() >= screen.MAX_SMALL_TABLET_WIDTH
                    ? <Socials />
                    : <SidedrawerMenu 
                        setSearchBox={setSearchBox} 
                        />}
                </div>
            </div>
        </div>
    )
}

export default Header;