import { Key } from "react";
import { Skill } from "../../constants/SkillsData.ts";
import { BsBook, BsBookFill, BsBookHalf } from "react-icons/bs";

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
                return <BsBookFill {...props} />;
            case "half":
                return <BsBookHalf {...props} />;
            case "empty":
                return <BsBook {...props} />;
        }
    }

    return (
        <div className='relative flex flex-col items-center justify-center rounded-xl bg-black px-4 py-2 max-md:text-xs'>
            <div className='absolute left-1/2 top-full size-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black shadow-xl' />
            <div className='text-nowrap text-center font-bold'>
                {skill.name}
            </div>
            <div className='flex justify-center gap-1'>
                <span className='mr-1'>Lv:</span>
                {steps.map((star, idx) => renderLevel(star, idx))}
            </div>
        </div>
    );
}
