'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Twitter, Linkedin, Mail } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-blue-100 relative overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-between"
          >
            <Link href="/" className="text-2xl font-bold text-gray-900 tracking-tight">
              TalkToMe
            </Link>
            <div className="flex items-center gap-6 sm:gap-8">
              <Link
                href="#"
                className="hidden sm:inline-block text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium text-sm"
              >
                Home
              </Link>
              <Link
                href="#how-it-works"
                className="hidden sm:inline-block text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium text-sm"
              >
                About
              </Link>
              <a
                href="#testflight"
                className="px-5 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Join Beta
              </a>
            </div>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 lg:pt-48 pb-24 sm:pb-32">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm sm:text-base font-medium text-purple-600 mb-4 tracking-wide uppercase"
          >
            AI-powered relationship assistant
          </motion.p>
          
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 tracking-tight leading-none"
          >
            TalkToMe
          </motion.h1>
          
          <motion.p
            variants={fadeInUp}
            className="text-2xl sm:text-3xl lg:text-4xl font-light mb-8 text-gray-700 tracking-tight leading-tight"
          >
            Express yourself. Connect deeper.
          </motion.p>
          
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Your AI companion for meaningful conversations. Navigate difficult moments with confidence and build stronger relationships through intelligent communication guidance.
          </motion.p>
          
          <motion.a
            variants={fadeInUp}
            href="#testflight"
            className="inline-block px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-base sm:text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Join TestFlight Beta
          </motion.a>
        </motion.div>
      </section>

      {/* Video/Photo Placeholder Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px 0px -100px 0px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-200 via-blue-100 to-blue-200 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-gray-600 font-medium">Video placeholder</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 text-gray-900 tracking-tight"
          >
            How It Works
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                step: '1',
                title: 'Start a conversation',
                description: 'Talk naturally and express your thoughts.',
              },
              {
                step: '2',
                title: 'Get real-time guidance',
                description: 'AI helps you phrase things with empathy and clarity.',
              },
              {
                step: '3',
                title: 'Connect deeper',
                description: 'Strengthen your relationships over time.',
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "100px 0px -100px 0px" }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-sm border border-white/50 hover:shadow-md transition-all duration-500 hover:-translate-y-1"
              >
                <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  )
}
