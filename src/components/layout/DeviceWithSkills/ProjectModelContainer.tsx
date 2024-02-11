import { memo } from "react";
import {
    Environment,
    Lightformer,
    PerspectiveCamera,
    Sparkles,
} from "@react-three/drei";
import { ProjectData } from "../../../constants/ProjectsData.ts";
import PerformanceCanvas from "../../Model3D/PerformanceCanvas.tsx";
import ProjectModel from "./ProjectModel.tsx";

type ProjectModelContainerProps = {
    project: ProjectData;
    color: string;
};

const ProjectModelContainer = memo(
    ({ project, color }: ProjectModelContainerProps) => {
        return (
            <PerformanceCanvas
                id={"canvas-" + project.refName}
                className='h-full w-full hover:select-none'>
                <PerspectiveCamera
                    makeDefault
                    fov={90}
                    position={[0, 0.35, 5]}
                    zoom={4}
                />
                <Environment files='studio2.hdr' path='./environment/'>
                    <Lightformer
                        intensity={0.01}
                        rotation-x={Math.PI}
                        position={[0, 5, -9]}
                        scale={[50, 50, 1]}
                    />
                </Environment>
                <Sparkles
                    position={[0, 0.25, 0]}
                    count={10}
                    scale={1.5}
                    size={15}
                    speed={0.15}
                    opacity={0.2}
                    color={color}
                />
                <ProjectModel device={project.device} />
            </PerformanceCanvas>
        );
    },
);

export default ProjectModelContainer;
