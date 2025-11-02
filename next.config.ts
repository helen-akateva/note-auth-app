// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       { 
//         protocol: "https", 
//         hostname: "ac.goit.global" 
//       },
//       { 
//         protocol: "https", 
//         hostname: "example.com" 
//       },
//     ],
//   },
// };

// export default nextConfig;


import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ac.goit.global',
      },
    ],
    // Додайте це для уникнення попереджень:
    unoptimized: false,
  },
};

export default nextConfig;