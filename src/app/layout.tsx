/**
 * 최상단 레이아웃
 * RoShop로고, 판매, 주문제작    로블록스, 디스코드, [로그인하기]
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
import ChannelTalk from '@/components/ChannelTalk';
import { NextAuthProvider } from './provider';



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
        <body className='text-sm'>
          <NextAuthProvider>
            <div className='flex justify-center'>
              <TopBar />
            </div>
            <div className='flex justify-center'>
              <div className={`w-full sm:w-full md:w-8/12`}>
                {children}
              </div>
            </div>
                <Footer />
            <ChannelTalk />
          </NextAuthProvider>
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