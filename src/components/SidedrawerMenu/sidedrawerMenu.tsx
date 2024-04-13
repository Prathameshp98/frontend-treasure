
import Image from "next/image";

import menu_ from '../../Data/Images/app.webp';
import search_ from '../../Data/Images/search_.webp';

import Styles from './sidedrawerMenu.module.css';

import SideDrawerMenuProps from "./sidedrawerMenu.d";

const SidedrawerMenu = ({
    setSearchBox,
}: SideDrawerMenuProps) => {

    return (
        <div className={`${Styles.SidedrawerMenuMain}`}>
            <Image 
                src={search_}
                alt={'search'}
                height={25}
                width={25}
                onClick={() => setSearchBox?.()}
            />
            <p>|</p>
            <Image 
                src={menu_}
                alt={'meu'}
                height={30}
                width={30}
                tabIndex={0}
            />
        </div>
    )
}

export default SidedrawerMenu;