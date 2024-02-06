import { Vector3 } from "@react-three/fiber";
import { Float } from "@react-three/drei";

type Skill3DBoxProps = {
    position?: Vector3;
};

export default function Skill3DBox({ position }: Skill3DBoxProps) {
    return (
        <group position={position}>
            <Float>
                <mesh position={[0, -1.7, 0]} rotation-x={-Math.PI / 2}>
                    <boxGeometry args={[0.5, 0.5, 0.5]} />
                    <meshStandardMaterial color='blue' />
                </mesh>
            </Float>
        </group>
    );
}
