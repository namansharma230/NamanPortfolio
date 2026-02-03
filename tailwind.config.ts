import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0A0A0B",
                foreground: "#FFFFFF",
                primary: {
                    DEFAULT: "#E91E8C",
                    dark: "#C01870",
                    light: "#FF3DA1",
                },
                secondary: {
                    DEFAULT: "#6366F1",
                    dark: "#4F46E5",
                    light: "#818CF8",
                },
                accent: {
                    blue: "#3B82F6",
                    purple: "#A855F7",
                },
                dark: {
                    100: "#1A1A1B",
                    200: "#141415",
                    300: "#0F0F10",
                },
            },
            fontFamily: {
                syncopate: ["var(--font-syncopate)", "sans-serif"],
                poppins: ["var(--font-poppins)", "sans-serif"],
            },
            animation: {
                "fade-in": "fadeIn 0.6s ease-out",
                "slide-up": "slideUp 0.6s ease-out",
                "slide-down": "slideDown 0.6s ease-out",
                "scale-in": "scaleIn 0.3s ease-out",
                glow: "glow 2s ease-in-out infinite alternate",
                float: "float 3s ease-in-out infinite",
                gradient: "gradient 8s linear infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { transform: "translateY(30px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                slideDown: {
                    "0%": { transform: "translateY(-30px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                scaleIn: {
                    "0%": { transform: "scale(0.9)", opacity: "0" },
                    "100%": { transform: "scale(1)", opacity: "1" },
                },
                glow: {
                    "0%": { boxShadow: "0 0 20px rgba(233, 30, 140, 0.5)" },
                    "100%": { boxShadow: "0 0 40px rgba(233, 30, 140, 0.8)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                gradient: {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
            },
            backgroundImage: {
                "radial-gradient": "radial-gradient(circle at center, var(--tw-gradient-stops))",
                "glow-gradient": "radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.15), transparent 50%)",
            },
        },
    },
    plugins: [],
};

export default config;
