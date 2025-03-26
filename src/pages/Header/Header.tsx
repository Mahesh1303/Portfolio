'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronDown, User, Code, Mail, Home, Star } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
      
      const sections = ['#home', '#about', '#projects', '#contact']
      for (const section of sections) {
        const element = document.querySelector(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    handleScroll()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsDropdownOpen(false)
    const targetId = (e.target as HTMLAnchorElement).getAttribute('href')
    
    if (targetId) {
      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
        e.preventDefault()
      }
    }
  }

  const navItems = [
    { name: 'About', icon: User, href: '#about', showName: true },
    { name: 'Projects', icon: Code, href: '#projects', showName: true },
    { name: 'Contact', icon: Mail, href: '#contact', showName: true },
  ]

  const NavLinks = ({ mobile = false }) => (
    <div className={`flex ${mobile ? 'flex-col space-y-3' : 'space-x-1'}`}>
      {navItems.map((item) => (
        <motion.a
          key={item.href}
          href={item.href}
          onClick={handleNavigation}
          className={`relative flex items-center px-4 py-2 rounded-lg ${
            mobile ? 'text-gray-800' : 'text-gray-700 hover:bg-amber-50/70'
          } transition-all duration-300 font-medium group`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {activeSection === item.href && !mobile && (
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-amber-500/10 rounded-lg border border-amber-200/50"
              layoutId="activeBg"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
          <item.icon 
            size={18} 
            className={`${item.showName ? 'mr-2' : ''} ${
              activeSection === item.href 
                ? 'text-amber-500' 
                : 'text-amber-600/70'
            }`} 
          />
          {item.showName && (
            <span className={
              activeSection === item.href 
                ? 'text-amber-600 font-medium' 
                : 'text-gray-700'
            }>
              {item.name}
            </span>
          )}
          {activeSection === item.href && (
            <motion.div 
              className={`absolute ${
                mobile 
                  ? '-left-1 top-3 h-6 w-1 bg-amber-400' 
                  : '-bottom-1 left-4 h-1 w-6 bg-amber-400'
              } rounded-full`}
              layoutId="activeIndicator"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
        </motion.a>
      ))}
    </div>
  )

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 hidden sm:block transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-lg shadow-sm py-2 border-b border-amber-100/30' 
            : 'bg-white/80 backdrop-blur-md py-3'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.a
            href="#about"
            className="flex items-center space-x-3 group"
            onClick={handleNavigation}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="relative w-10 h-10 flex items-center justify-center"
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: 'spring' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg shadow-md transform rotate-3" />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg shadow-md transform -rotate-3" />
              <Star 
                size={20} 
                className="relative z-10 text-white" 
                fill="white"
                strokeWidth={1.5}
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-['Brush_Script_MT'] italic text-gray-800 tracking-tight">Mahesh Divate</span>
              <div className="h-1 w-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full mt-0.5" />
            </div>
          </motion.a>

          <div className="flex items-center space-x-1 bg-white/50 rounded-xl p-1 border border-amber-200/50 shadow-inner">
            <NavLinks />
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 sm:hidden transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-sm py-2 border-b border-amber-100/30' 
            : 'bg-white/90 backdrop-blur-md py-3'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <div className="px-4 flex justify-between items-center">
          <motion.a
            href="#home"
            className="flex items-center space-x-2 group"
            onClick={handleNavigation}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg shadow-sm transform rotate-2" />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg shadow-sm transform -rotate-2" />
              <Star 
                size={16} 
                className="relative z-10 text-white" 
                fill="white"
                strokeWidth={1.5}
              />
            </div>
            <span className="text-xl font-bold font-['Brush_Script_MT'] italic text-gray-800 tracking-tight">Mahesh</span>
          </motion.a>
          
          <div className="relative" ref={dropdownRef}>
            <motion.button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all ${
                isDropdownOpen 
                  ? 'bg-amber-100/50' 
                  : 'hover:bg-amber-100/30'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm font-medium text-amber-800">Menu</span>
              <motion.div
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={16} className="text-amber-600" />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  className="absolute right-0 mt-2 w-56 origin-top-right bg-white rounded-xl shadow-lg py-2 z-50 border border-amber-200/50 backdrop-blur-md"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <NavLinks mobile />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>
    </>
  )
}