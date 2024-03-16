import { Euler, Vector3 } from "@react-three/fiber";
import { ThreeEvent } from "@react-three/fiber/dist/declarations/src/core/events";
import { DeviceData } from "../../../constants/ProjectsData.ts";
import Laptop from "./Laptop.tsx";
import Smartphone from "./Smartphone.tsx";
import { motion } from "framer-motion-3d";

type DeviceModelProps = {
    device: DeviceData;
    position?: Vector3;
    rotation?: Euler;
    scale?: number;
    animDelay?: number;
    animDuration?: number;
    inView?: boolean;
    hoverAnimation?: boolean;
    screenLoop: boolean;
    onHover?: (event: ThreeEvent<PointerEvent>) => void;
    onLeave?: (event: ThreeEvent<PointerEvent>) => void;
    onClick?: (event: ThreeEvent<MouseEvent>) => void;
};

const initialScale = 0.2;
const hoverScale = 0.225;

function DeviceModel({
    device,
    position,
    rotation,
    scale,
    animDelay = 0,
    animDuration = 1,
    inView = true,
    hoverAnimation = false,
    screenLoop,
    onHover,
    onLeave,
    onClick,
}: DeviceModelProps) {
    const animationProps = {
        y: 0,
        transition: {
            duration: 3,
            easings: ["easeOut"],
        },
    };

    return (
        <motion.group
            initial={{ y: 0.5, scale: initialScale, opacity: 0 }}
            animate={inView ? animationProps : {}}
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
            scale={scale}
            position={position}
            rotation={rotation}>
            <ambientLight intensity={0.4} />
            {device.type === "laptop" ? (
                <Laptop
                    device={device}
                    inView={inView}
                    animDuration={animDuration}
                    animDelay={animDelay}
                    screenLoop={screenLoop}
                    onClick={onClick}
                />
            ) : (
                <Smartphone
                    device={device}
                    inView={inView}
                    animDuration={animDuration}
                    animDelay={animDelay}
                    screenLoop={screenLoop}
                    scale={1.35 * (scale ?? 1)}
                    onClick={onClick}
                />
            )}
        </motion.group>
    );
}

export default DeviceModel;
