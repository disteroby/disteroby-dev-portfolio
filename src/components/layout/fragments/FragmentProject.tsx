import { ProjectData } from "../../../constants/ProjectsData.ts";
import ProjectModelContainer from "../../threejs/scenes/ProjectModelContainer.tsx";
import ProjectDescription from "../../UI/ProjectDescription.tsx";
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
        <div
            id={project.refName}
            className={twMerge(
                "flex w-full flex-col items-stretch gap-[5%] md:min-h-[50rem]",
                index % 2 ? "lg:flex-row-reverse" : "lg:flex-row",
            )}>
            <div className='relative aspect-square h-auto w-full lg:w-[50%]'>
                <div className='absolute -inset-[4rem] md:inset-0 lg:-inset-[2rem] xl:-inset-[1rem] 2xl:-inset-[0rem]'>
                    <ProjectModelContainer project={project} />
                </div>
            </div>
            <div className='w-full lg:w-[45%]'>
                <ProjectDescription project={project} index={index + 1} />
            </div>
        </div>
    );
}
