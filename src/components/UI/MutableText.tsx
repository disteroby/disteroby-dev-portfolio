import React, { useState } from "react";
import useInterval from "../../hooks/useInterval.ts";
import { twMerge } from "tailwind-merge";

type MutableTextProps = {
    words: string[];
    time: number;
    pause?: boolean;
    className?: string;
    classNameIfPrevious?: string;
    classNameIfCurrent?: string;
    classNameIfFollowing?: string;
    renderItem: (word: string) => JSX.Element;
};

function MutableText({
    words,
    time,
    renderItem,
    pause = false,
    classNameIfPrevious = "-translate-y-10",
    classNameIfCurrent = "translate-x-0",
    classNameIfFollowing = "",
    className,
}: MutableTextProps) {
    const [wordId, setWordId] = useState(0);

    useInterval(
        () => {
            setWordId(oldId => (oldId + 1) % words.length);
        },
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
        <div
            className={twMerge(
                "relative flex w-full justify-center",
                className,
            )}>
            {words.map((word, id) => (
                <div
                    className={twMerge(
                        "absolute flex items-center justify-center [transition:.75s_opacity_ease-in-out,.75s_transform_ease-in-out]",
                        id === wordId
                            ? ["opacity-100", classNameIfCurrent]
                            : "opacity-0",
                        isPrevious(id) && classNameIfPrevious,
                        isFollowing(id) && [
                            "[transition:.25s_opacity_ease-out]",
                            classNameIfFollowing,
                        ],
                    )}
                    key={word}>
                    {renderItem(word)}
                </div>
            ))}
            <div className='pointer-events-none invisible relative w-fit text-center'>
                .
            </div>
        </div>
    );
}

export default MutableText;
