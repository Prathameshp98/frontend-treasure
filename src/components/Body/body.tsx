'use client';
import { useState, useRef, useCallback, memo } from "react";
import Image from "next/image";
import { useWindowDimensions } from "@/hooks";

// Utility function to conditionally join class names
const classNames = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

import _logo from '../../Data/Images/t-mobile-big.webp';
import _clipboard from '../../Data/Images/paste.webp';
import _tick from '../../Data/Images/tick.webp';

import styles from './body.module.css';
import dimension from '../../Data/dimensions.json';
import packageInfo from '../../Data/packageInfo.json';

const Body = memo(() => {
    const copyRef = useRef<HTMLButtonElement>(null);
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const { width } = useWindowDimensions();
    
    const installer = `${packageInfo["package-main"]}@${packageInfo.version}`;
    const iconSize = width >= dimension.MAX_MOBILE_WIDTH ? 25 : 20;
    const logoSize = width >= dimension.MAX_SMALL_LAPTOP_WIDTH ? 200 : 150;

    const copyToClipboard = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(installer);
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
                setTimeout(() => copyRef?.current?.focus(), 500);
            }, 1000);
        } catch (err) {
            console.error('Failed to copy text to clipboard:', err);
        }
    }, [installer]);

    return (
        <section className={classNames(styles.BodyMain)} role="main">
            <div className={styles.BodyMainInner}>
                <div className={styles.LogoMain}>
                    <Image 
                        src={_logo}
                        alt="Frontend Treasure logo"
                        width={logoSize}
                        height={logoSize}
                        priority
                    />
                </div>
                <div className={styles.TextMain}>
                    <h1>Create fast & responsive</h1>
                    <h1>websites with us.</h1>
                    {width >= dimension.MAX_TABLET_WIDTH ? (
                        <div>
                            <h4>Powerful, Accessible, and feature-packed frontend.</h4> 
                            <h4>Build and customize with Sass,</h4> 
                            <h4>utilize prebuilt grid system and components,</h4>  
                            <h4>and bring projects to life with powerful JavaScript packages.</h4>
                        </div>
                    ) : (
                        <div>
                            <h4>
                                Powerful, Accessible, and feature-packed frontend.
                                Build and customize with Sass,
                                and bring projects to life with powerful JavaScript packages.
                            </h4>
                        </div>
                    )}
                </div>
                <div className={styles.PackageMain}>
                    {isCopied ? (
                        <div className={styles.iconContainer} aria-live="polite">
                            <Image 
                                src={_tick}
                                alt="Copied successfully"
                                width={iconSize} 
                                height={iconSize}
                            />
                        </div>
                    ) : (
                        <button
                            type="button"
                            className={styles.copyButton}
                            onClick={copyToClipboard}
                            ref={copyRef}
                            aria-label="Copy installation command to clipboard"
                        >
                            <Image 
                                src={_clipboard}
                                alt=""
                                width={iconSize}
                                height={iconSize}
                                aria-hidden="true"
                            />
                        </button>
                    )}
                    <div className={styles.commandContainer}>
                        <p>
                            <span aria-hidden="true">$</span>
                            <code>{installer}</code>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
});

Body.displayName = 'Body';

export default Body;