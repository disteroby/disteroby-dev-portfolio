import { SkillType } from "../constants/SkillsData.ts";

export function hasFilter(
    skills: SkillType | SkillType[],
    chosenFilters: SkillType[],
) {
    return chosenFilters.some(
        filter => skills === filter || (skills as SkillType[]).includes(filter),
    );
}

export function hasFilterOrNoFilter(
    skills: SkillType | SkillType[],
    chosenFilters: SkillType[],
) {
    return Array.isArray(chosenFilters) && chosenFilters.length === 0
        ? true
        : hasFilter(skills, chosenFilters);
}
