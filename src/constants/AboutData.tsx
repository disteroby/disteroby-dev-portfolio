import { IconType } from "react-icons";
import { FaHouseFlag, FaUserTie } from "react-icons/fa6";
import { IoIosSchool } from "react-icons/io";
import { IoGameController } from "react-icons/io5";

/**
 * Represents a topic in the About Section.
 */
export type AboutTopic = {
    title: string;
    content: JSX.Element[];
    icon: IconType;
};

/**
 * Tailwind style for bold text.
 */
const boldStyle = "font-bold text-white/90";

/**
 * Tailwind style for links.
 */
const aStyle =
    "underline text-white/90 hover:text-white duration-300 decoration-[unset] underline-offset-2 transition hover:decoration-[inherit] font-semibold";

/**
 * Array of About Section topics.
 */
export const ABOUT_TOPICS: AboutTopic[] = [
    {
        title: "Who Am I?",
        content: [
            <>
                Hi There! I'm{" "}
                <span className={boldStyle}>Roberto Di Stefano</span>, a
                25-year-old developer living in Milan, Italy.
            </>,
            <>
                What kind of developer am I? Well,{" "}
                <span className={boldStyle}>the one you need</span>! I'm
                passionate about various aspects of computer science and have
                solid skills in <span className={boldStyle}>web</span>,{" "}
                <span className={boldStyle}>mobile app</span> and{" "}
                <span className={boldStyle}>game</span> development. My diverse
                skill set allows me to adapt to various project requirements and
                deliver high-quality solutions tailored to your needs.
            </>,
        ],
        icon: FaHouseFlag,
    },
    {
        title: "Education",
        content: [
            <>
                Throughout my academic journey, I attained both a{" "}
                <span className={boldStyle}>Bachelor</span>'s and{" "}
                <span className={boldStyle}>Master</span>'s degree in{" "}
                <span className={boldStyle}>Computer Science</span> from the{" "}
                <a
                    className={aStyle}
                    href='https://en.unimib.it/'
                    target='_blank'>
                    University of Milano-Bicocca
                </a>
                , each awarded with the highest honors of 110 cum laude.
            </>,
            <>
                It was during these university years that I delved deeply into
                the study of my passion, equipped with both theoretical and
                practical approaches, fostering a{" "}
                <span className={boldStyle}>problem-solving mindset</span> that
                continues to drive me.
            </>,
        ],
        icon: IoIosSchool,
    },
    {
        title: "Professional Career",
        content: [
            <>
                After years of dedicated study, I've embarked on my first
                professional journey as an{" "}
                <span className={boldStyle}>IT consultant</span> and{" "}
                <span className={boldStyle}>full-stack developer </span>
                at a company within the{" "}
                <a
                    className={aStyle}
                    href='https://www.reply.com/en'
                    target='_blank'>
                    Reply group
                </a>
                , namely <span className={boldStyle}>TamTamy Reply</span>.
            </>,
            <>
                It's an exciting leap into the world of practical application,
                where I can merge my theoretical knowledge with hands-on
                experience. Ready to tackle challenges and contribute
                meaningfully to innovative projects!
            </>,
        ],
        icon: FaUserTie,
    },
    {
        title: "My Passions",
        content: [
            <>
                In my free time, I dive headfirst into{" "}
                <span className={boldStyle}>nerd culture</span>. I'm a fervent
                fan of <span className={boldStyle}>video-games</span>,{" "}
                <span className={boldStyle}>anime</span> and{" "}
                <span className={boldStyle}>manga</span>. I love exploring their
                immersive worlds.
            </>,
            <>
                I also follow <span className={boldStyle}>soccer</span>{" "}
                passionately, cheering for Juventus. I have a passion for{" "}
                <span className={boldStyle}>tennis</span> too, a sport I enjoy
                playing a lot.
            </>,
            <>
                And yes... I'm truly passionate about{" "}
                <span className={boldStyle}>coding</span> as well, no doubt
                about it!
            </>,
        ],
        icon: IoGameController,
    },
];
