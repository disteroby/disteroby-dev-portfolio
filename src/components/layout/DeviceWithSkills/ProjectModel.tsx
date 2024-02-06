import { memo, Suspense } from "react";
import { Float, Preload } from "@react-three/drei";
import { carouselDevicesData } from "../../../constants/DevicesData.ts";
import DeviceModel from "../../Model3D/DeviceModel.tsx";
import PerformanceCanvas from "../../Model3D/PerformanceCanvas.tsx";

const ProjectModel = memo(() => {
    return (
        <div className='size-[100rem]'>
            <PerformanceCanvas
                className='hover:select-none'
                camera={{
                    position: [0, 0, 5],
                    fov: 60,
                }}>
                <Suspense fallback={null}>
                    <ambientLight />
                    <directionalLight />
                    <Float>
                        <DeviceModel
                            device={carouselDevicesData[0]}
                            scale={[0.1, 0.1, 0.1]}
                        />
                    </Float>
                    <Preload all />
                </Suspense>
            </PerformanceCanvas>
        </div>
    );
});

export default ProjectModel;
