import { useState } from "react";
import { skills, SkillType } from "../../../constants/Skills.ts";
import { opacityVariants } from "../../../utils/FramerMotionUtils.ts";
import HardSkill from "../../UI/HardSkill.tsx";
import { motion } from "framer-motion";

export default function FragmentSkills() {
    const [filterType, setFilterType] = useState<SkillType[]>([
        "fullstack",
        "mobile",
        "game",
        "tools",
    ]);

    const selectedSkills = [...skills];
    return (
        <div>
            <button
                className='m-16'
                onClick={() => {
                    setFilterType(old =>
                        old.length === 1
                            ? ["fullstack", "mobile", "game", "tools"]
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
                className='flex flex-wrap items-center justify-center gap-6 md:gap-8'>
                {selectedSkills.map(skill => (
                    <motion.div key={skill.name} variants={opacityVariants}>
                        <HardSkill
                            skill={skill}
                            className='size-12'
                            filters={filterType}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
