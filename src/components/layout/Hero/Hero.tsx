import mainIconsDark from "../../../assets/backgrounds/mainIconsdark.svg";
import { MutableText } from "../../UI";
import { AnimationProps, motion } from "framer-motion";
import { CiMobile3 } from "react-icons/ci";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { PiSwordDuotone } from "react-icons/pi";
import { RiSparkling2Fill } from "react-icons/ri";

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

    function createIconAfter(id: number) {
        const styles =
            "ml-2 md:ml-4 pt-1 inline-block fill-cyan-500 align-baseline drop-shadow-[0_0_3px_rgba(0,255,255,.25)] size-[.75em]";

        switch (id) {
            case 0:
                return <LiaLaptopCodeSolid className={styles} />;
            case 1:
                return <CiMobile3 className={styles} />;
            case 2:
                return <PiSwordDuotone className={styles} />;
        }
    }

    return (
        <section className='bg-hero h-screen overflow-x-hidden bg-cover bg-center bg-no-repeat'>
            <div className='main-section-container flex min-h-[60%] flex-col justify-between pt-8 tracking-wider md:flex-row md:px-8'>
                <div className='relative flex shrink-0 flex-col justify-center font-bold uppercase max-md:text-center'>
                    <motion.p
                        className='mb-8 text-2xl font-light capitalize text-white/80 shadow-amber-50 drop-shadow-2xl md:text-2xl'
                        {...fadeAndSlide(0.25)}>
                        Hi, I'm <br className='inline md:hidden' /> Roberto Di
                        Stefano
                        <motion.span
                            initial={{ opacity: 0.5 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                repeat: Infinity,
                                repeatType: "mirror",
                            }}>
                            <RiSparkling2Fill className='mx-2 inline-block size-[.75em] align-middle' />
                        </motion.span>
                    </motion.p>
                    <motion.div className='hero-text' {...fadeAndSlide(0.75)}>
                        I'm a
                    </motion.div>
                    <motion.div className='hero-text' {...fadeAndSlide(1)}>
                        <MutableText
                            words={["fullstack", "mobile", "game"]}
                            time={3000}
                            after={createIconAfter}
                            // pause
                        />
                    </motion.div>
                    <motion.div className='hero-text' {...fadeAndSlide(1.25)}>
                        developer
                    </motion.div>
                    {/*<GlowingButton*/}
                    {/*    text="test"*/}
                    {/*    onClick={() => console.log("test")}*/}
                    {/*/>*/}
                </div>
                <motion.div className='grid max-w-xl place-content-center p-4 max-md:pt-8'>
                    <img src={mainIconsDark} alt='' />
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
