import * as THREE from "three";

/**
 * Represents the type of uniform values allowed in the shader material.
 */
type UniformValue =
    | THREE.CubeTexture
    | THREE.Texture
    | Int32Array
    | Float32Array
    | THREE.Matrix4
    | THREE.Matrix3
    | THREE.Quaternion
    | THREE.Vector4
    | THREE.Vector3
    | THREE.Vector2
    | THREE.Color
    | number
    | boolean
    | Array<unknown>
    | null;

/**
 * Represents the type of uniforms object.
 */
type Uniforms = {
    [name: string]: UniformValue;
};

/**
 * Creates a custom shader material.
 * @param uniforms The uniform values for the shader material.
 * @param vertexShader The vertex shader code.
 * @param fragmentShader The fragment shader code.
 * @param onInit An optional callback function called after initializing the material.
 * @returns The custom shader material.
 */
export default function shaderMaterial<T extends Uniforms>(
    uniforms: T,
    vertexShader: string,
    fragmentShader: string,
    onInit?: (material?: THREE.ShaderMaterial) => void,
) {
    const material = class extends THREE.ShaderMaterial {
        public key: string = "";
        constructor(parameters = {}) {
            const entries = Object.entries(uniforms);
            // Create uniforms and shaders
            super({
                uniforms: entries.reduce((acc, [name, value]) => {
                    const uniform = THREE.UniformsUtils.clone({
                        [name]: { value },
                    });
                    return {
                        ...acc,
                        ...uniform,
                    };
                }, {}),
                vertexShader,
                fragmentShader,
            });
            // Create getter/setters
            entries.forEach(([name]) =>
                Object.defineProperty(this, name, {
                    get: () => this.uniforms[name].value,
                    set: v => (this.uniforms[name].value = v),
                }),
            );

            // Assign parameters, this might include uniforms
            Object.assign(this, parameters);
            // Call onInit
            if (onInit) onInit(this);
        }
    } as unknown as typeof THREE.ShaderMaterial & { key: string } & T;
    material.key = THREE.MathUtils.generateUUID();
    return material;
}
