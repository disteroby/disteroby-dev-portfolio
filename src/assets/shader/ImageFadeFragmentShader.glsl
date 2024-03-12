varying vec2 vUv;
uniform sampler2D tex;
uniform int textureCount;
uniform int currentIdx;
uniform int targetIdx;
uniform float alpha;

vec2 croppedUv(vec2 uv, int idx) {
    float factor = 1.0 / float(textureCount);
    float croppedUvX = uv.x * factor;

    return vec2(croppedUvX + factor * float(idx), uv.y);
}

void main() {
    vec2 uv = vUv;

    vec2 startUv = croppedUv(uv, currentIdx);
    vec2 endUv = croppedUv(uv, targetIdx);

    vec4 croppedTextStart = texture2D(tex, startUv);
    vec4 croppedTextEnd = texture2D(tex, endUv);

    // Alpha Blend Transition
    vec4 finalTexture = mix(croppedTextStart, croppedTextEnd, alpha);

    gl_FragColor = finalTexture;

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}