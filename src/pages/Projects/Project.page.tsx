import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EnhancedMarquee from './EnhancedMarquee';

interface Logo {
  name: string;
  img: string;
}

interface Project {
  title: string;
  description: string;
  logos: Logo[];
  githubUrl: string;
  liveUrl: string;
}

const projectData: Project[] = [
  {
    title: "Gym Fit",
    description: "An innovative approach to fitness tracking, combining AI-powered workout recommendations with social features to keep users motivated and engaged in their fitness journey.",
    logos: [
      { name: "React", img: "/gym1.png" },
      { name: "Node.js", img: "/gym2.png" },
      { name: "MongoDB", img: "/gym3.png" },
    ],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Vote Ease",
    description: "A comprehensive digital voting solution that ensures secure, transparent, and accessible elections. Features include blockchain-based vote recording, real-time result tracking, and multi-factor authentication for voters.",
    logos: [
      { name: "Vue.js", img: "/VOTE1.png" },
      { name: "Express", img: "/VOTE2.png" },
      { name: "PostgreSQL", img: "/VOTE3.png" },
      { name: "Blockchain", img: "/VOTE4.png" },
    ],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Abhivyakta",
    description: "A localized version of the Nagish application, Abhivyakta is designed to improve digital accessibility for Indian users. It features text-to-speech, voice commands, and a user interface optimized for various Indian languages and dialects.",
    logos: [
      { name: "Next.js", img: "/Abhi1.png" },
      { name: "TensorFlow.js", img: "/Abhi2.png" },
      { name: "Firebase", img: "/Abhi3.png" }
    ],
    githubUrl: "#",
    liveUrl: "https://abhivyakta.netlify.app/",
  }
];

const GitHubIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-7 h-7 ${className}`}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ExternalLinkIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-7 h-7 ${className}`}>
    <path d="M10 6v2h2.59l-6.3 6.3 1.41 1.41 6.3-6.3v2.59h2v-6h-6zm8 10v4c0 1.1-.9 2-2 2h-12c-1.1 0-2-.9-2-2v-12c0-1.1.9-2 2-2h4v2h-4v12h12v-4h2z"/>
  </svg>
);

const CloseIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const MyProjects: React.FC = () => {
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f55d56] to-[#f7931e] mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent works. Hover to see details or click to learn more.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div 
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredProject(project.title)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <motion.div 
                className="absolute inset-0 bg-white rounded-3xl shadow-xl transition-all duration-300"
                animate={{
                  scale: hoveredProject === project.title ? 1.03 : 1,
                  boxShadow: hoveredProject === project.title 
                    ? "0 25px 50px -12px rgba(96, 75, 74, 0.25)" 
                    : "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative h-full flex flex-col p-6 z-10">
                <motion.div
                  className="h-40 mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200"
                  animate={{
                    height: hoveredProject === project.title ? 100 : 160
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <EnhancedMarquee speed={10}>
                    {project.logos.map((logo, idx) => (
                      <img 
                        key={idx} 
                        src={logo.img} 
                        alt={logo.name} 
                        className={`h-full w-auto mx-4 inline-block transition-transform duration-500 
                          ${hoveredProject === project.title ? 'scale-110' : 'scale-100'}`}
                      />
                    ))}
                  </EnhancedMarquee>
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                
                <motion.div
                  className="overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: hoveredProject === project.title ? "auto" : 0,
                    opacity: hoveredProject === project.title ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-600 mb-6">{project.description}</p>
                </motion.div>
                
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex gap-3">
                    <motion.a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#f55d56] transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <GitHubIcon />
                    </motion.a>
                    <motion.a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#f55d56] transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLinkIcon />
                    </motion.a>
                  </div>
                  
                  <motion.button
                    onClick={() => setCurrentProject(project)}
                    className="px-4 py-2 bg-gradient-to-r from-[#fbb9b6] to-[#f55d56] text-white rounded-full text-sm font-medium shadow-md"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 5px 15px -3px rgba(245, 93, 86, 0.4)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {currentProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCurrentProject(null)}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-3xl max-w-2xl w-full p-8 relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
                onClick={() => setCurrentProject(null)}
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <CloseIcon className="text-gray-500" />
              </motion.button>
              
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-800">{currentProject.title}</h3>
                
                <div className="h-48 rounded-xl overflow-hidden bg-gray-100">
                  <EnhancedMarquee speed={15} >
                    {currentProject.logos.map((logo, idx) => (
                      <img 
                        key={idx} 
                        src={logo.img} 
                        alt={logo.name} 
                        className="h-full w-auto mx-8 inline-block" 
                      />
                    ))}
                  </EnhancedMarquee>
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed">
                  {currentProject.description}
                </p>
                
                <div className="flex justify-end gap-4 pt-4">
                  <motion.a
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <GitHubIcon className="w-5 h-5" />
                    View Code
                  </motion.a>
                  <motion.a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#fbb9b6] to-[#f55d56] text-white rounded-full font-medium hover:opacity-90 transition-opacity"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLinkIcon className="w-5 h-5" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MyProjects;