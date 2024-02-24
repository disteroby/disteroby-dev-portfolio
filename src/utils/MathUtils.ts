import { Lerp } from "./LerpUtils.ts";

export function sunflower(n: number, alpha: number, minRadius: number) {
    const b = Math.round(alpha * Math.sqrt(n));
    const phi = (Math.sqrt(5) + 1) / 2;

    const points: { x: number; y: number }[] = [];

    for (let k = 1; k <= n; k++) {
        const r = Lerp(minRadius, 1, radius(k, n, b));
        const theta = ((2 * Math.PI * k) / phi) ^ 2;
        points.push({
            x: r * Math.cos(theta),
            y: r * Math.sin(theta),
        });
    }

    return points;
}

function radius(k: number, n: number, b: number) {
    if (k > n - b) {
        return 1;
    } else {
        return Math.sqrt(k - 1 / 2) / Math.sqrt(n - (b + 1) / 2);
    }
}
