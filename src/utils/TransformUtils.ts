import { Euler, Vector3 } from "@react-three/fiber";

export type MeshTransform = {
    position?: Vector3;
    rotation?: Euler;
    scale?: Vector3;
};

export function itemsPolarTransform(
    theta: number,
    radius: number,
): MeshTransform {
    const xz = polarToCartesian(theta, radius);

    return {
        position: [xz[0], 0.5, xz[1]],
        rotation: [0, theta, 0],
    };
}

export function polarToCartesian(theta: number, radius = 1) {
    return [Math.sin(theta) * radius, Math.cos(theta) * radius];
}
