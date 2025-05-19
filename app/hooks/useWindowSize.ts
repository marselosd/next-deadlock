import { useState, useEffect } from "react";

const useWindowResize = () => {
    const [windowSize, setWindowSize] = useState({width: 0, height: 0});

    useEffect(() => {
        const reSizer = () => {
            setWindowSize({width: window.innerWidth, height: window.innerHeight});
        }
        reSizer();

        window.addEventListener("resize",reSizer);
        return() => window.removeEventListener("resize",reSizer);
    },[]);

    return windowSize;
} 

export default useWindowResize;