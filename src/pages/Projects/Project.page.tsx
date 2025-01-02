import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EnhancedMarquee from './EnhancedMarquee';
import Button from './Button';
import { Github, ExternalLink, X } from 'lucide-react';

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

const MyProjects: React.FC = () => {
  const [currentProject, setCurrentProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 bg-gray-700 p-4">
                <EnhancedMarquee speed={10}>
                  {project.logos.map((logo, idx) => (
                    <img key={idx} src={logo.img} alt={logo.name} className="h-40 w-auto mx-4 inline-block" />
                  ))}
                </EnhancedMarquee>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex justify-between items-center">
                  <Button variant="outline" onClick={() => setCurrentProject(project)}>
                    Learn More
                  </Button>
                  <div className="flex space-x-2">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="icon" variant="ghost">
                        <Github className="h-5 w-5" />
                      </Button>
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="icon" variant="ghost">
                        <ExternalLink className="h-5 w-5" />
                      </Button>
                    </a>
                  </div>
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
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 rounded-lg max-w-2xl w-full p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2"
                onClick={() => setCurrentProject(null)}
              >
                <X className="h-5 w-5" />
              </Button>
              <h3 className="text-3xl font-bold text-white mb-4">{currentProject.title}</h3>
              <EnhancedMarquee speed={15}>
                {currentProject.logos.map((logo, idx) => (
                  <img key={idx} src={logo.img} alt={logo.name} className="h-24 w-auto mx-4 inline-block" />
                ))}
              </EnhancedMarquee>
              <p className="text-gray-300 my-4">{currentProject.description}</p>
              <div className="flex justify-end space-x-4 mt-6">
                <Button variant="outline" asChild>
                  <a href={currentProject.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
                <Button asChild>
                  <a href={currentProject.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MyProjects;

