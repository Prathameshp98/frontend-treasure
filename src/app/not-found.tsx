"use client";

import _404 from "@/components/404/404";
import Loader from '@/components/Loader/loading';

import useWindowDimensions from "@/Utils/useWindowDimensions";

import './zz_base_style.css';

const Custom404 = () => {

    const result = useWindowDimensions(); // eslint-disable-line react-hooks/rules-of-hooks

    return (
        <div>
            {result === 0
                ? <Loader />
                : <_404 />
            }
        </div>
    );
}

export default Custom404;