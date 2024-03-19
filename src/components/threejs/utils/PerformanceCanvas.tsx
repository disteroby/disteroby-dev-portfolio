import { Suspense, useRef } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { CanvasProps } from "@react-three/fiber/dist/declarations/src/web/Canvas";
import { Preload } from "@react-three/drei";
import { EarthMaterial } from "../materials/EarthMaterial.tsx";
import { ImageFadeMaterial } from "../materials/ImageFadeMaterial.tsx";
import { useInView } from "framer-motion";
import { isMobileOnly, mobileVendor } from "react-device-detect";

extend({ ImageFadeMaterial });
extend({ EarthMaterial });

export default function PerformanceCanvas({ children, ...props }: CanvasProps) {
    const ref = useRef<HTMLCanvasElement>(null!);
    const isInView = useInView(ref);

    const isIPhone = isMobileOnly && mobileVendor === "Apple";

    return (
        <Canvas
            style={{
                contain: "paint",
            }}
            frameloop={isInView ? "always" : "never"}
            ref={ref}
            {...props}>
            <Suspense fallback={null}>
                {children}
                {!isIPhone && <Preload all />}
            </Suspense>
        </Canvas>
    );
}
