
import Styles from './features.module.css';

import Image from "next/image";

import scale from '../../Data/Images/full-screen.webp';
import access from '../../Data/Images/accessibility.webp';
import responsive from '../../Data/Images/responsive.webp';

const cardData = [
    {
        image: scale,
        name: 'Scalable',
        description: 'The components are made in such a way that the perform seamlessly under high user interactivity.'
    },
    {
        image: access,
        name: 'Accessible',
        description: 'The inbuilt acessibility features makes sure that components are easy to use for each individual.'
    },
    {
        image: responsive,
        name: 'Responsive',
        description: 'The UI is crisp and perfect accross all the viewports. There is modification available for each device.'
    }
]

const Features = () => {
    return (
        <div className={`${Styles.FeaturesMain}`}>
            <div className={`${Styles.FeaturesMainInner}`}>
                <h2>Highlights</h2>
                <div className={`${Styles.FeaturesCards}`}>
                    {cardData.map((each: any) => (
                        <div 
                            className={`${Styles.FeaturesCard}`}
                            key={Math.random()}
                        >
                            <div className={`${Styles.ImageWrapper}`}>
                                <Image 
                                    src={each.image}
                                    alt={each.name}
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <h2>{each.name}</h2>
                            <p>{each.description}</p>
                        </div>
                            
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features;