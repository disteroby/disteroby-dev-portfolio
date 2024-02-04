import React, { useState } from "react";
import useInterval from "../../hooks/useInterval.ts";
import { AnimatePresence, motion } from "framer-motion";

type MutableTextProps = {
    words: string[];
    time: number;
    before?: (id: number, word: string) => React.ReactNode;
    after?: (id: number, word: string) => React.ReactNode;
    pause?: boolean;
};

function MutableText({
    words,
    time,
    before,
    after,
    pause = false,
}: MutableTextProps) {
    const [wordId, setWordId] = useState(0);

    useInterval(
        () => setWordId(oldId => (oldId + 1) % words.length),
        time,
        !pause,
    );

    return (
        <AnimatePresence initial={false} mode='wait'>
            {words.map(
                (word, id) =>
                    id === wordId && (
                        <motion.div
                            className='w-full text-5xl md:text-7xl'
                            key={`modal-${id}`}
                            initial={{ x: "-5rem", opacity: 0 }}
                            animate={{ x: "0", opacity: 1 }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.25,
                                },
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "backOut",
                            }}>
                            {before && before(wordId, word)}
                            <span className='fuchsia-cyan-gradient relative bg-clip-text text-transparent'>
                                {word}
                            </span>
                            {after && after(wordId, word)}
                        </motion.div>
                    ),
            )}
        </AnimatePresence>
    );
}

export default MutableText;
