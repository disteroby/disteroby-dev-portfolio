import { useState } from "react";
import { NavbarLink } from "../../constants/LinksData.ts";
import NavbarButton from "./NavbarButton.tsx";
import { motion, Variants } from "framer-motion";

type NavbarProps = {
    links: NavbarLink[];
    initialIdx: number;
};

export default function Navbar({ links, initialIdx }: NavbarProps) {
    const [activeIndex, setActiveIndex] = useState(initialIdx);

    const [isShow, setIsShow] = useState(true);

    const variants: Variants = {
        visible: i => ({
            opacity: 1,
            transition: {
                delay: (i + 1) * 0.15,
            },
        }),
        close: {
            opacity: 0,
        },
    };

    return (
        <nav className='fixed z-40 w-full flex md:justify-center md:mt-4'>
            <NavbarButton
                isOpen={isShow}
                onClick={() => setIsShow(current => !current)}
            />
            <motion.ul
                className='flex flex-col md:flex-row justify-center items-stretch bg-white/5 text-white/70 p-6 md:p-2 backdrop-blur shadow-xl rounded-br-xl md:rounded-full gap-6 md:gap-4'
                variants={variants}
                initial='visible'
                custom={-1}
                animate={isShow ? "visible" : "close"}>
                {links.map((link, idx) => (
                    <motion.li
                        variants={variants}
                        initial='visible'
                        animate={isShow ? "visible" : "close"}
                        custom={idx}
                        key={link.href}
                        className={`px-4 md:px-4 py-1 w-full rounded-full md:w-fit ${activeIndex === idx ? " bg-white/15" : ""}`}>
                        <a
                            className={`${activeIndex !== idx ? link.textColor : "text-white"} items-center group transition-colors duration-200 ease-in-out flex align-bottom gap-2`}
                            href={link.href}
                            onClick={() => {
                                setActiveIndex(idx);
                                // setIsShow(false);
                            }}>
                            {activeIndex === idx ? (
                                <link.icons.active />
                            ) : (
                                <link.icons.default />
                            )}
                            {link.text}
                        </a>
                    </motion.li>
                ))}
            </motion.ul>
        </nav>
    );
}
