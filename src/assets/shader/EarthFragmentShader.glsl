precision highp float;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vNormalOffset;
varying vec3 vPosition;
varying vec3 vViewPosition;
varying vec4 vScreenPosition;

uniform float uTime;

uniform sampler2D earthTextureMask;
uniform sampler2D dotTextureMask;

uniform float dotPatternDensity;
uniform float dotPatternFillSize;
uniform float dotPatternPulseVariation;
uniform float dotPatternPulseSpeed;

uniform float fresnelIntensity;
uniform float fresnelMin;
uniform float fresnelMax;

uniform vec3 gradientColorFrom;
uniform vec3 gradientColorTo;
uniform float globalColorIntensity;

float map(float value, float min1, float max1, float min2, float max2) {
    return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

float clamp01(float x) {
    return clamp(x, 0.0, 1.0);
}

highp float getMask(vec2 uv) {
    float pulseDotSize = sin(uTime * dotPatternPulseSpeed) * dotPatternPulseVariation + dotPatternFillSize;

    vec4 texEarth = texture2D(earthTextureMask, uv);

    vec2 texSize = vec2(textureSize(earthTextureMask, 0));

    vec4 texDot = texture2D(dotTextureMask, fract(uv * texSize * dotPatternDensity));

    float viewDotNormal = clamp01(dot(vNormal, normalize(vViewPosition)));
    float fresnel = 1.0 - pow(1.0 - viewDotNormal, fresnelIntensity);
    float fresnelRemapped = map(clamp(0.0, 0.5, fresnel), 0.0, 0.5, fresnelMin, fresnelMax);

    float finalMask = step(pulseDotSize, 1.0 - texDot.x) * step(0.5, texEarth.x) * fresnelRemapped;

    float viewDotNormal2 = clamp01(dot(normalize(vNormalOffset), normalize(vViewPosition)));
    float fresnel2 = pow(1.0 - viewDotNormal2, 4.0);
    return  clamp01(mix(finalMask, 1.2, map(fresnel2, 0.0, 1.0, 0.075, 1.1)));
}

vec3 getGradientColor(float mask) {
    float range = vNormal.x * 0.5 + 0.5;
    return mix(gradientColorFrom, gradientColorTo, range) * mask;
}

void main() {
    highp float finalMask = getMask(vUv);
    vec3 gradient = getGradientColor(finalMask);

    gl_FragColor = vec4(gradient * globalColorIntensity, 1.0);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}