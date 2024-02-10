import { forwardRef, LegacyRef, useEffect } from "react";
import { ProjectData } from "../../../constants/ProjectsData.ts";
import { useSectionRef } from "../../../hooks/useSectionRef.ts";
import ProjectModelContainer from "../DeviceWithSkills/ProjectModelContainer.tsx";

type FragmentProjectProps = {
    index: number;
    project: ProjectData;
};

export default function FragmentProject({ project }: FragmentProjectProps) {
    return (
        <section id={project.refName}>
            <ProjectModelContainer project={project} />
        </section>
    );
}
