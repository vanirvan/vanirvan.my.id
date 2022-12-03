/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		runtime: 'experimental-edge',
	},
	images: {
		domains: ['avatars.githubusercontent.com'],
		unoptimized: true,
	},
	reactStrictMode: false,
	swcMinify: true,
}

module.exports = nextConfig
