import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TalkToMe — AI Emotional Assistant',
  description: 'TalkToMe helps you express yourself and connect better through AI-guided communication.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'TalkToMe — AI Emotional Assistant',
    description: 'TalkToMe helps you express yourself and connect better through AI-guided communication.',
    type: 'website',
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

