import { forwardRef, LegacyRef, useState } from "react";
import { HardSkills, SkillType } from "../../../constants/HardSkills.ts";
import { opacityVariants } from "../../../utils/FramerMotionUtils.ts";
import HardSkill from "../../UI/HardSkill.tsx";
import FragmentUnderHero from "../Fragment/FragmentUnderHero.tsx";
import { motion } from "framer-motion";

const SectionProjects = forwardRef(
    (_props: unknown, ref: LegacyRef<HTMLElement>) => {
        // const refs = useSectionRefs();

        const [filterType, setFilterType] = useState<SkillType[]>([
            "fullstack",
            "mobile",
            "game",
            "tools",
        ]);

        const skills = [...HardSkills];

        return (
            <div className='relative'>
                <FragmentUnderHero />
                <section
                    ref={ref}
                    className='main-section-container z-1 relative'>
                    <div className='min-h-screen'>
                        <div>"data.project"</div>
                        <button
                            className='m-16'
                            onClick={() => {
                                setFilterType(old =>
                                    old.length === 1
                                        ? [
                                              "fullstack",
                                              "mobile",
                                              "game",
                                              "tools",
                                          ]
                                        : ["tools"],
                                );
                            }}>
                            Change Filter Type
                        </button>
                        <motion.div
                            variants={opacityVariants}
                            initial='invisible'
                            custom={0.075}
                            viewport={{ once: true }}
                            whileInView='visibleWithDelay'
                            className='flex flex-wrap items-center justify-center gap-6 px-4 md:gap-8'>
                            {skills.map(skill => (
                                <motion.div
                                    key={skill.name}
                                    variants={opacityVariants}>
                                    <HardSkill
                                        skill={skill}
                                        className='size-12'
                                        filters={filterType}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            </div>
        );
    },
);

export default SectionProjects;
