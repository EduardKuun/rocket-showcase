const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: true,
	runtimeCaching,
	disable: process.env.NODE_ENV === 'development',
});

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
	eslint: {
		ignoreDuringBuilds: true,
	},
	reactStrictMode: true,
	swcMinify: true,
	i18n: {
		locales: ['en', 'af'],
		defaultLocale: 'en',
	},
	webpack: (config) => {
		config.experiments = { ...config.experiments, topLevelAwait: true };
		return config;
	},
	async redirects() {
		return [];
	},
});

module.exports = nextConfig;
