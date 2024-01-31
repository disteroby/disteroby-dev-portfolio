import { forwardRef, LegacyRef, useMemo } from "react";
import { carouselDevicesData } from "../../../constants/DevicesData.ts";
import { HardSkills, SkillType } from "../../../constants/HardSkills.ts";
import { useSectionRefs } from "../../../hooks/useSectionRef.ts";
import HardSkill from "../../UI/HardSkill.tsx";
import UnderHero from "../HeroStage3D/UnderHero.tsx";

const SectionProjects = forwardRef(
    (_props: unknown, ref: LegacyRef<HTMLElement>) => {
        const refs = useSectionRefs();

        const Skills = useMemo(
            () =>
                [...HardSkills].sort((skillA, skillB) =>
                    skillA.name.localeCompare(skillB.name),
                ),
            [],
        );

        const filterType: SkillType = "fullstack";

        return (
            <section ref={ref}>
                <UnderHero />

                {carouselDevicesData.map(data => (
                    <div
                        ref={
                            refs.get(data.project) as LegacyRef<HTMLDivElement>
                        }
                        key={data.project}
                        className='min-h-screen'
                        id={data.project}>
                        {data.project}
                        <div className='flex min-h-screen w-full flex-wrap items-center justify-center gap-8'>
                            {Skills.filter(
                                skill =>
                                    skill.type === filterType ||
                                    (skill.type as SkillType[]).includes(
                                        filterType,
                                    ),
                            ).map(skill => (
                                <HardSkill
                                    key={skill.name}
                                    skill={skill}
                                    className='size-16'>
                                    <skill.logo />
                                </HardSkill>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        );
    },
);

export default SectionProjects;
