import { PureSkillType, SkillType } from "../../constants/Skills.ts";
import { polarToCartesian } from "../../utils/TransformUtils.ts";
import { FaMobile } from "react-icons/fa6";
import { IoLogoGameControllerB } from "react-icons/io";
import { IoDesktop } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

const types: PureSkillType[] = ["web", "mobile", "game"];

type SkillFilterButtonProps = {
    filters: SkillType[];
    onClick: (filter: SkillType[]) => void;
};

export default function SkillFilterButton({
    filters,
    onClick,
}: SkillFilterButtonProps) {
    const radius = 8;
    const coords = types.map((_, i) =>
        polarToCartesian(((Math.PI * 2) / types.length) * i, radius).map(
            (coord, dim) => {
                return coord * (dim === 0 ? 1 : -1) + radius;
            },
        ),
    );

    const icons: { [key in PureSkillType]: JSX.Element } = {
        web: <IoDesktop />,
        mobile: <FaMobile />,
        game: <IoLogoGameControllerB />,
    };

    const bgColors = ["bg-purple-500", "bg-cyan-500", "bg-fuchsia-500"];
    const textColors = ["text-purple-500", "text-cyan-500", "text-fuchsia-500"];

    return (
        <div className='relative size-[16rem] max-md:scale-75'>
            <div className='absolute inset-0 overflow-hidden rounded-full'>
                <div className='absolute inset-0 rounded-full border-2' />
                {types.map((type, idx) => (
                    <div
                        key={`border-${type}`}
                        style={{
                            left: `${coords[idx][0]}rem`,
                            top: `${coords[idx][1]}rem`,
                        }}
                        className={twMerge(
                            "absolute size-[7rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60",
                            idx === 1 && bgColors[idx],
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
                            "group absolute grid size-[5.5rem] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-dark-gray/80 hover:cursor-pointer",
                            idx === 1 && textColors[idx],
                        )}
                        onClick={() => onClick([type])}>
                        <div className='text-3xl transition duration-300 ease-in-out group-hover:scale-125'>
                            {icons[type]}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
