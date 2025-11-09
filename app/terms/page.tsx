'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link 
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          TalkToMe
        </Link>
      </nav>

      {/* Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-lg">
            <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-gray-900">
              Terms of Service
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-sm text-gray-500 mb-8">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 mb-4">Agreement to Terms</h2>
                <p>
                  By accessing or using TalkToMe ("the Service"), you agree to be bound by 
                  these Terms of Service. If you disagree with any part of these terms, 
                  you may not access the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 mb-4">Use License</h2>
                <p>
                  Permission is granted to temporarily download one copy of TalkToMe for 
                  personal, non-commercial transitory viewing only. This is the grant of 
                  a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained in the app</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 mb-4">User Accounts</h2>
                <p>
                  When you create an account with us, you must provide information that is 
                  accurate, complete, and current at all times. You are responsible for 
                  safeguarding the password and for all activities that occur under your account.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 mb-4">Prohibited Uses</h2>
                <p>You may not use the Service:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>In any way that violates any applicable law or regulation</li>
                  <li>To transmit any malicious code or viruses</li>
                  <li>To impersonate or attempt to impersonate another user</li>
                  <li>In any manner that could disable, overburden, or impair the Service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 mb-4">Disclaimer</h2>
                <p>
                  The materials on TalkToMe are provided on an 'as is' basis. TalkToMe makes 
                  no warranties, expressed or implied, and hereby disclaims and negates all 
                  other warranties including, without limitation, implied warranties or 
                  conditions of merchantability, fitness for a particular purpose, or 
                  non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 mb-4">Limitations</h2>
                <p>
                  In no event shall TalkToMe or its suppliers be liable for any damages 
                  (including, without limitation, damages for loss of data or profit, or 
                  due to business interruption) arising out of the use or inability to use 
                  the Service, even if TalkToMe has been notified orally or in writing of 
                  the possibility of such damage.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 mb-4">Changes to Terms</h2>
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these 
                  Terms at any time. If a revision is material, we will provide at least 
                  30 days notice prior to any new terms taking effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 mb-4">Contact Information</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <p className="font-semibold">
                  Email: legal@talktome.app
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link 
                href="/"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}



