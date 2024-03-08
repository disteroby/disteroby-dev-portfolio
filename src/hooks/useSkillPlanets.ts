import { useMemo } from "react";
import * as THREE from "three";
import { Skill, SKILLS_DATA } from "../constants/SkillsData.ts";
import { Lerp, LerpColor } from "../utils/LerpUtils.ts";
import { polarToCartesian } from "../utils/TransformUtils.ts";
import colors from "tailwindcss/colors";

// Parameters
const planetPerRing = 5;
const colorFrom = new THREE.Color(colors.fuchsia["500"]);
const colorVia = new THREE.Color(colors.indigo["500"]);
const colorTo = new THREE.Color(colors.cyan["500"]);
const viaPercent = 0.5;

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
            SKILLS_DATA.sort(
                (skillA, skillB) => skillB.level - skillA.level,
            ).map((skill, i) => {
                // Normalized index --> (0,1]
                const normalizedIdx = (i + 1) / SKILLS_DATA.length;

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
                            polarToCartesian(theta, dist)
                                .map(coord => coord * 100)
                                .map(
                                    coord => Math.round(coord * 100) / 100,
                                ) as [number, number],
                    )
                    .map(coords => ({
                        x: coords[0],
                        y: coords[1],
                    }));

                // Horizontal gradients color
                const colorsHorizontalOffset = coordsList.map(
                    coords => coords.x / 100,
                ) as [number, number];

                /**
                 * Compute the right color from fuchsia-indigo-cyan gradient
                 * @param xOffset a value in [-1, 1]
                 */
                function computeColorGradient(xOffset: number) {
                    const alpha = xOffset * 0.5 + 0.5;
                    return alpha < viaPercent
                        ? LerpColor(colorFrom, colorVia, alpha / viaPercent)
                        : LerpColor(
                              colorVia,
                              colorTo,
                              (alpha - viaPercent) / (1 - viaPercent),
                          );
                }

                const mobile: PlanetData = {
                    coords: coordsList[0],
                    distance: distanceNorm,
                    color: computeColorGradient(
                        colorsHorizontalOffset[0],
                    ).getHexString(),
                };

                const fullSize: PlanetData = {
                    coords: coordsList[1],
                    distance: distancePadding,
                    color: computeColorGradient(
                        colorsHorizontalOffset[1],
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
