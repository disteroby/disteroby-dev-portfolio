import { useState } from "react";
import { skillsData, SkillType } from "../../../constants/SkillsData.ts";
import { opacityVariants } from "../../../utils/FramerMotionUtils.ts";
import HardSkill from "../../UI/HardSkill.tsx";
import SkillFilterButton from "../../UI/SkillFilterButton.tsx";
import { motion } from "framer-motion";

export default function FragmentSkills() {
    const [filters, setFilters] = useState<SkillType[]>([]);

    function handleOnFilterSelect(selectedFilter: SkillType) {
        setFilters(oldFilters =>
            oldFilters.includes(selectedFilter)
                ? oldFilters.filter(f => f !== selectedFilter)
                : oldFilters.concat(selectedFilter),
        );
    }

    const selectedSkills = [...skillsData];
    return (
        <div className='flex w-full flex-col items-stretch gap-8 lg:flex-row lg:justify-evenly lg:gap-0'>
            <div className='flex justify-center pt-8 md:py-16'>
                <SkillFilterButton
                    currentFilters={filters}
                    onClick={handleOnFilterSelect}
                />
            </div>
            <div className='flex items-center justify-center'>
                <motion.div
                    variants={opacityVariants}
                    initial='invisible'
                    custom={0.075}
                    viewport={{ once: true, amount: 1 }}
                    whileInView='visibleWithDelay'
                    className='flex h-min w-full max-w-[30rem] flex-wrap items-center justify-center gap-6 px-4 md:gap-8'>
                    {selectedSkills.map(skill => (
                        <motion.div key={skill.name} variants={opacityVariants}>
                            <HardSkill
                                skill={skill}
                                className='size-11 md:size-[3.35rem]'
                                filters={filters}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
