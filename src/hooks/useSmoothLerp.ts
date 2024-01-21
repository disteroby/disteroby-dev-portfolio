import { useRef } from "react";
import { MathUtils } from "three";
import { useFrame } from "@react-three/fiber";

export function useSmoothLerp(
    onUpdate: (smooth: number) => void,
    lambda: number,
    defaultValue: number = 0,
    epsilon: number = 0.001,
) {
    const actual = useRef<number>(defaultValue);
    const target = useRef<number>(defaultValue);

    useFrame((_state, delta) => {
        if (Math.abs(actual.current - target.current) > epsilon) {
            actual.current = MathUtils.damp(
                actual.current,
                target.current,
                lambda,
                delta,
            );

            onUpdate(actual.current);
        }
    });

    return (targetValue: number) => {
        target.current = targetValue;
    };
}
