import { SkillType } from "../../constants/SkillsData.ts";
import { opacityVariants } from "../../utils/FramerMotionUtils.ts";
import { hasFilter } from "../../utils/SkillUtils.ts";
import { polarToCartesian } from "../../utils/TransformUtils.ts";
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

const bgColors = ["bg-indigo-500/90", "bg-cyan-500/90", "bg-fuchsia-500/90"];
const textColors = ["text-indigo-500", "text-cyan-500", "text-fuchsia-500"];

type SkillFilterButtonProps = {
    currentFilters: SkillType[];
    onClick: (filter: SkillType) => void;
};

export default function SkillFilterCircularButton({
    currentFilters,
    onClick,
}: SkillFilterButtonProps) {
    const coords = types.map((_, i) =>
        polarToCartesian(((Math.PI * 2) / types.length) * i, 1).map(
            (coord, dim) => {
                return coord * (dim === 0 ? 50 : -50) + 50;
            },
        ),
    );

    const isFilterSelected = types.map(skill =>
        hasFilter(skill, currentFilters),
    );

    return (
        <motion.div
            variants={opacityVariants}
            whileInView='visible'
            initial='invisible'
            transition={{
                duration: 2.5,
            }}
            viewport={{ amount: 0.35, once: true }}
            className='relative aspect-square w-full'>
            <div className='absolute inset-[35%] flex flex-col items-center justify-center gap-2 rounded-full border-2 pt-4 text-center text-4xl uppercase tracking-widest text-white/30' />
            <div className='absolute inset-[35%] overflow-hidden rounded-full'>
                {types.map((type, idx) => (
                    <div
                        key={`border-${type}`}
                        style={{
                            left: `${coords[idx][0]}%`,
                            top: `${coords[idx][1]}%`,
                        }}
                        className={twMerge(
                            "absolute size-[7rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60 transition duration-300 ease-in-out",
                            isFilterSelected[idx] && bgColors[idx],
                        )}
                    />
                ))}
            </div>
            <div className='absolute inset-[35%] rounded-full'>
                {types.map((type, idx) => (
                    <div
                        key={`button-${type}`}
                        style={{
                            left: `${coords[idx][0]}%`,
                            top: `${coords[idx][1]}%`,
                        }}
                        className={twMerge(
                            "group absolute grid size-[5.5rem] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-dark-gray/30 hover:cursor-pointer",
                            isFilterSelected[idx]
                                ? textColors[idx]
                                : "hover:text-dark-gray/50",
                        )}
                        onClick={() => onClick(type)}>
                        <div className='absolute text-3xl transition duration-300 ease-in-out group-hover:scale-125'>
                            {icons[type]}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
