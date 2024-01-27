import { useRef } from "react";
import { Group, MathUtils } from "three";
import { useFrame } from "@react-three/fiber";
import { Float, Shadow } from "@react-three/drei";
import {
    carouselDevicesData,
    DevicesData,
} from "../../../constants/DevicesData.ts";
import {
    itemsPolarTransform,
    MeshTransform,
} from "../../../utils/MeshManipulationUtils.ts";
import DeviceModel from "../../UI/DeviceModel/DeviceModel.tsx";

type device = {
    data: DevicesData;
    transform: MeshTransform;
};

function HeroDevices() {
    const itemsPositionRadius = 4;
    const rotationSpeed = 0.15;
    const interpolationSpeed = 0.05;
    const minSpeedMultiplier = 0.15;

    const devices: device[] = carouselDevicesData.map((data, i, devices) => {
        const theta = (i * Math.PI * 2) / devices.length;
        const transform: MeshTransform = {
            ...itemsPolarTransform(theta, itemsPositionRadius),
            scale: [0.2, 0.2, 0.2],
        };

        return {
            data,
            transform,
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
            {devices.map(({ data, transform }, idx) => (
                <group
                    key={idx}
                    position={transform.position}
                    rotation={transform.rotation}>
                    <Float
                        floatIntensity={0.25}
                        speed={10}
                        position={[0, 2, 0]}
                        rotationIntensity={0}>
                        <DeviceModel
                            device={data}
                            scale={transform.scale}
                            onHover={() => {
                                targetVelocity.current = minSpeedMultiplier;
                            }}
                            onLeave={() => {
                                targetVelocity.current = 1;
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
