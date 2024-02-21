import { useState } from "react";
import { skillsData, SkillType } from "../../../constants/SkillsData.ts";
import { opacityVariants } from "../../../utils/FramerMotionUtils.ts";
import { polarToCartesian } from "../../../utils/TransformUtils.ts";
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

    function shuffle<T>(array: T[]): T[] {
        let currentIndex = array.length,
            randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex > 0) {
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ];
        }

        return array;
    }

    function lerp(start: number, end: number, amt: number) {
        return (1 - amt) * start + amt * end;
    }

    // const s = shuffle(
    //     skillsData.map((_, i) => i).map(val => val / skillsData.length),
    // );

    const s = skillsData
        .map((_, i) => i)
        .map(val => val / skillsData.length)
        .map(val => lerp(0.25, 1, val));

    const coords = skillsData.map((_, i) =>
        polarToCartesian(((Math.PI * 2) / skillsData.length) * i, s[i])
            .map(coord => coord / 2 + 0.5)
            .map(coord => coord * 100),
    );

    console.log(s);

    return (
        // <div className='flex w-full flex-col items-stretch gap-8 lg:flex-row lg:justify-evenly lg:gap-0'>
        //     <div className='flex justify-center pt-8 md:py-16'>
        //         <SkillFilterButton
        //             currentFilters={filters}
        //             onClick={handleOnFilterSelect}
        //         />
        //     </div>
        //     <div className='flex items-center justify-center'>
        //         <motion.div
        //             variants={opacityVariants}
        //             initial='invisible'
        //             custom={0.075}
        //             viewport={{ once: true, amount: 1 }}
        //             whileInView='visibleWithDelay'
        //             className='flex h-min w-full max-w-[30rem] flex-wrap items-center justify-center gap-6 px-4 md:gap-8'>
        //             {selectedSkills.map(skill => (
        //                 <motion.div key={skill.name} variants={opacityVariants}>
        //                     <HardSkill
        //                         skill={skill}
        //                         className='size-11 md:size-[3.35rem]'
        //                         filters={filters}
        //                     />
        //                 </motion.div>
        //             ))}
        //         </motion.div>
        //     </div>
        // </div>
        <div className='grid min-h-screen w-full place-content-center bg-dark-gray'>
            <div className='relative size-[70rem]'>
                {s.map(i => (
                    <div
                        key={i}
                        className='absolute animate-spin rounded-full border-2 opacity-25'
                        style={{
                            maskImage: `conic-gradient(from ${i * 360 * ((i % 5) + 1)}deg at 50% 50%, transparent 0%, black 100%)`,
                            inset: `${50 * (1 - i)}%`,
                            animationDuration: `${60 * i}s`,
                        }}
                    />
                ))}
                {skillsData.map((skill, i) => (
                    <motion.div
                        key={skill.name}
                        variants={opacityVariants}
                        className='absolute -translate-x-1/2 -translate-y-1/2'
                        style={{
                            left: `${coords[i][0]}%`,
                            top: `${coords[i][1]}%`,
                        }}>
                        <HardSkill
                            skill={skill}
                            className='size-11 md:size-[3.35rem]'
                            filters={filters}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
