import { createContext, LegacyRef, useContext } from "react";

export const SectionRefsContext = createContext<
    Map<string, LegacyRef<HTMLElement>> | undefined
>(undefined);

export function useSectionRefs() {
    const refs = useContext(SectionRefsContext);

    if (refs === undefined)
        throw new Error(
            "useSectionRef must be used with a SectionRefsContext!",
        );

    return refs;
}

export function useSectionRef(id: string) {
    const refs = useSectionRefs();

    const ref = refs.get(id);

    if (ref === undefined) throw new Error("Ref not found!");

    return ref;
}
