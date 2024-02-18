import GlowingText from "../../UI/GlowingText.tsx";
import FragmentSkills from "../Fragment/FragmentSkills.tsx";

export default function SectionSkills() {
    return (
        <div className='flex min-h-screen flex-col items-center p-4 pt-16'>
            <GlowingText
                className='lg:mb-8 lg:mt-8'
                text='WHAT AM I BEST AT?'
            />
            <FragmentSkills />
        </div>
    );
}
