"use client"

import { useState } from "react";

import Header from "../header/header";
import Footer from "../footer/footer";
import SearchBox from "../Search/searchBox";

import Styles from './ui.module.css';

const UI = () => {

    const[searchBox, setSearchBox] = useState<boolean>(false);

    return (
        <div className={`${Styles.UIMain}`}>
            <div className={`${searchBox ? Styles.MainContainerBlur : ''}`}>
                <Header 
                    setSearchBox={() => setSearchBox(true)}
                />
                <Footer />
            </div>
            {searchBox && <SearchBox 
                searchBox={searchBox}
                setSearchBox={() => setSearchBox(false)}
            />}
        </div>
    )
}

export default UI;