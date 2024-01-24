import { motion } from "framer-motion";

type NavbarButtonProps = {
    isOpen: boolean;
    onClick: () => void;
};

export default function NavbarButton({ isOpen, onClick }: NavbarButtonProps) {
    return (
        <button
            className='fixed m-6 right-0 z-50 text-white flex flex-col justify-center items-end gap-2 opacity-85 md:hidden scale-90'
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
                className='w-8 h-[0.2rem] bg-white rounded-full'
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
                className='w-8 h-[0.2rem] bg-white rounded-full'
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
                className='w-4 h-[0.2rem] bg-white rounded-full'
            />
        </button>
    );
}
