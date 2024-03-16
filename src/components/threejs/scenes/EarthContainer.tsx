import { memo } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import EarthModel from "../models/EarthModel.tsx";
import PerformanceCanvas from "../utils/PerformanceCanvas.tsx";

const EarthContainer = memo(() => {
    return (
        <div className='absolute -inset-[1rem]'>
            <PerformanceCanvas
                id='canvas-earth'
                className='h-full w-full hover:select-none'>
                <PerspectiveCamera
                    makeDefault
                    fov={90}
                    position={[0, 0, 4.5]}
                    zoom={4}
                />
                <EarthModel />
            </PerformanceCanvas>
        </div>
    );
});

export default EarthContainer;
