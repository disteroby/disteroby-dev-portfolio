import { MainSectionTag } from "../hooks/useSectionRef.ts";
import { IconType } from "react-icons";
import {
    HiCodeBracketSquare,
    HiOutlineCodeBracketSquare,
} from "react-icons/hi2";
import {
    PiChatCircleTextDuotone,
    PiChatCircleTextFill,
    PiDevicesDuotone,
    PiDevicesFill,
    PiUserCircleDuotone,
    PiUserCircleFill,
} from "react-icons/pi";
import { RiSparkling2Fill, RiSparkling2Line } from "react-icons/ri";

/**
 * Represents a link in the navbar.
 */
export type NavbarLink = {
    text: string;
    href: MainSectionTag;
    textColor: string;
    icons: {
        default: IconType;
        active: IconType;
    };
};

/**
 * Array of navbar links.
 */
export const NAVBAR_LINKS: NavbarLink[] = [
    {
        text: "Overview",
        href: "overview",
        textColor: "hover:text-fuchsia-400",
        icons: {
            default: RiSparkling2Line,
            active: RiSparkling2Fill,
        },
    },
    {
        text: "Projects",
        href: "projects",
        textColor: "hover:text-violet-400",
        icons: {
            default: PiDevicesDuotone,
            active: PiDevicesFill,
        },
    },
    {
        text: "About Me",
        href: "about-me",
        textColor: "hover:text-indigo-400",
        icons: {
            default: PiUserCircleDuotone,
            active: PiUserCircleFill,
        },
    },
    {
        text: "Technical Skills",
        href: "skills",
        textColor: "hover:text-blue-400",
        icons: {
            default: HiOutlineCodeBracketSquare,
            active: HiCodeBracketSquare,
        },
    },
    {
        text: "Contacts",
        href: "contact",
        textColor: "hover:text-cyan-400",
        icons: {
            default: PiChatCircleTextDuotone,
            active: PiChatCircleTextFill,
        },
    },
];
