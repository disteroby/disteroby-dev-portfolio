import { CtaType, ProjectData } from "../../constants/ProjectsData.ts";
import { motion } from "framer-motion";
import { FaGithub, FaGlobe, FaGooglePlay, FaYoutube } from "react-icons/fa6";
import { HiUser, HiUserGroup } from "react-icons/hi2";
import { twJoin } from "tailwind-merge";

type ProjectDescriptionProps = {
    project: ProjectData;
    index: number;
};

const descriptionAnimDelay = 0.25;
const tagAnimDelay = 0.25;

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
            <motion.div
                key={tag}
                variants={{
                    inView: {
                        opacity: 1,
                    },
                }}
                transition={{
                    duration: 0.65,
                }}
                className={twJoin(
                    "rounded px-2 pt-0.5 text-sm text-white opacity-0",
                    isOnTheRight ? "bg-fuchsia-500/90" : "bg-cyan-500/90",
                )}>
                {`#${tag}`}
            </motion.div>
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
            <motion.div
                key={href}
                variants={{
                    inView: {
                        opacity: 1,
                    },
                }}
                transition={{
                    duration: 0.65,
                }}
                className='opacity-0'>
                <a
                    href={href}
                    target='_blank'
                    className={twJoin(
                        "group relative flex gap-2 font-bold transition duration-300 before:absolute before:left-0 before:right-0 before:top-full before:h-0.5 before:opacity-0 before:transition before:duration-[400ms] before:hover:opacity-100",
                        isOnTheRight
                            ? "before:bg-fuchsia-500 hover:text-fuchsia-500"
                            : "before:bg-cyan-500 hover:text-cyan-500",
                    )}>
                    <span className='mt-0.5'>{getIcon(type)}</span>
                    <span>{text}</span>
                </a>
            </motion.div>
        ));
    }

    return (
        <div className='flex h-full flex-col justify-center'>
            <motion.div
                className='flex flex-col justify-center gap-4 p-4 text-lg'
                variants={{
                    inView: {
                        transition: {
                            staggerChildren: 0.25,
                            delayChildren: descriptionAnimDelay,
                        },
                    },
                }}
                viewport={{ once: true, amount: 0.35 }}
                whileInView='inView'>
                <motion.div
                    className='origin-left'
                    variants={{
                        inView: {
                            opacity: 1,
                            translateY: 0,
                        },
                    }}
                    transition={{
                        duration: 1.5,
                        easings: ["easeInOut"],
                    }}
                    viewport={{ once: true }}
                    whileInView='inView'
                    style={{
                        opacity: 0,
                        translateY: "2rem",
                    }}>
                    <div className='flex gap-1 align-bottom opacity-60'>
                        {renderTeamLabel()}
                    </div>
                    <div className='w-fit text-3xl font-light lg:text-5xl'>
                        <span>0{index}. </span>
                        <h3
                            className={twJoin(
                                "inline-block bg-gradient-to-r bg-clip-text font-medium text-transparent",
                                isOnTheRight
                                    ? "from-fuchsia-500 to-indigo-500"
                                    : "from-indigo-500 to-cyan-500",
                            )}>
                            {title}
                        </h3>
                    </div>
                </motion.div>

                <motion.div
                    variants={{
                        inView: {
                            scaleY: 1,
                            opacity: 1,
                            transition: {
                                staggerChildren: descriptionAnimDelay,
                                delayChildren: 1,
                                duration: 1.25,
                                ease: [0.08, 0.565, 0.34, 0.875],
                            },
                        },
                    }}
                    style={{ scaleY: 0, opacity: 0 }}
                    className={twJoin(
                        "relative flex origin-top flex-col items-stretch gap-6 pl-4 text-justify before:absolute before:bottom-0 before:left-0 before:top-0 before:w-0.5 lg:text-left",
                        isOnTheRight
                            ? "before:bg-fuchsia-500"
                            : "before:bg-cyan-500",
                    )}>
                    {description.map((paragraph, idx) => (
                        <motion.div
                            key={idx}
                            className='text-white/90 opacity-0'
                            variants={{
                                inView: {
                                    opacity: 1,
                                },
                            }}
                            transition={{
                                duration: 1,
                            }}>
                            {paragraph}
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div
                    variants={{
                        inView: {
                            transition: {
                                staggerChildren: tagAnimDelay,
                                delayChildren:
                                    1 +
                                    description.length * descriptionAnimDelay,
                            },
                        },
                    }}
                    className='flex flex-wrap justify-center gap-4 lg:justify-start'>
                    {renderTags()}
                </motion.div>
                <motion.div
                    variants={{
                        inView: {
                            transition: {
                                staggerChildren: 0.25,
                                delayChildren:
                                    1 +
                                    description.length * descriptionAnimDelay +
                                    (tags?.length ?? 0) * tagAnimDelay,
                            },
                        },
                    }}
                    className='mt-8 flex flex-wrap justify-center gap-4 md:gap-8 lg:justify-end'>
                    {renderCta()}
                </motion.div>
            </motion.div>
        </div>
    );
}
