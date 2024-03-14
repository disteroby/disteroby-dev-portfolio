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
    BiLogoGit,
    BiLogoGithub,
    BiLogoHtml5,
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
import { LiaJava } from "react-icons/lia";
import { SiCypress, SiUnrealengine } from "react-icons/si";

/**
 * Represents the type of skill.
 */
export type SkillType = "web" | "mobile" | "game";

/**
 * Represents a skill item.
 */
export type Skill = {
    name: string;
    level: number;
    type: SkillType | SkillType[];
    logo: IconType;
};

/**
 * Array of skill data.
 */
export const SKILLS_DATA: Skill[] = [
    {
        name: "Figma",
        type: ["web", "mobile"],
        logo: BiLogoFigma,
        level: 2,
    },
    {
        name: "Bootstrap",
        type: "web",
        logo: BiLogoBootstrap,
        level: 4,
    },
    {
        name: "Git",
        type: ["web", "mobile", "game"],
        logo: BiLogoGit,
        level: 4,
    },
    {
        name: "Java",
        type: ["mobile", "web"],
        logo: LiaJava,
        level: 5,
    },
    {
        name: "HTML5",
        type: "web",
        logo: BiLogoHtml5,
        level: 4,
    },
    {
        name: "GitLab",
        type: ["web", "mobile", "game"],
        logo: FaGitlab,
        level: 4.5,
    },
    {
        name: "Blender",
        type: "game",
        logo: BiLogoBlender,
        level: 2,
    },
    {
        name: "Firebase",
        type: ["mobile", "web", "game"],
        logo: BiLogoFirebase,
        level: 3,
    },
    {
        name: "JavaScript",
        type: "web",
        logo: BiLogoJavascript,
        level: 4,
    },
    {
        name: "Spring Boot",
        type: "web",
        logo: BiLogoSpringBoot,
        level: 3.5,
    },
    {
        name: "Android",
        type: "mobile",
        logo: BiLogoAndroid,
        level: 3,
    },
    {
        name: "Unreal Engine",
        type: "game",
        logo: SiUnrealengine,
        level: 4,
    },
    {
        name: "GitHub",
        type: ["web", "mobile", "game"],
        logo: BiLogoGithub,
        level: 3.5,
    },
    {
        name: "Unity",
        type: "game",
        logo: BiLogoUnity,
        level: 2.5,
    },
    {
        name: "MongoDb",
        type: ["mobile", "web", "game"],
        logo: BiLogoMongodb,
        level: 2,
    },
    {
        name: "Cypress",
        type: "web",
        logo: SiCypress,
        level: 2,
    },
    {
        name: "Tailwind CSS",
        type: "web",
        logo: BiLogoTailwindCss,
        level: 3.5,
    },
    {
        name: "React",
        type: "web",
        logo: BiLogoReact,
        level: 4.5,
    },
    {
        name: "Flutter",
        type: "mobile",
        logo: BiLogoFlutter,
        level: 3,
    },
    {
        name: "MySQL",
        type: ["mobile", "web", "game"],
        logo: GrMysql,
        level: 4,
    },
    {
        name: "Docker",
        type: ["web", "mobile"],
        logo: BiLogoDocker,
        level: 2.5,
    },
    {
        name: "TypeScript",
        type: "web",
        logo: BiLogoTypescript,
        level: 3,
    },
    {
        name: "C++",
        type: "game",
        logo: BiLogoCPlusPlus,
        level: 3.5,
    },
    {
        name: "Trello",
        type: ["mobile", "web", "game"],
        logo: BiLogoTrello,
        level: 4.5,
    },
    {
        name: "CSS3",
        type: "web",
        logo: BiLogoCss3,
        level: 4,
    },
];
