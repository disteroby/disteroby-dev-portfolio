import { useMemo, useRef } from "react";
import {
    BufferGeometry,
    Color,
    Group,
    MeshStandardMaterial,
    NormalBufferAttributes,
    Object3D,
} from "three";
import * as THREE from "three";
import { Euler, Vector3 } from "@react-three/fiber";
import { ThreeEvent } from "@react-three/fiber/dist/declarations/src/core/events";
import { useGLTF } from "@react-three/drei";
import { IDevicesData } from "../../../constants/DevicesData.ts";
import { useSmoothLerp } from "../../../hooks/useSmoothLerp.ts";

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
    const screenRef = useRef<MeshStandardMaterial>(null!);
    const group = useRef<Group>(null!);

    const colorTo = useMemo(() => new Color("#262a2b"), []);
    const black = new Color("black");

    const updateTarget = useSmoothLerp(smooth => {
        group.current.scale.lerpVectors(
            new THREE.Vector3(0.2, 0.2, 0.2),
            new THREE.Vector3(0.225, 0.225, 0.225),
            smooth,
        );

        screenRef.current.emissive.lerpColors(black, colorTo, smooth);
    }, 7);

    // const [_isHover, setIsHover] = useState(false);

    const isLaptop = data.type === "laptop";

    const modelPath = isLaptop ? "/mac.glb" : "/mac.glb";
    const { nodes, materials } = useGLTF(modelPath);

    return (
        <group
            ref={group}
            onPointerEnter={e => {
                onHover?.(e);
                e.stopPropagation();
                // setIsHover(true);
                updateTarget(1);
            }}
            onPointerLeave={e => {
                e.stopPropagation();
                onLeave?.(e);
                // setIsHover(false);
                updateTarget(0);
            }}
            onClick={e => {
                e.stopPropagation();
                console.log(data.type, data.href);
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
                        <meshStandardMaterial color={black} ref={screenRef} />
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

useGLTF.preload("/mac.glb");

export default DeviceModel;
