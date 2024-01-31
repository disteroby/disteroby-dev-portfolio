import { ReactNode } from "react";
import { Skill } from "../../constants/HardSkills.ts";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

type HardSkillProps = {
    children: ReactNode;
    skill: Skill;
    className?: string;
};

export default function HardSkill({
    children,
    skill,
    className,
}: HardSkillProps) {
    return (
        <motion.div
            onClick={() => console.log(skill)}
            variants={{
                init: { transition: {} },
                onHover: {
                    rotate: "-35deg",
                    skewX: "20deg",
                    transition: {
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
                "relative size-[4rem] hover:select-none",
                className,
            )}>
            {["opacity-100", "opacity-60", "opacity-20"].map((opacity, idx) => (
                <motion.div
                    key={opacity}
                    variants={{
                        init: {
                            transition: {
                                translateX: 0,
                                translateY: 0,
                            },
                        },
                        onHover: offset => ({
                            translateX: `-${0.5 * offset}rem`,
                            translateY: `${0.5 * offset}rem`,
                            transition: {
                                easings: ["linear"],
                            },
                        }),
                    }}
                    transition={{
                        type: "tween",
                    }}
                    custom={idx + 1}
                    style={{ borderColor: skill.color }}
                    className={twMerge(
                        "absolute inset-0 rounded-2xl border-2 border-white",
                        opacity,
                    )}
                />
            ))}
            <div
                style={{ backgroundColor: skill.color }}
                className='absolute inset-0 rounded-2xl bg-gradient-to-bl from-white/40 to-black/20 '
            />
            <div className='absolute inset-0 grid place-items-center text-[3rem]'>
                {children}
            </div>
        </motion.div>
    );
}
