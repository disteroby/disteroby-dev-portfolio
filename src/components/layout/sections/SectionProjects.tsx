import { PROJECTS } from "../../../constants/ProjectsData.ts";
import SectionTitle from "../../UI/SectionTitle.tsx";
import FragmentProject from "../fragments/FragmentProject.tsx";

export default function SectionProjects() {
    return (
        <div className='flex flex-col items-center gap-16 pt-16 lg:gap-24 lg:pt-24'>
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
