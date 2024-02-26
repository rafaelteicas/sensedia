/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        config.resolve = {
            ...config.resolve,
            fallback: {
                fs: false,
                net: false,
                tls: false,
                perf_hooks: false,
            },
        };
        return config;
    },
    env: {
        API_URL: process.env.API_URL,
    },
};

export default nextConfig;
