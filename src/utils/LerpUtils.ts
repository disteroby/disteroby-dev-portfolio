import { MathUtils } from "three";
import * as THREE from "three";

/**
 * Linearly interpolates between two numbers.
 * @param number1 The starting number.
 * @param number2 The ending number.
 * @param alpha The alpha value (weight) of the interpolation.
 * @returns The interpolated value.
 */
export function Lerp(number1: number, number2: number, alpha: number): number {
    return MathUtils.lerp(number1, number2, alpha);
}

/**
 * Linearly interpolates between two colors.
 * @param color1 The starting color.
 * @param color2 The ending color.
 * @param alpha The alpha value (weight) of the interpolation.
 * @returns The interpolated color.
 */
export function LerpColor(
    color1: THREE.Color,
    color2: THREE.Color,
    alpha: number,
): THREE.Color {
    return new THREE.Color().lerpColors(color1, color2, alpha);
}
