import { useRef } from "react";
import { Mesh } from "three";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { texturePath } from "../../utils/ResourcesUtils.ts";
import { useControls } from "leva";

export default function EarthModel() {
    const textureMask = useTexture(texturePath("texture_earth_mask.jpg"));

    const { intensity, c1, c2, minF, maxF } = useControls({
        intensity: {
            min: 0,
            value: 5,
        },
        c1: {
            value: "#be00ff",
        },
        c2: {
            value: "#00b7ff",
        },
        minF: {
            min: 0,
            max: 1,
            value: 0.1,
        },
        maxF: {
            min: 0,
            max: 1,
            value: 0.8,
        },
    });

    const ref = useRef<Mesh>(null!);

    useFrame((_state, delta) => {
        ref.current.rotation.y += 0.005 * delta;
    });

    return (
        <mesh ref={ref}>
            <sphereGeometry args={[1, 32, 32]} />
            <directionalLight position={[3, 3, 3]} />
            <ambientLight intensity={0.2} />
            <earthMaterial
                earthMask={textureMask}
                fresnelIntensity={intensity}
                fresnelMin={minF}
                fresnelMax={maxF}
                color1={new THREE.Color(c1)}
                color2={new THREE.Color(c2)}
            />
        </mesh>
    );
}

useTexture.preload(texturePath("texture_earth_mask.jpg"));
