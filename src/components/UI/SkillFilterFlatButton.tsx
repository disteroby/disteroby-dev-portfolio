import { SkillType } from "../../constants/SkillsData.ts";
import { opacityVariants } from "../../utils/FramerMotionUtils.ts";
import { hasFilter } from "../../utils/SkillUtils.ts";
import { motion } from "framer-motion";
import { FaMobile } from "react-icons/fa6";
import { IoLogoGameControllerB } from "react-icons/io";
import { IoDesktop } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

const types: SkillType[] = ["web", "mobile", "game"];

const icons: { [key in SkillType]: JSX.Element } = {
    web: <IoDesktop />,
    mobile: <FaMobile />,
    game: <IoLogoGameControllerB />,
};

const ringColors = ["ring-indigo-500", "ring-cyan-500", "ring-fuchsia-500"];
const textColors = ["text-indigo-500", "text-cyan-500", "text-fuchsia-500"];

type SkillFilterButtonProps = {
    currentFilters: SkillType[];
    onClick: (filter: SkillType) => void;
};

export default function SkillFilterFlatButton({
    currentFilters,
    onClick,
}: SkillFilterButtonProps) {
    const isFilterSelected = types.map(skill =>
        hasFilter(skill, currentFilters),
    );

    return (
        <motion.div
            variants={opacityVariants}
            whileInView='visible'
            initial='invisible'
            transition={{
                staggerChildren: 1,
                delay: 1,
                duration: 2,
                delayChildren: 2,
            }}
            viewport={{ amount: "all", once: true }}
            className='space-y-4 rounded-xl border border-white/60 px-12 pb-12'>
            <div className='tracking-widert relative flex -translate-y-[45%] items-center justify-center gap-2 text-3xl font-light text-white/80'>
                <span className='bg-dark-gray px-4 '>Skill Set</span>
            </div>
            <motion.div
                variants={opacityVariants}
                transition={{
                    staggerChildren: 0.5,
                }}
                className='flex justify-between '>
                {types.map((type, idx) => (
                    <motion.div
                        variants={opacityVariants}
                        transition={{ duration: 1 }}
                        key={`button-${type}`}>
                        <div
                            className={twMerge(
                                "group flex size-[3rem] items-center justify-center rounded-full bg-white text-dark-gray/20 ring-[.25rem] ring-white/80 transition duration-300 ease-in-out hover:cursor-pointer",
                                isFilterSelected[idx] && [
                                    textColors[idx],
                                    ringColors[idx],
                                ],
                            )}
                            onClick={() => onClick(type)}>
                            <div className='absolute text-2xl'>
                                {icons[type]}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}
