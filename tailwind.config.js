/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                hero: "url('/src/assets/backgrounds/hero-bg.jpg')",
                "hero-og": "url('/src/assets/backgrounds/hero-bg-og.jpg')",
            },
        },
        fontFamily: {
            sans: [
                "Kulim Park",
                "system-ui",
                "-apple-system",
                "BlinkMacSystemFont",
                "Segoe UI",
                "Roboto",
                "sans-serif",
            ],
        },
    },
    plugins: [],
};
