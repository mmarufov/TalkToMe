import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TalkToMe',
  description: 'TalkToMe',
  keywords: ['TalkToMe', 'communication', 'AI assistant'],
  authors: [{ name: 'TalkToMe Team' }],
  creator: 'TalkToMe',
  publisher: 'TalkToMe',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'TalkToMe',
    description: 'TalkToMe',
    type: 'website',
    siteName: 'TalkToMe',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TalkToMe',
    description: 'TalkToMe',
    creator: '@aitalktome',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

