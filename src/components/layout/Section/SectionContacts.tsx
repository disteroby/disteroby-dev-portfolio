import {
    Environment,
    Html,
    Lightformer,
    PerspectiveCamera,
} from "@react-three/drei";
import { PROJECTS } from "../../../constants/ProjectsData.ts";
import PerformanceCanvas from "../../Model3D/PerformanceCanvas.tsx";
import GlowingText from "../../UI/GlowingText.tsx";
import ProjectModel from "../DeviceWithSkills/ProjectModel.tsx";

export default function SectionContacts() {
    return (
        <div className='flex min-h-screen flex-col items-center'>
            <GlowingText text='CONTACTS ME' />
            <PerformanceCanvas className='my-16 hidden aspect-[4/3] w-full max-w-[60rem] bg-blue-500 lg:block'>
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
                <group scale={0.9}>
                    <ProjectModel
                        rotationIntensity={0.1}
                        floatIntensity={0.1}
                        device={PROJECTS[0].device}
                    />
                </group>
            </PerformanceCanvas>
            <PerformanceCanvas className='my-16 aspect-[3/4] w-full max-w-[60rem] bg-red-500 lg:hidden'>
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
                <group scale={0.9}>
                    <ProjectModel
                        rotationIntensity={0.1}
                        floatIntensity={0.1}
                        device={PROJECTS[0].device}
                    />
                    <Html
                        className='grid size-[10rem] place-content-center bg-green-500/10 text-5xl'
                        position={[0, -0.35, 0]}
                        scale={0.15}
                        transform>
                        Html Test
                    </Html>
                </group>
            </PerformanceCanvas>
        </div>
    );
}
