
import styles from './404.module.css';

const _404 = () => {

    return (
        <div className={`${styles._404Main}`}>  
            <div className={`${styles._404MainSub}`}>
                <h1>404</h1>
                <p>Page not found</p>
            </div> 
        </div>
    )
}

export default _404;