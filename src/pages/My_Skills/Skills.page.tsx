'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useTransform, useScroll } from 'framer-motion'
import { Code, Cpu, Database, Server,  } from 'lucide-react'
import IconCloud from "@/Components/ui/icon-cloud"
import TypingAnimation from "@/Components/ui/typing-animation"

const skillCategories = [
  {
    icon: Code,
    title: "Frontend Mastery",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"],
    gradient: "from-pink-500 via-red-500 to-yellow-500"
  },
  {
    icon: Server,
    title: "Backend Engineering",
    skills: ["Node.js", "Express", "Mongoose", "REST APIs", "GraphQL", "JWT"],
    gradient: "from-purple-500 via-indigo-500 to-blue-500"
  },
  {
    icon: Database,
    title: "Database & DevOps",
    skills: ["MongoDB", "PostgreSQL", "Docker", "AWS", "CI/CD", "NGINX"],
    gradient: "from-green-400 via-teal-500 to-cyan-600"
  },
  {
    icon: Cpu,
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Vercel", "Netlify", "Figma", "Postman"],
    gradient: "from-orange-400 via-red-500 to-pink-500"
  }
]

const iconSlugs = [
  "typescript", "react", "nextjs", "nodejs", 
  "tailwindcss", "docker", "mongodb", "postgresql", 
  "github", "graphql", "aws", "vercel"
]

const Myskills = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Scroll-based transforms for the icon cloud
  const x = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y = useTransform(scrollYProgress, [0, 1], [0, 30])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1])

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('skills')
      if (element) {
        const rect = element.getBoundingClientRect()
        setIsVisible(rect.top < window.innerHeight * 0.75 && rect.bottom >= 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section 
      id="skills" 
      ref={containerRef}
      className="bg-white py-10 px-4 sm:px-6 lg:px-8 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700 mb-4">
            <TypingAnimation 
              text="My Tech Stack" 
              duration={50} 
              className="inline-block"
            />
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies I work with to build amazing digital experiences
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {/* Colorful Icon Cloud */}
          <motion.div 
            style={{ x, y, scale }}
            className="w-full lg:w-1/2 h-[300px] sm:h-[400px] relative"
          >
            <IconCloud 
              iconSlugs={iconSlugs} 
             
            />
          </motion.div>

          {/* Skills Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                onClick={() => setActiveCategory(activeCategory === index ? null : index)}
                className={`
                  relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg cursor-pointer
                  transform transition-all duration-300 
                  ${activeCategory === index 
                    ? 'scale-[1.03] ring-2 ring-opacity-30 ring-blue-500' 
                    : 'hover:scale-[1.03]'}
                  bg-gray-50 border border-gray-200
                `}
                whileHover={{ y: -5 }}
              >
                {/* Gradient background */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-10`}
                />

                {/* Content */}
                <div className="relative z-10 p-4 sm:p-6 text-center h-full flex flex-col">
                  <motion.div 
                    className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full mb-3 sm:mb-4 
                      flex items-center justify-center shadow-md"
                    whileHover={{ 
                      rotate: [0, 15, -15, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <category.icon 
                      className={`w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`} 
                    />
                  </motion.div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">
                    {category.title}
                  </h3>

                  <AnimatePresence>
                    {activeCategory === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-2 gap-2 mt-auto"
                      >
                        {category.skills.map((skill, skillIndex) => (
                          <motion.span 
                            key={skillIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.3, 
                              delay: skillIndex * 0.05,
                              type: 'spring',
                              stiffness: 100
                            }}
                            className="text-xs sm:text-sm text-gray-700 bg-white rounded-full px-2 sm:px-3 py-1 shadow-sm border border-gray-200"
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

        {/* Animated footer text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 md:mt-20 text-center"
        >
          <TypingAnimation
            text="Continuously expanding my technical toolkit!"
            className="text-base sm:text-lg text-gray-600 inline-block bg-gray-50 rounded-full px-6 py-3 shadow-inner"
            duration={50}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Myskills