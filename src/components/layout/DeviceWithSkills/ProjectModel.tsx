import { useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { DeviceData } from "../../../constants/ProjectsData.ts";
import DeviceModel from "../../Model3D/DeviceModel.tsx";

type ProjectModelProps = {
    device: DeviceData;
};

export default function ProjectModel({ device }: ProjectModelProps) {
    const { viewport } = useThree();

    return (
        <group scale={viewport.aspect}>
            <Float
                floatIntensity={0.25}
                speed={3}
                rotation-x={-Math.PI * 1.94}
                rotationIntensity={0.25}>
                <DeviceModel device={device} />
            </Float>
        </group>
    );
}
