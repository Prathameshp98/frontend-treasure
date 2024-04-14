"use client";
import { useRef, useEffect } from "react";

import Image from "next/image";

import Styles from './searchBox.module.css';

import search_ from '../../Data/Images/search.webp';

import SearchBoxProps from './searchBox.d';

const SearchBox = ({
    setSearchBox,
    searchBox
}: SearchBoxProps) => {

    const boxRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if(searchBox){
            setTimeout(() => { 
                inputRef?.current?.focus();
            }, 200);
        }
    }, [searchBox]);

    useEffect(() => {
        function handleClickOutside(event: any) {
          if (boxRef.current && !boxRef.current.contains(event.target)) {
            setSearchBox?.();
          }
        }
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [boxRef]);

    return (
        <div 
            className={`${Styles.SearchBoxMain}`}
            ref={boxRef}
        >
            <div className={`${Styles.SearchBoxHeader}`}>
                <div className={`${Styles.SearchMain}`}>
                        <Image 
                            src={search_}
                            alt={'search'}
                            height={18}
                            width={18}
                        />
                        <input 
                            className={`${Styles.Search}`}
                            spellCheck="false"
                            type={'text'}
                            placeholder={'Search Docs'}
                            ref={inputRef}
                            tabIndex={0}
                        />
                    </div>
                </div>
            <div className={`${Styles.SearchBoxBody}`}>

            </div>
            <div className={`${Styles.SearchBoxFooter}`}>

            </div>
        </div>
    )
}

export default SearchBox;