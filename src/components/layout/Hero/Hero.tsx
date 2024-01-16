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
        <section className="h-screen bg-hero-bg bg-cover bg-center bg-no-repeat">
            <div className="main-section-container flex flex-col pt-32 tracking-wider md:flex-row md:px-8">
                <div className="relative shrink font-bold uppercase max-md:text-center">
                    <motion.div
                        className="text-2xl font-light capitalize text-white/80 shadow-amber-50 drop-shadow-2xl md:text-3xl"
                        {...fadeAndSlide(0)}>
                        Hi, I'm
                        <br className="inline md:hidden" /> Roberto Di Stefano
                    </motion.div>
                    <motion.div
                        className="mt-8 text-5xl text-white md:text-8xl"
                        {...fadeAndSlide(0.125)}>
                        I'm a <br className="inline md:hidden" />
                        <MutableText
                            words={["web", "mobile", "game"]}
                            time={3000}
                        />
                    </motion.div>
                    <motion.div
                        className="text-5xl text-white md:text-8xl"
                        {...fadeAndSlide(0.25)}>
                        developer
                    </motion.div>
                    {/*<GlowingButton*/}
                    {/*    text="test"*/}
                    {/*    onClick={() => console.log("test")}*/}
                    {/*/>*/}
                </div>
            </div>
        </section>
    );
}

export default Hero;
