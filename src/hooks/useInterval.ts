import { useEffect, useRef, useState } from "react";

export default function useInterval(
    callback: () => void,
    time: number,
    enabled: boolean = true,
) {
    const [resetCounter, setResetCounter] = useState(0);
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
    }, [enabled, time, resetCounter]);

    function resetInterval() {
        setResetCounter(reset => reset + 1);
    }

    return resetInterval;
}
