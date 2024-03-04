varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vEye;

void main() {
    vUv = uv;
    mat4 LM = modelMatrix;
    LM[2][3] = 0.0;
    LM[3][0] = 0.0;
    LM[3][1] = 0.0;
    LM[3][2] = 0.0;

    vec4 GN = LM * vec4(normal, 1.0);
    vNormal = normalize(GN.xyz);
    vEye = normalize(GN.xyz-cameraPosition);

    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}