varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vViewPosition;
varying vec4 vScreenPosition;

uniform sampler2D earthMask;
uniform float fresnelIntensity;
uniform float fresnelMin;
uniform float fresnelMax;
uniform vec3 color1;
uniform vec3 color2;

float map(float value, float min1, float max1, float min2, float max2) {
    return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

void main() {
    vec2 uv = vUv;

    float mask = texture2D(earthMask, uv).x;

    float viewDotNormal = dot(normalize(vNormal), normalize(vViewPosition));
    float fresnel = pow(1.0 - viewDotNormal, fresnelIntensity);

    float finalMask = mix(mask, 1.0, map(fresnel,0.0,1.0,fresnelMin, fresnelMax));

    float range = normalize(vNormal).x * 0.5 + 0.5;

    vec3 gradient = mix(color1, color2, range) * finalMask;


    gl_FragColor = vec4(gradient,0.50);


//    #include <tonemapping_fragment>
//    #include <colorspace_fragment>
}