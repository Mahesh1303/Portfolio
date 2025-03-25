import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code } from "lucide-react";

interface Project {
  title: string;
  description: string;
  logos: { name: string; img: string }[];
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      className="parent w-72 h-96 perspective-1000"
      whileHover={{ rotateY: 15, rotateX: 10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="card h-full rounded-3xl bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-500 shadow-2xl transition-all duration-500 ease-in-out transform hover:rotate-3 hover:shadow-3xl">
        <div className="glass absolute inset-2 rounded-3xl border-t-2 border-r-2 border-white/20 bg-white/10 backdrop-blur-md transform translate-z-20 transition-all duration-500 ease-in-out">
          <div className="content p-6 transform translate-z-20">
            <h3 className="title text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200">
              {project.title}
            </h3>
            <p className="text text-sm text-gray-200 mt-4 line-clamp-3">
              {project.description}
            </p>
          </div>
          <div className="bottom absolute bottom-6 left-6 right-6 flex justify-between items-center transform translate-z-20">
            <div className="social-buttons-container flex gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-button w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
              >
                <Github className="w-4 h-4 text-white" />
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-button w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4 text-white" />
              </a>
            </div>
            <button className="view-more-button flex items-center gap-1 bg-white/10 px-4 py-2 rounded-full text-sm text-white hover:bg-white/20 transition-all duration-300">
              Learn More
              <Code className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="logo absolute top-0 right-0 transform-style-preserve-3d">
          {project.logos.map((logo, idx) => (
            <motion.div
              key={idx}
              className="circle absolute rounded-full bg-white/10 backdrop-blur-sm"
              style={{
                width: `${170 - idx * 30}px`,
                height: `${170 - idx * 30}px`,
                top: `${8 + idx * 7}px`,
                right: `${8 + idx * 7}px`,
                transform: `translate3d(0, 0, ${20 + idx * 20}px)`,
              }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={logo.img}
                alt={logo.name}
                className="w-full h-full object-contain p-4"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;