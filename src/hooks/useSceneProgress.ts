import { useDeferredValue, useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";

export default function useSceneProgress(minTimer: number) {
    const [minTimerCompleted, setMinTimerCompleted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMinTimerCompleted(true);
        }, minTimer);

        return () => {
            clearTimeout(timer);
        };
    }, [minTimer]);

    const { active: isSceneLoading } = useDeferredValue(useProgress());

    return minTimerCompleted && !isSceneLoading;
}
