import { Canvas } from "@react-three/fiber";
import { Sparkles, Stats } from "@react-three/drei";
import HeroDevices from "./HeroDevices.tsx";
import { HeroGrid } from "./HeroGrid.tsx";
import { HeroLights } from "./HeroLights.tsx";
import { Bloom } from "@react-three/postprocessing";

/**
 *
 * @constructor
 */
export default function HeroStage3D() {
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
                <HeroLights />
                <directionalLight position={[0, 5, -2]} intensity={0.3} />
                <ambientLight />
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
        </div>
    );
}
