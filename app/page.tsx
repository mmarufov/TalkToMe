'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between"
        >
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            TalkToMe
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent"
          >
            TalkToMe
          </motion.h1>
          
          <motion.p
            variants={fadeInUp}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-gray-800"
          >
            AI that helps you talk better and feel understood.
          </motion.p>
          
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            TalkToMe is your AI-powered emotional communication assistant. 
            Discover deeper connections and express yourself with confidence through 
            intelligent conversation guidance and emotional insights.
          </motion.p>
          
          <motion.a
            variants={fadeInUp}
            href="https://testflight.apple.com/join/XXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Join TestFlight Beta
          </motion.a>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-lg">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">About TalkToMe</h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              TalkToMe transforms how you communicate in relationships by providing AI-guided 
              conversations that help you understand emotions, express yourself clearly, and 
              build stronger connections. Whether you&#39;re navigating difficult conversations or 
              seeking to deepen your emotional intelligence, TalkToMe is your trusted companion 
              for meaningful dialogue and personal growth.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
            Powerful Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'AI-Guided Conversations',
                description: 'Get intelligent suggestions and prompts that help you navigate conversations with empathy and clarity.',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Emotional Insight Tracking',
                description: 'Understand your emotional patterns and communication style through personalized insights and analytics.',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Personal Growth Feedback',
                description: 'Receive constructive feedback and recommendations to improve your communication skills over time.',
                gradient: 'from-indigo-500 to-purple-500'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} mb-4`} />
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            TalkToMe
          </div>
          <div className="flex gap-6 text-gray-600">
            <Link 
              href="/privacy" 
              className="hover:text-gray-900 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="hover:text-gray-900 transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 mt-6 text-sm"
        >
          © {new Date().getFullYear()} TalkToMe. All rights reserved.
        </motion.p>
      </footer>
    </main>
  )
}



