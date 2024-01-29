import { motion } from "framer-motion";

type NavbarButtonProps = {
    isOpen: boolean;
    onClick: () => void;
};

export default function NavbarButton({ isOpen, onClick }: NavbarButtonProps) {
    return (
        <button
            className='fixed right-0 z-50 m-6 flex scale-90 flex-col items-end justify-center gap-2 text-white opacity-85'
            onClick={() => onClick()}>
            <motion.div
                variants={{
                    close: {
                        rotate: 0,
                    },
                    open: {
                        rotate: "-45deg",
                        y: ".7rem",
                    },
                }}
                transition={{
                    duration: 0.2,
                }}
                animate={isOpen ? "open" : "close"}
                className='h-[0.2rem] w-8 rounded-full bg-white'
            />
            <motion.div
                variants={{
                    close: {
                        opacity: 1,
                        scaleX: 1,
                    },
                    open: {
                        opacity: 0,
                        scaleX: 0,
                    },
                }}
                transition={{
                    duration: 0.1,
                }}
                animate={isOpen ? "open" : "close"}
                className='h-[0.2rem] w-8 rounded-full bg-white'
            />
            <motion.div
                variants={{
                    close: {
                        rotate: 0,
                        width: "1rem",
                    },
                    open: {
                        rotate: "45deg",
                        width: "2rem",
                        y: "-.7rem",
                    },
                }}
                transition={{
                    duration: 0.2,
                }}
                animate={isOpen ? "open" : "close"}
                className='h-[0.2rem] w-4 rounded-full bg-white'
            />
        </button>
    );
}
