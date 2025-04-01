import '@/styles/globals.scss'
import { StrictMode } from 'react'
import HolyLoader from 'holy-loader'
import { type Metadata, type Viewport } from 'next'
import Providers from './providers'
import Header from '@/components/header'
import ScrollTopButton from '@/components/scroll-top-button'
import TailwindIndicator from '@/components/tailwind-indicator'
import { env } from '@/lib/config'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#030712' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  colorScheme: 'dark light',
  width: 'device-width',
  initialScale: 1.0,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_HOST),
  title: '二十七宿鑑定',
  applicationName: '二十七宿鑑定',
  description:
    '古代インドの叡智に基づいた二十七宿鑑定。あなたの誕生日から宿星を算出し、性格や運勢を鑑定します。',
  openGraph: {
    title: '二十七宿鑑定 - あなたの宿星を見つけましょう',
    siteName: '二十七宿鑑定',
    description:
      '古代インドの叡智に基づいた二十七宿鑑定。あなたの誕生日から宿星を算出し、性格や運勢を鑑定します。',
    type: 'website',
  },
  icons: [
    {
      rel: 'icon',
      url: '/favicon-16x16.png',
      sizes: '16x16',
      type: 'image/png',
    },
    {
      rel: 'icon',
      url: '/favicon-32x32.png',
      sizes: '32x32',
      type: 'image/png',
    },
    {
      url: '/android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      url: '/android-chrome-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StrictMode>
      <html lang="jp" suppressHydrationWarning>
        <body>
          <HolyLoader color="#9333ea" height="1px" easing="linear" />
          <Providers>
            <main className="flex flex-col w-full min-h-screen overflow-y-auto">
              <Header />
              <div className="w-full flex flex-col min-h-[calc(100vh-80px)] mt-20">
                {children}
              </div>
              <ScrollTopButton />
            </main>
            {env.NEXT_PUBLIC_APP_ENV === 'staging' && <TailwindIndicator />}
          </Providers>
        </body>
      </html>
    </StrictMode>
  )
}
