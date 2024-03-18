import { useRef } from "react";
import { Group, MathUtils } from "three";
import { useFrame } from "@react-three/fiber";
import { Float, Shadow } from "@react-three/drei";
import {
    DeviceData,
    PROJECTS,
    ProjectTag,
} from "../../../constants/ProjectsData.ts";
import {
    itemsPolarTransform,
    MeshTransform,
} from "../../../utils/TransformUtils.ts";
import DeviceModel from "./DeviceModel.tsx";

type Device = DeviceData & {
    transform: MeshTransform;
    ref: ProjectTag;
};

const itemsPositionRadius = 3.5;
const rotationSpeed = 0.15;
const interpolationSpeed = 0.05;
const minSpeedMultiplier = 0.15;

type HeroDevicesOnLaptopProps = {
    inView: boolean;
};
export default function HeroDevicesOnLaptop({
    inView,
}: HeroDevicesOnLaptopProps) {
    const devices: Device[] = PROJECTS.map((project, i) => {
        const theta = ((i + 1) * Math.PI * 2) / PROJECTS.length;
        const transform: MeshTransform = {
            ...itemsPolarTransform(theta, itemsPositionRadius),
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
        <group ref={devicesRef} position-y={-3.1} position-z={-0.5}>
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
                        <group position={[0, -0.15, 0]}>
                            <DeviceModel
                                animDuration={4}
                                animDelay={2000}
                                inView={inView}
                                device={device}
                                screenLoop={false}
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
                        </group>
                    </Float>
                    <Shadow
                        color='black'
                        position={[0, 1.1, 0.75]}
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
