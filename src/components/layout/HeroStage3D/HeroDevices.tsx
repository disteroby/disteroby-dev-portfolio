import { LegacyRef, RefObject, useRef } from "react";
import { Group, MathUtils } from "three";
import { useFrame } from "@react-three/fiber";
import { Float, Shadow } from "@react-three/drei";
import {
    DeviceData,
    PROJECTS,
    ProjectTag,
} from "../../../constants/ProjectsData.ts";
import { SectionTag, useSectionRefs } from "../../../hooks/useSectionRef.ts";
import {
    itemsPolarTransform,
    MeshTransform,
} from "../../../utils/TransformUtils.ts";
import DeviceModel from "../../Model3D/DeviceModel.tsx";

type Device = DeviceData & {
    transform: MeshTransform;
    ref: ProjectTag;
};

const itemsPositionRadius = 4;
const rotationSpeed = 0.15;
const interpolationSpeed = 0.05;
const minSpeedMultiplier = 0.15;

function HeroDevices() {
    const projectsRef = useSectionRefs();

    const devices: Device[] = PROJECTS.map((project, i) => {
        const theta = (i * Math.PI * 2) / PROJECTS.length;
        const transform: MeshTransform = {
            ...itemsPolarTransform(theta, itemsPositionRadius),
            scale: [0.2, 0.2, 0.2],
        };

        return {
            ...project.device,
            transform,
            ref: project.refName as ProjectTag,
        };
    });

    const devicesRef = useRef<Group>(null!);
    const smooth = useRef<number>(1);
    const targetVelocity = useRef<number>(1);

    useFrame((_state, delta) => {
        smooth.current = MathUtils.lerp(
            smooth.current,
            targetVelocity.current,
            interpolationSpeed,
        );

        devicesRef.current.rotation.y += delta * rotationSpeed * smooth.current;
    });

    return (
        <group position={[0, -3, 0]} ref={devicesRef}>
            {devices.map((device, idx) => (
                <group
                    key={idx}
                    position={device.transform.position}
                    rotation={device.transform.rotation}>
                    <Float
                        floatIntensity={0.25}
                        speed={10}
                        position={[0, 2, 0]}
                        rotationIntensity={0}>
                        <DeviceModel
                            device={device}
                            scale={device.transform.scale}
                            hoverAnimation={true}
                            onHover={() => {
                                targetVelocity.current = minSpeedMultiplier;
                            }}
                            onLeave={() => {
                                targetVelocity.current = 1;
                            }}
                            onClick={() => {
                                document
                                    .getElementById(device.ref)
                                    ?.scrollIntoView();
                            }}
                        />
                    </Float>
                    <Shadow
                        color='black'
                        position={[0, 1.5, 0.75]}
                        scale={3}
                        colorStop={0.25}
                        opacity={0.75}
                        fog={true}
                    />
                </group>
            ))}
        </group>
    );
}

export default HeroDevices;
