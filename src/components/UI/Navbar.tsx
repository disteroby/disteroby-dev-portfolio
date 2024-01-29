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

    const [isShow, setIsShow] = useState(false);

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

    function renderLinks(isShow: boolean) {
        return links.map((link, idx) => (
            <motion.li
                variants={variants}
                initial='visible'
                animate={isShow ? "visible" : "close"}
                custom={idx}
                key={link.href}
                className={`w-full rounded-full px-4 py-1 md:w-fit md:px-4 ${activeIndex === idx ? " bg-white/15" : ""}`}>
                <a
                    className={`${activeIndex !== idx ? link.textColor : "text-white"} group flex items-center gap-2 align-bottom transition-colors duration-200 ease-in-out`}
                    href={link.href}
                    onClick={() => {
                        setActiveIndex(idx);
                    }}>
                    {activeIndex === idx ? (
                        <link.icons.active />
                    ) : (
                        <link.icons.default />
                    )}
                    {link.text}
                </a>
            </motion.li>
        ));
    }

    return (
        <nav className='fixed z-50 flex w-full lg:mt-4 lg:justify-center'>
            <div className='lg:hidden'>
                <NavbarButton
                    isOpen={isShow}
                    onClick={() => setIsShow(current => !current)}
                />
                <motion.ul
                    className='flex flex-col items-stretch justify-center gap-6 rounded-br-xl bg-white/5 p-6 text-white/70 shadow-xl backdrop-blur'
                    variants={variants}
                    initial='close'
                    custom={-1}
                    animate={isShow ? "visible" : "close"}>
                    {renderLinks(isShow)}
                </motion.ul>
            </div>
            <div className='max-lg:hidden'>
                <motion.ul
                    className='flex flex-row items-stretch justify-center gap-4 rounded-full bg-white/5 p-2 text-white/70 shadow-xl backdrop-blur'
                    variants={variants}
                    initial='visible'>
                    {renderLinks(true)}
                </motion.ul>
            </div>
        </nav>
    );
}
