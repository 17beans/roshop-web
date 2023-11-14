/**
 * 최상단 레이아웃
 * RoShop로고, 판매, 주문제작    문의, 로블록스, 디스코드, [로그인하기]
 */

// 'use client';

import type { Metadata } from 'next'
import './globals.css'

import theme from './theme';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

// Components
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

// fonts
import { Gothic_A1 } from "next/font/google";
const gothicA1 = Gothic_A1({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
});
export const cls = (...classnames: string[]) => {
  return classnames.join(' ');
}



export const metadata: Metadata = {
  title: 'RoShop',
  description: 'RoShop Web',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html /*lang="en"*/>
      <head />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <body>
          <TopBar />
          {children}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//        <body className={inter.className}>{children}</body>
//     </html>
//   )
// }