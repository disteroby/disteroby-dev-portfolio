import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { CanvasProps } from "@react-three/fiber/dist/declarations/src/web/Canvas";
import { useInView } from "framer-motion";

export default function PerformanceCanvas({ children, ...props }: CanvasProps) {
    const ref = useRef<HTMLCanvasElement>(null!);
    const isInView = useInView(ref);

    return (
        <Canvas frameloop={isInView ? "always" : "never"} ref={ref} {...props}>
            {children}
        </Canvas>
    );
}
