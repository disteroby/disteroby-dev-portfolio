import { useState } from "react";
import { NAVBAR_LINKS } from "../../constants/NavbarLinks.ts";
import NavbarButton from "./NavbarButton.tsx";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { twJoin } from "tailwind-merge";

type NavbarProps = {
    activeIdx: number;
    onItemClick: (idx: number) => void;
};

export default function Navbar({ activeIdx, onItemClick }: NavbarProps) {
    const [isShow, setIsShow] = useState(false);

    const variants: Variants = {
        visible: ([delay = 0.25, duration = 0.95] = []) => ({
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

    function renderLinks(
        baseDelay: number,
        itemDelay: number,
        duration: number,
    ) {
        return NAVBAR_LINKS.map((link, idx) => (
            <motion.li
                variants={variants}
                animate='visible'
                exit='close'
                custom={[baseDelay + (idx + 1) * itemDelay, duration]}
                key={link.href}
                className='cursor-pointer opacity-0'>
                <span
                    className={twJoin(
                        "flex select-none items-center gap-2 rounded-full px-4 py-1 align-bottom transition-colors duration-200 ease-in-out md:w-full md:px-4",
                        activeIdx !== idx
                            ? [link.textColor, "hover:bg-white/5"]
                            : ["text-white", "bg-white/15"],
                    )}
                    onClick={() => {
                        setIsShow(false);
                        onItemClick(idx);
                    }}>
                    {activeIdx === idx ? (
                        <link.icons.active />
                    ) : (
                        <link.icons.default />
                    )}
                    {link.text}
                </span>
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
                            {renderLinks(0.15, 0.2, 0.25)}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
            <div className='max-lg:hidden'>
                <motion.ul
                    className='flex flex-row items-stretch justify-center gap-4 rounded-full bg-white/5 p-2 text-white/70 opacity-0 shadow-xl backdrop-blur'
                    variants={variants}
                    custom={[0.35, 1]}
                    animate='visible'>
                    {renderLinks(1, 0.5, 1)}
                </motion.ul>
            </div>
        </nav>
    );
}
