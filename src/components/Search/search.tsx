
import Image from "next/image";

import Styles from './search.module.css';

import search_ from '../../Data/Images/search_.webp';

import useWindowDimensions from "@/Utils/useWindowDimensions";
import dimension from '../../Data/dimensions.json';

import SearchProps from './search.d';

const Search = ({
    setSearchBox
}: SearchProps) => {

    return (
        <>
            {useWindowDimensions?.() >= dimension.MAX_SMALL_TABLET_WIDTH &&
                <div 
                    className={`${Styles.SearchMain}`}
                    onClick={() => setSearchBox?.()}
                >
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
                        placeholder={'Search'}
                    />
                </div>
            }
        </>   
    )
}

export default Search;