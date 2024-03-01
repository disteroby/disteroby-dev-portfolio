import { useTexture } from "@react-three/drei";
import { DeviceData } from "../constants/ProjectsData.ts";
import { texturePath } from "../utils/ResourcesUtils.ts";

export default function useProjectTexture(
    device: DeviceData,
    textureIndex?: number,
) {
    const screens = useTexture(
        device.textures.map(texture => texturePath(texture)),
    );
    return screens[textureIndex ?? device.mainTextureIndex];
}
