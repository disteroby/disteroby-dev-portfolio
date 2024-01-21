import { Canvas } from "@react-three/fiber";
import { Grid, Sparkles, SpotLight, Stats } from "@react-three/drei";
import HeroDevices from "../HeroDevices/HeroDevices.tsx";
import { Bloom } from "@react-three/postprocessing";

export default function HeroCarousel() {
    // const { fov } = useControls("camera", {
    //     fov: { value: 10, min: 0, step: 1 },
    // });
    return (
        <div className='absolute w-full'>
            <Canvas
                className='h-[100vh!important]'
                camera={{
                    position: [0, 0.2365, 7.15],
                    fov: 60,
                }}>
                <fog attach='fog' args={["#0C0C0F", 5, 20]} />
                {/*<OrbitControls*/}
                {/*    enableZoom={true}*/}
                {/*    onEnd={e => {*/}
                {/*        const oc = e?.target as any;*/}
                {/*        console.log("--------------");*/}
                {/*        console.log((oc.getPolarAngle() / Math.PI) * 180);*/}
                {/*        console.log(oc.target);*/}
                {/*        console.log(oc.getDistance());*/}
                {/*    }}*/}
                {/*/>*/}
                <Lights />
                <directionalLight position={[5, 5, 0]} intensity={0.3} />
                <HeroDevices />
                <Grid
                    renderOrder={-1}
                    position={[0, -1.1, 0]}
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
                <Grid
                    rotation-x={Math.PI / 2}
                    renderOrder={-1}
                    position={[0, -1.1, -50]}
                    infiniteGrid
                    cellSize={6.5 / 5}
                    cellThickness={0.6}
                    sectionSize={6.5}
                    sectionThickness={1}
                    sectionColor={"#3b3e3f"}
                    cellColor={"#5b5c5d"}
                    fadeDistance={200}
                    fadeStrength={10}
                />
                <mesh position={[0, -1.7, 0]} rotation-x={-Math.PI / 2}>
                    <planeGeometry args={[50, 50]} />
                    <meshBasicMaterial color={"#171717"} />
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
                <Bloom />
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
        <group position={[0, 5, 0]}>
            <SpotLight
                distance={200}
                angle={15}
                penumbra={0.2}
                attenuation={8}
                anglePower={12}
                intensity={15}
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
                intensity={10}
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
                intensity={2}
                opacity={1.25}
                color={"#ff15f7"}
                position={[-8, 0, 0]}
            />
        </group>
    );
}
