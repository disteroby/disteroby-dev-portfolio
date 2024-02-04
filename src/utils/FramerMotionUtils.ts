import { Variants } from "framer-motion";

export const opacityVariants: Variants = {
    invisible: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
    visibleWithDelay: (delay?: number) => ({
        opacity: 1,
        transition: {
            staggerChildren: delay ?? 0,
        },
    }),
};
