import { useState } from "react";
import { NavbarLink } from "../../constants/LinksData.ts";
import NavbarButton from "./NavbarButton.tsx";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { twJoin } from "tailwind-merge";

type NavbarProps = {
    links: NavbarLink[];
    initialIdx: number;
};

export default function Navbar({ links, initialIdx }: NavbarProps) {
    const [activeIndex, setActiveIndex] = useState(initialIdx);

    const [isShow, setIsShow] = useState(false);

    const variants: Variants = {
        visible: ([delay = 0.25, duration = 0.75] = []) => ({
            opacity: 1,
            transition: {
                delay,
                duration: duration,
            },
        }),
        close: {
            opacity: 0,
        },
    };

    function renderLinks(baseDelay = 0) {
        return links.map((link, idx) => (
            <motion.li
                variants={variants}
                animate='visible'
                exit='close'
                custom={[baseDelay + (idx + 1) * 0.2]}
                key={link.href}
                className='opacity-0'>
                <a
                    className={twJoin(
                        "flex items-center gap-2 rounded-full px-4 py-1 align-bottom transition-colors duration-200 ease-in-out md:w-full md:px-4",
                        activeIndex !== idx
                            ? [link.textColor, "hover:bg-white/5"]
                            : ["text-white", "bg-white/15"],
                    )}
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
                <AnimatePresence>
                    {isShow && (
                        <motion.ul
                            className='flex flex-col items-stretch justify-center gap-6 rounded-br-xl bg-white/5 p-6 text-white/70 opacity-0 shadow-xl backdrop-blur'
                            variants={variants}
                            animate='visible'
                            exit='close'>
                            {renderLinks()}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
            <div className='max-lg:hidden'>
                <motion.ul
                    className='flex flex-row items-stretch justify-center gap-4 rounded-full bg-white/5 p-2 text-white/70 opacity-0 shadow-xl backdrop-blur'
                    variants={variants}
                    custom={[3.25, 1]}
                    animate='visible'>
                    {renderLinks(4)}
                </motion.ul>
            </div>
        </nav>
    );
}
