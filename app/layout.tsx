import type React from 'react'
import type { Metadata, Viewport } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

import { PWAProvider } from '@/components/PWAProvider'
import { ThemeProvider } from '@/components/ThemeProvider'
import { iosSplashScreens } from '@/lib/ios-splash-screens'
import Header from '@/components/Header'
import { Footer } from '@/components/Footer'

const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Next.js PWA',
  description: 'Next.js PWA examples',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Next.js PWA',
    startupImage: iosSplashScreens
  },
  other: {
    'mobile-web-app-capable': 'yes'
  }
}

export const viewport: Viewport = {
  maximumScale: 1,
  userScalable: false
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning>
      <head></head>
      <body
        className={roboto.className}
        suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <PWAProvider>
            <Header />
            <main className="container mx-auto flex-1 px-4 py-8">{children}</main>
            <Footer />
          </PWAProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
