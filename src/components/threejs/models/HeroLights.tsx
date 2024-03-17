import { SpotLight } from "@react-three/drei";

export default function HeroLights() {
    return (
        <group position={[0, 4.2, 0.5]}>
            <SpotLight
                distance={200}
                angle={15}
                penumbra={0.2}
                attenuation={8}
                anglePower={12}
                intensity={10}
                opacity={1.25}
                color={"#0095ff"}
                position={[7, 0, 0]}
            />
            <SpotLight
                distance={9.5}
                angle={0.6}
                penumbra={0.2}
                attenuation={10}
                anglePower={8}
                intensity={10}
                opacity={0.35}
                color={"#baccd5"}
                position={[0, 0, -2]}
            />
            <SpotLight
                distance={200}
                angle={15}
                penumbra={0.2}
                attenuation={8}
                anglePower={12}
                intensity={3}
                opacity={1.25}
                color={"#b915ff"}
                position={[-7, 0, 0]}
            />
        </group>
    );
}
