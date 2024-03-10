import { useWindowWidth } from "@react-hook/window-size";

export default function useBreakpoint() {
    const width = useWindowWidth();

    const isSm = width < 640;
    const isMd = width >= 640 && width < 768;
    const isLg = width >= 768 && width < 1024;
    const isXl = width >= 1024 && width < 1280;
    const is2Xl = width >= 1280 && width < 1536;
    const is3Xl = width >= 1536;

    return {
        width,
        isSm,
        isMd,
        isLg,
        isXl,
        is2Xl,
        is3Xl,
    };
}
