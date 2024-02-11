import { ProjectData } from "../../constants/ProjectsData.ts";
import { HiUser, HiUserGroup } from "react-icons/hi2";
import { twJoin } from "tailwind-merge";

type ProjectDescriptionProps = {
    project: ProjectData;
    index: number;
};

export default function ProjectDescription({
    project,
    index,
}: ProjectDescriptionProps) {
    const { isTeam, title, description, tags, cta } = project;

    const isOnTheRight = index % 2 === 0;

    function renderTeamLabel() {
        return isTeam ? (
            <>
                <HiUserGroup />
                <div>Team</div>
            </>
        ) : (
            <>
                <HiUser />
                <div>Solo</div>
            </>
        );
    }
    function renderTags() {
        return tags?.map(tag => (
            <div
                key={tag}
                className={isOnTheRight ? "text-fuchsia-500" : "text-cyan-500"}>
                {`#${tag}`}
            </div>
        ));
    }

    function renderCta() {
        return cta?.map(({ text, type, href }) => (
            <a key={href} href={href} target='_blank'>{`-> ${text}`}</a>
        ));
    }

    return (
        <div className='flex h-full flex-col justify-center gap-4 p-4 text-lg'>
            <div className='-mb-4 flex gap-1 align-bottom opacity-60'>
                {renderTeamLabel()}
            </div>
            <div className='w-fit text-5xl font-bold'>
                <span>0{index}. </span>
                <span className='fuchsia-cyan-gradient bg-clip-text text-transparent'>
                    {title}
                </span>
            </div>
            <div
                className={twJoin(
                    "relative flex flex-col items-stretch gap-6 pl-4 before:absolute before:bottom-0 before:left-0 before:top-0 before:w-0.5 before:bg-red-500",
                    isOnTheRight
                        ? "before:bg-fuchsia-500"
                        : "before:bg-cyan-500",
                )}>
                {description.map((paragraph, idx) => (
                    <div key={idx} className='text-white/90'>
                        {paragraph}
                    </div>
                ))}
            </div>
            <div className='flex flex-wrap gap-4'>{renderTags()}</div>
            <div className='flex flex-wrap gap-4'>{renderCta()}</div>
        </div>
    );
}
