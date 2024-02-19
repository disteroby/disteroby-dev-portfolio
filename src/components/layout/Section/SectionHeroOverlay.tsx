import MutableText from "../../UI/MutableText.tsx";
import { motion, Variants } from "framer-motion";

type SectionHeroProps = {
    pageIsLoaded: boolean;
};

const minDefaultDelay = 1;

export default function SectionHeroOverlay({ pageIsLoaded }: SectionHeroProps) {
    const variants: Variants = {
        enter: {
            opacity: 0,
            y: "20%",
            transition: { duration: 0.5 },
        },
        animate: (delay: number) => ({
            opacity: 1,
            y: "0%",
            transition: {
                delay: minDefaultDelay + delay,
                duration: 0.5,
            },
        }),
    };

    return (
        <div className='-mt-8 flex h-[37%] flex-col justify-center text-center font-bold uppercase tracking-wider lg:-mt-16'>
            <motion.div
                className='text-5xl opacity-0 lg:text-6xl'
                animate={pageIsLoaded ? "animate" : "enter"}
                variants={variants}
                custom={0.5}>
                <MutableText
                    words={["web", "mobile", "game"]}
                    time={4000}
                    pause={!pageIsLoaded}
                />
            </motion.div>
            <motion.div
                className='text-3xl opacity-0 lg:text-5xl'
                animate={pageIsLoaded ? "animate" : "enter"}
                variants={variants}
                custom={1.25}>
                developer
            </motion.div>
            <motion.div
                className='mx-4 mt-4 flex justify-center opacity-0 md:mx-16'
                initial='enter'
                animate={pageIsLoaded ? "animate" : "enter"}
                variants={variants}
                custom={1.75}>
                <div className='flex max-w-xl grow flex-row items-center justify-center opacity-75 md:px-16'>
                    <div className='pointer-events-none h-[0.06rem] grow bg-gradient-to-l from-white/70 ' />
                    <div className='text-md grow-0 px-2 font-light capitalize text-white/80 md:px-4 md:text-xl'>
                        Roberto Di Stefano
                    </div>
                    <div className='pointer-events-none h-[0.06rem] grow bg-gradient-to-r from-white/70 ' />
                </div>
            </motion.div>
        </div>
    );
}
