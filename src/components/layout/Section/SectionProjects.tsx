import { forwardRef, LegacyRef } from "react";
import FragmentBelowHero from "../Fragment/FragmentBelowHero.tsx";
import FragmentSkills from "../Fragment/FragmentSkills.tsx";

const SectionProjects = forwardRef(
    (_props: unknown, ref: LegacyRef<HTMLElement>) => {
        return (
            <div className='relative'>
                <FragmentBelowHero />
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

export default SectionProjects;
