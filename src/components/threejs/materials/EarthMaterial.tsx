import * as THREE from "three";
import { ReactThreeFiber } from "@react-three/fiber";
import fragmentShader from "../../../assets/shader/EarthFragmentShader.glsl?raw";
import vertexShader from "../../../assets/shader/EarthVertexShader.glsl?raw";
import shaderMaterial from "../../../utils/ShaderUtils.ts";

const EarthMaterialProps = {
    uTime: 0,

    earthTextureMask: new THREE.Texture(),
    dotTextureMask: new THREE.Texture(),

    dotPatternDensity: 1.0,
    dotPatternFillSize: 1.0,
    dotPatternPulseVariation: 1.0,
    dotPatternPulseSpeed: 0.0,

    fresnelIntensity: 1.0,
    fresnelMin: 0.0,
    fresnelMax: 1.0,

    gradientColorFrom: new THREE.Color(),
    gradientColorTo: new THREE.Color(),
    globalColorIntensity: 1.0,
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
