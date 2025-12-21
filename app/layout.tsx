import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TalkToMe - AI-Powered Relationship Assistant',
  description: 'Express yourself. Connect deeper. Your AI companion — a safe space to vent, reflect, and have meaningful conversations.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'TalkToMe - AI-Powered Relationship Assistant',
    description: 'Express yourself. Connect deeper. Your AI companion - a safe space to vent, reflect, and have meaningful conversations.',
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

