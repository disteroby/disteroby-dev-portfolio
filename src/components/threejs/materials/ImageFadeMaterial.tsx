import * as THREE from "three";
import { ReactThreeFiber } from "@react-three/fiber";
import fragmentShader from "../../../assets/shader/ImageFadeFragmentShader.glsl?raw";
import vertexShader from "../../../assets/shader/ImageFadeVertexShader.glsl?raw";
import shaderMaterial from "../../../utils/ShaderUtils.ts";

const ImageFadeMaterialProps = {
    tex: new THREE.Texture(),
    textureCount: 1,
    currentIdx: 0,
    targetIdx: 0,
    alpha: 0,
};

export const ImageFadeMaterial = shaderMaterial(
    ImageFadeMaterialProps,
    vertexShader,
    fragmentShader,
);

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
        interface IntrinsicElements {
            imageFadeMaterial: ReactThreeFiber.Node<
                typeof ImageFadeMaterial &
                    JSX.IntrinsicElements["shaderMaterial"],
                typeof ImageFadeMaterial
            >;
        }
    }
}
