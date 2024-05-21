
import styles from './coming-soon.module.css';

const ComingSoon = () => {

    return (
        <div className={`${styles.ComingSoonMain}`}>  
            <div className={`${styles.ComingSoonMainSub}`}>
                <h1>Coming Soon</h1>
                <p>Working hard to build something amazing. Stay tuned!!</p>
            </div> 
        </div>
    )
}

export default ComingSoon;