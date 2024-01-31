/**
 * Converts an HEX color to the relative HSL representation
 *
 * @param hex HEX color
 * @return A triplet vector representing HSL values
 */
export function hexToHSL(hex: string): [number, number, number] {
    hex = hex.replace("#", "");

    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    const l = (max + min) / 2;
    let s = 0;
    let h = 0;

    if (max !== min) {
        s = l > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min);

        switch (max) {
            case r:
                h = (g - b) / (max - min) + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / (max - min) + 2;
                break;
            case b:
                h = (r - g) / (max - min) + 4;
                break;
        }
        h *= 60;
    }

    return [Math.round(h), Math.round(s * 100), Math.round(l * 100)];
}
