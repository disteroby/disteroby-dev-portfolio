import { Canvas } from "@react-three/fiber";
import { Grid } from "@react-three/drei";
import { useControls } from "leva";

export default function UnderHero() {
    // const { position, fadeStrength, fadeDistance } = useControls({
    //     position: {
    //         value: [0, 0, -5],
    //     },
    //     fadeStrength: {
    //         value: 1,
    //     },
    //     fadeDistance: {
    //         value: 1,
    //     },
    // });

    return (
        <div className='absolute w-full'>
            <Canvas
                className='h-[100vh!important]'
                camera={{
                    position: [0, 0, -10],
                    fov: 60,
                }}>
                <Grid
                    // rotation-x={Math.PI / 2}
                    renderOrder={-1}
                    position={[0, 0, 0]}
                    infiniteGrid
                    cellSize={1.139}
                    cellThickness={0.75}
                    sectionSize={5.695}
                    sectionThickness={1}
                    sectionColor={"#5c6365"}
                    cellColor={"#7b7d7e"}
                    fadeDistance={100}
                    fadeStrength={10}
                />
            </Canvas>
        </div>
    );
}
