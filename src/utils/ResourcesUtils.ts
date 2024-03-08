import { DeviceType } from "../constants/ProjectsData.ts";

/**
 * Directory path for 3D models.
 */
export const MODEL_DIR = "./models/";

/**
 * Directory path for textures.
 */
export const TEXTURE_DIR = "./textures/";

/**
 * Generates the path for the specified 3D model type.
 * @param modelType The type of device model.
 * @returns The path to the 3D model file.
 */
export function modelPath(modelType: DeviceType): string {
    return `${MODEL_DIR}${modelType === "laptop" ? "laptop_anim.glb" : "smartphoneV2.glb"}`;
}

/**
 * Generates the path for the specified texture name.
 * @param textureName The name of the texture.
 * @returns The path to the texture file.
 */
export function texturePath(textureName: string): string {
    return `${TEXTURE_DIR}${textureName}`;
}
