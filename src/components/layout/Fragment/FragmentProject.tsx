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
                "flex w-full flex-col items-stretch gap-[5%] md:min-h-[50rem]",
                index % 2 ? "lg:flex-row-reverse" : "lg:flex-row",
            )}>
            <div className='aspect-square h-auto w-full overflow-hidden lg:w-[50%]'>
                <ProjectModelContainer
                    project={project}
                    color={index % 2 ? "#41adc7" : "#c46be0"}
                />
            </div>
            <div className='w-full lg:w-[45%]'>
                <ProjectDescription project={project} index={index + 1} />
            </div>
        </section>
    );
}
