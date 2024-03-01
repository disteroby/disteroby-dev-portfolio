import { useThree } from "@react-three/fiber";
import { Float, Shadow } from "@react-three/drei";
import { FloatProps } from "@react-three/drei/core/Float";
import { DeviceData } from "../../../constants/ProjectsData.ts";
import DeviceModel from "../../Model3D/DeviceModel.tsx";

type ProjectModelProps = FloatProps & {
    device: DeviceData;
    inView: boolean;
};

export default function ProjectModel({
    device,
    inView = true,
    ...props
}: ProjectModelProps) {
    const { viewport } = useThree();

    const isMobile = viewport.width < 1024;

    return (
        <group
            position-y={0.05}
            scale={isMobile ? viewport.aspect * 0.9 : viewport.aspect}>
            <Float
                floatIntensity={0.25}
                speed={3}
                rotation-x={-Math.PI * 1.94}
                rotationIntensity={0.25}
                {...props}>
                <DeviceModel
                    animDuration={3}
                    scale={device.type === "smartphone" ? 1.5 : 1}
                    inView={inView}
                    device={device}
                />
            </Float>
            <Shadow
                position={[0, -0.65, 0]}
                scale={[2.35, 3.5, 2.35]}
                color='black'
                colorStop={0.3}
                opacity={0.5}
                fog={false}
            />
        </group>
    );
}
