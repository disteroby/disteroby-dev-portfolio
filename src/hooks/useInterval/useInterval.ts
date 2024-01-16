import { useEffect } from "react";

function useInterval(
    callback: () => void,
    time: number,
    enabled: boolean = true,
) {
    useEffect(() => {
        const timer = setInterval(() => {
            if (enabled) {
                callback();
            }
        }, time);

        return () => {
            clearInterval(timer);
        };
    });
}

export default useInterval;
