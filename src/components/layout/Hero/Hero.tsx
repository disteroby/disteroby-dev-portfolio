import { MutableText } from "../../UI";
import { AnimationProps, motion } from "framer-motion";

function Hero() {
    function fadeAndSlide(delay: number) {
        return {
            initial: {
                opacity: 0,
                y: "20%",
            },
            animate: {
                opacity: 1,
                y: "0%",
            },
            transition: {
                duration: 0.5,
                delay: delay,
                ease: "easeOut",
            },
        } as AnimationProps;
    }

    return (
        <section className='h-screen overflow-x-hidden pt-8 xl:pt-24 main-section-container z-30'>
            <div className='font-bold uppercase text-center tracking-widest pointer-events-none'>
                <motion.div
                    className='m-4 md:m-6 flex justify-center'
                    {...fadeAndSlide(0.25)}>
                    <div className='flex flex-row items-center justify-center max-w-xl grow'>
                        <div className='grow bg-gradient-to-l from-white/70 h-0.5' />
                        <div className='grow-0 text-lg font-light capitalize text-white/80 md:text-2xl px-2 md:px-4'>
                            Roberto Di Stefano
                        </div>
                        <div className='grow bg-gradient-to-r from-white/70 h-0.5' />
                    </div>
                </motion.div>
                <motion.div className='hero-text' {...fadeAndSlide(1.25)}>
                    I'm a
                </motion.div>
                <motion.div className='hero-text' {...fadeAndSlide(1.75)}>
                    <MutableText
                        words={["fullstack", "mobile", "game"]}
                        time={4000}
                    />
                </motion.div>
                <motion.div className='hero-text' {...fadeAndSlide(2.25)}>
                    developer
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
