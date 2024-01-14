import {useState} from "react";
import useInterval from "../../../hooks/useInterval/useInterval.ts";

type MutableTextProps = {
    words: string[],
    time: number
}

function MutableText({words, time}: MutableTextProps) {
    const [wordId, setWordId] = useState(0);

    useInterval(() => {
        setWordId(oldId => (oldId + 1) % words.length);
    }, time)

    return <>
        <span>{words[wordId]}</span>
    </>
}

export default MutableText;