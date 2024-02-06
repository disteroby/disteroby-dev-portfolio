import { forwardRef, LegacyRef } from "react";
import ProjectModel from "../DeviceWithSkills/ProjectModel.tsx";
import FragmentBelowHero from "../Fragment/FragmentBelowHero.tsx";

const SectionProjects = forwardRef(
    (_props: unknown, ref: LegacyRef<HTMLElement>) => {
        return (
            <div className='relative'>
                <FragmentBelowHero />
                <section
                    ref={ref}
                    className='main-section-container z-1 relative'>
                    <div className='flex min-h-screen flex-col items-center p-4'>
                        <span className='section-title'>MY PROJECTS</span>
                        <ProjectModel />
                    </div>
                </section>
            </div>
        );
    },
);

export default SectionProjects;
