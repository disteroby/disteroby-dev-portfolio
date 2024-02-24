import { useState } from "react";
import { SkillType } from "../../../constants/SkillsData.ts";
import useSkillPlanets from "../../../hooks/useSkillPlanets.ts";
import useWindowSize from "../../../hooks/useWindowSize.ts";
import { Lerp } from "../../../utils/LerpUtils.ts";
import HardSkill from "../../UI/HardSkill.tsx";
import SkillFilterButton from "../../UI/SkillFilterButton.tsx";

export default function FragmentSkills() {
    const [filters, setFilters] = useState<SkillType[]>([]);

    const [width] = useWindowSize();
    const isMobile = width < 1000;

    const mobilePadding = 0.1;
    const fullSizePadding = 0.3;

    const orbitPadding = (1 - (isMobile ? mobilePadding : fullSizePadding)) / 2;

    const skillPlanets = useSkillPlanets(mobilePadding, fullSizePadding);

    function handleOnFilterSelect(selectedFilter: SkillType) {
        setFilters(oldFilters =>
            oldFilters.includes(selectedFilter)
                ? oldFilters.filter(f => f !== selectedFilter)
                : oldFilters.concat(selectedFilter),
        );
    }

    return (
        <div className='flex w-full flex-col items-stretch justify-center gap-8 p-2'>
            <div className='mx-auto lg:hidden'>
                <SkillFilterButton
                    currentFilters={filters}
                    onClick={handleOnFilterSelect}
                />
            </div>
            <div className='relative isolate aspect-square w-full'>
                <div className='absolute inset-0'>
                    {new Array(5).fill(0).map((_, i, a) => (
                        <div
                            key={i}
                            className='absolute -z-10 animate-[10s_spin_linear_infinite] rounded-full border-2 opacity-25'
                            style={{
                                inset: `${Lerp(0, orbitPadding, i / a.length) * 100}%`,
                                maskImage: `conic-gradient(from ${(i / a.length) * 360}deg at center, transparent 0%, black 50%, transparent 100%)`,
                            }}
                        />
                    ))}

                    <div className='absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block'>
                        <SkillFilterButton
                            currentFilters={filters}
                            onClick={handleOnFilterSelect}
                        />
                    </div>

                    {skillPlanets.map(
                        ({ skill, size: { mobile, fullSize } }) => (
                            <div
                                key={skill.name}
                                className='absolute -translate-x-1/2 -translate-y-1/2 '
                                style={{
                                    left: `${(isMobile ? mobile.coords.x : fullSize.coords.x) / 2 + 50}%`,
                                    top: `${-(isMobile ? mobile.coords.y : fullSize.coords.y) / 2 + 50}%`,
                                }}>
                                <HardSkill
                                    skill={skill}
                                    color={
                                        isMobile ? mobile.color : fullSize.color
                                    }
                                    className='z-50 size-8 text-xl lg:size-16 lg:text-4xl'
                                    filters={filters}
                                />
                            </div>
                        ),
                    )}
                </div>
            </div>
        </div>
    );
}
