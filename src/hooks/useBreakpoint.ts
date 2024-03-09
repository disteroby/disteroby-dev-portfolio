import { useThree } from "@react-three/fiber";

export default function useBreakpoint() {
    const { viewport } = useThree();

    const currentWidth = viewport.width;

    const isSm = currentWidth <= 640;
    const isMd = !isSm && currentWidth <= 768;
    const isLg = !isMd && currentWidth <= 1024;
    const isXl = !isLg && currentWidth <= 1280;
    const is2Xl = !isXl && currentWidth <= 1536;

    return {
        viewport,
        isSm,
        isMd,
        isLg,
        isXl,
        is2Xl,
    };
}
