/**
 * Represents the transformation properties of a mesh.
 */
export type MeshTransform = {
    position?: [number, number, number];
    rotation?: [number, number, number];
};

/**
 * Generate a MeshTransform for items based on polar coordinates.
 * @param theta Angle in radians.
 * @param radius Radius of the polar coordinate.
 * @returns The computed MeshTransform.
 */
export function itemsPolarTransform(
    theta: number,
    radius: number,
): MeshTransform {
    const xz = polarToCartesian(theta, radius);

    return {
        position: [xz[0], 0.5, xz[1]],
        rotation: [0, theta, 0],
    };
}

/**
 * Converts polar coordinates to Cartesian coordinates.
 * @param theta Angle in radians.
 * @param radius Radius of the polar coordinate (default is 1).
 * @returns The Cartesian coordinates as a tuple [x, y].
 */
export function polarToCartesian(
    theta: number,
    radius: number = 1,
): [number, number] {
    return [Math.sin(theta) * radius, Math.cos(theta) * radius];
}

/**
 * Converts latitude and longitude coordinates of a sphere to Cartesian coordinates.
 * @param latitude Latitude value in degrees.
 * @param longitude Longitude value in degrees.
 * @param radius Radius of the sphere (default is 1).
 * @param altitude Altitude from the surface of the sphere (default is 0).
 * @returns A MeshTransform containing the position and rotation in Cartesian coordinates.
 */
export function latLongToCartesian(
    latitude: number,
    longitude: number,
    radius: number = 1,
    altitude: number = 0,
): MeshTransform {
    // Convert latitude and longitude from degrees to radians
    const phi = ((90 - latitude) * Math.PI) / 180; // Convert latitude to angle from the north pole
    const lambda = (longitude * Math.PI) / 180;

    const finalRadius = radius + altitude;

    // Calculate Cartesian coordinates
    const x = finalRadius * Math.sin(phi) * Math.cos(lambda);
    const y = finalRadius * Math.cos(phi);
    const z = -finalRadius * Math.sin(phi) * Math.sin(lambda);

    return {
        position: [x, y, z],
    };
}
