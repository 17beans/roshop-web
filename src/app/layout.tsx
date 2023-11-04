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
          {children}
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