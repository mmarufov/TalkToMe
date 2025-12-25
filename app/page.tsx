'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { 
  Twitter, 
  Linkedin, 
  Mail, 
  MessageCircle, 
  Shield, 
  Sparkles, 
  Heart,
  CheckCircle2,
  Star,
  ChevronDown,
  ChevronRight
} from 'lucide-react'

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6 }
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [showInfinity, setShowInfinity] = useState(false)
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [termsOpen, setTermsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      setShowInfinity(window.scrollY > 280)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const featureMotionProps = (index: number) =>
    isMobile
      ? { initial: false }
      : {
          initial: { opacity: 0, y: 20, scale: 0.98 },
          whileInView: { opacity: 1, y: 0, scale: 1 },
          viewport: { once: true, amount: 0.25 },
          transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 },
        }

  const stepMotionProps = (index: number) =>
    isMobile
      ? { initial: false }
      : {
          initial: { opacity: 0, y: 20, scale: 0.98 },
          whileInView: { opacity: 1, y: 0, scale: 1 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 },
        }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div
        className={`fixed inset-0 overflow-hidden pointer-events-none flex items-center justify-center transition-opacity duration-700 ${
          showInfinity ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="relative w-[1400px] h-[700px] mix-blend-multiply filter blur-xl opacity-20 animate-blob">
          <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <path
              d="M 50 50 
                 C 50 30, 60 20, 75 30
                 C 90 40, 100 50, 100 50
                 C 100 50, 110 60, 125 70
                 C 140 80, 150 70, 150 50
                 C 150 30, 140 20, 125 30
                 C 110 40, 100 50, 100 50
                 C 100 50, 90 60, 75 70
                 C 60 80, 50 70, 50 50"
              stroke="url(#infinityGradient)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#c084fc" />
                <stop offset="50%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#818cf8" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-lg shadow-md border-b border-gray-100/50'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between"
          >
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/logo.png"
                  alt="TalkToMe Logo"
                  width={40}
                  height={40}
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent tracking-tight">
                TalkToMe
              </span>
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
                href="https://testflight.apple.com/join/BRdUfYmv"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Join Beta</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 lg:pt-48 pb-24 sm:pb-32">
        <motion.div
          variants={fadeIn}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/80 backdrop-blur-sm border border-purple-200/50 mb-6"
          >
            <Sparkles className="w-4 h-4 text-purple-600" />
            <p className="text-sm font-semibold text-purple-700 tracking-wide">
              AI-Powered Relationship Assistant
            </p>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 tracking-tight leading-none"
          >
            <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent">
              TalkToMe
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-gray-800 tracking-tight leading-tight"
          >
            Express yourself. Connect deeper.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base sm:text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Your AI companion - a safe space to vent, reflect, and have meaningful conversations. Navigate emotions, handle difficult moments, communicate with confidence and build stronger relationships.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://testflight.apple.com/join/BRdUfYmv"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-base sm:text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">Join TestFlight Beta</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Shield className="w-4 h-4 text-green-500" />
              <span>Secure & Private</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Video/Demo Placeholder Section */}
      <section className="relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          {/* Video placeholder - replace this div with your video element when ready */}
          <div className="w-full max-w-5xl mx-auto min-h-[600px] bg-gradient-to-br from-purple-100/80 via-blue-100/80 to-indigo-100/80 backdrop-blur-sm rounded-3xl flex items-center justify-center py-24 shadow-2xl border border-white/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10"></div>
            <div className="text-center p-8 relative z-10">
              <p className="text-gray-700 text-2xl sm:text-3xl font-semibold mb-3">Demo Video Coming Soon</p>
              <p className="text-gray-600 text-lg">See TalkToMe in action</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 tracking-tight">
              Why Choose TalkToMe?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to communicate better and build stronger relationships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: MessageCircle,
                title: 'Natural Conversations',
                description: 'Chat naturally with AI that understands context and emotions.',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: Heart,
                title: 'Emotional Intelligence',
                description: 'Get guidance that considers feelings and relationship dynamics.',
                color: 'from-pink-500 to-rose-500'
              },
              {
                icon: Shield,
                title: 'Private & Secure',
                description: 'Your conversations are encrypted and never shared with anyone.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Sparkles,
                title: 'Real-time Guidance',
                description: 'Get instant suggestions to improve your communication.',
                color: 'from-indigo-500 to-purple-500'
              },
              {
                icon: CheckCircle2,
                title: 'Proven Methods',
                description: 'Based on relationship psychology and communication research.',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: Star,
                title: 'Personalized Experience',
                description: 'AI adapts to your communication style and preferences.',
                color: 'from-yellow-500 to-orange-500'
              }
            ].map((item, index) => {
              const Icon = item.icon
              const motionProps = featureMotionProps(index)

              return (
                <motion.div
                  key={index}
                  {...motionProps}
                  className="group bg-white/90 sm:bg-white/80 sm:backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100/50 hover:shadow-xl hover:border-purple-200/50 transition-all duration-300 transform-gpu will-change-transform"
                  style={{ contain: 'layout paint', willChange: 'transform, opacity' }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 bg-white/30 backdrop-blur-sm rounded-3xl mx-4 sm:mx-6 lg:mx-8 mb-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 tracking-tight">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get started in three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {[
              {
                step: '1',
                title: 'Start a conversation',
                description: 'Talk naturally and express your thoughts. Our AI listens and understands your context.',
                icon: MessageCircle
              },
              {
                step: '2',
                title: 'Get real-time guidance',
                description: 'AI helps you phrase things with empathy and clarity, suggesting better ways to communicate.',
                icon: Sparkles
              },
              {
                step: '3',
                title: 'Connect deeper',
                description: 'Strengthen your relationships over time with improved communication skills.',
                icon: Heart
              }
            ].map((item, index) => {
              const Icon = item.icon
              const motionProps = stepMotionProps(index)

              return (
                <motion.div
                  key={index}
                  {...motionProps}
                  className="relative"
                >
                  <div className="bg-white/95 sm:bg-white/90 sm:backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-300 text-center transform-gpu will-change-transform" style={{ contain: 'layout paint', willChange: 'transform, opacity' }}>
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                      <ChevronRight className="w-12 h-12 text-purple-300" />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl p-12 sm:p-16 shadow-2xl"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to Transform Your Communication?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of users who are already improving their relationships with TalkToMe
          </p>
          <a
            href="https://testflight.apple.com/join/BRdUfYmv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 sm:px-14 py-5 sm:py-6 bg-white text-purple-600 text-lg sm:text-xl font-semibold rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
          >
            Join TestFlight Beta
            <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-white/80 backdrop-blur-sm border-t border-gray-200/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-4 group">
                <div className="relative w-10 h-10 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/logo.png"
                    alt="TalkToMe Logo"
                    width={40}
                    height={40}
                    className="object-contain rounded-lg"
                  />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  TalkToMe
                </span>
              </Link>
              <p className="text-gray-600 mb-4 max-w-md">
                Your AI companion for better communication and stronger relationships.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://x.com/aitalktome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/talktome-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:team@talk-2.me"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#how-it-works" className="text-gray-600 hover:text-purple-600 transition-colors duration-200">
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="https://testflight.apple.com/join/BRdUfYmv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                  >
                    Join Beta
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setPrivacyOpen(true)}
                    className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setTermsOpen(true)}
                    className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-left"
                  >
                    Terms of Use
                  </button>
                </li>
                <li>
                  <a href="mailto:team@talk-2.me" className="text-gray-600 hover:text-purple-600 transition-colors duration-200">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-200/50">
            <p className="text-sm text-gray-500 text-center">
              © 2025 TalkToMe. All rights reserved.
            </p>
          </div>
        </div>
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
