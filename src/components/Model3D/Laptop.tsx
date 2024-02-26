import { useEffect, useRef, useState } from "react";
import { DoubleSide, Group } from "three";
import { useAnimations, useGLTF, useTexture } from "@react-three/drei";
import { DeviceData } from "../../constants/ProjectsData.ts";
import useTimeout from "../../hooks/useTimeout.ts";
import { modelPath, texturePath } from "../../utils/ResourcesUtils.ts";
import { IGeometry } from "./DeviceModel.tsx";

type LaptopProps = {
    device: DeviceData;
    animDelay: number;
    animDuration: number;
    inView: boolean;
};

export default function Laptop({
    device,
    animDelay,
    animDuration,
    inView,
}: LaptopProps) {
    const [delayCompleted, setDelayCompleted] = useState(animDelay <= 0);

    useTimeout(
        () => {
            setDelayCompleted(true);
        },
        animDelay,
        animDelay > 0,
    );

    const screens = useTexture(
        device.textures.map(texture => texturePath(texture)),
    );
    const currentTexture = screens[device.mainTextureIndex];

    // const screens = useVideoTexture("./video/test.mp4");

    const { nodes, materials, animations } = useGLTF(
        modelPath(device.type),
        true,
    );

    const group = useRef<Group>(null!);
    const { actions, mixer } = useAnimations(animations, group);

    useEffect(() => {
        if (inView && delayCompleted) {
            animations.forEach(animation => {
                const action = mixer
                    // .clipAction(animation, group.current)
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

    return (
        <>
            <group
                ref={group}
                name='screenflip'
                rotation-x={Math.PI / 2}
                position={[0, -0.04, 0.41]}>
                <group
                    position={[0, 2.96, -0.13]}
                    rotation={[Math.PI / 2, 0, 0]}>
                    <mesh
                        material={materials.aluminium}
                        geometry={(nodes["Cube008"] as IGeometry)["geometry"]}
                    />
                    <mesh
                        material={materials["matte.001"]}
                        geometry={(nodes["Cube008_1"] as IGeometry)["geometry"]}
                    />
                    <mesh
                        geometry={
                            (nodes["Cube008_2"] as IGeometry)["geometry"]
                        }>
                        <meshStandardMaterial
                            roughness={0.9}
                            metalness={0.35}
                            side={DoubleSide}
                            map={currentTexture}
                        />
                    </mesh>
                </group>
            </group>
            <mesh
                material={materials.keys}
                geometry={(nodes.keyboard as IGeometry)["geometry"]}
                position={[1.79, 0, 3.45]}
            />
            <group position={[0, -0.1, 3.39]}>
                <mesh
                    material={materials.aluminium}
                    geometry={(nodes["Cube002"] as IGeometry)["geometry"]}
                />
                <mesh
                    material={materials.trackpad}
                    geometry={(nodes["Cube002_1"] as IGeometry)["geometry"]}
                />
            </group>
            <mesh
                material={materials.touchbar}
                geometry={(nodes.touchbar as IGeometry)["geometry"]}
                position={[0, -0.03, 1.2]}
            />
        </>
    );
}
