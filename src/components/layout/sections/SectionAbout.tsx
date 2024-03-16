import { ABOUT_TOPICS } from "../../../constants/AboutData.tsx";
import GlowingCard from "../../UI/GlowingCard.tsx";
import SectionTitle from "../../UI/SectionTitle.tsx";

export default function SectionAbout() {
    return (
        <div className='flex flex-col items-center'>
            <SectionTitle title='About Me' />
            <div className='my-12 grid w-full grid-cols-1 place-items-center items-stretch gap-4 lg:my-24 lg:grid-cols-2'>
                {ABOUT_TOPICS.map((topic, idx) => (
                    <GlowingCard
                        key={topic.title}
                        topic={topic}
                        sideOnRight={idx % 2 === 1}
                    />
                ))}
            </div>
        </div>
    );
}
