import { CSSProperties } from "react";
import { IconType } from "react-icons";
import {
    BiLogoAndroid,
    BiLogoBlender,
    BiLogoBootstrap,
    BiLogoCPlusPlus,
    BiLogoCss3,
    BiLogoDocker,
    BiLogoFigma,
    BiLogoFirebase,
    BiLogoFlutter,
    BiLogoGithub,
    BiLogoHtml5,
    BiLogoJava,
    BiLogoJavascript,
    BiLogoMongodb,
    BiLogoReact,
    BiLogoSpringBoot,
    BiLogoTailwindCss,
    BiLogoTrello,
    BiLogoTypescript,
    BiLogoUnity,
} from "react-icons/bi";
import { FaGitlab } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiArduino, SiCypress, SiUnrealengine } from "react-icons/si";

export type SkillType = "web" | "mobile" | "game" | "tools";
export type PureSkillType = Exclude<SkillType, "tools">;

export type Skill = {
    name: string;
    level: number;
    type: SkillType | SkillType[];
    logo: IconType;
    color: CSSProperties["color"];
};

export const skills: Skill[] = [
    {
        name: "Figma",
        color: "#7f3bf1",
        type: "tools",
        logo: BiLogoFigma,
        level: 2,
    },
    {
        name: "Bootstrap",
        color: "#a339db",
        type: "web",
        logo: BiLogoBootstrap,
        level: 4.5,
    },
    {
        name: "Java",
        color: "#e9344c",
        type: ["mobile", "web"],
        logo: BiLogoJava,
        level: 5,
    },
    {
        name: "HTML5",
        color: "#e2452d",
        type: "web",
        logo: BiLogoHtml5,
        level: 4,
    },
    {
        name: "GitLab",
        color: "#e26220",
        type: "tools",
        logo: FaGitlab,
        level: 4.5,
    },
    {
        name: "Blender",
        color: "#d87f24",
        type: "game",
        logo: BiLogoBlender,
        level: 2,
    },
    {
        name: "Firebase",
        color: "#fdca2f",
        type: ["mobile", "web", "game"],
        logo: BiLogoFirebase,
        level: 3,
    },
    {
        name: "JavaScript",
        color: "#ddd541",
        type: "web",
        logo: BiLogoJavascript,
        level: 4,
    },
    {
        name: "Spring Boot",
        color: "#6cbe4a",
        type: "web",
        logo: BiLogoSpringBoot,
        level: 3.5,
    },
    {
        name: "Android",
        color: "#48c971",
        type: "mobile",
        logo: BiLogoAndroid,
        level: 3,
    },
    {
        name: "MongoDb",
        color: "#14b361",
        type: ["mobile", "web", "game"],
        logo: BiLogoMongodb,
        level: 2.5,
    },
    {
        name: "Unreal Engine",
        color: "#222325",
        type: "game",
        logo: SiUnrealengine,
        level: 4,
    },
    {
        name: "GitHub",
        color: "#282b2c",
        type: "tools",
        logo: BiLogoGithub,
        level: 3.5,
    },
    {
        name: "Unity",
        color: "#29333d",
        type: "game",
        logo: BiLogoUnity,
        level: 2.5,
    },
    {
        name: "Cypress",
        color: "#60bf99",
        type: "web",
        logo: SiCypress,
        level: 1.5,
    },
    {
        name: "Tailwind CSS",
        color: "#38b2ad",
        type: "web",
        logo: BiLogoTailwindCss,
        level: 3.5,
    },
    {
        name: "Arduino",
        color: "#1ba3a7",
        type: "tools",
        logo: SiArduino,
        level: 1.5,
    },
    {
        name: "React",
        color: "#22bcdc",
        type: "web",
        logo: BiLogoReact,
        level: 4,
    },
    {
        name: "Flutter",
        color: "#4bb3e2",
        type: "mobile",
        logo: BiLogoFlutter,
        level: 3,
    },
    {
        name: "MySQL",
        color: "#128fc5",
        type: ["mobile", "web", "game"],
        logo: GrMysql,
        level: 4,
    },
    {
        name: "Docker",
        color: "#0894e5",
        type: "web",
        logo: BiLogoDocker,
        level: 2.5,
    },
    {
        name: "TypeScript",
        color: "#087ed1",
        type: "web",
        logo: BiLogoTypescript,
        level: 3,
    },
    {
        name: "C++",
        color: "#046dc3",
        type: "game",
        logo: BiLogoCPlusPlus,
        level: 3.5,
    },
    {
        name: "Trello",
        color: "#0669ea",
        type: "tools",
        logo: BiLogoTrello,
        level: 4.5,
    },
    {
        name: "CSS3",
        color: "#3069ef",
        type: "web",
        logo: BiLogoCss3,
        level: 4,
    },
];
