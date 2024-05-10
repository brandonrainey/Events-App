/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        
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
