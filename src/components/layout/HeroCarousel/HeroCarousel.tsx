// import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Stats } from "@react-three/drei";
import HeroDevices from "../HeroDevices/HeroDevices.tsx";

export default function HeroCarousel() {
    return (
        <div className='absolute w-full'>
            <Canvas
                shadows={"soft"}
                className='h-[100vh!important]'
                camera={{ position: [0, 1, 7], fov: 60 }}>
                <ambientLight color='white' intensity={0.3} />
                <directionalLight position={[5, 5, 0]} intensity={0.6} />
                <HeroDevices />
                <ContactShadows
                    position={[0, -0.75, 0]}
                    blur={1.5}
                    far={4.5}
                    opacity={0.75}
                />
                <Stats
                    className='origin-top-left scale-[200%] lg:scale-[300%]'
                    showPanel={0}
                />
            </Canvas>
        </div>
    );
}
