
import Styles from './loader.module.css';

const Loader = () => {

    return (
        <div className={`${Styles.LoaderMain}`}>
            <div className={`${Styles.clockLoader}`}></div>
        </div>
    )
}

export default Loader;