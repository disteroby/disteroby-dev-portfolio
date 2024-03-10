precision highp float;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vViewPosition;
varying vec4 vScreenPosition;

uniform float uTime;
uniform sampler2D earthMask;
uniform sampler2D earthMask2;
uniform float fresnelIntensity;
uniform float fresnelMin;
uniform float fresnelMax;
uniform vec3 color1;
uniform vec3 color2;

uniform float intensity;

uniform float dotDensity;
uniform float dotFillSize;

float map(float value, float min1, float max1, float min2, float max2) {
    return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

float clamp01(float x) {
    return clamp(x, 0.0, 1.0);
}

highp float getMask(vec2 uv) {

    float pulseDotSize = sin(uTime * 3.0) * 0.04 + dotFillSize;

    vec4 tex = texture2D(earthMask, uv);
    vec4 tex2 = texture2D(earthMask2, fract(uv * 4.0));

    vec2 texSize = vec2(textureSize(earthMask, 0));

    vec2 dotUv = fract(uv * normalize(texSize) * dotDensity) - vec2(0.5);
    float dotPattern = 1.0 - step(0.5, length(dotUv) / pulseDotSize);
    float squarePattern = 1.0 - step(0.5, dotUv.x / pulseDotSize);
    float squarePattern2 = 1.0 - step(0.5, dotUv.y / pulseDotSize);

    float viewDotNormal = clamp01(dot(normalize(vNormal), normalize(vViewPosition)));
    float fresnel = pow(1.0 - viewDotNormal, fresnelIntensity);

    float mask = tex.x * dotPattern * (1.0 - pow(fresnel, 0.23));
    float mask2 = step( 0.5, 1.0 - tex2.x) * step( 0.5, tex.x) * (1.0 - pow(fresnel, 0.23));

//    return mix(mask, 1.0, map(fresnel,0.0,1.0,fresnelMin, fresnelMax));

    return mix(mask2, 1.0, map(fresnel,0.0,1.0,fresnelMin, fresnelMax));
}

vec3 getGradientColor(float mask) {
    float range = normalize(vNormal).x * 0.5 + 0.5;
    return mix(color1, color2, range) * mask;
}

void main() {
    highp float finalMask = getMask(vUv);
    vec3 gradient = getGradientColor(finalMask);


    gl_FragColor = vec4(gradient * intensity, 1.0);
//    gl_FragColor = vec4(finalMask, finalMask, finalMask, 1.0);


//    #include <tonemapping_fragment>
//    #include <colorspace_fragment>
}