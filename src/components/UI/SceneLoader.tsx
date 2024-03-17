import React from "react";
import { opacityVariants } from "../../utils/FramerMotionUtils.ts";
import MutableText from "./MutableText.tsx";
import { motion } from "framer-motion";

export default function SceneLoader() {
    const greetingsIntro = [
        "Get ready, the digital journey is about to begin!",
        "Hold tight, the web is weaving its magic!",
        "Patience, the cyber pathways are aligning for your entry!",
    ];

    return (
        <motion.div
            style={{
                scrollbarGutter: "stable both-edges",
            }}
            className='absolute left-0 top-0 z-[999] flex h-[100svh] w-screen flex-col items-center justify-center bg-dark-gray'
            variants={opacityVariants}
            transition={{ duration: 0.5, easings: ["easeIn"] }}
            animate='visible'
            exit='invisible'>
            <motion.div
                role='status'
                className='flex flex-col items-center justify-center gap-24 text-2xl opacity-0'
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}>
                <div className='relative size-24 animate-spin'>
                    {["", "blur-lg", "blur-2xl", "blur-3xl"].map(
                        blurIntensity => (
                            <div
                                key={blurIntensity}
                                style={{
                                    transform: "translateZ(0)",
                                    perspective: "1000",
                                    backfaceVisibility: "hidden",
                                }}
                                className={`absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 ${blurIntensity}`}
                            />
                        ),
                    )}
                </div>
                <div className='pt-8 tracking-wider'>
                    <MutableText
                        words={greetingsIntro}
                        time={4000}
                        className='text-center text-2xl font-light lg:text-3xl xl:text-4xl'
                        classNameIfPrevious='translate-y-0 translate-x-0'
                        renderItem={word => (
                            <div className='w-screen max-w-[50rem] px-8'>
                                {word}
                            </div>
                        )}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}
