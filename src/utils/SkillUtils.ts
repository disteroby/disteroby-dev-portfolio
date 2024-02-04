import { SkillType } from "../constants/Skills.ts";

export function filterIsContained(
    filters: SkillType[],
    chosenFilter: SkillType,
) {
    return filters.includes(chosenFilter);
}

export function filtersAreContained(
    filters: SkillType[],
    chosenFilters: SkillType[],
) {
    return chosenFilters.some(filter => filterIsContained(filters, filter));
}
