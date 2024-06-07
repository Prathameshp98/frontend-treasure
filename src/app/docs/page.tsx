
import DocsSidebar from '@/components/DocsSIdebar/docsSidebar';
import DocsContent from '@/components/DocsContent/docsContent';

import styles from './docs.module.css';

const Docs = () => {

    return (
        <div className={`${styles.docsMain}`}>
            <DocsSidebar />
            <DocsContent />
        </div>
    )
};

export default Docs;