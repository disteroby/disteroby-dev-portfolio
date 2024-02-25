import { useEffect, useRef } from "react";
import {
    BufferGeometry,
    DoubleSide,
    Group,
    NormalBufferAttributes,
    Object3D,
} from "three";
import { Euler, Vector3 } from "@react-three/fiber";
import { ThreeEvent } from "@react-three/fiber/dist/declarations/src/core/events";
import { useAnimations, useGLTF, useTexture } from "@react-three/drei";
import { DeviceData } from "../../constants/ProjectsData.ts";
import { modelPath, texturePath } from "../../utils/ResourcesUtils.ts";
import { motion } from "framer-motion-3d";

type DeviceModelProps = {
    device: DeviceData;
    position?: Vector3;
    rotation?: Euler;
    scale?: Vector3;
    inView?: boolean;
    hoverAnimation?: boolean;
    onHover?: (event: ThreeEvent<PointerEvent>) => void;
    onLeave?: (event: ThreeEvent<PointerEvent>) => void;
    onClick?: (event: ThreeEvent<MouseEvent>) => void;
};

type IGeometry = Object3D & {
    geometry: BufferGeometry<NormalBufferAttributes>;
};

const initialScale = 0.2;
const hoverScale = 0.225;

function DeviceModel({
    device,
    position,
    rotation,
    scale,
    hoverAnimation = false,
    inView = true,
    onHover,
    onLeave,
    onClick,
}: DeviceModelProps) {
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
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (inView) {
            actions?.screenflipAction
                ?.setDuration(1)
                .setLoop(2200, 1)
                // .reset()
                .play();
        }

        return () => {
            actions?.screenflipAction?.stop();
        };
    }, [actions, inView]);

    return (
        <motion.group
            initial={{ y: 0.5, scale: initialScale, opacity: 0 }}
            animate={
                inView
                    ? {
                          y: 0,
                          transition: {
                              // type: "spring",
                              // stiffness: 200,
                              // damping: 20,
                              duration: 2,
                              easings: ["easeIn"],
                          },
                      }
                    : {}
            }
            whileHover={hoverAnimation ? { scale: hoverScale } : {}}
            transition={{ easings: "easeInOut", duration: 0.4 }}
            onPointerEnter={e => {
                if (onHover) {
                    e.stopPropagation();
                    onHover?.(e);
                }
            }}
            onPointerLeave={e => {
                if (onLeave) {
                    e.stopPropagation();
                    onLeave?.(e);
                }
            }}
            onClick={e => {
                if (onClick) {
                    e.stopPropagation();
                    onClick?.(e);
                }
            }}
            scale={scale}
            position={position}
            rotation={rotation}>
            <group
                ref={group}
                name='screenflip'
                rotation-x={-0.1}
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
                            roughness={0}
                            metalness={0.25}
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
        </motion.group>
    );
}

export default DeviceModel;
