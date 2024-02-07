import { memo, Suspense } from "react";
import { PerspectiveCamera, Preload, Stats } from "@react-three/drei";
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
                    <ambientLight intensity={3} />
                    <directionalLight intensity={1.75} />
                    <ProjectModel />
                    <Preload all />
                    <Stats />
                </Suspense>
            </PerformanceCanvas>
        </div>
    );
});

export default ProjectModelContainer;
