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
                    250: "#9E9E9E",
                    550: "#6A6A6A",
                    650: "#919191",
                    750: "#707070",
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
