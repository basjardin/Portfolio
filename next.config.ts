import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    basePath: '/Portfolio',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    env: {
        NEXT_PUBLIC_BASE_PATH: '/Portfolio',
    },
};

export default nextConfig;

