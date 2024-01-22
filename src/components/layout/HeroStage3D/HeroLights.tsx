import { SpotLight } from "@react-three/drei";

export function HeroLights() {
    return (
        <group position={[0, 5, 0]}>
            <SpotLight
                distance={200}
                angle={15}
                penumbra={0.2}
                attenuation={8}
                anglePower={12}
                intensity={10}
                opacity={1.25}
                color={"#00a2ff"}
                position={[8, 0, 0]}
            />
            <SpotLight
                distance={9.5}
                angle={0.6}
                penumbra={0.2}
                attenuation={10}
                anglePower={8}
                intensity={100}
                opacity={0.35}
                color={"#baccd5"}
                position={[0, 2, 0]}
            />
            <SpotLight
                distance={200}
                angle={15}
                penumbra={0.2}
                attenuation={8}
                anglePower={12}
                intensity={3}
                opacity={1.25}
                color={"#ff15f7"}
                position={[-8, 0, 0]}
            />
        </group>
    );
}
