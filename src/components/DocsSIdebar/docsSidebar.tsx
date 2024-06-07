
import styles from './docsSidebar.module.css';
import '../../app/zz_base_style.css';
import docsLabel from '../../Data/docsLabel.json';
import Image from 'next/image';

import googleForms from '../../Data/Images/google-forms.webp';

const DocsSidebar = () => {

    return (
        <div className={`${styles.docsContentMain}`}>
            <div className={`${styles.contentTypesLabel}`}>
                {docsLabel.map((each: any, index: number) => (
                    <div
                        className={`${styles.labelContainer}`}
                        key={index}
                    >
                        <div className={`${styles.title}`}>
                            <Image 
                                src={googleForms}
                                alt={'form'}
                                width={20}
                                height={20}
                            />
                            <p>{each.title}</p>
                        </div>
                        <div className={`${styles.options}`}>
                            {each.options.map((option: any, index: number) => (
                                <p 
                                    key={index}
                                    tabIndex={0}
                                >{option}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default DocsSidebar;