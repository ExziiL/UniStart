import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["source.unsplash.com"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "unsplash.com",
				port: "",
				pathname: "/photos/**",
			},
		],
	},
};

export default withNextIntl(nextConfig);
// module.exports = nextConfig;

// https://unsplash.com/photos/group-of-fresh-graduates-students-throwing-their-academic-hat-in-the-air-8CqDvPuo_kI
