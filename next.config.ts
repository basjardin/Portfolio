import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
    output: 'export',
    basePath: isProd ? '/Portfolio' : '',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    env: {
        NEXT_PUBLIC_BASE_PATH: '/Portfolio',
    },
};

export default nextConfig;

