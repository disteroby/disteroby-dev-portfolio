import * as THREE from "three";
import { ReactThreeFiber } from "@react-three/fiber";
import fragmentShader from "../../assets/shader/EarthFragmentShader.glsl?raw";
import vertexShader from "../../assets/shader/EarthVertexShader.glsl?raw";
import shaderMaterial from "../../utils/ShaderUtils.ts";

const EarthMaterialProps = {
    uTime: 0,
    earthMask: new THREE.Texture(),
    fresnelIntensity: 1.0,
    fresnelMin: 0.0,
    fresnelMax: 1.0,
    dotDensity: 1.0,
    dotFillSize: 1.0,
    color1: new THREE.Color(),
    color2: new THREE.Color(),
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
