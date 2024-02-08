import { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";

export default function useSceneProgress(
    minTimeout: number,
    extraTimeout: number,
): number {
    const progressData = useProgress();
    const { active: isSceneLoading, progress } = progressData;

    const [minTimeoutFlag, setMinTimeoutFlag] = useState(false);
    const [extraTimeoutFlag, setExtraTimeoutFlag] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMinTimeoutFlag(true);
        }, minTimeout);

        return () => {
            clearTimeout(timer);
        };
    }, [minTimeout]);

    useEffect(() => {
        let timer: number | undefined = undefined;
        if (!isSceneLoading) {
            timer = setTimeout(() => {
                setExtraTimeoutFlag(true);
            }, extraTimeout);
        }

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [isSceneLoading, extraTimeout]);

    return minTimeoutFlag && extraTimeoutFlag && !isSceneLoading
        ? progress
        : Math.min(99, progress);
}
