import Header from "@/components/header/header";

import Styles from './page.module.css'
import './zz_base_style.css';

export default function Home() {
  return (
    <div className={`${Styles.homeMain}`}>
      <Header />
    </div>
  );
}
