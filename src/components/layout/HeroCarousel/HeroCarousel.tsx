import { Suspense, useState } from "react";
import { Canvas, Vector3 } from "@react-three/fiber";
import { Html, OrbitControls, useProgress } from "@react-three/drei";
import { Stats } from "@react-three/drei";
import HeroStars from "../HeroStars/HeroStars.tsx";

function Loader() {
    const { progress } = useProgress();

    console.log(progress);
    return <Html center>{progress} % loaded</Html>;
}

export default function HeroCarousel() {
    const itemsCount = 5;
    const itemsPositionRadius = 2;

    function itemsPositions(theta: number, r: number): Vector3 {
        return [Math.sin(theta) * r, 0, Math.cos(theta) * r];
    }

    const positions: Vector3[] = [];
    for (let i = 0; i < itemsCount; i++) {
        const theta = (i * Math.PI * 2) / itemsCount;
        positions.push(itemsPositions(theta, itemsPositionRadius));
    }

    const [newColor, setNewColor] = useState([
        false,
        false,
        false,
        false,
        false,
    ]);

    function updateNewColor(idx: number, value: boolean) {
        setNewColor(oldArray => {
            const newArray = [...oldArray];
            newArray[idx] = value;
            return newArray;
        });
    }

    return (
        <Canvas
            className='h-[100vh!important]'
            camera={{ position: [0, 1, 5], fov: 80 }}>
            <Suspense fallback={<Loader />}>
                <OrbitControls autoRotate autoRotateSpeed={-1} />
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 5, 0]} intensity={0.6} />
                <HeroStars />
                {positions.map((position, idx) => (
                    <mesh
                        key={idx}
                        position={position}
                        onPointerEnter={e => {
                            e.stopPropagation();
                            updateNewColor(idx, true);
                        }}
                        onPointerLeave={e => {
                            e.stopPropagation();
                            updateNewColor(idx, false);
                        }}>
                        <sphereGeometry args={[0.5]} />
                        <meshStandardMaterial
                            color={newColor[idx] ? "red" : "blue"}
                        />
                    </mesh>
                ))}
            </Suspense>
            <Stats
                className='origin-top-left scale-[200%] lg:scale-[300%]'
                showPanel={0}
            />
        </Canvas>
    );
}
