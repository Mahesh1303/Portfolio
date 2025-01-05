'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, Layers, Workflow, Rocket } from 'lucide-react'
import IconCloud from "@/Components/ui/icon-cloud"
import TypingAnimation from "@/Components/ui/typing-animation"

const skillCategories = [
  {
    icon: Zap,
    title: "Frontend Mastery",
    skills: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "Magic-UI", "React-Redux"],
    gradient: "from-pink-500 via-red-500 to-yellow-500"
  },
  {
    icon: Layers,
    title: "Backend Engineering",
    skills: ["Node.js", "Express", "Mongoose", "REST APIs"],
    gradient: "from-purple-500 via-indigo-500 to-blue-500"
  },
  {
    icon: Workflow,
    title: "Database & DevOps",
    skills: ["MongoDB"],
    gradient: "from-green-400 via-teal-500 to-cyan-600"
  },
  {
    icon: Rocket,
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Vercel", "Netlify"],
    gradient: "from-orange-400 via-red-500 to-pink-500"
  }
]

const iconSlugs = [
  "javascript", "react", "nodejs", "typescript", 
  "tailwindcss", "docker", "mongodb", "postgresql", 
  "github", "figma", "aws", "nextjs"
]

const Myskills = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('skills')
      if (element) {
        const rect = element.getBoundingClientRect()
        setIsVisible(rect.top < window.innerHeight && rect.bottom >= 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check visibility on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="skills" className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            Tech Arsenal
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Icon Cloud */}
         
            <IconCloud iconSlugs={iconSlugs} />

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                onClick={() => setActiveCategory(activeCategory === index ? null : index)}
                className={`
                  relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer
                  transform transition-all duration-300 
                  ${activeCategory === index 
                    ? 'scale-105 ring-4 ring-opacity-50 ring-white' 
                    : 'hover:scale-105'}
                  bg-gray-800
                `}
              >
                {/* Gradient Border */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-20 blur-2xl`}
                ></div>

                {/* Content */}
                <div className="relative z-10 p-6 text-center">
                  <motion.div 
                    className="mx-auto w-16 h-16 sm:w-20 sm:h-20 bg-gray-700 rounded-full mb-4 
                      flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <category.icon 
                      className="w-8 h-8 sm:w-10 sm:h-10 text-white opacity-80" 
                    />
                  </motion.div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                    {category.title}
                  </h3>

                  <AnimatePresence>
                    {activeCategory === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-2 gap-2"
                      >
                        {category.skills.map((skill, skillIndex) => (
                          <motion.span 
                            key={skillIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: skillIndex * 0.05 }}
                            className="text-xs sm:text-sm text-gray-300 bg-gray-700 rounded-full px-2 py-1 truncate"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Typing Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <TypingAnimation
            text="Continuously Expanding My Tech Toolkit!"
            className="text-lg sm:text-xl text-gray-300"
            duration={100}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Myskills

