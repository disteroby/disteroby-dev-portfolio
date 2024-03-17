varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vNormalOffset;
varying vec3 vPosition;
varying vec3 vViewPosition;
varying vec4 vScreenPosition;

void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vNormalOffset = (normalMatrix * normal + normalize(vec3(-1.1, 1.1, .5))) * 0.5;
    vPosition = position;

    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vViewPosition = cameraPosition - worldPosition.xyz;
    vScreenPosition = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    gl_Position = vScreenPosition;
}