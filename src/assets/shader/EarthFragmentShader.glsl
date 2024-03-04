varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vEye;
uniform sampler2D earthMask;

void main() {
    vec2 uv = vUv;

    vec4 mask = texture2D(earthMask, uv);

//    float fresnel = dot

    vec4 finalColor = vec4(1,0,0,1) * mask;

    float d = dot(vEye, vNormal) * 0.2;

    gl_FragColor = mix(vec4(d,d,d, 1) * finalColor, finalColor, 1.0 - mask.x);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}