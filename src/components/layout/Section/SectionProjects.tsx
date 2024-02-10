import { PROJECTS } from "../../../constants/ProjectsData.ts";
import FragmentProject from "../Fragment/FragmentProject.tsx";

export default function SectionProjects() {
    return (
        <div className='flex min-h-screen flex-col items-center p-4'>
            <span className='section-title'>MY PROJECTS</span>
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
