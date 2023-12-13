/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
    env:{
        USERS_URL: process.env.USERS_URL
    },
    webpack: (config) => {
            config.externals = [...config.externals, 'bcrypt'];
            return config;
        },
};

module.exports = nextConfig;
