'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
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
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [termsOpen, setTermsOpen] = useState(false)

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
              <button
                onClick={() => setPrivacyOpen(true)}
                className="hidden sm:inline-block text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium text-sm"
              >
                Privacy
              </button>
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

      {/* Video/Demo Placeholder Section */}
      <section className="relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px 0px -100px 0px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full"
        >
          {/* Video placeholder - replace this div with your video element when ready */}
          <div className="w-full h-auto bg-gradient-to-r from-purple-200/50 via-blue-200/50 to-purple-200/50 flex items-center justify-center py-16">
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-gray-600 text-lg font-medium">Demo Video Coming Soon</p>
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

      {/* Bottom CTA / Footer */}
      <footer className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <a
            href="#testflight"
            className="inline-block px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-base sm:text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 mb-12"
          >
            Join TestFlight Beta
          </a>
          
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="#"
              className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-sm text-gray-500">
            © 2025 TalkToMe. All rights reserved.
          </p>
        </motion.div>
      </footer>

      {/* Privacy Policy Modal */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Privacy Policy</DialogTitle>
            <DialogDescription className="text-base mt-2">
              Last updated: January 2025
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-4 text-gray-700">
            <p>
              At TalkToMe, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.
            </p>
            <h3 className="font-semibold text-lg mt-6">Information We Collect</h3>
            <p>
              We collect information that you provide directly to us, including conversation data, preferences, and usage patterns to improve our AI assistant.
            </p>
            <h3 className="font-semibold text-lg mt-6">How We Use Your Information</h3>
            <p>
              Your information is used to provide personalized communication guidance, improve our services, and enhance your experience with TalkToMe.
            </p>
            <h3 className="font-semibold text-lg mt-6">Data Security</h3>
            <p>
              We implement industry-standard security measures to protect your data from unauthorized access, alteration, disclosure, or destruction.
            </p>
            <h3 className="font-semibold text-lg mt-6">Contact Us</h3>
            <p>
              If you have questions about this Privacy Policy, please contact us at privacy@talktome.ai
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Terms of Use Modal */}
      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Terms of Use</DialogTitle>
            <DialogDescription className="text-base mt-2">
              Last updated: January 2025
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-4 text-gray-700">
            <p>
              Welcome to TalkToMe. By accessing or using our service, you agree to be bound by these Terms of Use.
            </p>
            <h3 className="font-semibold text-lg mt-6">Acceptance of Terms</h3>
            <p>
              By using TalkToMe, you acknowledge that you have read, understood, and agree to be bound by these terms and all applicable laws and regulations.
            </p>
            <h3 className="font-semibold text-lg mt-6">Use of Service</h3>
            <p>
              You agree to use TalkToMe only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the service.
            </p>
            <h3 className="font-semibold text-lg mt-6">Intellectual Property</h3>
            <p>
              All content, features, and functionality of TalkToMe are owned by us and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
            <h3 className="font-semibold text-lg mt-6">Limitation of Liability</h3>
            <p>
              TalkToMe is provided "as is" without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages arising from your use of the service.
            </p>
            <h3 className="font-semibold text-lg mt-6">Contact Us</h3>
            <p>
              If you have questions about these Terms of Use, please contact us at legal@talktome.ai
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  )
}
