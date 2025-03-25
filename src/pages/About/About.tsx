'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Code, Server, Database, Cpu, Download } from 'lucide-react'
import SocialIcons from '@/Components/PgComponets/Dockcomp'

const TypingAnimation = ({ text, duration = 50, delay = 0, className = '' }: { text: string; duration?: number; delay?: number; className?: string }) => {
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
        // Hide cursor after typing completes
        setTimeout(() => setShowCursor(false), 500)
      }
    }, duration)

    return () => clearInterval(interval)
  }, [text, duration])

  return (
    <motion.span 
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay / 1000 }}
    >
      {displayText}
      {showCursor && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ 
            duration: 0.8,
            repeat: Infinity,
            repeatDelay: 0.2
          }}
          className="ml-0.5"
        >
          ▋
        </motion.span>
      )}
    </motion.span>
  )
}

const About = () => {
  const skills = [
    { icon: <Code className="w-5 h-5" />, text: "Frontend Development" },
    { icon: <Server className="w-5 h-5" />, text: "Backend Systems" },
    { icon: <Database className="w-5 h-5" />, text: "Database Design" },
    { icon: <Cpu className="w-5 h-5" />, text: "DevOps & Cloud" }
  ]

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-40 h-40 rounded-full bg-amber-100 opacity-30 blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-orange-100 opacity-30 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <TypingAnimation 
                text="About Me" 
                duration={50}
                className="bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent"
              />
            </motion.h2>

            <div className="space-y-6">
              <motion.p 
                className="text-lg text-gray-800 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <TypingAnimation
                  text="I'm a passionate full-stack developer with expertise in modern web technologies. I specialize in building responsive, performant applications that deliver exceptional user experiences."
                  duration={15}
                />
              </motion.p>

              <motion.p 
                className="text-lg text-gray-800 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <TypingAnimation
                  text="My toolkit includes React, Next.js, Node.js, and modern CSS frameworks. I'm currently expanding my skills into Web3 and blockchain development."
                  duration={15}
                />
              </motion.p>

              {/* Skills chips */}
              <motion.div 
                className="flex flex-wrap gap-3 mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200"
                    whileHover={{ 
                      y: -3,
                      backgroundColor: 'rgba(249, 115, 22, 0.1)',
                      borderColor: 'rgba(249, 115, 22, 0.5)'
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-orange-600">{skill.icon}</span>
                    <span className="text-sm font-medium text-gray-800">{skill.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Download button */}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <motion.a
                  href="/MaheshCV.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5" />
                  <TypingAnimation
                    text="Download Resume"
                    duration={20}
                  />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Profile image */}
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Decorative border */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-8 border-gray-100"
                initial={{ scale: 0.9, rotate: -5 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Main image */}
              <motion.div
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="/Profile.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                />
                
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 "
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="fixed bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <SocialIcons />
        </div>
      </div>
    </section>
  )
}

export default About