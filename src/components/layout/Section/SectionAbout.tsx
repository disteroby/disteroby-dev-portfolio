import FragmentSkills from "../Fragment/FragmentSkills.tsx";

export default function SectionAbout() {
    return (
        <div className='flex min-h-screen flex-col items-center p-4'>
            <span className='section-title'>ABOUT ME</span>
            <FragmentSkills />
        </div>
    );
}
