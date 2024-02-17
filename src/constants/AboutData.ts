import { IconType } from "react-icons";
import { FaHouseFlag, FaUserTie } from "react-icons/fa6";
import { IoIosSchool } from "react-icons/io";
import { IoGameController } from "react-icons/io5";

export type AboutTopic = {
    title: string;
    content: string[];
    icon: IconType;
};

const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque esse est in, nulla provident ullam!";

export const aboutTopics: AboutTopic[] = [
    {
        title: "Who am I?",
        content: [lorem, lorem],
        icon: FaHouseFlag,
    },
    {
        title: "Education",
        content: [lorem, lorem],
        icon: IoIosSchool,
    },
    {
        title: "Professional Works",
        content: [lorem, lorem],
        icon: FaUserTie,
    },
    {
        title: "My Passions",
        content: [lorem, lorem, lorem],
        icon: IoGameController,
    },
];
