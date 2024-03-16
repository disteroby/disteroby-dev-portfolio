import { memo, useRef } from "react";
import { Environment, Lightformer, PerspectiveCamera } from "@react-three/drei";
import { ProjectData } from "../../../constants/ProjectsData.ts";
import ProjectModel from "../models/ProjectModel.tsx";
import PerformanceCanvas from "../utils/PerformanceCanvas.tsx";
import { useInView } from "framer-motion";

type ProjectModelContainerProps = {
    project: ProjectData;
};

const ProjectModelContainer = memo(
    ({ project }: ProjectModelContainerProps) => {
        const wrapperRef = useRef(null!);
        const inView = useInView(wrapperRef, { amount: 0.5, once: true });

        return (
            <div ref={wrapperRef} className='h-full w-full hover:select-none'>
                <PerformanceCanvas
                    id={"canvas-" + project.refName}
                    className='h-full w-full hover:select-none'>
                    <PerspectiveCamera
                        makeDefault
                        fov={90}
                        position={[0, 0.3, 5]}
                        zoom={4}
                    />
                    <Environment files='stars.hdr' path='./environment/'>
                        <Lightformer
                            intensity={0.05}
                            rotation-x={Math.PI}
                            position={[0, 5, -9]}
                            scale={[50, 50, 1]}
                        />
                    </Environment>
                    <ProjectModel inView={inView} device={project.device} />
                </PerformanceCanvas>
            </div>
        );
    },
);

export default ProjectModelContainer;
