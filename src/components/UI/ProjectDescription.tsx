import { CtaType, ProjectData } from "../../constants/ProjectsData.ts";
import { FaGithub, FaGlobe, FaGooglePlay, FaYoutube } from "react-icons/fa6";
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
                className={twJoin(
                    "rounded px-2 pt-0.5 text-sm text-white",
                    isOnTheRight ? "bg-fuchsia-500/90" : "bg-cyan-500/90",
                )}>
                {`#${tag}`}
            </div>
        ));
    }

    function renderCta() {
        function getIcon(type: CtaType) {
            switch (type) {
                case "product":
                    return <FaGlobe />;
                case "store":
                    return <FaGooglePlay />;
                case "video":
                    return <FaYoutube />;
                case "repository":
                    return <FaGithub />;
            }
        }

        return cta?.map(({ text, type, href }) => (
            <a
                key={href}
                href={href}
                target='_blank'
                className={twJoin(
                    "group relative flex gap-2 transition before:absolute before:left-0 before:right-0 before:top-full before:h-0.5 before:opacity-0 before:transition before:duration-300 before:hover:opacity-100",
                    isOnTheRight
                        ? "before:bg-fuchsia-500 hover:text-fuchsia-500"
                        : "before:bg-cyan-500 hover:text-cyan-500",
                )}>
                <span className='mt-0.5'>{getIcon(type)}</span>
                <span>{text}</span>
            </a>
        ));
    }

    return (
        <div className='flex h-full flex-col justify-center gap-4 p-4 text-lg'>
            <div className='-mb-4 flex gap-1 align-bottom opacity-60'>
                {renderTeamLabel()}
            </div>
            <div className='w-fit text-3xl font-bold lg:text-5xl'>
                <span>0{index}. </span>
                <span className='text-fuchsia-cyan-gradient'>{title}</span>
            </div>
            <div
                className={twJoin(
                    "relative flex flex-col items-stretch gap-6 pl-4 text-justify before:absolute before:bottom-0 before:left-0 before:top-0 before:w-0.5 lg:text-left",
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
            <div className='mt-8 flex flex-wrap justify-end gap-8'>
                {renderCta()}
            </div>
        </div>
    );
}
