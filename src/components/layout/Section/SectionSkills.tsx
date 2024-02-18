import GlowingText from "../../UI/GlowingText.tsx";
import FragmentSkills from "../Fragment/FragmentSkills.tsx";

export default function SectionSkills() {
    return (
        <div className='flex min-h-screen flex-col items-center'>
            <GlowingText className='lg:mb-16' text='WHAT AM I BEST AT?' />
            <FragmentSkills />
        </div>
    );
}
