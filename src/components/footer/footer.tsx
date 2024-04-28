"use client";

import { useState } from 'react';

import Link from 'next/link';
import Image from "next/image";

import Styles from './footer.module.css';

import down_ from '@/Data/Images/down.webp';
import github_ from '@/Data/Images/github.webp';
import email_ from '@/Data/Images/gmail.webp';
import twitter_ from '@/Data/Images/twitter.webp';

const dropdownData = [
    {
        id: 1,
        name: 'ABOUT ME',
        options: ['Portfolio', 'Linkedln', 'Contact Me']
    },
    {
        id: 2,
        name: 'LINKS',
        options: ['Home', 'Docs', 'Widgets', 'Icons', 'Examples']
    },
    {
        id: 3,
        name: 'COMMUNITY',
        options: ['Discussion', 'Issues', 'Stack Overflow']
    }
]

const Footer = () => {

    const[list, setList] = useState<boolean[]>([false, false, false]);

    const listUpdateHandler = (item: any) => {
        const updatedList = [...list];
        updatedList[item] = updatedList[item] === true ? false : true;
        console.log(updatedList);
        setList(updatedList);
    }

    return (
        <div className={`${Styles.FooterMain}`}>
            <div className={`${Styles.FooterMainSub}`}>
                <div className={`${Styles.FooterDropdowns}`}>
                    {dropdownData.map((item: any, index: number) => (
                        <div 
                            className={`${Styles.DropdownGroup}`}
                            key={item.id}
                        >
                            <div 
                                className={`${Styles.DropdownHeading}`}
                                onClick={() => listUpdateHandler(index)}
                                tabIndex={0}
                            >
                                <h2>{item.name}</h2>
                                <Image 
                                    src={down_}
                                    alt={"down"}
                                    height={20}
                                    width={20}
                                />
                            </div>
                            {list[index] && <ul 
                                className={`${Styles.DropdownOptions}`}
                            >
                                {item.options.map((option: string, index: number) => (
                                    <li key={Math.random()}>{item.options[index]}</li>        
                                ))} 
                            </ul>}   
                        </div>
                    ))}
                    
                </div>
                <div className={`${Styles.FooterIcons}`}>
                    <Link 
                        href="https://github.com/Prathameshp98"
                        target='_blank'
                        tabIndex={0}
                    >
                        <Image 
                            src={github_}
                            alt={"github"}
                            height={25}
                            width={25}
                        />
                    </Link>
                    <Link 
                        href=""
                        target='_blank'
                        tabIndex={0}
                    >
                        <Image 
                            src={email_}
                            alt={"gmail"}
                            height={25}
                            width={25}   
                        />
                    </Link>
                    <Link 
                        href=""
                        target='_blank'
                        tabIndex={0}
                    >
                        <Image 
                            src={twitter_}
                            alt={"twitter"}
                            height={15}
                            width={15}
                        />
                    </Link>
                </div>
                <div className={`${Styles.FooterCopyright}`}>
                    <p>© 2024 Frontend Treasure, Inc. "Frontend Treasure" is registered trademark of Frontend, Inc. All Rights Reserved.</p>
                    <h6>Terms of Use | Privacy Policy | Cookie Policy</h6>
                </div>
            </div>
        </div>
    )
}

export default Footer;