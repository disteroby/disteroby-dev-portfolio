import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { random } from "maath";
import * as THREE from "three";

import { Html, useProgress } from "@react-three/drei";

function Loader() {
    const { progress } = useProgress();

    console.log(progress);
    return <Html center>{progress} % loaded</Html>;
}

export default function HeroCarousel() {
    return (
        <Canvas
            className='h-[100vh!important]'
            camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={<Loader />}>
                <Stars />
            </Suspense>
        </Canvas>
    );
}

function Stars() {
    const ref = useRef<THREE.Points>(null!);
    const [sphere] = useState<Float32Array>(
        () =>
            random.inSphere(new Float32Array(240), {
                radius: 1.25,
            }) as Float32Array,
    );
    useFrame((_state, delta) => {
        ref.current.rotation.x -= delta / 20;
        // ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 2]}>
            <Points
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled={false}>
                <PointMaterial
                    transparent
                    opacity={0.75}
                    color='#00ccff'
                    size={0.01}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}
