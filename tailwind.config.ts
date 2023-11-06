import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // import한 Web Font가 있을 경우 여기에 fontFamily로 정의해야 ClassName에서 자동 완성으로 사용 가능
      fontFamily:{
        'S-CoreDream':['S-CoreDream-3Light'],
      },
      // 사용자 정의 color
      colors: {
        'login-blue': '#4AA5FF',
      },
    },
  },
  plugins: [],
}


export default config
