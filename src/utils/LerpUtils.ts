import { MathUtils } from "three";
import * as THREE from "three";

export function Lerp(number1: number, number2: number, alpha: number): number;
export function Lerp(
    rawVector1: number[],
    rawVector2: number[],
    alpha: number,
): number[];
export function Lerp(
    color1: THREE.Color,
    color2: THREE.Color,
    alpha: number,
): THREE.Color;
export function Lerp(
    vector1: THREE.Vector3,
    vector2: THREE.Vector3,
    alpha: number,
): THREE.Vector3;
export function Lerp<T extends number | number[] | THREE.Color | THREE.Vector3>(
    v1: T,
    v2: T,
    alpha: number,
) {
    if (typeof v1 === "number" && typeof v2 === "number") {
        return MathUtils.lerp(v1, v2, alpha);
    }

    if (Array.isArray(v1) && Array.isArray(v2)) {
        return v1.map((n, i) => Lerp(n, v2[i], alpha));
    }

    if (typeof v1 === typeof THREE.Color && typeof v2 === typeof THREE.Color) {
        return new THREE.Color().lerpColors(
            v1 as THREE.Color,
            v2 as THREE.Color,
            alpha,
        );
    }

    if (
        typeof v1 === typeof THREE.Vector3 &&
        typeof v2 === typeof THREE.Vector3
    ) {
        return new THREE.Vector3().lerpVectors(
            v1 as THREE.Vector3,
            v2 as THREE.Vector3,
            alpha,
        );
    }

    throw new Error("Data types not supported!");
}
