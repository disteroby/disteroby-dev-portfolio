import { PROJECTS } from "../../../constants/ProjectsData.ts";
import GlowingText from "../../UI/GlowingText.tsx";
import FragmentProject from "../Fragment/FragmentProject.tsx";

export default function SectionProjects() {
    return (
        <div className='flex min-h-screen flex-col items-center p-4 pt-24 lg:pt-32'>
            <GlowingText text='MY PROJECTS' className='mb-16 lg:mb-24' />
            {PROJECTS.map((project, idx) => (
                <FragmentProject
                    key={project.refName}
                    project={project}
                    index={idx}
                />
            ))}
        </div>
    );
}
