import type { NextConfig } from "next";
import type { Configuration } from "webpack";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["antd"],
  experimental: {
    optimizePackageImports: ["antd"],
  },
  images: {
    domains: ['localhost'],
    disableStaticImages: false,
  },
  webpack(config: Configuration) {
    config.module?.rules?.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: "asset/resource",
    });

    return config; // ⚠️ đừng quên return config
  },

  // ✅ Thêm rewrites để định nghĩa route custom
  async rewrites() {
    return [
      // tờ trình
      {
        source: '/totrinh',     // 🛣 URL mong muốn
        destination: '/Proposals', // 📁 folder thực tế
      },
      // văn bản đến
      {
        source: '/vb-den',
        destination: '/IncomingDocuments',
      },
      // Thêm các route khác nếu cần
    ];
  },
};

export default nextConfig;
