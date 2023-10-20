/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['i.postimg.cc', 'metroio.vtexassets.com'],
    },
    env: {
        API_URL_DEV: process.env.API_URL_DEV,
        API_URL_PROD: process.env.API_URL_PROD,
        MODE: process.env.MODE,
    }
}

module.exports = nextConfig
