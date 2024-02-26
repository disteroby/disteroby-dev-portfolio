import SectionTitle from "../../UI/SectionTitle.tsx";
import FragmentSkills from "../Fragment/FragmentSkills.tsx";

export default function SectionSkills() {
    return (
        <div className='flex flex-col items-center gap-4 md:gap-16'>
            <div className='max-md:max-w-[18rem]'>
                <SectionTitle title='Technical Skills' />
            </div>
            <FragmentSkills />
        </div>
    );
}
