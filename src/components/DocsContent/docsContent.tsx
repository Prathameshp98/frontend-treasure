
"use client";

import { useState } from 'react';
import styles from './docsContent.module.css';
import docsContentProps from './docsContent.d';
import DocsInfo from '../../Data/docsInfo.json';
import ImageWithFallback from '../ImageWithFallback';
// import { Input } from 'frontend-treasure';

const DocsContent = () => {
    const [copiedCode, setCopiedCode] = useState<string | null>(null);

    const copyToClipboard = async (code: string, componentName: string) => {
        try {
            await navigator.clipboard.writeText(code);
            setCopiedCode(componentName);
            setTimeout(() => setCopiedCode(null), 2000);
        } catch (err) {
            console.error('Failed to copy code:', err);
        }
    };

    const extractImageSrc = (htmlString: string): string | null => {
        const match = htmlString.match(/src=['"]([^'"]+)['"]/i);
        return match ? match[1] : null;
    };

    const extractImageAlt = (htmlString: string): string => {
        const match = htmlString.match(/alt=['"]([^'"]+)['"]/i);
        return match ? match[1] : 'Component preview';
    };

    return (
        <div className={styles.docsContentMain}>
            <div className={styles.docsContentHeader}>
                <h1>Component Documentation</h1>
                <p>Explore our collection of reusable React components with live examples and code snippets.</p>
            </div>
            
            <div className={styles.docsContentMainInner}>
                {DocsInfo.map((component: docsContentProps, index: number) => {
                    const imageSrc = extractImageSrc(component.example);
                    const imageAlt = extractImageAlt(component.example);
                    const cleanCode = component.code.replace(/\\n/g, '\n').replace(/\\t/g, '');
                    
                    return (
                        <article 
                            className={styles.component}
                            key={index}
                        >
                            <header className={styles.componentHeader}>
                                <h2 className={styles.componentTitle}>{component.name}</h2>
                                <span className={styles.componentBadge}>Component</span>
                            </header>
                            
                            <div className={styles.componentContent}>
                                <div className={styles.previewSection}>
                                    <h3>Preview</h3>
                                    <div className={styles.example}>
                                        {imageSrc ? (
                                            <ImageWithFallback
                                                src={imageSrc}
                                                alt={imageAlt}
                                                width={400}
                                                height={200}
                                                className={styles.previewImage}
                                            />
                                        ) : (
                                            <div className={styles.liveExample}>
                                                <div className={styles.mockComponent}>
                                                    <label className={styles.mockLabel}>Example Label</label>
                                                    <input 
                                                        type="text" 
                                                        placeholder="Enter some text..."
                                                        className={styles.mockInput}
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                
                                <div className={styles.codeSection}>
                                    <div className={styles.codeHeader}>
                                        <h3>Usage</h3>
                                        <button
                                            className={styles.copyButton}
                                            onClick={() => copyToClipboard(cleanCode, component.name)}
                                            aria-label={`Copy ${component.name} code`}
                                        >
                                            {copiedCode === component.name ? (
                                                <span className={styles.copiedText}>
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M20 6 9 17l-5-5"/>
                                                    </svg>
                                                    Copied!
                                                </span>
                                            ) : (
                                                <span>
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                                                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                                                    </svg>
                                                    Copy
                                                </span>
                                            )}
                                        </button>
                                    </div>
                                    <pre className={styles.code}>
                                        <code>{cleanCode}</code>
                                    </pre>
                                </div>
                            </div>
                            
                            <div className={styles.propertiesSection}>
                                <h3>Properties</h3>
                                <div className={styles.propertiesGrid}>
                                    {component.componentProperties.map((property: any, propIndex: number) => (
                                        <div 
                                            key={propIndex}
                                            className={styles.propertyCard}
                                        >
                                            <code className={styles.propertyName}>{property.name}</code>
                                            <p className={styles.propertyDescription}>{property.explanation}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </div>
    )
};

export default DocsContent;