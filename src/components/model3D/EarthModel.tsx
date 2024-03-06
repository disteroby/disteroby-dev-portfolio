import { useRef } from "react";
import { Group, Mesh } from "three";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { texturePath } from "../../utils/ResourcesUtils.ts";
import { useControls } from "leva";

export default function EarthModel() {
    const textureMask = useTexture(texturePath("texture_earth_mask.jpg"));

    const { intensity, c1, c2, minF, maxF, pos, dd, ds } = useControls({
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
            // value: 300,
            value: 100,
            step: 1,
        },
        ds: {
            min: 0,
            // value: 0.3,
            value: 0.2,
            max: 1,
        },
        pos: {
            value: [-0.944, 0.336, 0.115],
        },
    });

    const ref = useRef<Group>(null!);

    useFrame((_state, delta) => {
        ref.current.rotation.y += 0.1 * delta;
    });

    return (
        <group ref={ref} rotation-y={1.3}>
            {/*<OrbitControls />*/}

            {/*<mesh rotation-z={(Math.PI / 2) * 0.25}>*/}
            {/*    /!*<sphereGeometry args={[1, 32, 32]} />*!/*/}
            {/*    <icosahedronGeometry args={[1, 32]} />*/}
            {/*    <earthMaterial*/}
            {/*        onBeforeCompile={s => "CIAO" + s.fragmentShader}*/}
            {/*        earthMask={textureMask}*/}
            {/*        fresnelIntensity={intensity}*/}
            {/*        fresnelMin={minF}*/}
            {/*        fresnelMax={maxF}*/}
            {/*        color1={new THREE.Color(c1)}*/}
            {/*        color2={new THREE.Color(c2)}*/}
            {/*    />*/}
            {/*</mesh>*/}
            <mesh rotation={[0, 0, 0]} rotation-y={-1.3}>
                <icosahedronGeometry args={[1, 32]} />
                <earthMaterial
                    onBeforeCompile={s => "CIAO" + s.fragmentShader}
                    earthMask={textureMask}
                    fresnelIntensity={intensity}
                    fresnelMin={minF}
                    fresnelMax={maxF}
                    dotDensity={dd}
                    dotFillSize={ds}
                    color1={new THREE.Color(c1)}
                    color2={new THREE.Color(c2)}
                    // wireframe={true}
                />
            </mesh>
        </group>
    );
}

useTexture.preload(texturePath("texture_earth_mask.jpg"));
