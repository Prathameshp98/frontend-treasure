import Image from "next/image";
import Link from "next/link";

import _logo from '../../Data/Images/t-mobile.webp';

const Logo = () => {

    return (
        <div>
            <Link 
                href="/"
                tabIndex={0}
            >
                <Image 
                    src={_logo}
                    width={54}
                    height={54}
                    alt={"frontend treasure"}
                    tabIndex={0}
                />
            </Link>
        </div>
    )
}

export default Logo;