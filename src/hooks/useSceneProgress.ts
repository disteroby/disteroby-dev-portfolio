import { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import useTimeout from "./useTimeout.ts";

export default function useSceneProgress(
    minTimeout: number,
    extraTimeout: number,
): number {
    const progressData = useProgress();
    const { active: isSceneLoading, progress } = progressData;

    const [minTimeoutFlag, setMinTimeoutFlag] = useState(false);
    const [extraTimeoutFlag, setExtraTimeoutFlag] = useState(false);

    useTimeout(() => {
        setMinTimeoutFlag(true);
    }, minTimeout);

    useEffect(() => {
        let timer: NodeJS.Timeout | undefined = undefined;
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
