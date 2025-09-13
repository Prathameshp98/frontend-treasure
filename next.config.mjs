/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imgtr.ee',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
