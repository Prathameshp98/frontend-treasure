"use client";

import _404 from "@/components/404/404";
import Loader from '@/components/Loader/loading';

import useWindowDimensions from "@/hooks/useWindowDimensions";

import './zz_base_style.css';

const Custom404 = () => {

    const { width } = useWindowDimensions(); // eslint-disable-line react-hooks/rules-of-hooks

    return (
        <div>
            {width === 0
                ? <Loader />
                : <_404 />
            }
        </div>
    );
}

export default Custom404;