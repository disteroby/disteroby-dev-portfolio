import { SkillType } from "../constants/SkillsData.ts";

/**
 * Checks if a skill or an array of skills matches any of the chosen filters.
 * @param skills The skill or array of skills to check.
 * @param chosenFilters The list of chosen filters.
 * @returns True if any of the chosen filters match the skills, otherwise false.
 */
export function hasFilter(
    skills: SkillType | SkillType[],
    chosenFilters: SkillType[],
): boolean {
    return chosenFilters.some(
        filter => skills === filter || (skills as SkillType[]).includes(filter),
    );
}

/**
 * Checks if a skill or an array of skills matches any of the chosen filters or if there are no filters chosen.
 * @param skills The skill or array of skills to check.
 * @param chosenFilters The list of chosen filters.
 * @returns True if there are no chosen filters or if any of the chosen filters match the skills, otherwise false.
 */
export function hasFilterOrNoFilter(
    skills: SkillType | SkillType[],
    chosenFilters: SkillType[],
): boolean {
    return chosenFilters.length !== 0 ? hasFilter(skills, chosenFilters) : true;
}
