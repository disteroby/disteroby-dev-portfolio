import { OrbitControls, useTexture } from "@react-three/drei";
import { texturePath } from "../../utils/ResourcesUtils.ts";

export default function EarthModel() {
    const textureMask = useTexture(texturePath("texture_earth_mask.jpg"));

    return (
        <mesh>
            <OrbitControls
                autoRotate={true}
                autoRotateSpeed={0.5}
                enableZoom={false}
            />
            <sphereGeometry args={[1, 32, 32]} />
            <earthMaterial earthMask={textureMask} />
        </mesh>
    );
}

useTexture.preload(texturePath("texture_earth_mask.jpg"));
