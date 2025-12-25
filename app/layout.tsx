import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TalkToMe',
  applicationName: 'TalkToMe',
  description: 'Express yourself. Connect deeper. Your AI companion — a safe space to vent, reflect, and have meaningful conversations. Navigate emotions, handle difficult moments, and build stronger relationships with TalkToMe.',
  keywords: ['AI assistant', 'relationship communication', 'emotional intelligence', 'communication coach', 'relationship advice', 'AI chat', 'mental health', 'wellness'],
  authors: [{ name: 'TalkToMe Team' }],
  creator: 'TalkToMe',
  publisher: 'TalkToMe',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'TalkToMe',
    description: 'Express yourself. Connect deeper. Your AI companion - a safe space to vent, reflect, and have meaningful conversations.',
    type: 'website',
    siteName: 'TalkToMe',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TalkToMe',
    description: 'Express yourself. Connect deeper. Your AI companion for better communication and stronger relationships.',
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

