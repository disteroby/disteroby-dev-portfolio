import { Key } from "react";
import { Skill } from "../../constants/SkillsData.ts";
import { PiStar, PiStarFill, PiStarHalfFill } from "react-icons/pi";

type LevelType = "full" | "half" | "empty";

type SkillPopupProps = {
    skill: Skill;
};

export default function SkillPopup({ skill }: SkillPopupProps) {
    const steps: LevelType[] = [];
    const integerLevel = Math.floor(skill.level);

    for (let i = 0; i < integerLevel; i++) {
        steps.push("full");
    }

    if (integerLevel !== skill.level) {
        steps.push("half");
    } else if (integerLevel < 5) {
        steps.push("empty");
    }

    for (let i = integerLevel + 1; i < 5; i++) {
        steps.push("empty");
    }

    function renderLevel(star: LevelType, key: Key): JSX.Element {
        const props = { className: "mt-0.5 self-baseline", key };

        switch (star) {
            case "full":
                return <PiStarFill {...props} />;
            case "half":
                return <PiStarHalfFill {...props} />;
            case "empty":
                return <PiStar {...props} />;
        }
    }

    return (
        <div className='relative flex -translate-y-[.7rem] flex-col items-center justify-center px-4 py-2 text-white max-md:text-xs'>
            <div className='absolute inset-0 opacity-75'>
                <div className='absolute inset-0 rounded-xl bg-black shadow-md shadow-black/30' />
                <div className='absolute left-1/2 top-full size-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black shadow-xl' />
            </div>
            <div className='relative text-nowrap text-center font-bold'>
                {skill.name}
            </div>
            <div className='relative mb-2 mt-1 h-px w-full bg-gradient-to-r from-transparent via-white to-transparent'></div>
            <div className='relative flex justify-center gap-1'>
                <span className='mr-1'>Lv:</span>
                {steps.map((star, idx) => renderLevel(star, idx))}
            </div>
        </div>
    );
}
