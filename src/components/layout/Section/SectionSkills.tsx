import GlowingText from "../../UI/GlowingText.tsx";
import FragmentSkills from "../Fragment/FragmentSkills.tsx";

export default function SectionSkills() {
    return (
        <div className='flex min-h-screen flex-col items-center p-4 pt-16'>
            <GlowingText className='mt-16 lg:mb-8' text='WHAT AM I BEST AT?' />
            <FragmentSkills />
        </div>
    );
}
