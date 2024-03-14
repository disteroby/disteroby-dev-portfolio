import { PROJECTS } from "../../../constants/ProjectsData.ts";
import SectionTitle from "../../UI/SectionTitle.tsx";
import FragmentProject from "../Fragment/FragmentProject.tsx";

export default function SectionProjects() {
    return (
        <div className='flex flex-col items-center gap-16 pt-2 lg:gap-24 lg:pt-0'>
            <SectionTitle title='Projects' />
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
