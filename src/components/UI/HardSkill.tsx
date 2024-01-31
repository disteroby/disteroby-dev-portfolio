import { Skill, SkillType } from "../../constants/HardSkills.ts";
import SkillPopup from "./SkillPopup.tsx";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

type HardSkillProps = {
    skill: Skill;
    className?: string;
    filters?: SkillType[];
};

export default function HardSkill({
    skill,
    className,
    filters = [],
}: HardSkillProps) {
    function opacityStatusAnimation() {
        const isSelected = filters.some(
            filter =>
                skill.type === filter ||
                (skill.type as SkillType[]).includes(filter),
        );

        return isSelected ? "selected" : "unselected";
    }

    return (
        <motion.div
            variants={{
                selected: {
                    opacity: 1,
                },
                unselected: {
                    scale: 0.75,
                    opacity: 0.25,
                },
            }}
            animate={opacityStatusAnimation()}>
            <motion.div
                onClick={() => console.log(skill)}
                variants={{
                    init: { transition: {} },
                    onHover: {},
                }}
                className='relative select-none'
                animate='init'
                whileHover='onHover'
                whileTap='onHover'>
                <motion.div
                    variants={{
                        init: {
                            opacity: 0,
                            bottom: "0%",
                            scale: 0.5,
                            translateX: "-50%",
                            translateY: "-1rem",
                        },
                        onHover: {
                            opacity: 0.75,
                            bottom: "60%",
                            scale: 1,
                            transition: {
                                easings: ["linear"],
                                duration: 0.25,
                            },
                        },
                    }}
                    className='absolute left-1/2 z-50'>
                    <SkillPopup skill={skill} />
                </motion.div>
                <motion.div
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
                    transition={{
                        easings: ["easeIn"],
                        duration: 0.25,
                    }}
                    className={twMerge(
                        "relative size-[4rem] hover:select-none",
                        className,
                    )}>
                    {["opacity-80", "opacity-50", "opacity-20"].map(
                        (opacity, idx) => (
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
                                        translateX: `-${0.35 * offset}rem`,
                                        translateY: `${0.35 * offset}rem`,
                                        transition: {
                                            delay: 0.1,
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
                        ),
                    )}
                    <div
                        style={{ backgroundColor: skill.color }}
                        className='absolute inset-0 rounded-2xl bg-gradient-to-bl from-white/40 to-black/20 '
                    />
                    <div className='absolute inset-0 grid place-items-center text-[2rem]'>
                        {<skill.logo />}
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
