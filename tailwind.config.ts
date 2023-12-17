import { transform } from "next/dist/build/swc";
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
                light: "#e8f1f2",
                dark: "#13293d",
                nav: "#006494",
                loginCard: "#1b98e0",
                extra: "#247ba0",
            },
            height: {
                "100": "25rem",
                "104": "26rem",
                "108": "27rem",
                "112": "28rem",
                "116": "29rem",
                "120": "30rem",
                "124": "31rem",
                "128": "32rem",
                "132": "33rem"
            },
            objectPosition:{},
            
            screens: {
                xsm: "385px",
            },
            keyframes: {
                "slide-in": {
                    "0%": { transform: "translateX(120%)" },
                    "100%": { transform: "translateX(0%)" },
                },
                "slide-out": {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(0%)" },
                },
            },
            animation: {
                "slide-in": "slide-in 1s  ease-in-out",
                "slide-out": "slide-out .5s  ease-in",
            },
            inset:{
                "9": "2.25rem",
                "55/100": "55%",
                "18": "4.5rem",
                "42": "10.5rem",
                "55": "13.75rem",
                "66": "16.5rem"
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
