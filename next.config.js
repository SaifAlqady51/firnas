/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
    env:{
        USERS_URL: process.env.USERS_URL
    }
};

module.exports = nextConfig;
