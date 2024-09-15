/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import typography from "@tailwindcss/typography";

export default {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    ],
    theme: {
        fontFamily: {
            sans: ["Inter", ...defaultTheme.fontFamily.sans],
            display: ['"Mona Sans"', ...defaultTheme.fontFamily.sans],
        },
        fontSize: {
            xs: [
                "0.75rem",
                {
                    lineHeight: "1rem",
                },
            ],
            sm: [
                "0.875rem",
                {
                    lineHeight: "1.5rem",
                },
            ],
            base: [
                "1rem",
                {
                    lineHeight: "1.75rem",
                },
            ],
            lg: [
                "1.125rem",
                {
                    lineHeight: "2rem",
                },
            ],
            xl: [
                "1.25rem",
                {
                    lineHeight: "2rem",
                },
            ],
            "2xl": [
                "1.5rem",
                {
                    lineHeight: "2rem",
                },
            ],
            "3xl": [
                "2rem",
                {
                    lineHeight: "2.5rem",
                },
            ],
            "4xl": [
                "2.5rem",
                {
                    lineHeight: "3.5rem",
                },
            ],
            "5xl": [
                "3rem",
                {
                    lineHeight: "3.5rem",
                },
            ],
            "6xl": [
                "3.75rem",
                {
                    lineHeight: "1",
                },
            ],
            "7xl": [
                "4.5rem",
                {
                    lineHeight: "1.1",
                },
            ],
            "8xl": [
                "6rem",
                {
                    lineHeight: "1",
                },
            ],
            "9xl": [
                "8rem",
                {
                    lineHeight: "1",
                },
            ],
        },
        extend: {
            boxShadow: {
                thick: "0px 7px 32px rgb(0 0 0 / 35%);",
            },
            colors: {
                primary: "#101010",
                secondary: "#1a1a1a",
                tertiary: "#262626",
                white: "#ececec",
            },
            borderRadius: {
                "4xl": "2rem",
                "5xl": "3rem",
                "6xl": "5rem",
            },
            translate: {
                half: '50%',
                quart: '25%',
            },
            spacing: {
                '1440': '1440px',
            }
        },
    },
    plugins: [
        typography,
        // other plugins...
    ],
};