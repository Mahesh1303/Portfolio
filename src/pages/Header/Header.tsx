'use client'

import { useState, useEffect } from 'react'
import { Menu, X, User, Code, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsSidebarOpen(false)
    
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
    { name: 'About', icon: User, href: '#about' },
    { name: 'Projects', icon: Code, href: '#projects' },
    { name: 'Contact', icon: Mail, href: '#contact' },
  ]

  const NavLinks = ({ mobile = false }) => (
    <div className={`flex ${mobile ? 'flex-col space-y-6' : 'space-x-8'}`}>
      {navItems.map((item, index) => (
        <motion.a
          key={item.name}
          href={item.href}
          onClick={handleNavigation}
          className={`flex items-center space-x-2 text-lg ${
            mobile ? 'text-white' : 'text-gray-700'
          } hover:text-indigo-600 transition duration-300 font-medium`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <item.icon size={20} />
          <span>{item.name}</span>
        </motion.a>
      ))}
    </div>
  )

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-30 hidden sm:flex justify-between items-center px-8 py-4 transition-all duration-300 ${
          scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex items-center space-x-4"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
            MD
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            Mahesh Divate
          </span>
        </motion.div>

        <NavLinks />
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-30 sm:hidden flex justify-between items-center px-6 py-4 transition-all duration-300 ${
          scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
            MD
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            Mahesh Divate
          </span>
        </motion.div>
        <motion.button 
          onClick={toggleSidebar}
          className="text-gray-700 focus:outline-none"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </motion.nav>

      {/* Compact Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleSidebar}
          >
            <motion.div 
              className="absolute top-0 right-0 w-64 h-full bg-gradient-to-br from-indigo-600 to-purple-700 p-6"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-600 font-bold text-xl">
                    MD
                  </div>
                  <motion.button
                    onClick={toggleSidebar}
                    className="text-white focus:outline-none"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={24} />
                  </motion.button>
                </div>
                <div className="flex-grow">
                  <NavLinks mobile />
                </div>
                <div className="mt-auto text-white text-sm opacity-75">
                  © 2023 Mahesh Divate
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

