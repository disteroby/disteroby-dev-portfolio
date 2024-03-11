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
        <div className='relative flex w-full justify-center text-5xl lg:text-6xl'>
            {words.map((word, id) => (
                <div
                    className={twMerge(
                        "absolute flex translate-x-0 items-center justify-center [transition:.75s_opacity_ease-in-out,.75s_transform_ease-in-out]",
                        id === wordId ? "opacity-100" : "opacity-0",
                        isPrevious(id) && "-translate-y-10",
                        isFollowing(id) && "[transition:.25s_opacity_ease-out]",
                    )}
                    key={word}>
                    <GlowingText text={word} className='text-5xl lg:text-6xl' />
                </div>
            ))}
            <div className='pointer-events-none relative w-fit text-center opacity-0'>
                .
            </div>
        </div>
    );
}

export default MutableText;
