import { IconType } from "react-icons";
import { FaHouseFlag, FaUserTie } from "react-icons/fa6";
import { IoIosSchool } from "react-icons/io";
import { IoGameController } from "react-icons/io5";

export type AboutTopic = {
    title: string;
    content: JSX.Element[];
    icon: IconType;
};

const boldStyle = "font-bold text-white/90";
const aStyle =
    "underline text-white/90 hover:text-white duration-300 decoration-[unset] underline-offset-2 transition hover:decoration-[inherit]";

export const aboutTopics: AboutTopic[] = [
    {
        title: "Who Am I?",
        content: [
            <>
                Hi There! I'm{" "}
                <span className={boldStyle}>Roberto Di Stefano</span>, a
                25-year-old Italian developer residing near Milan, in Italy.
            </>,
            <>
                What kind of developer am I? Well,{" "}
                <span className={boldStyle}>the one you need</span>! I love all
                aspects of computer science and have solid foundational skills
                in <span className={boldStyle}>web</span>,{" "}
                <span className={boldStyle}>mobile app</span> and{" "}
                <span className={boldStyle}>game</span> development.
            </>,
        ],
        icon: FaHouseFlag,
    },
    {
        title: "Education",
        content: [
            <>
                I hold a <span className={boldStyle}>Bachelor</span>'s and{" "}
                <span className={boldStyle}>Master</span>'s degree in{" "}
                <span className={boldStyle}>Computer Science</span> from the{" "}
                <a
                    className={aStyle}
                    href='https://en.unimib.it/'
                    target='_blank'>
                    University of Milano-Bicocca
                </a>
                , both awarded with top honors of{" "}
                <span className={boldStyle}>110 cum laude</span>
            </>,
            <>
                My academic journey has equipped me with a profound
                understanding of computer systems and a passion for innovation.
            </>,
        ],
        icon: IoIosSchool,
    },
    {
        title: "Professional Careers",
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
                passionately, cheering for Juventus. I also have a passion for{" "}
                <span className={boldStyle}>tennis</span>, a sport I enjoy
                playing a lot.
            </>,
        ],
        icon: IoGameController,
    },
];
