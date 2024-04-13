
import Image from "next/image";

import Styles from './search.module.css';

import search_ from '../../Data/Images/search_.webp';

const Search = () => {

    return (
        <div className={`${Styles.SearchMain}`}>
            <Image 
                src={search_}
                alt={'search'}
                height={18}
                width={18}
            />
            <input 
                className={`${Styles.Search}`}
                spellcheck="false"
                type={'text'}
            />
        </div>
    )
}

export default Search;