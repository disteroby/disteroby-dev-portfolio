import { SkillType } from "../../constants/Skills.ts";
import { hasFilter } from "../../utils/SkillUtils.ts";
import { polarToCartesian } from "../../utils/TransformUtils.ts";
import { FaMobile } from "react-icons/fa6";
import { IoLogoGameControllerB } from "react-icons/io";
import { IoDesktop } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

const types: SkillType[] = ["web", "mobile", "game"];

type SkillFilterButtonProps = {
    currentFilters: SkillType[];
    onClick: (filter: SkillType) => void;
};

export default function SkillFilterButton({
    currentFilters,
    onClick,
}: SkillFilterButtonProps) {
    const radius = 6;
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

    const icons: { [key in SkillType]: JSX.Element } = {
        web: <IoDesktop />,
        mobile: <FaMobile />,
        game: <IoLogoGameControllerB />,
    };

    const bgColors = ["bg-indigo-500", "bg-cyan-500", "bg-fuchsia-500"];
    const textColors = ["text-indigo-500", "text-cyan-500", "text-fuchsia-500"];

    return (
        <div
            style={{ height: `${radius * 2}rem`, width: `${radius * 2}rem` }}
            className='relative max-md:scale-75'>
            <div className='absolute inset-0 overflow-hidden rounded-full'>
                <div className='border- absolute inset-0 animate-[spin_60s_linear_infinite] rounded-full border-4 border-dashed' />
                {types.map((type, idx) => (
                    <div
                        key={`border-${type}`}
                        style={{
                            left: `${coords[idx][0]}rem`,
                            top: `${coords[idx][1]}rem`,
                        }}
                        className={twMerge(
                            "absolute size-[7rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60 transition duration-300 ease-in-out",
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
                            "group absolute grid size-[5.5rem] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-dark-gray/60 hover:cursor-pointer",
                            isFilterSelected[idx] && textColors[idx],
                        )}
                        onClick={() => onClick(type)}>
                        <div className='absolute text-3xl transition duration-300 ease-in-out group-hover:scale-125'>
                            {icons[type]}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
