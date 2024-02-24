import { useMemo } from "react";
import * as THREE from "three";
import { Skill, skillsData } from "../constants/SkillsData.ts";
import { Lerp, LerpColor } from "../utils/LerpUtils.ts";
import { polarToCartesian } from "../utils/TransformUtils.ts";
import colors from "tailwindcss/colors";

// Parameters
const planetPerRing = 5;
const colorFrom = new THREE.Color(colors.purple["500"]);
const colorTo = new THREE.Color(colors.cyan["500"]);

type PlanetData = {
    coords: {
        x: number;
        y: number;
    };
    distance: number;
    color: string;
};

export type SkillPlanet = {
    skill: Skill;
    size: {
        mobile: PlanetData;
        fullSize: PlanetData;
    };
};

export default function useSkillPlanets(
    mobilePadding: number,
    fullSizePadding: number,
) {
    return useMemo(
        () =>
            skillsData.map((skill, i) => {
                // Normalized index --> (0,1]
                const normalizedIdx = (i + 1) / skillsData.length;

                // Stepped index --> (0,1], step = planetPerRing
                const stepNormalizedIdx =
                    Math.ceil(normalizedIdx * planetPerRing) / planetPerRing;

                // Custom distances
                const distanceNorm = Lerp(mobilePadding, 1, stepNormalizedIdx);

                // Padding from center
                const distancePadding = Lerp(
                    fullSizePadding,
                    1,
                    stepNormalizedIdx,
                );

                const offset =
                    Math.floor(i / planetPerRing) % 2 === 0
                        ? 0
                        : Math.PI / planetPerRing;
                const theta =
                    ((Math.PI * 2) / planetPerRing) * (i % planetPerRing) +
                    offset;

                const coordsList = [distanceNorm, distancePadding]
                    .map(
                        dist =>
                            polarToCartesian(theta, dist).map(
                                coord => coord * 100,
                            ) as [number, number],
                    )
                    .map(coords => ({
                        x: coords[0],
                        y: coords[1],
                    }));

                // Horizontal gradients color
                const colorsLerp = coordsList.map(coords => coords.x / 100) as [
                    number,
                    number,
                ];

                const mobile: PlanetData = {
                    coords: coordsList[0],
                    distance: distanceNorm,
                    color: LerpColor(
                        colorFrom,
                        colorTo,
                        colorsLerp[0],
                    ).getHexString(),
                };

                const fullSize: PlanetData = {
                    coords: coordsList[1],
                    distance: distancePadding,
                    color: LerpColor(
                        colorFrom,
                        colorTo,
                        colorsLerp[1],
                    ).getHexString(),
                };

                return {
                    skill,
                    size: {
                        mobile,
                        fullSize,
                    },
                } as SkillPlanet;
            }),
        [mobilePadding, fullSizePadding],
    );
}
