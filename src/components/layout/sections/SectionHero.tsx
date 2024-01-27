import { MutableText } from "../../UI";
import { motion, Variants } from "framer-motion";

type SectionHeroProps = {
    pageIsLoaded: boolean;
};

export default function SectionHero({ pageIsLoaded }: SectionHeroProps) {
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
                delay: delay,
                duration: 0.5,
            },
        }),
    };

    return (
        <section className='h-screen overflow-x-hidden main-section-container'>
            <div className='font-bold uppercase text-center tracking-wider h-[30%] flex flex-col justify-center mt-8 md:mt-16'>
                <motion.div
                    className='mb-4 flex justify-center'
                    animate={pageIsLoaded ? "animate" : "enter"}
                    variants={variants}
                    custom={0.5}>
                    <div className='flex flex-row items-center justify-center max-w-xl grow opacity-75'>
                        <div className='grow bg-gradient-to-l from-white/70 h-[0.05rem] md:h-[0.1rem]' />
                        <div className='grow-0 text-md font-light capitalize text-white/80 md:text-xl px-2 md:px-4'>
                            Roberto Di Stefano
                        </div>
                        <div className='grow bg-gradient-to-r from-white/70 h-[0.05rem] md:h-[0.1rem]' />
                    </div>
                </motion.div>
                <motion.div
                    className='hero-text'
                    animate={pageIsLoaded ? "animate" : "enter"}
                    variants={variants}
                    custom={1.25}>
                    <MutableText
                        words={["fullstack", "mobile", "game"]}
                        time={3000}
                        pause={!pageIsLoaded}
                    />
                </motion.div>
                <motion.div
                    className='hero-text'
                    animate={pageIsLoaded ? "animate" : "enter"}
                    variants={variants}
                    custom={1.5}>
                    developer
                </motion.div>
            </div>
        </section>
    );
}
