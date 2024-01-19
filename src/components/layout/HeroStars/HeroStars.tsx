import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { PointMaterial, Points } from "@react-three/drei";
import { random } from "maath";
import * as THREE from "three";

function HeroStars() {
    const ref = useRef<THREE.Points>(null!);
    const [sphere] = useState<Float32Array>(
        () =>
            random.inSphere(new Float32Array(2400), {
                radius: 5,
            }) as Float32Array,
    );
    useFrame((_state, delta) => {
        ref.current.rotation.x -= delta / 20;
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

export default HeroStars;
