import { Variants } from "framer-motion";

export const opacityVariants: Variants = {
    /**
     * Variant for making elements invisible.
     */
    invisible: {
        opacity: 0,
    },
    /**
     * Variant for making elements visible.
     */
    visible: {
        opacity: 1,
    },
    /**
     * Variant for making elements visible with opacity set to 1 and optional delay for staggering children transitions.
     * @param delay Optional delay for staggering children transitions.
     * @returns Variant object with opacity set to 1 and transition configuration.
     */
    visibleWithDelay: (delay?: number) => ({
        opacity: 1,
        transition: {
            staggerChildren: delay ?? 0,
        },
    }),
};
