import { useState } from "react";
import useInterval from "../../../hooks/useInterval/useInterval.ts";
import { AnimatePresence, motion } from "framer-motion";

type MutableTextProps = {
    words: string[];
    time: number;
};

function MutableText({ words, time }: MutableTextProps) {
    const [wordId, setWordId] = useState(0);

    useInterval(() => {
        setWordId(oldId => (oldId + 1) % words.length);
    }, time);

    return (
        <span className="inline-block">
            <AnimatePresence initial={false} mode="wait">
                {words.map(
                    (word, id) =>
                        id === wordId && (
                            <motion.div
                                className="bg-gradient-to-r from-fuchsia-500 via-purple-500 via-40% to-cyan-500 bg-clip-text text-transparent"
                                key={`modal-${id}`}
                                initial={{ y: "-50%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 0, opacity: 0 }}>
                                {word}
                            </motion.div>
                        ),
                )}
            </AnimatePresence>
        </span>
    );
}

export default MutableText;
