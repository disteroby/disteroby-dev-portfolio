varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vViewPosition;
varying vec4 vScreenPosition;

void main() {
    vUv = uv;
    vNormal = normalMatrix * normal;
    vPosition = position;

    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vViewPosition = cameraPosition - worldPosition.xyz;
    vScreenPosition = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    gl_Position = vScreenPosition;
}