/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "https://beansstation.duckdns.org"]
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  // env: {
  //     NEXTAUTH_URL: 'https://roshopkr-web.vercel.app',
  //     NEXTAUTH_SECRET: '',

  //     GITHUB_CLIENT_ID: '860982f7ed2713490098',
  //     GITHUB_CLIENT_SECRET: '6d63619070689772ca92f395013d0d05188f2578',
  //     DISCORD_CLIENT_ID: '',
  //     DISCORD_CLIENT_SECRET: '',
  //     NAVER_CLIENT_ID: '',
  //     NAVER_CLIENT_SECRET: '',
  //     GOOGLE_CLIENT_ID: '',
  //     GOOGLE_CLIENT_SECRET: '',
  //     KAKAO_CLIENT_ID: '',
  //     KAKAO_CLIENT_SECRET: '',
  // },
}

module.exports = nextConfig
