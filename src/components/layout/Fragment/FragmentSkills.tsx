import { useState } from "react";
import { SkillType } from "../../../constants/SkillsData.ts";
import useSkillPlanets from "../../../hooks/useSkillPlanets.ts";
import useWindowSize from "../../../hooks/useWindowSize.ts";
import { opacityVariants } from "../../../utils/FramerMotionUtils.ts";
import { Lerp } from "../../../utils/LerpUtils.ts";
import HardSkill from "../../UI/HardSkill.tsx";
import SkillFilterButton from "../../UI/SkillFilterButton.tsx";
import SkillPopup from "../../UI/SkillPopup.tsx";
import { AnimatePresence, motion } from "framer-motion";

const mobilePadding = 0.1;
const fullSizePadding = 0.3;

const planetPerRing = 5;

const maxMobileWidth = 1000; //TODO

export default function FragmentSkills() {
    const [currentSelectedIdx, setCurrentSelectedIdx] = useState(-1);
    const [filters, setFilters] = useState<SkillType[]>([]);

    const skillPlanets = useSkillPlanets(mobilePadding, fullSizePadding);

    const [width] = useWindowSize();
    const isMobile = width < maxMobileWidth;

    const orbitPadding = (1 - (isMobile ? mobilePadding : fullSizePadding)) / 2;

    function handleOnFilterSelect(selectedFilter: SkillType) {
        setFilters(oldFilters =>
            oldFilters.includes(selectedFilter)
                ? oldFilters.filter(f => f !== selectedFilter)
                : oldFilters.concat(selectedFilter),
        );
        setCurrentSelectedIdx(-1);
    }

    function getPopupCoord() {
        if (currentSelectedIdx === -1) {
            return { x: 0, y: 0 };
        }

        return isMobile
            ? skillPlanets[currentSelectedIdx].size.mobile.coords
            : skillPlanets[currentSelectedIdx].size.fullSize.coords;
    }

    return (
        <div className='flex w-full flex-col items-stretch justify-center gap-8 p-2'>
            <div className='relative isolate aspect-square w-full'>
                <motion.div
                    className='absolute inset-0'
                    variants={opacityVariants}
                    initial='invisible'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ staggerChildren: 0.1 }}>
                    <div className='absolute inset-0 -z-10 animate-[5s_spin_linear_infinite] opacity-25'>
                        {new Array(planetPerRing).fill(0).map((_, i, a) => (
                            <motion.div
                                variants={opacityVariants}
                                key={i}
                                transition={{ duration: 2.5 }}
                                className='absolute rounded-full border-2'
                                style={{
                                    inset: `${Lerp(0, orbitPadding, 1 - (i + 1) / a.length) * 100}%`,
                                    maskImage: `conic-gradient(from ${(i / a.length) * 360}deg at center, #00000044 20%, black 50%, #00000044 80%)`,
                                }}
                            />
                        ))}
                    </div>

                    <div className='absolute inset-0 hidden scale-[75%] place-items-center lg:grid'>
                        <SkillFilterButton
                            currentFilters={filters}
                            onClick={handleOnFilterSelect}
                        />
                    </div>

                    {skillPlanets.map(
                        ({ skill, size: { mobile, fullSize } }, idx) => (
                            <motion.div
                                variants={opacityVariants}
                                transition={{ duration: 1.5 }}
                                key={skill.name}
                                className='absolute -translate-x-1/2 -translate-y-1/2'
                                style={{
                                    left: `${(isMobile ? mobile.coords.x : fullSize.coords.x) / 2 + 50}%`,
                                    top: `${-(isMobile ? mobile.coords.y : fullSize.coords.y) / 2 + 50}%`,
                                }}>
                                <HardSkill
                                    idx={idx}
                                    isSelected={idx === currentSelectedIdx}
                                    skill={skill}
                                    onClick={i => {
                                        if (i === currentSelectedIdx) {
                                            setCurrentSelectedIdx(-1);
                                        } else {
                                            setCurrentSelectedIdx(i);
                                        }
                                    }}
                                    color={
                                        isMobile ? mobile.color : fullSize.color
                                    }
                                    className='z-50 size-8 text-xl lg:size-16 lg:text-4xl'
                                    filters={filters}
                                />
                            </motion.div>
                        ),
                    )}
                </motion.div>
                <AnimatePresence>
                    {currentSelectedIdx >= 0 && (
                        <div
                            className='pointer-events-none absolute inset-0 z-50'
                            style={{
                                transition:
                                    "all 200ms cubic-bezier(0, 0, 0.2, 1)",
                                translate: `${getPopupCoord().x}% ${-getPopupCoord().y}%`,
                                left: `${50}%`,
                                top: `${50}%`,
                            }}>
                            <div className='absolute -translate-x-1/2 -translate-y-full'>
                                <motion.div
                                    variants={{
                                        invisible: {
                                            opacity: 0,
                                            scale: 0,
                                        },
                                        visible: {
                                            opacity: 1,
                                            scale: 1,
                                            transition: {
                                                type: "spring",
                                                stiffness: 200,
                                                damping: 10,
                                            },
                                        },
                                    }}
                                    className='origin-bottom'
                                    initial='invisible'
                                    animate='visible'
                                    exit='invisible'
                                    transition={{
                                        duration: 0.2,
                                    }}>
                                    <SkillPopup
                                        skill={
                                            skillPlanets[currentSelectedIdx]
                                                .skill
                                        }
                                    />
                                </motion.div>
                            </div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
            <div className='mx-auto scale-[65%] lg:hidden'>
                <SkillFilterButton
                    currentFilters={filters}
                    onClick={handleOnFilterSelect}
                />
            </div>
        </div>
    );
}
