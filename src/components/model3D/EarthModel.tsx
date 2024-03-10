import { useEffect, useRef } from "react";
import { Group, Vector3 } from "three";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, useTexture } from "@react-three/drei";
import useBreakpoint from "../../hooks/useBreakpoint.ts";
import { Lerp } from "../../utils/LerpUtils.ts";
import { texturePath } from "../../utils/ResourcesUtils.ts";
import {
    latLongToCartesian,
    MeshTransform,
} from "../../utils/TransformUtils.ts";
import { EarthMaterial } from "./EarthMaterial.tsx";

const earthRadius = 1;
const pinLatitude = 24.1;
const pinLongitude = -103.7;
const earthGradientFrom = new THREE.Color("#ffb1f7");
const earthGradientTo = new THREE.Color("#9d96ff");

export default function EarthModel() {
    const textureMask = useTexture(texturePath("texture_earth_mask_small.jpg"));
    const textureMask2 = useTexture(texturePath("texture_dot_mask.jpg"));
    textureMask.anisotropy = 8;
    textureMask2.anisotropy = 8;

    const groupRef = useRef<Group>(null!);
    const matRef = useRef<typeof EarthMaterial>(null!);
    const pinRef = useRef<Group>(null!);

    const { width, isSm, isMd, isLg } = useBreakpoint();

    const isLgOrBelow = isSm || isMd || isLg;

    const dotDensity = isLgOrBelow ? Lerp(70, 400, width / 1024) : 50;
    const dotFillSize = isLgOrBelow ? Lerp(0.2, 0.3, width / 1024) : 0.3;

    const { position }: MeshTransform = latLongToCartesian(
        pinLatitude,
        pinLongitude,
        earthRadius,
    );

    useEffect(() => {
        const posVec3 = new Vector3(position![0], position![1], position![2]);
        pinRef.current.lookAt(posVec3);
    }, []);

    useFrame((_state, delta) => {
        groupRef.current.rotation.y += 0.15 * delta;
    });

    const glassMat = (
        <MeshTransmissionMaterial
            thickness={0.15}
            ior={0.95}
            iridescence={0.1}
            distortionScale={0.5}
            temporalDistortion={0.1}
            resolution={1024}
            samples={2}
        />
    );

    return (
        <group ref={groupRef} rotation={[0.4, 1.1, 0]}>
            <group ref={pinRef}>
                <group
                    position={[0, 0, earthRadius]}
                    rotation={[Math.PI / 2, 0, 0]}>
                    <mesh>
                        <cylinderGeometry args={[0.01, -0.005, 0.15, 8]} />
                        {glassMat}
                    </mesh>
                    <mesh position-y={0.1}>
                        <sphereGeometry args={[0.025, 16]} />
                        {glassMat}
                    </mesh>
                </group>
            </group>

            <mesh>
                <icosahedronGeometry args={[earthRadius, 32]} />
                <earthMaterial
                    ref={matRef}
                    earthMask={textureMask}
                    earthMask2={textureMask2}
                    fresnelIntensity={4.5}
                    fresnelMin={0.1}
                    fresnelMax={0.75}
                    dotDensity={dotDensity}
                    dotFillSize={dotFillSize}
                    intensity={1.5}
                    toneMapped={true}
                    color1={earthGradientFrom}
                    color2={earthGradientTo}
                />
            </mesh>
        </group>
    );
}

useTexture.preload(texturePath("texture_earth_mask_small.jpg"));
useTexture.preload(texturePath("texture_dot_mask.jpg"));
