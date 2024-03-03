import { SkillType } from "../../constants/SkillsData.ts";
import { opacityVariants } from "../../utils/FramerMotionUtils.ts";
import { hasFilter } from "../../utils/SkillUtils.ts";
import { motion } from "framer-motion";
import { FaMobile } from "react-icons/fa6";
import { ImFilter } from "react-icons/im";
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
                staggerChildren: 0.5,
            }}
            viewport={{ amount: "some", once: true }}
            className='space-y-8 px-8'>
            <motion.div
                variants={opacityVariants}
                className='flex items-center justify-center gap-2 text-4xl font-light uppercase tracking-widest text-white/10'>
                <div>Filter</div>
                <span className='pb-2 text-2xl'>
                    <ImFilter />
                </span>
            </motion.div>
            <motion.div
                variants={opacityVariants}
                transition={{
                    staggerChildren: 0.5,
                }}
                className='flex justify-between '>
                {types.map((type, idx) => (
                    <motion.div
                        key={`button-${type}`}
                        variants={opacityVariants}
                        transition={{ duration: 1 }}
                        className={twMerge(
                            "group grid size-[4rem] place-items-center rounded-full bg-white text-dark-gray/20 ring-[.3rem] ring-white/80 transition duration-300 ease-in-out hover:cursor-pointer",
                            isFilterSelected[idx] && [
                                textColors[idx],
                                ringColors[idx],
                            ],
                        )}
                        onClick={() => onClick(type)}>
                        <div className='absolute text-3xl'>{icons[type]}</div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}
