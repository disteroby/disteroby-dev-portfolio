import { useCallback, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { ImageFadeMaterial } from "../components/threejs/materials/ImageFadeMaterial.tsx";
import { DeviceData } from "../constants/ProjectsData.ts";
import { texturePath } from "../utils/ResourcesUtils.ts";
import useInterval from "./useInterval.ts";
import { easing } from "maath";

const screenChangeInterval = 5000;
const alphaLerpTime = 0.25;

export default function useProjectTexture(
    device: DeviceData,
    enableAnim: boolean,
) {
    const texture = useTexture(texturePath(device.texture));

    const imgMatRef = useRef<typeof ImageFadeMaterial>(null!);

    const changeRefScreen = useCallback(() => {
        imgMatRef.current.currentIdx = imgMatRef.current.targetIdx;
        imgMatRef.current.targetIdx =
            (imgMatRef.current.targetIdx + 1) % device.textureCount;
        imgMatRef.current.alpha = 0;
    }, [device.textureCount]);

    useFrame((_state, delta) => {
        easing.damp(imgMatRef.current, "alpha", 1, alphaLerpTime, delta);
    });

    const resetInterval = useInterval(
        changeRefScreen,
        screenChangeInterval,
        enableAnim,
    );

    const changeScreen = useCallback(() => {
        changeRefScreen();
        resetInterval();
    }, [changeRefScreen, resetInterval]);

    return { imgMatRef, texture, changeScreen } as const;
}
