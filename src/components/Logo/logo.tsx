import Image from "next/image";

import _logo from '../../Data/Images/t-mobile.webp';

const Logo = () => {

    return (
        <div>
            <Image 
                src={_logo}
                width={54}
                height={54}
                alt={"frontend treasure"}
                tabIndex={0}
            />
        </div>
    )
}

export default Logo;