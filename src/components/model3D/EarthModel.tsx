import { useRef } from "react";
import { Group, Vector3 } from "three";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import useBreakpoint from "../../hooks/useBreakpoint.ts";
import { Lerp } from "../../utils/LerpUtils.ts";
import { texturePath } from "../../utils/ResourcesUtils.ts";
import { latLongToCartesian } from "../../utils/TransformUtils.ts";
import { EarthMaterial } from "./EarthMaterial.tsx";
import { useWindowWidth } from "@react-hook/window-size";
import { useControls } from "leva";

const earthGradientFrom = new THREE.Color("#ffb1f7");
const earthGradientTo = new THREE.Color("#9d96ff");

export default function EarthModel() {
    const textureMask = useTexture(texturePath("texture_earth_mask.jpg"));

    const { width, isSm, isMd, isLg } = useBreakpoint();

    const isLgOrBelow = isSm || isMd || isLg;

    const dotDensity = isLgOrBelow ? Lerp(70, 400, width / 1024) : 350;
    const dotFillSize = isLgOrBelow ? Lerp(0.2, 0.3, width / 1024) : 0.3;

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
        <group ref={ref} rotation={[0.4, 1.1, 0]}>
            <mesh>
                <icosahedronGeometry args={[1, 32]} />
                <earthMaterial
                    ref={matRef}
                    earthMask={textureMask}
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
            <group position={transform.position}></group>

            <arrowHelper args={[posVec3, posVec3, 0.3]} />
        </group>
    );
}

useTexture.preload(texturePath("texture_earth_mask.jpg"));
