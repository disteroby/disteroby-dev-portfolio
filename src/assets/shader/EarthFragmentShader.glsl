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

uniform float dotDensity;
uniform float dotFillSize;

float map(float value, float min1, float max1, float min2, float max2) {
    return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

float clamp01(float x) {
    return clamp(x, 0.0, 1.0);
}

float getMask(vec2 uv) {
    vec2 dotUv = fract((uv) * dotDensity) - vec2(0.5);
    float dotPattern = 1.0 - step(0.5, length(dotUv) / dotFillSize);

    float mask = texture2D(earthMask, uv).x * dotPattern;

    float viewDotNormal = clamp01(dot(normalize(vNormal), normalize(vViewPosition)));
    float fresnel = pow(1.0 - viewDotNormal, fresnelIntensity);

    return mix(mask, 1.0, map(fresnel,0.0,1.0,fresnelMin, fresnelMax));
}

vec3 getGradientColor(float mask) {
    float range = normalize(vNormal).x * 0.5 + 0.5;
    return mix(color1, color2, range) * mask;
}

void main() {
    float finalMask = getMask(vUv);
    vec3 gradient = getGradientColor(finalMask);


    gl_FragColor = vec4(gradient, 0.5);


//    #include <tonemapping_fragment>
//    #include <colorspace_fragment>
}