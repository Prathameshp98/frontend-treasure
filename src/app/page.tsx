"use client";

import UI from "@/components/UI/ui";
import Loader from "@/components/Loader/loading";

import Styles from './page.module.css';
import './zz_base_style.css';

import useWindowDimensions from "@/Utils/useWindowDimensions";

export default function Home() {
  const result = useWindowDimensions(); // eslint-disable-line react-hooks/rules-of-hooks

  return (
    <div className={`${Styles.homeMain}`}>
      {result === 0
        ? <Loader />
        : <UI />
      }
    </div>
  );
}
