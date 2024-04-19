/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['https://events-app-lemon-two.vercel.app/', 'utfs.io'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'events-app-lemon-two.vercel.app',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'utfs.io',
                port: '',
                pathname: '/**',
            }
        ]
    },
};

export default nextConfig;
