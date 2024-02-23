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
                gray: {
                    75: "#E0E0E0",
                    550: "#6A6A6A",
                    650: "#919191",
                    850: "#3D3D3D",
                },
                purple: {
                    950: "#8556AA",
                },
            },
        },
    },
    plugins: [],
};
export default config;
