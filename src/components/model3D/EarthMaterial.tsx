import * as THREE from "three";
import { ReactThreeFiber } from "@react-three/fiber";
import fragmentShader from "../../assets/shader/EarthFragmentShader.glsl?raw";
import vertexShader from "../../assets/shader/EarthVertexShader.glsl?raw";
import shaderMaterial from "../../utils/ShaderUtils.ts";

const EarthMaterialProps = {
    earthMask: new THREE.Texture(),
};

export const EarthMaterial = shaderMaterial(
    EarthMaterialProps,
    vertexShader,
    fragmentShader,
);

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
        interface IntrinsicElements {
            earthMaterial: ReactThreeFiber.Node<
                typeof EarthMaterial & JSX.IntrinsicElements["shaderMaterial"],
                typeof EarthMaterial
            >;
        }
    }
}
