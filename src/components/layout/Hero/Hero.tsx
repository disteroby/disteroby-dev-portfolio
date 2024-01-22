import { MutableText } from "../../UI";
import { AnimationProps, motion } from "framer-motion";

function Hero() {
    function fadeAndSlide(delay: number) {
        return {
            enter: {
                opacity: 0,
                y: "20%",
                transition: { duration: 0.5 },
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
        <section className='h-screen overflow-x-hidden main-section-container'>
            <div className='font-bold uppercase text-center tracking-wider h-1/3 flex flex-col justify-center'>
                <motion.div
                    className='mb-6 md:mb-8 flex justify-center'
                    {...fadeAndSlide(0.5)}>
                    <div className='flex flex-row items-center justify-center max-w-xl grow opacity-75'>
                        <div className='grow bg-gradient-to-l from-white/70 h-[0.05rem] md:h-[0.1rem]' />
                        <div className='grow-0 text-md font-light capitalize text-white/80 md:text-xl px-2 md:px-4'>
                            Roberto Di Stefano
                        </div>
                        <div className='grow bg-gradient-to-r from-white/70 h-[0.05rem] md:h-[0.1rem]' />
                    </div>
                </motion.div>
                {/*<motion.div className='hero-text' {...fadeAndSlide(1.25)}>*/}
                {/*    I'm a*/}
                {/*</motion.div>*/}
                <motion.div className='hero-text' {...fadeAndSlide(1.25)}>
                    <MutableText
                        words={["fullstack", "mobile", "game"]}
                        time={3000}
                    />
                </motion.div>
                <motion.div className='hero-text' {...fadeAndSlide(1.5)}>
                    developer
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
