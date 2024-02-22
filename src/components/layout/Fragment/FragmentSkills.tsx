import { useMemo, useState } from "react";
import { skillsData, SkillType } from "../../../constants/SkillsData.ts";
import { shuffle } from "../../../utils/ArrayUtils.ts";
import { Lerp } from "../../../utils/LerpUtils.ts";
import { polarToCartesian } from "../../../utils/TransformUtils.ts";
import HardSkill from "../../UI/HardSkill.tsx";
import SkillFilterButton from "../../UI/SkillFilterButton.tsx";

export default function FragmentSkills() {
    const [filters, setFilters] = useState<SkillType[]>([]);

    function handleOnFilterSelect(selectedFilter: SkillType) {
        setFilters(oldFilters =>
            oldFilters.includes(selectedFilter)
                ? oldFilters.filter(f => f !== selectedFilter)
                : oldFilters.concat(selectedFilter),
        );
    }

    const skillPlanets = useMemo(
        () =>
            shuffle(
                skillsData.map((skill, i) => {
                    const lowerBound = 0.25;
                    const upperBound = 1;

                    const turnMagicNumber = 5;

                    const distance = Lerp(
                        lowerBound,
                        upperBound,
                        i / skillsData.length,
                    );

                    const coords = polarToCartesian(
                        Math.PI * 2 * distance * turnMagicNumber,
                        distance,
                    )
                        .map(coord => Lerp(0, 1, coord))
                        .map(coord => coord * 100);

                    return {
                        skill,
                        coords,
                        layer: distance,
                    };
                }),
            ),
        [],
    );

    function rot(layer: number) {
        const y = (layer * layer * 2 * 2871258) % 1;
        const x = 360.0 * (y - Math.trunc(y));
        console.log(x);
        return x;
    }

    return (
        <div className='grid min-h-screen w-full place-content-center bg-dark-gray'>
            <SkillFilterButton
                currentFilters={filters}
                onClick={handleOnFilterSelect}
            />
            <div className='relative isolate aspect-square w-[70rem] border border-red-500'>
                {skillPlanets.map(({ skill, coords, layer }) => (
                    <div key={skill.name} className='absolute inset-0'>
                        <div
                            className='absolute -z-10 animate-spin rounded-full border-2 opacity-25'
                            style={{
                                maskImage: `conic-gradient(from ${rot(layer)}deg at center, transparent 30%, #000000AA 75%, black 100%)`,
                                inset: `${(100 - 100 * layer) / 2}%`,
                                animationDuration: `${100 + Math.floor(layer * layer * 2) * 50}s`,
                            }}
                        />
                        <div
                            className='absolute z-10 -translate-x-1/2 -translate-y-1/2 '
                            style={{
                                left: `${coords[0] / 2 + 50}%`,
                                top: `${-coords[1] / 2 + 50}%`,
                            }}>
                            <HardSkill
                                skill={skill}
                                className='size-11 md:size-[3.35rem]'
                                filters={filters}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
