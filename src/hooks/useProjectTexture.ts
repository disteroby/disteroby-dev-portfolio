import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { ImageFadeMaterial } from "../components/Model3D/ImageFadeMaterial.tsx";
import { DeviceData } from "../constants/ProjectsData.ts";
import { texturePath } from "../utils/ResourcesUtils.ts";
import useInterval from "./useInterval.ts";
import { easing } from "maath";

const screenChangeInterval = 4000;
const alphaLerpTime = 0.3;

export default function useProjectTexture(
    device: DeviceData,
    enableAnim: boolean,
) {
    const texture = useTexture(texturePath(device.texture));

    const imgMatRef = useRef<typeof ImageFadeMaterial>(null!);

    useInterval(changeScreen, screenChangeInterval, enableAnim);

    function changeScreen() {
        if (!enableAnim) return;

        imgMatRef.current.currentIdx = imgMatRef.current.targetIdx;
        imgMatRef.current.targetIdx =
            (imgMatRef.current.targetIdx + 1) % device.textureCount;
        imgMatRef.current.alpha = 0;
    }

    useFrame((_state, delta) => {
        easing.damp(imgMatRef.current, "alpha", 1, alphaLerpTime, delta);
    });

    return { imgMatRef, texture, changeScreen } as const;
}