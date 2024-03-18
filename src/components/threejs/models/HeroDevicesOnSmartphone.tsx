import { Float, Shadow } from "@react-three/drei";
import {
    DeviceData,
    PROJECTS,
    ProjectTag,
} from "../../../constants/ProjectsData.ts";
import { MeshTransform } from "../../../utils/TransformUtils.ts";
import DeviceModel from "./DeviceModel.tsx";

type Device = DeviceData & {
    transform: MeshTransform;
    ref: ProjectTag;
};

type HeroDevicesOnSmartphoneProps = {
    inView: boolean;
};
export default function HeroDevicesOnSmartphone({
    inView,
}: HeroDevicesOnSmartphoneProps) {
    const projectMindBlooming = PROJECTS[2];
    const projectCodeHunter = PROJECTS[4];

    const transformMindBlooming: MeshTransform = {
        position: [-0.8, 0.65, 2],
        rotation: [0, -(Math.PI / 2) * 0.1, 0],
    };

    const transformCodeHunter: MeshTransform = {
        position: [0.4, 0.5, 1.75],
        rotation: [0, (Math.PI / 2) * 0.1, 0],
    };

    const devices: Device[] = [
        {
            ...projectMindBlooming.device,
            transform: transformMindBlooming,
            ref: projectMindBlooming.refName as ProjectTag,
        },
        {
            ...projectCodeHunter.device,
            transform: transformCodeHunter,
            ref: projectCodeHunter.refName as ProjectTag,
        },
    ];

    return (
        <group position-y={-3.1} position-z={-0.5}>
            {devices.map((device, idx) => (
                <group
                    key={idx}
                    position={device.transform.position}
                    rotation={device.transform.rotation}>
                    <Float
                        floatIntensity={0.2}
                        speed={5}
                        position={[0, 2, 0]}
                        rotationIntensity={0.1}>
                        <group position={[0, -0.15, 0]}>
                            <DeviceModel
                                animDuration={4}
                                animDelay={2000}
                                inView={inView}
                                device={device}
                                scale={0.8}
                                screenLoop={false}
                                hoverAnimation={true}
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
