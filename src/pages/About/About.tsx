'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Code, Server, Database, Cpu, Download, User, Terminal, CpuIcon, Code2, Sparkles, Award, Briefcase, Clock } from 'lucide-react'
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
    { icon: <Code className="w-6 h-6" />, text: "Frontend Development" },
    { icon: <Server className="w-6 h-6" />, text: "Backend Systems" },
    { icon: <Database className="w-6 h-6" />, text: "Database Design" },
    { icon: <Cpu className="w-6 h-6" />, text: "DevOps & Cloud" },
    { icon: <CpuIcon className="w-6 h-6" />, text: "Performance Optimization" }
  ]

  const stats = [
    { value: "1+", label: "Years Experience", icon: <Briefcase className="w-5 h-5" /> },
    { value: "20+", label: "Projects Completed", icon: <Award className="w-5 h-5" /> },
    { value: "∞", label: "Cups of Coffee", icon: <Clock className="w-5 h-5" /> }
  ]

  return (
    <section id="about" className="relative py-24  lg:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${i % 3 === 0 ? 'bg-amber-100' : i % 3 === 1 ? 'bg-orange-100' : 'bg-yellow-100'} opacity-20`}
            style={{
              width: `${Math.random() * 150 + 50}px`,
              height: `${Math.random() * 150 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 60],
              x: [0, (Math.random() - 0.5) * 60],
              rotate: [0, Math.random() * 360]
            }}
            transition={{
              duration: 20 + Math.random() * 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered header with decorative elements */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-10 h-10 text-amber-500" />
            </motion.div>
            <h2 className="text-5xl sm:text-6xl font-bold">
              <TypingAnimation 
                text="About Me" 
                duration={50}
                className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent"
              />
            </h2>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <User className="w-10 h-10 text-orange-500" />
            </motion.div>
          </div>
          
          <motion.div 
            className="w-32 h-1.5 bg-gradient-to-r from-amber-400 to-orange-600 mx-auto mb-8 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Card-style layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Profile card */}
          <motion.div
            className="lg:col-span-1 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-md">
              <motion.div
                className="absolute -inset-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-3xl opacity-75 blur-xl group-hover:opacity-100 transition-opacity"
                initial={{ scale: 0.95 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl h-full border border-white/20">
                <div className="p-8 flex flex-col items-center">
                  <motion.div
                    className="w-56 h-56 sm:w-64 sm:h-64 rounded-full border-4 border-white shadow-xl overflow-hidden mb-8 relative group"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src="/Profile.png"
                      alt="Profile"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0  to-transparent opacity-0  transition-opacity duration-300" />
                  </motion.div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 w-full mb-8">
                    {stats.map((stat, i) => (
                      <motion.div
                        key={i}
                        className="text-center p-3 bg-amber-50 rounded-xl"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                      >
                        <div className="flex items-center justify-center gap-1 text-amber-600">
                          {stat.icon}
                          <span className="text-2xl font-bold">{stat.value}</span>
                        </div>
                        <p className="text-xs font-medium text-gray-600 mt-1">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.a
                    href="/MaheshCV.pdf"
                    download
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all font-medium text-lg"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 10px 25px -5px rgba(249, 115, 22, 0.4)'
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-6 h-6" />
                    <span>Download Resume</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content card */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-10 h-full border border-white/20">
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <Code2 className="w-8 h-8 text-amber-600" />
                    <span>My Journey</span>
                  </h3>
                  <div className="space-y-5 text-gray-700 text-lg">
                    <p>
                      <TypingAnimation
                        text="I'm a passionate full-stack developer with expertise in modern web technologies. I specialize in building responsive, performant applications that deliver exceptional user experiences."
                        duration={15}
                      />
                    </p>
                    <p>
                      <TypingAnimation
                        text="My toolkit includes React, Next.js, Node.js, and modern CSS frameworks. I'm currently expanding my skills into Web3 and blockchain development."
                        duration={15}
                        delay={1500}
                      />
                    </p>
                    <p>
                      <TypingAnimation
                        text="With a strong foundation in computer science and years of hands-on experience, I approach every project with creativity and attention to detail."
                        duration={15}
                        delay={3000}
                      />
                    </p>
                  </div>
                </motion.div>

               <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <CpuIcon className="w-8 h-8 text-amber-600" />
        <span>Skills & Expertise</span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-4 px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-amber-300 transition-all hover:shadow-md"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ 
              delay: 0.1 * i,
              type: "spring",
              stiffness: 300
            }}
            whileHover={{ 
              y: -5,
              backgroundColor: 'rgba(249, 115, 22, 0.1)',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}
          >
            <motion.span 
              className="text-amber-600"
              whileHover={{ rotate: 15, scale: 1.1 }}
            >
              {skill.icon}
            </motion.span>
            <span className="text-base font-medium text-gray-800">{skill.text}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social icons */}
        <motion.div 
          className="fixed bottom-6 sm:bottom-8 lg:bottom-10 left-1/2 transform -translate-x-1/2 z-50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
        >
          <SocialIcons />
        </motion.div>
      </div>
    </section>
  )
}

export default About