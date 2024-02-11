import React, { useState } from "react";
import useInterval from "../../hooks/useInterval.ts";
import GlowingText from "./GlowingText.tsx";
import { twMerge } from "tailwind-merge";

type MutableTextProps = {
    words: string[];
    time: number;
    pause?: boolean;
};

function MutableText({ words, time, pause = false }: MutableTextProps) {
    const [wordId, setWordId] = useState(0);

    useInterval(
        () => setWordId(oldId => (oldId + 1) % words.length),
        time,
        !pause,
    );

    function isPrevious(thisId: number) {
        return thisId === (words.length + wordId + 1) % words.length;
    }

    function isFollowing(thisId: number) {
        return thisId === (words.length + wordId - 1) % words.length;
    }

    return (
        <div className='relative flex w-full justify-center'>
            {words.map((word, id) => (
                <div
                    className={twMerge(
                        "absolute flex translate-x-0 items-center justify-center transition duration-[1500ms] ease-out",
                        id === wordId ? "opacity-100" : "opacity-0",
                        isPrevious(id) && "-translate-x-[15rem]",
                        isFollowing(id) && "translate-x-[15rem]",
                    )}
                    key={word}>
                    <GlowingText text={word} className='text-5xl' />
                </div>
            ))}
            <div className='pointer-events-none relative w-fit text-center text-5xl opacity-0 md:text-6xl '>
                .
            </div>
        </div>
    );
}

export default MutableText;
