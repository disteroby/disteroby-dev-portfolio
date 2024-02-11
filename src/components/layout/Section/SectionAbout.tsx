import GlowingText from "../../UI/GlowingText.tsx";
import FragmentSkills from "../Fragment/FragmentSkills.tsx";

export default function SectionAbout() {
    return (
        <div className='flex min-h-screen flex-col items-center p-4'>
            <GlowingText text='ABOUT ME' />
            <FragmentSkills />
        </div>
    );
}
