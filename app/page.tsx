'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

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
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePosRef = useRef({ x: -1000, y: -1000 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Track mouse position globally
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mousePosRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
    }

    const handleMouseLeave = () => {
      mousePosRef.current = { x: -1000, y: -1000 }
    }

    // Track mouse on the entire window for better interaction
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseout', handleMouseLeave)

    // Particle system
    const particleCount = 30
    const particles: Array<{
      baseAngle: number
      baseRadius: number
      baseSpeed: number
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }> = []

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      const baseAngle = (i / particleCount) * Math.PI * 2
      particles.push({
        baseAngle,
        baseRadius: 200 + Math.random() * 200,
        baseSpeed: 0.3 + Math.random() * 0.2,
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        size: 2 + Math.random() * 2,
        opacity: 0.2 + Math.random() * 0.3
      })
    }

    let animationFrame: number
    let time = 0

    // Repulsion parameters
    const repulsionRadius = 150 // Distance at which particles start to be affected
    const repulsionStrength = 0.15 // How strong the repulsion is
    const returnStrength = 0.05 // How quickly particles return to normal flow

    const animate = () => {
      time += 0.005
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create flowing gradient background
      const gradient = ctx.createLinearGradient(
        canvas.width / 2 + Math.sin(time) * 200,
        canvas.height / 2 + Math.cos(time) * 200,
        canvas.width / 2 + Math.sin(time + Math.PI) * 200,
        canvas.height / 2 + Math.cos(time + Math.PI) * 200
      )

      gradient.addColorStop(0, 'rgba(99, 102, 241, 0.15)')
      gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.1)')
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0.15)')

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const mouseX = mousePosRef.current.x
      const mouseY = mousePosRef.current.y

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Calculate base position (normal flow)
        const angle = particle.baseAngle + time * particle.baseSpeed
        const radiusVariation = Math.sin(time * 2 + i) * 50
        const baseX = centerX + Math.cos(angle) * (particle.baseRadius + radiusVariation)
        const baseY = centerY + Math.sin(angle) * (particle.baseRadius * 0.6 + radiusVariation)

        // Calculate distance to cursor
        const dx = particle.x - mouseX
        const dy = particle.y - mouseY
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Apply repulsion force if cursor is nearby
        if (distance < repulsionRadius && mouseX > 0 && mouseY > 0) {
          const force = (1 - distance / repulsionRadius) * repulsionStrength
          const angleToMouse = Math.atan2(dy, dx)
          
          // Push particle away from cursor
          particle.vx += Math.cos(angleToMouse) * force * 10
          particle.vy += Math.sin(angleToMouse) * force * 10
        }

        // Gradually return to base position
        const returnDx = baseX - particle.x
        const returnDy = baseY - particle.y
        particle.vx += returnDx * returnStrength
        particle.vy += returnDy * returnStrength

        // Apply velocity with damping
        particle.vx *= 0.95
        particle.vy *= 0.95
        particle.x += particle.vx
        particle.y += particle.vy

        // Initialize position if not set
        if (particle.x === 0 && particle.y === 0) {
          particle.x = baseX
          particle.y = baseY
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(99, 102, 241, ${particle.opacity})`
        ctx.fill()
      })

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseout', handleMouseLeave)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ mixBlendMode: 'multiply' }}
      />

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-between"
        >
          <div className="text-2xl font-semibold text-gray-900 tracking-tight">
            TalkToMe
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-5xl mx-auto text-center"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-6xl sm:text-7xl lg:text-8xl font-semibold mb-8 text-gray-900 tracking-tight leading-none"
          >
            TalkToMe
          </motion.h1>
          
          <motion.p
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-light mb-8 text-gray-700 tracking-tight leading-tight"
          >
            Express yourself.<br />
            Connect deeper.
          </motion.p>
          
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Your AI companion for meaningful conversations. 
            Navigate difficult moments with confidence and build stronger relationships 
            through intelligent communication guidance.
          </motion.p>
          
          <motion.a
            variants={fadeInUp}
            href="https://testflight.apple.com/join/XXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-gray-900 text-white text-base font-medium rounded-full shadow-lg hover:shadow-xl hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Join TestFlight Beta
          </motion.a>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-10 sm:p-16 shadow-sm border border-gray-100">
            <h2 className="text-4xl sm:text-5xl font-semibold mb-8 text-gray-900 tracking-tight">
              About TalkToMe
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-light">
              TalkToMe transforms how you communicate in relationships. Through AI-guided 
              conversations, you'll understand emotions more deeply, express yourself with clarity, 
              and build connections that matter. Whether navigating challenging moments or 
              deepening emotional intelligence, TalkToMe is your trusted companion for growth.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-semibold text-center mb-16 text-gray-900 tracking-tight"
          >
            Powerful Features
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI-Guided Conversations',
                description: 'Receive intelligent suggestions and prompts that help you navigate conversations with empathy and clarity.',
                icon: '💬'
              },
              {
                title: 'Emotional Insights',
                description: 'Understand your emotional patterns and communication style through personalized analytics and insights.',
                icon: '📊'
              },
              {
                title: 'Growth Feedback',
                description: 'Get constructive feedback and recommendations to continuously improve your communication skills.',
                icon: '🌱'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-500 hover:-translate-y-1"
              >
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light text-lg">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-xl font-semibold text-gray-900 tracking-tight">
            TalkToMe
          </div>
          <div className="flex gap-8 text-gray-500">
            <Link 
              href="/privacy" 
              className="hover:text-gray-900 transition-colors duration-200 font-light"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="hover:text-gray-900 transition-colors duration-200 font-light"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mt-8 text-sm font-light"
        >
          © {new Date().getFullYear()} TalkToMe. All rights reserved.
        </motion.p>
      </footer>
    </main>
  )
}



