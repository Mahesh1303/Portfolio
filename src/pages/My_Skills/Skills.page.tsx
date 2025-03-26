'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useTransform, useScroll } from 'framer-motion'
import { 
  Layout, Terminal, Database, Settings,
  Zap, CpuIcon, GitBranch, Code2,
  Cloud, Palette, Smartphone, Network, Shield
} from 'lucide-react'
import IconCloud from "@/Components/ui/icon-cloud"
import TypingAnimation from "@/Components/ui/typing-animation"

const skillCategories = [
  {
    icon: Layout,
    title: "Frontend Mastery",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"],
    gradient: "from-pink-500 via-red-500 to-yellow-500",
    iconColor: "text-pink-500"
  },
  {
    icon: Terminal,
    title: "Backend Engineering",
    skills: ["Node.js", "Express", "Mongoose", "REST APIs", "GraphQL", "JWT"],
    gradient: "from-purple-500 via-indigo-500 to-blue-500",
    iconColor: "text-purple-500"
  },
  {
    icon: Database,
    title: "Database & DevOps",
    skills: ["MongoDB", "PostgreSQL", "Docker", "AWS", "CI/CD", "NGINX"],
    gradient: "from-green-400 via-teal-500 to-cyan-600",
    iconColor: "text-teal-500"
  },
  {
    icon: Settings,
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Vercel", "Netlify", "Figma", "Postman"],
    gradient: "from-orange-400 via-red-500 to-pink-500",
    iconColor: "text-orange-500"
  }
]

const iconSlugs = [
  "typescript", "react", "nextjs", "nodejs", 
  "tailwindcss", "docker", "mongodb", "postgresql", 
  "github", "graphql", "aws", "vercel", "redux",
  "figma", "nginx", "jest", "webpack"
]

const SkillCard = ({ 
  category, 
  isActive, 
  onClick,
  isVisible,
  index
}: {
  category: typeof skillCategories[0],
  isActive: boolean,
  onClick: () => void,
  isVisible: boolean,
  index: number
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : 50,
        transition: { 
          duration: 0.5, 
          delay: 0.1 * index,
          ease: 'easeOut'
        }
      }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <motion.div 
        onClick={onClick}
        className={`
          relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg cursor-pointer
          bg-white border border-gray-200/50 hover:shadow-xl
        `}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-10`} />

        {/* Content */}
        <div className="relative z-10 p-4 sm:p-6 text-center flex flex-col">
          <motion.div 
            className={`mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full mb-3 sm:mb-4 
              flex items-center justify-center shadow-md ${category.iconColor}`}
            whileHover={{ 
              rotate: [0, 15, -15, 0],
              transition: { duration: 0.5 }
            }}
          >
            <category.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${category.iconColor}`} />
          </motion.div>

          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">
            {category.title}
          </h3>

          <AnimatePresence mode="wait">
            {isActive ? (
              <motion.div
                key="expanded"
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: 1, 
                  height: 'auto',
                  transition: { 
                    opacity: { duration: 0.2 },
                    height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                  }
                }}
                exit={{ 
                  opacity: 0, 
                  height: 0,
                  transition: { 
                    opacity: { duration: 0.15 },
                    height: { duration: 0.25, ease: [0.4, 0, 0.2, 1] }
                  }
                }}
                className="grid grid-cols-2 gap-2 mt-auto overflow-hidden"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.span 
                    key={skillIndex}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        duration: 0.2, 
                        delay: skillIndex * 0.05,
                        ease: 'easeOut'
                      }
                    }}
                    exit={{ 
                      opacity: 0,
                      transition: { duration: 0.1 }
                    }}
                    className="text-xs sm:text-sm text-gray-700 bg-white/80 rounded-full px-2 sm:px-3 py-1 shadow-sm border border-gray-200/50 backdrop-blur-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="collapsed"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  transition: { duration: 0.3 }
                }}
                exit={{ 
                  opacity: 0,
                  transition: { duration: 0.2 }
                }}
                className="mt-auto"
              >
                <div className="flex justify-center space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -5, 0],
                        transition: {
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2
                        }
                      }}
                      className="w-2 h-2 rounded-full bg-gray-300"
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-2">Click to view skills</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  )
}

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
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5])

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

  const toggleCategory = (index: number) => {
    setActiveCategory(prev => prev === index ? null : index)
  }

  return (
    <section 
      id="skills" 
      ref={containerRef}
      className="bg-gradient-to-b from-white to-gray-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative"
    >
      {/* Decorative elements */}
      <motion.div 
        style={{ opacity }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-amber-100 blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-blue-100 blur-3xl opacity-30"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <Zap className="w-8 h-8 text-amber-500 mr-3 animate-pulse" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">
              <TypingAnimation 
                text="My Tech Stack" 
                duration={50} 
                className="inline-block"
              />
            </h2>
            <CpuIcon className="w-8 h-8 text-amber-600 ml-3 animate-spin-slow" />
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto flex items-center justify-center">
            <GitBranch className="w-5 h-5 mr-2 text-gray-400" />
            Technologies I work with to build amazing digital experiences
            <Code2 className="w-5 h-5 ml-2 text-gray-400" />
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
            <motion.div 
              animate={{ 
                rotate: 360,
                transition: { 
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="w-64 h-64 rounded-full border-2 border-dashed border-gray-200 opacity-30"></div>
            </motion.div>
          </motion.div>

          {/* Skills Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {skillCategories.map((category, index) => (
              <SkillCard
                key={index}
                category={category}
                isActive={activeCategory === index}
                onClick={() => toggleCategory(index)}
                isVisible={isVisible}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Animated footer text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 md:mt-24 text-center"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-gray-50 to-white rounded-full px-6 py-3 shadow-inner border border-gray-200/50">
            <Cloud className="w-5 h-5 text-blue-500 mr-2 animate-float" />
            <TypingAnimation
              text="Continuously expanding my technical toolkit!"
              className="text-base sm:text-lg text-gray-600 inline-block"
              duration={30}
            />
            <Palette className="w-5 h-5 text-purple-500 ml-2 animate-wiggle" />
          </div>
          
          <motion.div 
            className="mt-8 flex justify-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
          >
            <Smartphone className="w-6 h-6 text-gray-400 animate-pulse" />
            <Network className="w-6 h-6 text-gray-400 animate-pulse" />
            <Shield className="w-6 h-6 text-gray-400 animate-pulse" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Myskills