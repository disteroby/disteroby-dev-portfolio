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
        <>
            <div className='my-16 flex justify-center'>
                <SkillFilterButton
                    currentFilters={filters}
                    onClick={handleOnFilterSelect}
                />
            </div>
            <motion.div
                variants={opacityVariants}
                initial='invisible'
                custom={0.075}
                viewport={{ once: true }}
                whileInView='visibleWithDelay'
                className='flex flex-wrap items-center justify-center gap-6 md:gap-8'>
                {selectedSkills.map(skill => (
                    <motion.div key={skill.name} variants={opacityVariants}>
                        <HardSkill
                            skill={skill}
                            className='size-12'
                            filters={filters}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </>
    );
}
