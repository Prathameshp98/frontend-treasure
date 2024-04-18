import Link from 'next/link';
import Image from "next/image";

import github_ from "../../Data/Images/github_.webp";
import gmail_ from "../../Data/Images/gmail_.webp";
import twitter_ from "../../Data/Images/twitter_.webp";

import Styles from "./socials.module.css";

const Socials = () => {

    return (
        <div className={`${Styles.SocialsMain}`}>
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
                    src={gmail_}
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
    )
}

export default Socials;