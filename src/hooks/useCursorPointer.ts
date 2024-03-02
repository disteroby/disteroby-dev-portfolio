import { useEffect, useState } from "react";

type CursorType = "pointer" | "auto" | string;

export default function useCursorPointer(
    hoverPointer: CursorType = "pointer",
    defaultPointer: CursorType = "auto",
) {
    const [cursor, setCursor] = useState<boolean | CursorType>(false);

    useEffect(() => {
        if (typeof cursor === "boolean") {
            document.body.style.cursor = cursor ? hoverPointer : defaultPointer;
        } else {
            document.body.style.cursor = cursor;
        }
    }, [cursor, hoverPointer, defaultPointer]);

    return (newCursor: boolean | CursorType) => {
        setCursor(newCursor);
    };
}
