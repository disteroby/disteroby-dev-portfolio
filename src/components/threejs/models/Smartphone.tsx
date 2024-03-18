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
        back: THREE.Mesh;
        Cylinder: THREE.Mesh;
        Cylinder_1: THREE.Mesh;
        btn_power: THREE.Mesh;
        btn_volume: THREE.Mesh;
        Cylinder001: THREE.Mesh;
        Cylinder001_1: THREE.Mesh;
        screen: THREE.Mesh;
        smartphone: THREE.Mesh;
    };
    materials: {
        silver: THREE.MeshPhysicalMaterial;
        ["black.001"]: THREE.MeshPhysicalMaterial;
        lens: THREE.MeshPhysicalMaterial;
        ["black.006"]: THREE.MeshPhysicalMaterial;
        ["black.004"]: THREE.MeshPhysicalMaterial;
    };
};

type SmartphoneProps = {
    device: DeviceData;
    animDelay: number;
    animDuration: number;
    inView: boolean;
    screenLoop: boolean;
    scale: number;
    onClick?: (event: ThreeEvent<MouseEvent>) => void;
};

export default function Smartphone({
    device,
    scale,
    animDelay,
    animDuration,
    inView,
    screenLoop,
    onClick,
}: SmartphoneProps) {
    const group = useRef<Group>(null!);
    const { nodes, materials } = useModelAnimations(
        device,
        animDelay,
        animDuration,
        inView,
        group,
    ) as GLTFResult;

    const rotationMode =
        device.type === "smartphone" && device.deviceOrientation === "portrait"
            ? 0
            : Math.PI / 2;

    const { imgMatRef, texture, changeScreen } = useProjectTexture(
        device,
        screenLoop && inView,
    );

    const setCursor = useCursorPointer();

    return (
        <group
            ref={group}
            scale={scale}
            position-y={1.8}
            rotation-z={rotationMode}
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
            <group name='Scene'>
                <group name='root' rotation={[Math.PI / 2, 0, 0]}>
                    <mesh
                        name='back'
                        geometry={nodes.back.geometry}
                        material={materials.silver}
                        position={[-0.0175, 0.00095, 0.00353]}
                        scale={[1, 1, 1.20265]}
                    />
                    <group
                        name='backcam'
                        position={[0.62607, 2.0582, -0.20179]}
                        scale={[0.23271, 0.23271, 0.11031]}>
                        <mesh
                            name='Cylinder'
                            geometry={nodes.Cylinder.geometry}
                            material={materials["black.001"]}
                        />
                        <mesh
                            name='Cylinder_1'
                            geometry={nodes.Cylinder_1.geometry}
                            material={materials.lens}
                        />
                    </group>
                    <mesh
                        name='btn_power'
                        geometry={nodes.btn_power.geometry}
                        material={materials["black.001"]}
                        position={[1.23132, 0.06871, 0]}
                        scale={[1, 0.28149, 0.5689]}
                    />
                    <mesh
                        name='btn_volume'
                        geometry={nodes.btn_volume.geometry}
                        material={materials["black.001"]}
                        position={[1.23132, 0.97668, 0]}
                        scale={[1, 0.7143, 0.5689]}
                    />
                    <group
                        name='frontcam'
                        position={[0.97571, 2.27739, 0.17092]}
                        rotation={[Math.PI, -0.04982, Math.PI]}
                        scale={[0.08013, 0.08013, 0.03798]}>
                        <mesh
                            name='Cylinder001'
                            geometry={nodes.Cylinder001.geometry}
                            material={materials["black.001"]}
                        />
                        <mesh
                            name='Cylinder001_1'
                            geometry={nodes.Cylinder001_1.geometry}
                            material={materials.lens}
                        />
                    </group>
                    <mesh name='screen' geometry={nodes.screen.geometry}>
                        <imageFadeMaterial
                            ref={imgMatRef}
                            tex={texture}
                            textureCount={device.textureCount}
                            toneMapped={false}
                        />
                    </mesh>
                    <mesh
                        name='smartphone'
                        geometry={nodes.smartphone.geometry}
                        material={materials["black.004"]}
                    />
                </group>
            </group>
        </group>
    );
}
