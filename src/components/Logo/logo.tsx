import Image from "next/image";

import _logo from '../../Data/Images/t-mobile.webp';

const Logo = () => {

    return (
        <div>
            <Image 
                src={_logo}
                width={48}
                height={48}
                alt={"frontend treasure"}
                tabIndex={0}
            />
        </div>
    )
}

export default Logo;