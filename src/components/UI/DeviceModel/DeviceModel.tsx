import { RefObject, useRef } from "react";
import {
    BufferGeometry,
    DoubleSide,
    Group,
    MeshStandardMaterial,
    NormalBufferAttributes,
    Object3D,
} from "three";
import * as THREE from "three";
import { Euler, Vector3 } from "@react-three/fiber";
import { ThreeEvent } from "@react-three/fiber/dist/declarations/src/core/events";
import { useGLTF, useTexture } from "@react-three/drei";
import {
    carouselDevicesData,
    IDevicesData,
} from "../../../constants/DevicesData.ts";
import useSectionRef from "../../../hooks/useSectionRef.ts";
import { useSmoothLerp } from "../../../hooks/useSmoothLerp.ts";
import { Lerp } from "../../../utils/LerpUtils.ts";

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

function DeviceModel({
    data,
    position,
    rotation,
    scale,
    onHover,
    onLeave,
}: ModelProps) {
    const sectionRef = useSectionRef(data.href) as RefObject<HTMLElement>;

    const colorMap = useTexture(`./${data.texture}`);

    const screenRef = useRef<MeshStandardMaterial>(null!);

    const group = useRef<Group>(null!);

    const initialScale = 0.2;
    const hoverScale = 0.225;
    const initialIntensity = 0.015;
    const hoverIntensity = 0.03;

    const updateTarget = useSmoothLerp(smooth => {
        group.current.scale.lerpVectors(
            new THREE.Vector3(initialScale, initialScale, initialScale),
            new THREE.Vector3(hoverScale, hoverScale, hoverScale),
            smooth,
        );

        screenRef.current.emissiveIntensity = Lerp(
            initialIntensity,
            hoverIntensity,
            smooth,
        );
    }, 7);

    const isLaptop = data.type === "laptop";

    const modelPath = isLaptop ? "/mac2.glb" : "/mac2.glb";
    const { nodes, materials } = useGLTF(modelPath);

    return (
        <group
            ref={group}
            onPointerEnter={e => {
                e.stopPropagation();
                onHover?.(e);
                updateTarget(1);
            }}
            onPointerLeave={e => {
                e.stopPropagation();
                onLeave?.(e);
                updateTarget(0);
            }}
            onClick={e => {
                e.stopPropagation();
                // console.log(data);
                // routeChange();

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
                            emissive={"#7d7d7d"}
                            emissiveIntensity={initialIntensity}
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
        </group>
    );
}

useGLTF.preload("./mac2.glb");
carouselDevicesData.map(device => {
    useTexture.preload(`./${device.texture}`);
});

export default DeviceModel;
