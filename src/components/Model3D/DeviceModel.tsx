import { RefObject } from "react";
import {
    BufferGeometry,
    DoubleSide,
    NormalBufferAttributes,
    Object3D,
} from "three";
import { Euler, Vector3 } from "@react-three/fiber";
import { ThreeEvent } from "@react-three/fiber/dist/declarations/src/core/events";
import { useGLTF, useTexture } from "@react-three/drei";
import { DevicesData } from "../../constants/DevicesData.ts";
import { useSectionRef } from "../../hooks/useSectionRef.ts";
import { modelPath, texturePath } from "../../utils/ResourcesUtils.ts";
import { motion } from "framer-motion-3d";

type ModelProps = {
    device: DevicesData;
    position?: Vector3;
    rotation?: Euler;
    scale?: Vector3;
    onHover?: (event: ThreeEvent<PointerEvent>) => void;
    onLeave?: (event: ThreeEvent<PointerEvent>) => void;
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
    onHover,
    onLeave,
}: ModelProps) {
    const colorMap = useTexture(texturePath(device.texture));
    // const colorMap = useVideoTexture("./video/test.mp4");

    const sectionRef = useSectionRef(device.project) as RefObject<HTMLElement>;

    const { nodes, materials } = useGLTF(modelPath(device.type), true);

    return (
        <motion.group
            initial={{ scale: initialScale }}
            whileHover={{ scale: hoverScale }}
            transition={{ easings: "easeInOut", duration: 0.4 }}
            onPointerEnter={e => {
                e.stopPropagation();
                onHover?.(e);
            }}
            onPointerLeave={e => {
                e.stopPropagation();
                onLeave?.(e);
            }}
            onClick={e => {
                e.stopPropagation();
                sectionRef?.current?.scrollIntoView();
            }}
            castShadow
            receiveShadow
            dispose={null}
            scale={scale}
            position={position}
            rotation={rotation}>
            <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
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
                            metalness={0.5}
                            side={DoubleSide}
                            map={colorMap}
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
