import { memo, Suspense } from "react";
import {
    Environment,
    Lightformer,
    Preload,
    Sparkles,
    useGLTF,
    useTexture,
} from "@react-three/drei";
import { PROJECTS } from "../../../constants/ProjectsData.ts";
import { modelPath, texturePath } from "../../../utils/ResourcesUtils.ts";
import PerformanceCanvas from "../../Model3D/PerformanceCanvas.tsx";
import HeroDevices from "./HeroDevices.tsx";
import HeroGrid from "./HeroGrid.tsx";
import HeroLights from "./HeroLights.tsx";

const HeroStage3D = memo(() => {
    return (
        <PerformanceCanvas
            className='hover:select-none'
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
                <Preload all />
            </Suspense>
            {/*<Stats*/}
            {/*    className='origin-top-left scale-[150%] p-2 lg:scale-[200%]'*/}
            {/*    showPanel={0}*/}
            {/*/>*/}
        </PerformanceCanvas>
    );
});

useGLTF.preload(modelPath("laptop"));
useGLTF.preload(modelPath("smartphone"));
PROJECTS.forEach(({ device }) => {
    device.textures.forEach(texture => {
        useTexture.preload(texturePath(texture));
    });
});

export default HeroStage3D;
