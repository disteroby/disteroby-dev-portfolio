import { createContext, LegacyRef, useContext } from "react";

export const SectionRefsContext = createContext<
    Map<string, LegacyRef<HTMLElement>> | undefined
>(undefined);

export default function useSectionRef(id: string) {
    const refs = useContext(SectionRefsContext);

    if (refs === undefined)
        throw new Error(
            "useSectionRef must be used with a SectionRefsContext!",
        );

    const ref = refs.get(id);

    if (ref === undefined) throw new Error("Ref not found!");

    return ref;
}
