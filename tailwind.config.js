/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                hero: "url('/src/assets/backgrounds/hero-bg.jpg')",
                blurry: "url('/src/assets/backgrounds/bg-blurry.jpg')",
                "g-blurry": "url('/src/assets/backgrounds/bg-g-blurry.jpg')",
            },
            colors: {
                "dark-gray": "#0C0C0F",
            },
        },
        fontFamily: {
            sans: [
                "Josefin Sans",
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
