import { useEffect, useRef } from "react";

function useInterval(
    callback: () => void,
    time: number,
    enabled: boolean = true,
) {
    const callbackRef = useRef(callback);

    useEffect(() => {
        const timer = setInterval(() => {
            if (enabled) {
                callbackRef.current();
            }
        }, time);

        return () => {
            clearInterval(timer);
        };
    }, [enabled, time]);
}

export default useInterval;
