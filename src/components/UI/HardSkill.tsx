import { ReactNode } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

type HardSkillProps = {
    children: ReactNode;
    className?: string;
};

export default function HardSkill({ children, className }: HardSkillProps) {
    return (
        <motion.div
            variants={{
                init: { transition: {} },
                onHover: {
                    rotate: "-35deg",
                    skewX: "20deg",
                    transition: {
                        when: "beforeChildren",
                        // delayChildren: 0.1,
                        staggerChildren: 0.05,
                    },
                },
            }}
            animate='init'
            whileHover='onHover'
            whileTap='onHover'
            transition={{
                easings: ["easeIn"],
                duration: 0.25,
            }}
            className={twMerge(
                "relative z-[1] grid size-[4rem] place-items-center rounded-2xl bg-blue-500",
                className,
            )}>
            <div className='absolute text-[3rem]'>{children}</div>
            {["opacity-100", "opacity-60", "opacity-20"].map((opacity, idx) => (
                <motion.div
                    key={opacity}
                    variants={{
                        init: { transition: {} },
                        onHover: offset => ({
                            translateX: `-${10 * offset}px`,
                            translateY: `${10 * offset}px`,
                        }),
                    }}
                    custom={idx + 1}
                    className={`absolute inset-0 rounded-2xl border-2 border-green-500 ${opacity}`}
                />
            ))}
        </motion.div>
    );
}
