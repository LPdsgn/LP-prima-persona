/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import typography from "@tailwindcss/typography";

export default {
    darkMode: ['class'],
    //purge: false,
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        './src/**/*.css',
    ],
    theme: {
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
                thick: '0px 7px 32px rgb(0 0 0 / 35%);'
            },
            colors: {
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                // I tuoi colori personalizzati
                custom: {
                    primary: "#101010",
                    secondary: "#1a1a1a",
                    tertiary: "#262626",
                    white: "#ececec",
                },
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                }
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '3rem',
                '6xl': '5rem',
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            borderWidth: {
                '1': '1px'
            },
            translate: {
                half: '50%',
                quart: '25%'
            },
            spacing: {
                '1440': '1440px'
            }
        }
    },
    safelist: [
        {
            pattern: /^gap-/,
        },
    ],
    plugins: [
        typography,
        require("tailwindcss-animate")
    ],
};