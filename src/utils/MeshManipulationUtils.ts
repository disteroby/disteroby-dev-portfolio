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
    return {
        position: [Math.sin(theta) * radius, 0.5, Math.cos(theta) * radius],
        rotation: [0, theta, 0],
    };
}
