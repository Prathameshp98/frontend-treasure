
import Link from 'next/link';

import Styles from "./headerlist.module.css";

const HeaderList = () => {

    return (
        <div className={`${Styles.HeaderListMain}`}>
            <ul>
                <li>
                    <Link 
                        href="/docs"
                        tabIndex={0}
                    >Docs
                    </Link> 
                </li>
                <li>
                    <Link 
                        href="/icons"
                        tabIndex={0}
                    >Icons
                    </Link> 
                </li>
                <li>
                    <Link 
                        href="/forms"
                        tabIndex={0}
                    >Forms
                    </Link> 
                </li>
                <li>
                    <Link 
                        href="/widgets"
                        tabIndex={0}
                    >Widgets
                    </Link> 
                </li>
            </ul>
        </div>
    )
}

export default HeaderList;