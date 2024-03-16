import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, Shadow, ShadowType } from "@react-three/drei";
import { FloatProps } from "@react-three/drei/core/Float";
import { DeviceData, SmartphoneData } from "../../../constants/ProjectsData.ts";
import useBreakpoint from "../../../hooks/useBreakpoint.ts";
import DeviceModel from "./DeviceModel.tsx";
import { easing } from "maath";

type ProjectModelProps = FloatProps & {
    device: DeviceData;
    inView: boolean;
};

export default function ProjectModel({
    device,
    inView = true,
    ...props
}: ProjectModelProps) {
    const shadowRef = useRef<ShadowType>(null!);
    useFrame((_state, delta) => {
        if (!inView) return;

        easing.damp(shadowRef.current.material, "opacity", 1, 2, delta);
    });

    const { viewport } = useThree();
    const { isSm, isMd } = useBreakpoint();

    const isMobile = isSm || isMd;

    const isSmartphone = device.type === "smartphone";
    const isDeviceLandscape = isSmartphone
        ? (device as SmartphoneData).deviceOrientation === "landscape"
        : undefined;

    const shadowPosition: [number, number, number] = isSmartphone
        ? isDeviceLandscape
            ? [0, -0.35, 0]
            : [0, -0.8, 0]
        : [0, -0.55, 0];

    const shadowScale: [number, number, number] = isSmartphone
        ? isDeviceLandscape
            ? [2.5, 3, 1]
            : [1.5, 2, 1]
        : [2.65, 3.5, 1];

    return (
        <group
            position-y={0.05}
            scale={isMobile ? viewport.aspect * 0.85 : viewport.aspect}>
            <Float
                floatIntensity={0.25}
                speed={3}
                rotation-x={-Math.PI * 1.94}
                rotationIntensity={0.25}
                {...props}>
                <DeviceModel
                    animDuration={3}
                    scale={isSmartphone ? 1.5 : 1}
                    inView={inView}
                    device={device}
                    screenLoop={true}
                />
            </Float>
            <Shadow
                ref={shadowRef}
                position={shadowPosition}
                scale={shadowScale}
                color='black'
                colorStop={0.3}
                opacity={0}
                fog={false}
            />
        </group>
    );
}
