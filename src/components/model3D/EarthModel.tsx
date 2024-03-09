import { useRef } from "react";
import { Group, Vector3 } from "three";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import useBreakpoint from "../../hooks/useBreakpoint.ts";
import { texturePath } from "../../utils/ResourcesUtils.ts";
import { latLongToCartesian } from "../../utils/TransformUtils.ts";
import { EarthMaterial } from "./EarthMaterial.tsx";
import { useControls } from "leva";

export default function EarthModel() {
    const textureMask = useTexture(texturePath("texture_earth_mask.jpg"));

    useBreakpoint();

    // console.log(viewport.getCurrentViewport());

    const { ii, intensity, c1, c2, minF, maxF, pos, dd, ds } = useControls(
        "Earth",
        {
            intensity: {
                min: 0,
                value: 4,
            },
            c1: {
                value: "#ff48ed",
            },
            c2: {
                value: "#5ae1ff",
            },
            minF: {
                min: 0,
                max: 1,
                value: 0.05,
            },
            maxF: {
                min: 0,
                max: 1,
                value: 0.75,
            },
            dd: {
                min: 0,
                value: 400,
                step: 1,
            },
            ds: {
                min: 0,
                value: 0.3,
                max: 1,
            },
            pos: {
                min: 0,
                max: Math.PI,
                value: [0.4, 1.1, 0],
            },
            ii: {
                min: 0,
                value: 1.5,
            },
        },
    );

    const { lat, long, radius, altitude } = useControls("Pin", {
        lat: {
            min: -90,
            value: 46.4,
            max: 90,
            step: 0.1,
        },
        long: {
            min: -180,
            value: -170.7,
            max: 180,
            step: 0.1,
        },
        radius: {
            min: 0,
            value: 1,
        },
        altitude: {
            value: 0,
        },
    });

    const ref = useRef<Group>(null!);
    const matRef = useRef<typeof EarthMaterial>(null!);

    useFrame((_state, delta) => {
        ref.current.rotation.y += 0.1 * delta;
        matRef.current.uTime += delta;
    });

    const transform = latLongToCartesian(lat, long, radius, altitude);

    const { position } = transform;
    const posVec3 = new Vector3(position![0], position![1], position![2]);

    return (
        <group ref={ref} rotation={pos}>
            <mesh>
                <icosahedronGeometry args={[1, 32]} />
                <earthMaterial
                    ref={matRef}
                    earthMask={textureMask}
                    fresnelIntensity={intensity}
                    fresnelMin={minF}
                    fresnelMax={maxF}
                    dotDensity={dd}
                    dotFillSize={ds}
                    transparent
                    intensity={ii}
                    toneMapped={true}
                    color1={new THREE.Color(c1)}
                    color2={new THREE.Color(c2)}
                />
            </mesh>
            <group position={transform.position}></group>

            <arrowHelper args={[posVec3, posVec3, 0.3]} />
        </group>
    );
}

useTexture.preload(texturePath("texture_earth_mask.jpg"));
