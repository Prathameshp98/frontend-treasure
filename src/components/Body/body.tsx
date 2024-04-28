'use client';
import { useState } from "react";

import Image from "next/image";

import _logo from '../../Data/Images/t-mobile-big.webp';
import _clipboard from '../../Data/Images/paste.webp';
import _tick from '../../Data/Images/tick.webp';

import Styles from './body.module.css';

import useWindowDimensions from "@/Utils/useWindowDimensions";
import dimension from '../../Data/dimensions.json';
import packageInfo from '../../Data/packageInfo.json';

const Body = () => {

    const[tick, setTick] = useState<boolean>(false);
    const installer = `${packageInfo["package-main"]}@${packageInfo.version}` 

    const copyToClipboard = () => {
        navigator.clipboard.writeText(installer)
            .then(() => {
                setTick(true);
                setTimeout(() => {
                    setTick(false);
                }, 2000);
            })
            .catch(err => {
                // Handle errors if any
                console.error('Failed to copy text to clipboard:', err);
            });
    }

    return (
        <div className={`${Styles.BodyMain}`}>
            <div className={`${Styles.BodyMainInner}`}>
                <div className={`${Styles.LogoMain}`}>
                    <Image 
                        src={_logo}
                        alt={'frontend treasure logo'}
                        width={useWindowDimensions?.() >= dimension.MAX_SMALL_LAPTOP_WIDTH ? 200 : 150}
                        height={useWindowDimensions?.() >= dimension.MAX_SMALL_LAPTOP_WIDTH ? 200 : 150}
                    />
                </div>
                <div className={`${Styles.TextMain}`}>
                    <h1>Create fast & responsive</h1>
                    <h1>websites with us.</h1>
                    {useWindowDimensions?.() >= dimension.MAX_TABLET_WIDTH ?
                        <div>
                            <h4>Powerful, Acessible, and feature-packed frontend.</h4> 
                            <h4>Build and customize with Sass,</h4> 
                            <h4>utilize prebuilt grid system and components,</h4>  
                            <h4>and bring projects to life with powerful JavaScript packages.</h4>
                        </div>
                        :
                        <div>
                            <h4>
                                Powerful, Acessible, and feature-packed frontend.
                                Build and customize with Sass,
                                and bring projects to life with powerful JavaScript packages.
                            </h4>
                        </div>
                    }
                </div>
                <div className={`${Styles.PackageMain}`}>
                    {tick ?
                        <Image 
                            src={_tick}
                            alt={'tick'}
                            width={useWindowDimensions?.() >= dimension.MAX_MOBILE_WIDTH ? 25 : 20}
                            height={useWindowDimensions?.() >= dimension.MAX_MOBILE_WIDTH ? 25 : 20}
                        /> :
                        <Image 
                            src={_clipboard}
                            alt={'copy'}
                            width={useWindowDimensions?.() >= dimension.MAX_MOBILE_WIDTH ? 25 : 20}
                            height={useWindowDimensions?.() >= dimension.MAX_MOBILE_WIDTH ? 25 : 20}
                            onClick={copyToClipboard}
                        />
                    }
                    <div>
                        <p>
                            <span>$</span>
                            {installer}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;