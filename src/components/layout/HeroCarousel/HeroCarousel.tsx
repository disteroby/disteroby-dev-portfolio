import { Canvas } from "@react-three/fiber";
import { Grid, Sparkles, SpotLight, Stats } from "@react-three/drei";
import HeroDevices from "../HeroDevices/HeroDevices.tsx";

export default function HeroCarousel() {
    return (
        <div className='absolute w-full'>
            <Canvas
                className='h-[100vh!important]'
                camera={{ position: [0, 1, 7.5], fov: 60 }}>
                <fog attach='fog' args={["#0C0C0F", 5, 20]} />
                <Lights />
                <directionalLight
                    castShadow
                    position={[5, 5, 0]}
                    intensity={1}
                />
                <HeroDevices />
                <Grid
                    renderOrder={-1}
                    position={[0, -1, 0]}
                    infiniteGrid
                    cellSize={0.5}
                    cellThickness={0.75}
                    sectionSize={2.5}
                    sectionThickness={1.5}
                    sectionColor={"#5c6365"}
                    cellColor={"#7b7d7e"}
                    fadeDistance={40}
                    fadeStrength={5}
                />
                <mesh position={[0, -1.001, 0]} rotation-x={-Math.PI / 2}>
                    <planeGeometry args={[50, 50]} />
                    <meshBasicMaterial color={"#1a1a1a"} />
                </mesh>
                <group>
                    <Sparkles
                        count={100}
                        scale={20}
                        size={10}
                        speed={0.25}
                        opacity={0.2}
                        color={"#baccd5"}
                    />
                </group>
                <Stats
                    className='origin-top-left scale-[150%] lg:scale-[200%] p-2'
                    showPanel={0}
                />
            </Canvas>
        </div>
    );
}

function Lights() {
    return (
        <>
            {/*<SpotLight*/}
            {/*    castShadow={false}*/}
            {/*    distance={200}*/}
            {/*    angle={18}*/}
            {/*    penumbra={1}*/}
            {/*    attenuation={5}*/}
            {/*    anglePower={12}*/}
            {/*    intensity={0.5}*/}
            {/*    opacity={1}*/}
            {/*    color={"#baccd5"}*/}
            {/*    position={[0, 5, 0]}*/}
            {/*/>*/}
            <SpotLight
                distance={200}
                angle={12}
                penumbra={1}
                attenuation={5}
                anglePower={10}
                intensity={0.5}
                opacity={0.5}
                color={"#baccd5"}
                position={[0, 6, 0]}
            />
            <SpotLight
                distance={200}
                angle={15}
                penumbra={0.2}
                attenuation={8}
                anglePower={12}
                intensity={15}
                opacity={1.25}
                color={"#00a2ff"}
                position={[7, 5, 0]}
            />
            <SpotLight
                distance={200}
                angle={15}
                penumbra={0.2}
                attenuation={8}
                anglePower={12}
                intensity={2}
                opacity={1.25}
                color={"#ff15f7"}
                position={[-7, 5, 0]}
            />
        </>
    );
}
