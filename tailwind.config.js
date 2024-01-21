/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                hero: "url('/src/assets/backgrounds/tmp.jpg')",
            },
            colors: {
                "dark-gray": "#0C0C0F",
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
