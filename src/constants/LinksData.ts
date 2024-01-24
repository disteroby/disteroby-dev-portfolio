import { IconType } from "react-icons";
import {
    PiChatCircleTextDuotone,
    PiChatCircleTextFill,
    PiDevicesDuotone,
    PiDevicesFill,
    PiUserCircleDuotone,
    PiUserCircleFill,
} from "react-icons/pi";
import { RiSparkling2Fill, RiSparkling2Line } from "react-icons/ri";

export type NavbarLink = {
    text: string;
    href: string;
    textColor: string;
    icons: {
        default: IconType;
        active: IconType;
    };
};

export const LinksData: NavbarLink[] = [
    {
        text: "Introduction",
        href: "#intro",
        textColor: "hover:text-fuchsia-500",
        icons: {
            default: RiSparkling2Line,
            active: RiSparkling2Fill,
        },
    },
    {
        text: "My Projects",
        href: "#projects",
        textColor: "hover:text-violet-500",
        icons: {
            default: PiDevicesDuotone,
            active: PiDevicesFill,
        },
    },
    {
        text: "About Me",
        href: "#about",
        textColor: "hover:text-blue-500",
        icons: {
            default: PiUserCircleDuotone,
            active: PiUserCircleFill,
        },
    },
    {
        text: "Contact Me",
        href: "#contact-me",
        textColor: "hover:text-cyan-500",
        icons: {
            default: PiChatCircleTextDuotone,
            active: PiChatCircleTextFill,
        },
    },
];
