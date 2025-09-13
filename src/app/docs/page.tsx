
"use client";

import { useState } from 'react';
import Link from 'next/link';
import DocsSidebar from '@/components/DocsSidebar/docsSidebar';
import DocsContent from '@/components/DocsContent/docsContent';

import styles from './docs.module.css';

const Docs = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const handleToggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    return (
        <div className={`${styles.docsMain} ${isSidebarCollapsed ? styles.sidebarCollapsed : ''}`}>
            <Link href="/" className={styles.backButton}>
                <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                >
                    <path d="m12 19-7-7 7-7"/>
                    <path d="M19 12H5"/>
                </svg>
                <span>Back to Home</span>
            </Link>
            <DocsSidebar 
                isCollapsed={isSidebarCollapsed}
                onToggleCollapse={handleToggleSidebar}
            />
            <DocsContent />
        </div>
    )
};

export default Docs;