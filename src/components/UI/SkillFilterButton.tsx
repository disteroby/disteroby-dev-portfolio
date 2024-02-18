import { SkillType } from "../../constants/SkillsData.ts";
import { opacityVariants } from "../../utils/FramerMotionUtils.ts";
import { hasFilter } from "../../utils/SkillUtils.ts";
import { polarToCartesian } from "../../utils/TransformUtils.ts";
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

const bgColors = ["bg-indigo-500/90", "bg-cyan-500/90", "bg-fuchsia-500/90"];
const textColors = ["text-indigo-500", "text-cyan-500", "text-fuchsia-500"];

type SkillFilterButtonProps = {
    currentFilters: SkillType[];
    onClick: (filter: SkillType) => void;
};

export default function SkillFilterButton({
    currentFilters,
    onClick,
}: SkillFilterButtonProps) {
    const radius = 10;
    const coords = types.map((_, i) =>
        polarToCartesian(((Math.PI * 2) / types.length) * i, radius).map(
            (coord, dim) => {
                return coord * (dim === 0 ? 1 : -1) + radius;
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
                duration: 1.5,
            }}
            viewport={{ amount: "all", once: true }}
            style={{ height: `${radius * 2}rem`, width: `${radius * 2}rem` }}
            className='relative max-md:scale-75 '>
            <div
                style={{
                    maskImage:
                        "radial-gradient(100% 100% at center, black 0%,transparent 50%)",
                }}
                className='pattern-cross pattern-white pattern-bg-dark-gray pattern-size-6 pattern-opacity-10 absolute inset-0 rounded-full border-4 border-dashed'
            />
            <div className='absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-full border-2 pt-4 text-center text-4xl uppercase tracking-widest text-white/10'>
                <div>Filter</div>
                <ImFilter />
            </div>
            <div className='absolute inset-0 overflow-hidden rounded-full'>
                {types.map((type, idx) => (
                    <div
                        key={`border-${type}`}
                        style={{
                            left: `${coords[idx][0]}rem`,
                            top: `${coords[idx][1]}rem`,
                        }}
                        className={twMerge(
                            "absolute size-[7rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 transition duration-300 ease-in-out",
                            isFilterSelected[idx] && bgColors[idx],
                        )}
                    />
                ))}
            </div>
            <div className='absolute inset-0 rounded-full'>
                {types.map((type, idx) => (
                    <div
                        key={`button-${type}`}
                        style={{
                            left: `${coords[idx][0]}rem`,
                            top: `${coords[idx][1]}rem`,
                        }}
                        className={twMerge(
                            "group absolute grid size-[5.5rem] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-dark-gray/40 hover:cursor-pointer",
                            isFilterSelected[idx]
                                ? textColors[idx]
                                : "hover:text-dark-gray/60",
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
