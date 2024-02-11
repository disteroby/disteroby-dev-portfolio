import { ProjectData } from "../../../constants/ProjectsData.ts";
import ProjectDescription from "../../UI/ProjectDescription.tsx";
import ProjectModelContainer from "../DeviceWithSkills/ProjectModelContainer.tsx";
import { twMerge } from "tailwind-merge";

type FragmentProjectProps = {
    project: ProjectData;
    index: number;
};

export default function FragmentProject({
    project,
    index,
}: FragmentProjectProps) {
    return (
        <section
            id={project.refName}
            className={twMerge(
                "flex w-full items-stretch max-md:flex-col md:min-h-[60rem]",
                index % 2 ? "flex-row-reverse" : "flex-row",
            )}>
            <div className='h-auto w-full max-md:aspect-square md:w-1/2'>
                <ProjectModelContainer
                    project={project}
                    color={index % 2 ? "#00d0ff" : "#e100ff"}
                />
            </div>
            <div className='w-full bg-black md:w-1/2'>
                <ProjectDescription project={project} index={index + 1} />
            </div>
        </section>
    );
}
