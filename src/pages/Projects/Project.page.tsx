import React, { useState } from 'react';
import Marquee from '@/Components/ui/marquee';
import DialogBox from '@/Components/PgComponets/DialogBox'; 

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
    description: "An innovative approach to Project One, highlighting key technologies and benefits.",
    logos: [
      { name: "Microsoft", img: "/gym1.png" },
      { name: "Apple", img: "/gym2.png" },
      { name: "Apple", img: "/gym3.png" },
    ],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Vote Ease",
    description: "A comprehensive solution for Project Two, showcasing unique features and use cases.",
    logos: [
      { name: "Google", img: "/VOTE1.png" },
      { name: "Facebook", img: "/VOTE2.png" },
      { name: "Facebook", img: "/VOTE3.png" },
      { name: "Facebook", img: "/VOTE4.png" },
    ],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Abhivyakta",
    description: "Developed a landing page for the Abhivyakta website, which is an Indian version of the Nagish Application.",
    logos: [
      { name: "LinkedIn", img: "/Abhi1.png" },
      { name: "Twitter", img: "/Abhi2.png" },
      { name: "Twitter", img: "/Abhi3.png" }
    ],
    githubUrl: "#",
    liveUrl: "https://abhivyakta.netlify.app/",
  }
];

const truncateDescription = (text: string, maxLength: number = 100): string => {
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

const MyProjects: React.FC = () => {
  const [currentProject, setCurrentProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setCurrentProject(project);
  };

  const closeModal = () => {
    setCurrentProject(null);
  };

  return (
    <div id="projects" className="bg-gray-50 py-12 bg-gray-900">
      <h2 className="text-5xl font-extrabold text-amber-500 mb-4 text-center">My Projects</h2>
      <div className="flex flex-col items-center justify-start min-h-screen p-6 bg-gray-900 shadow-lg rounded-lg mx-4">
        
        <div className="w-full  rounded-lg p-8 mb-8 bg-gray-900">
          <div className="mb-4">
            <h2 className="text-3xl font-semibold text-blue-600"></h2>
            <p className="text-gray-600 mt-2">Explore the following projects I built </p>
          </div>

          <div className="flex overflow-x-auto space-x-8 py-4 snap-x snap-mandatory">
            {projectData.map((project, index) => (
              <div 
                key={index} 
                className="flex-none w-80 border border-gray-300 rounded-lg shadow-md bg-blue-100 transform transition-transform duration-300 hover:scale-105 snap-center cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className="flex flex-col items-center justify-center w-full h-full p-4">
                  <Marquee className="h-36 w-full overflow-hidden" singleitem="true">
                    {project.logos.map((logo, idx) => (
                      <img key={idx} src={logo.img} alt={logo.name} className="h-20 w-auto mx-auto" />
                    ))}
                  </Marquee>
                  <h2 className="text-2xl font-semibold text-center text-blue-600 mt-4">{project.title}</h2>
                  <p className="text-center text-gray-600 mt-2">{truncateDescription(project.description)}</p>
                  <div className="mt-4 flex space-x-2">
                    <a 
                      href={project.githubUrl} 
                      className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    <a 
                      href={project.liveUrl} 
                      className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700 transition"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {currentProject && <DialogBox project={currentProject} onClose={closeModal} />}
      </div>
      <div className="hidden md:block h-1 w-2/3 bg-amber-400 mb-4 rounded-lg mt-40 mx-auto"></div>
    </div>
  );
};

export default MyProjects;
