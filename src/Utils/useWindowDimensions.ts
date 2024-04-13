"use client";

import { useState, useEffect } from 'react';

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(0);

    useEffect(() => {
        function getWindowDimensions() {
            return window.innerWidth
        }

        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        handleResize(); // Call once to initialize

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export default useWindowDimensions;