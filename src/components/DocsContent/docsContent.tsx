
"use client";

import styles from './docsContent.module.css';
import docsContentProps from './docsContent.d';
import DocsInfo from '../../Data/docsInfo.json';

import { Input } from 'frontend-treasure';

const DocsContent = () => {

    return (
        <div className={`${styles.docsContentMain}`}>
            <div className={`${styles.docsContentMainInner}`}>
                {DocsInfo.map((component: docsContentProps, index: number) => (
                    <div 
                        className={`${styles.component}`}
                        key={index}
                    >
                        <h3>{component.name}</h3>
                        <div className={styles.codeExample}>
                            <div className={styles.example}>
                                <div dangerouslySetInnerHTML={{ __html: component.example }} />
                            </div>
                            <pre className={styles.code}>
                                {component.code.replace(/\\n/g, '\n').replace(/\\t/g, '')}
                            </pre>
                        </div>
                        <div className={styles.highlights}>
                            <h4>Highlights</h4>
                            {component.componentProperties.map((property: any, index: number) => (
                                <p 
                                    key={index}
                                >
                                    <span>{property.name}</span>
                                    : {property.explanation}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default DocsContent;