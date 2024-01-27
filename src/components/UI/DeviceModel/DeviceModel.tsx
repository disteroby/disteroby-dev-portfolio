import { RefObject, useRef } from "react";
import {
    BufferGeometry,
    DoubleSide,
    MeshStandardMaterial,
    NormalBufferAttributes,
    Object3D,
} from "three";
import { Euler, Vector3 } from "@react-three/fiber";
import { ThreeEvent } from "@react-three/fiber/dist/declarations/src/core/events";
import { useGLTF, useTexture } from "@react-three/drei";
import {
    carouselDevicesData,
    IDevicesData,
} from "../../../constants/DevicesData.ts";
import useSectionRef from "../../../hooks/useSectionRef.ts";
import { motion } from "framer-motion-3d";

type ModelProps = {
    data: IDevicesData;
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
    data,
    position,
    rotation,
    scale,
    onHover,
    onLeave,
}: ModelProps) {
    const colorMap = useTexture(`./${data.texture}`);

    const sectionRef = useSectionRef(data.href) as RefObject<HTMLElement>;
    const screenRef = useRef<MeshStandardMaterial>(null!);

    const modelPath = data.type === "laptop" ? "/mac2.glb" : "/mac2.glb";
    const { nodes, materials } = useGLTF(modelPath);

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
                            ref={screenRef}
                            roughness={0}
                            metalness={0.65}
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

useGLTF.preload("./mac2.glb");
carouselDevicesData.map(device => {
    useTexture.preload(`./${device.texture}`);
});

export default DeviceModel;
