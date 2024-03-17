import { Skill, SkillType } from "../../constants/SkillsData.ts";
import { hasFilterOrNoFilter } from "../../utils/SkillUtils.ts";
import { motion } from "framer-motion";
import { twJoin, twMerge } from "tailwind-merge";

type HardSkillProps = {
    skill: Skill;
    className?: string;
    color?: string;
    filters?: SkillType[];
    onClick: (idx: number) => void;
    idx: number;
    isSelected: boolean;
};

export default function HardSkill({
    skill,
    className,
    color,
    onClick,
    idx,
    isSelected,
    filters = [],
}: HardSkillProps) {
    const isFiltered = hasFilterOrNoFilter(skill.type, filters);

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
            animate={isFiltered ? "selected" : "unselected"}>
            <motion.div
                variants={{
                    init: { transition: {} },
                    isActive: {},
                }}
                className={twMerge(
                    "group relative select-none duration-200",
                    isFiltered && "cursor-pointer hover:scale-110",
                    isSelected && "scale-110",
                )}
                animate={isSelected ? "isActive" : "init"}
                onClick={() => isFiltered && onClick(idx)}>
                {["blur-sm", "blur-lg"].map(blur => (
                    <div
                        key={blur}
                        style={{
                            backgroundColor: `#${color}`,
                        }}
                        className={twMerge(
                            "absolute inset-0 rounded-full opacity-0 transition duration-500",
                            !isSelected &&
                                isFiltered &&
                                "group-hover:opacity-100",
                            blur,
                        )}
                    />
                ))}
                <motion.div
                    variants={{
                        init: { transition: {} },
                        isActive: {
                            transition: {
                                staggerChildren: 0.05,
                            },
                        },
                    }}
                    className={twMerge(
                        "animation-[60s] relative -z-10 size-[4rem] hover:select-none",
                        className,
                    )}>
                    {["opacity-70", "opacity-40", "opacity-10"].map(
                        (opacity, idx) => (
                            <motion.div
                                key={opacity}
                                variants={{
                                    init: {
                                        inset: `${5}%`,
                                        transition: {
                                            translateX: 0,
                                            translateY: 0,
                                        },
                                    },
                                    isActive: offset => ({
                                        inset: `-${offset * 15}%`,
                                        transition: {
                                            delay: 0.1,
                                        },
                                    }),
                                }}
                                transition={{
                                    type: "tween",
                                }}
                                custom={idx + 1}
                                className={twJoin(
                                    "absolute rounded-full border lg:border-2",
                                    opacity,
                                )}
                            />
                        ),
                    )}
                    <div
                        style={{ backgroundColor: `#${color}` }}
                        className='absolute inset-0 rounded-full'
                    />
                    <div className='pointer-events-none absolute inset-0 grid select-none place-items-center'>
                        {<skill.logo />}
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
