/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "hero-bg": "url('/src/assets/backgrounds/hero-bg.jpg')",
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
