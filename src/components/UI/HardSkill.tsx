import { MouseEvent } from "react";
import { Skill, SkillType } from "../../constants/SkillsData.ts";
import { hasFilterOrNoFilter } from "../../utils/SkillUtils.ts";
import { motion, useMotionValue } from "framer-motion";
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

    const x = useMotionValue(0); // going to set this value on mouse move

    const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const halfWidth = event.target.offsetWidth / 2;
        x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={() => x.set(0)}
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
                    "relative select-none duration-200",
                    isFiltered && "cursor-pointer hover:scale-110",
                    isSelected && "scale-110",
                )}
                animate={isSelected ? "isActive" : "init"}
                onClick={() => isFiltered && onClick(idx)}>
                {/*<motion.div*/}
                {/*    variants={{*/}
                {/*        init: {*/}
                {/*            opacity: 0,*/}
                {/*            bottom: "0%",*/}
                {/*            scale: 0.5,*/}
                {/*            translateX: "-50%",*/}
                {/*            translateY: "-1rem",*/}
                {/*        },*/}
                {/*        isActive: {*/}
                {/*            opacity: 0.75,*/}
                {/*            bottom: "60%",*/}
                {/*            scale: 1,*/}
                {/*            transition: {*/}
                {/*                easings: ["linear"],*/}
                {/*                duration: 0.25,*/}
                {/*            },*/}
                {/*        },*/}
                {/*    }}*/}
                {/*    className='absolute left-1/2 z-[999]'>*/}
                {/*    <SkillPopup skill={skill} />*/}
                {/*</motion.div>*/}
                <motion.div
                    variants={{
                        init: { transition: {} },
                        isActive: {
                            // rotate: "-37.5deg",
                            // skewX: "15deg",
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
                        className='absolute inset-0 rounded-full border border-white lg:border-2'
                    />
                    <div className='pointer-events-none absolute inset-0 grid select-none place-items-center'>
                        {<skill.logo />}
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
