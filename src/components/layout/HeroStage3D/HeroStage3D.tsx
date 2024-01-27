import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Lightformer, Sparkles, Stats } from "@react-three/drei";
import HeroDevices from "./HeroDevices.tsx";
import { HeroGrid } from "./HeroGrid.tsx";
import { HeroLights } from "./HeroLights.tsx";
import { Bloom } from "@react-three/postprocessing";

export default function HeroStage3D() {
    return (
        <div className='absolute w-full'>
            <Suspense
                fallback={<div className='bg-red-500 fixed'>loading...</div>}>
                <Canvas
                    className='h-[100vh!important]'
                    camera={{
                        position: [0, 0.2365, 7.15],
                        fov: 60,
                    }}>
                    <Environment preset='studio'>
                        <Lightformer
                            intensity={0.01}
                            rotation-x={Math.PI}
                            position={[0, 5, -9]}
                            scale={[50, 50, 1]}
                        />
                    </Environment>
                    <fog attach='fog' args={["#0C0C0F", 3, 12]} />
                    <HeroLights />
                    <HeroDevices />
                    <HeroGrid />
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
            </Suspense>
        </div>
    );
}
