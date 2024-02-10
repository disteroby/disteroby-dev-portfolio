import { memo, Suspense } from "react";
import {
    Environment,
    Lightformer,
    PerspectiveCamera,
    Preload,
    Stats,
} from "@react-three/drei";
import PerformanceCanvas from "../../Model3D/PerformanceCanvas.tsx";
import ProjectModel from "./ProjectModel.tsx";

const ProjectModelContainer = memo(() => {
    return (
        <div className='h-[50rem] max-h-[100vw] w-screen max-w-[50rem]'>
            <PerformanceCanvas className='w-full hover:select-none'>
                <PerspectiveCamera
                    makeDefault
                    fov={90}
                    position={[0, 0, 5]}
                    zoom={3}
                />
                <Suspense fallback={null}>
                    <Environment files='studio2.hdr' path='./environment/'>
                        <Lightformer
                            intensity={0.01}
                            rotation-x={Math.PI}
                            position={[0, 5, -9]}
                            scale={[50, 50, 1]}
                        />
                    </Environment>
                    <ProjectModel />
                    <Preload all />
                    <Stats />
                </Suspense>
            </PerformanceCanvas>
        </div>
    );
});

export default ProjectModelContainer;
