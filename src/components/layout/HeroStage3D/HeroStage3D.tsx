import { memo } from "react";
import { Environment, Lightformer, Sparkles } from "@react-three/drei";
import PerformanceCanvas from "../../model3D/PerformanceCanvas.tsx";
import HeroDevices from "./HeroDevices.tsx";
import HeroGrid from "./HeroGrid.tsx";
import HeroLights from "./HeroLights.tsx";

type HeroStage3DProps = {
    inView: boolean;
};

const HeroStage3D = memo(({ inView }: HeroStage3DProps) => {
    return (
        <PerformanceCanvas
            id='main-canvas'
            className='hover:select-none'
            camera={{
                position: [0, 0.2365, 7.15],
                fov: 60,
            }}>
            <Environment files='stars.hdr' path='./environment/'>
                <Lightformer
                    intensity={0.01}
                    rotation-x={Math.PI}
                    rotation-y={Math.PI}
                    position={[0, 5, -9]}
                    scale={[500, 500, 1]}
                />
            </Environment>
            <fog attach='fog' args={["#0C0C0F", 3, 12]} />
            <HeroLights />
            <HeroDevices inView={inView} />
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
        </PerformanceCanvas>
    );
});

export default HeroStage3D;
