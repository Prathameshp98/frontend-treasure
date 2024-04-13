
import Image from "next/image";

import github_ from "../../Data/Images/github_.webp";
import gmail_ from "../../Data/Images/gmail_.webp";
import twitter_ from "../../Data/Images/twitter_.webp";

import Styles from "./socials.module.css";

const Socials = () => {

    return (
        <div className={`${Styles.SocialsMain}`}>
            <Image 
                src={github_}
                alt={"github"}
                height={25}
                width={25}
                tabIndex={0}
            />
            <Image 
                src={gmail_}
                alt={"gmail"}
                height={25}
                width={25}
                tabIndex={0}
            />
            <Image 
                src={twitter_}
                alt={"twitter"}
                height={15}
                width={15}
                tabIndex={0}
            />
        </div>
    )
}

export default Socials;