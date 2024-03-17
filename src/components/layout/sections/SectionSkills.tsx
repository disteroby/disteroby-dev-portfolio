import SectionTitle from "../../UI/SectionTitle.tsx";
import FragmentSkills from "../fragments/FragmentSkills.tsx";

export default function SectionSkills() {
    return (
        <div className='flex flex-col items-center gap-4 md:gap-16'>
            <SectionTitle title='Technical Skills' />
            <FragmentSkills />
        </div>
    );
}
