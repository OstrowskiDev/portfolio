/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/, // match only .md import files
      type: 'asset/source', // import as raw string
    })
    return config
  },
}

export default nextConfig
