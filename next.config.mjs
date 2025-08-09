const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? '/senda-landing' : '',
  assetPrefix: isProd ? '/senda-landing/' : '',
  trailingSlash: true,
}

export default nextConfig
