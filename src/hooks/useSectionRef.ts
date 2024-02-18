import { createContext, LegacyRef, useContext } from "react";
import { ProjectTag } from "../constants/ProjectsData.ts";

export type MainSectionTag =
    | "overview"
    | "projects"
    | "about-me"
    | "skills"
    | "contact";

export type SectionTag = MainSectionTag | ProjectTag;

export const SectionRefsContext = createContext<
    Map<SectionTag, LegacyRef<HTMLElement>> | undefined
>(undefined);

export function useSectionRefs() {
    const refs = useContext(SectionRefsContext);

    if (refs === undefined)
        throw new Error(
            "useSectionRef must be used with a SectionRefsContext!",
        );

    return refs;
}

export function useSectionRef(tag: SectionTag) {
    const refs = useSectionRefs();

    const ref = refs.get(tag);

    if (ref === undefined) throw new Error("Ref not found!");

    return ref;
}
