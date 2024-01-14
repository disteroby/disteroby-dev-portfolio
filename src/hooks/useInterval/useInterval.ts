import {useEffect} from "react";

function useInterval(callback: () => void, time: number) {
    useEffect(() => {
        const timer = setInterval(callback, time);

        return () => {
            clearInterval(timer);
        }
    })
}

export default useInterval;