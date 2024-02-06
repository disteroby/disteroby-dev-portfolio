import { forwardRef, LegacyRef } from "react";
import FragmentSkills from "../Fragment/FragmentSkills.tsx";

const SectionAbout = forwardRef(
    (_props: unknown, ref: LegacyRef<HTMLElement>) => {
        return (
            <div className='relative'>
                <section
                    ref={ref}
                    className='main-section-container z-1 relative'>
                    <div className='flex min-h-screen flex-col items-center p-4'>
                        <span className='section-title'>ABOUT ME</span>
                        <FragmentSkills />
                    </div>
                </section>
            </div>
        );
    },
);

export default SectionAbout;
