import GlowingText from "../../UI/GlowingText.tsx";
import FragmentSkills from "../Fragment/FragmentSkills.tsx";

export default function SectionSkills() {
    return (
        <div className='flex flex-col items-center'>
            <div className='max-md:max-w-[18rem]'>
                <GlowingText className='md:mb-16' text='WHAT AM I BEST AT?' />
            </div>
            <FragmentSkills />
        </div>
    );
}
