import { memo } from "react";
import { useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { carouselDevicesData } from "../../../constants/DevicesData.ts";
import DeviceModel from "../../Model3D/DeviceModel.tsx";
import Skill3DBox from "./Skill3DBox.tsx";

const ProjectModel = memo(() => {
    const { viewport } = useThree();

    return (
        <group scale={viewport.aspect}>
            <Skill3DBox position={[-1, 0.6, 0.05]} />
            <Skill3DBox position={[1.025, 1.3, -1.35]} />
            <Skill3DBox position={[0.71, -1.02, 0.12]} />
            <Float
                floatIntensity={0.25}
                speed={3}
                rotation-x={-Math.PI * 1.94}
                rotationIntensity={0.25}>
                <DeviceModel device={carouselDevicesData[6]} />
            </Float>
        </group>
    );
});

export default ProjectModel;
