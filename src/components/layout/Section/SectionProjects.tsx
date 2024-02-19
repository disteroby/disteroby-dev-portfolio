import { PROJECTS } from "../../../constants/ProjectsData.ts";
import GlowingText from "../../UI/GlowingText.tsx";
import FragmentProject from "../Fragment/FragmentProject.tsx";

export default function SectionProjects() {
    return (
        <div className='flex flex-col items-center'>
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
