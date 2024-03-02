import { useEffect, useRef } from "react";

export default function useTimeout(
    callback: () => void,
    time: number,
    enabled: boolean = true,
) {
    const callbackRef = useRef(callback);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (enabled) {
                callbackRef.current();
            }
        }, time);

        return () => {
            clearTimeout(timer);
        };
    }, [enabled, time]);
}
