import { MutableRefObject, useEffect, useState } from "react";
import { Group } from "three";
import { useAnimations, useGLTF } from "@react-three/drei";
import { DeviceData } from "../constants/ProjectsData.ts";
import { modelPath } from "../utils/ResourcesUtils.ts";
import useTimeout from "./useTimeout.ts";

export default function useModelAnimations(
    device: DeviceData,
    animDelay: number,
    animDuration: number,
    inView: boolean,
    group: MutableRefObject<Group>,
) {
    const [delayCompleted, setDelayCompleted] = useState(animDelay <= 0);

    const { nodes, materials, animations } = useGLTF(
        modelPath(device.type),
        true,
    );

    useTimeout(
        () => {
            setDelayCompleted(true);
        },
        animDelay,
        animDelay > 0,
    );
    const { actions, mixer } = useAnimations(animations, group);

    useEffect(() => {
        if (inView && delayCompleted) {
            animations.forEach(animation => {
                const action = mixer
                    .clipAction(animation)
                    .setDuration(animDuration)
                    .setLoop(2200, 1);
                action.clampWhenFinished = true;
                action.play();
            });
        }

        return () => {
            animations.forEach(animation => {
                const action = mixer.existingAction(animation);
                if (action) {
                    action.timeScale = -1;
                    action.play();
                }
            });
        };
    }, [mixer, actions, inView, animations, delayCompleted, animDuration]);

    return { nodes, materials } as const;
}
