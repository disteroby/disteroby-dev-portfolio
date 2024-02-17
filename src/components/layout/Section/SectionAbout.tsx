import { aboutTopics } from "../../../constants/AboutData.ts";
import GlowingCard from "../../UI/GlowingCard.tsx";
import GlowingText from "../../UI/GlowingText.tsx";
import FragmentSkills from "../Fragment/FragmentSkills.tsx";

export default function SectionAbout() {
    return (
        <div className='flex min-h-screen flex-col items-center p-4 pt-16'>
            <GlowingText text='ABOUT ME' />
            <div className='my-24 grid w-full grid-cols-1 place-items-stretch gap-4 lg:grid-cols-2 lg:gap-16'>
                {aboutTopics.map((topic, idx) => (
                    <GlowingCard
                        key={topic.title}
                        topic={topic}
                        sideOnRight={idx % 2 === 1}
                    />
                ))}
            </div>
            <FragmentSkills />
        </div>
    );
}
