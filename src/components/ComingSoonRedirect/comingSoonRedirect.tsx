"use client";

import useWindowDimensions from "@/Utils/useWindowDimensions";

import ComingSoon from "../ComingSoon/coming-soon";
import Loader from "../Loader/loading";

import '../../app/zz_base_style.css';

const ComingSoonRedirect = () => {
    const result = useWindowDimensions(); // eslint-disable-line react-hooks/rules-of-hooks

    return (
        <div>
            {result === 0
                ? <Loader />
                : <ComingSoon />
            }
        </div>
    );
}

export default ComingSoonRedirect;