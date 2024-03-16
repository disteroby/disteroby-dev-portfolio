import { useRef } from "react";
import { Group } from "three";
import * as THREE from "three";
import { GLTF } from "three-stdlib";
import { ThreeEvent } from "@react-three/fiber/dist/declarations/src/core/events";
import { DeviceData } from "../../../constants/ProjectsData.ts";
import useCursorPointer from "../../../hooks/useCursorPointer.ts";
import useModelAnimations from "../../../hooks/useModelAnimations.ts";
import useProjectTexture from "../../../hooks/useProjectTexture.ts";

type GLTFResult = GLTF & {
    nodes: {
        Cube008: THREE.Mesh;
        Cube008_1: THREE.Mesh;
        Cube008_2: THREE.Mesh;
        keyboard: THREE.Mesh;
        Cube002: THREE.Mesh;
        Cube002_1: THREE.Mesh;
        touchbar: THREE.Mesh;
    };
    materials: {
        aluminium: THREE.MeshStandardMaterial;
        ["matte.001"]: THREE.MeshStandardMaterial;
        ["screen.001"]: THREE.MeshPhysicalMaterial;
        keys: THREE.MeshStandardMaterial;
        trackpad: THREE.MeshStandardMaterial;
        touchbar: THREE.MeshStandardMaterial;
    };
};

type LaptopProps = {
    device: DeviceData;
    animDelay: number;
    animDuration: number;
    inView: boolean;
    screenLoop: boolean;
    onClick?: (event: ThreeEvent<MouseEvent>) => void;
};

export default function Laptop({
    device,
    animDelay,
    animDuration,
    inView,
    screenLoop,
    onClick,
}: LaptopProps) {
    const group = useRef<Group>(null!);
    const { nodes, materials } = useModelAnimations(
        device,
        animDelay,
        animDuration,
        inView,
        group,
    ) as GLTFResult;

    const { imgMatRef, texture, changeScreen } = useProjectTexture(
        device,
        screenLoop && inView,
    );

    const setCursor = useCursorPointer();

    return (
        <group
            onPointerEnter={() => {
                setCursor(true);
            }}
            onPointerLeave={() => {
                setCursor(false);
            }}
            onClick={e => {
                e.stopPropagation();
                onClick?.(e);
                if (screenLoop) changeScreen();
            }}>
            <group
                ref={group}
                name='screenflip'
                rotation-x={Math.PI / 2}
                position={[0, -0.04, 0.41]}>
                <group
                    position={[0, 2.965, -0.13]}
                    rotation={[Math.PI / 2, 0, 0]}>
                    <mesh
                        name='Cube008'
                        geometry={nodes.Cube008.geometry}
                        material={materials.aluminium}
                    />
                    <mesh
                        name='Cube008_1'
                        geometry={nodes.Cube008_1.geometry}
                        material={materials["matte.001"]}
                    />
                    <mesh name='Cube008_2' geometry={nodes.Cube008_2.geometry}>
                        <imageFadeMaterial
                            ref={imgMatRef}
                            tex={texture}
                            textureCount={device.textureCount}
                            toneMapped={false}
                        />
                    </mesh>
                </group>
            </group>
            <mesh
                name='keyboard'
                geometry={nodes.keyboard.geometry}
                material={materials.keys}
                position={[1.793, 0, 3.451]}
            />
            <group name='base' position={[0, -0.1, 3.394]}>
                <mesh
                    name='Cube002'
                    geometry={nodes.Cube002.geometry}
                    material={materials.aluminium}
                />
                <mesh
                    name='Cube002_1'
                    geometry={nodes.Cube002_1.geometry}
                    material={materials.trackpad}
                />
            </group>
            <mesh
                name='touchbar'
                geometry={nodes.touchbar.geometry}
                material={materials.touchbar}
                position={[0, -0.027, 1.201]}
            />
        </group>
    );
}
