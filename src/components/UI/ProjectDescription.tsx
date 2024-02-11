import { ProjectData } from "../../constants/ProjectsData.ts";

type ProjectDescriptionProps = {
    project: ProjectData;
    index: number;
};

export default function ProjectDescription({
    project,
    index,
}: ProjectDescriptionProps) {
    const { isTeam, title, description, tags, cta } = project;

    return (
        <div className='flex h-full flex-col justify-center bg-red-500 p-4 md:p-16'>
            <div>{isTeam ? "is team" : "is not team"}</div>
            <div className='font-semibold'>{index + " - " + title}</div>
            <div>
                {description.map((paragraph, idx) => (
                    <div key={idx}>{paragraph}</div>
                ))}
            </div>
            <div>{tags?.map(tag => <div key={tag}>{`#${tag}`}</div>)}</div>
            <div>
                {cta?.map(({ text, type, href }) => (
                    <div key={href}>{`-> ${text}`}</div>
                ))}
            </div>
        </div>
    );
}
