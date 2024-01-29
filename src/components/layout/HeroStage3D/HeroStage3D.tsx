import { memo, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
    Environment,
    Lightformer,
    Preload,
    Sparkles,
    useGLTF,
    useTexture,
} from "@react-three/drei";
import { carouselDevicesData } from "../../../constants/DevicesData.ts";
import { modelPath, texturePath } from "../../../utils/ResourcesUtils.ts";
import HeroDevices from "./HeroDevices.tsx";
import { HeroGrid } from "./HeroGrid.tsx";
import { HeroLights } from "./HeroLights.tsx";

const HeroStage3D = memo(() => {
    return (
        <Canvas
            className='h-[100vh!important]'
            camera={{
                position: [0, 0.2365, 7.15],
                fov: 60,
            }}>
            <Suspense fallback={null}>
                <Environment files='studio2.hdr' path='./environment/'>
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
                        count={50}
                        scale={15}
                        size={20}
                        speed={0.15}
                        opacity={0.2}
                        color={"#baccd5"}
                    />
                </group>
                {/*<Stats*/}
                {/*    className='origin-top-left scale-[150%] lg:scale-[200%] p-2'*/}
                {/*    showPanel={0}*/}
                {/*/>*/}
                <Preload all />
            </Suspense>
        </Canvas>
    );
});

useGLTF.preload(modelPath("laptop"));
// useGLTF.preload(modelPath("smartphone"));
carouselDevicesData.map(device => {
    useTexture.preload(texturePath(device.texture));
});

export default HeroStage3D;
