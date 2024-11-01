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
      { name: "Microsoft", img: "/public/gym1.png" },
      { name: "Apple", img: "/public/gym2.png" },
      { name: "Apple", img: "/public/gym3.png" },
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
    title: "Abhivyakta ",
    description: "Developed A landing page for the Abhivyakta website which is an  Indian Version of Nagish Application ",
    logos: [
      { name: "LinkedIn", img: "/Abhi1.png" },
      { name: "Twitter", img: "/Abhi2.png" },
      { name: "Twitter", img: "/Abhi3.png" }
    ],
    githubUrl: "#",
    liveUrl: "#",
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
    <div id="projects">
      <h2 className="text-5xl font-extrabold text-amber-500 mb-4 mt-24 text-center">My Projects</h2>
      <div className="flex flex-col items-center justify-start min-h-screen p-8 bg-white my-12">
        
        <div className="w-full bg-gray-100 border border-gray-300 rounded-lg shadow-lg p-8 mb-8">
          <div className="mb-4">
            <h2 className="text-3xl font-semibold text-blue-600">Frontend Projects</h2>
            <p className="text-gray-600 mt-2">Explore the following projects built with React.</p>
          </div>

          <div className="flex overflow-x-auto space-x-8 py-4 snap-x snap-mandatory">
            {projectData.map((project, index) => (
              <div key={index} className="flex-none w-80 h-[50vh] border border-gray-300 rounded-lg shadow-md bg-white transform transition-transform duration-300 hover:scale-105 snap-center cursor-pointer"
                   onClick={() => handleProjectClick(project)}>
                <div className="flex flex-col items-center justify-center h-full p-2 ">
                  <Marquee className="h-36 w-full overflow-hidden" singleItem={true}>
                    {project.logos.map((logo, idx) => (
                      <img key={idx} src={logo.img} alt={logo.name} className="h-40 w-60 mx-auto" />
                    ))}
                  </Marquee>
                  <h2 className="text-2xl font-semibold text-center text-blue-600 mt-4">{project.title}</h2>
                  <p className="text-center text-gray-600 mt-2">{truncateDescription(project.description)}</p>
                  <button className="mt-4 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition">
                    View More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {currentProject && <DialogBox project={currentProject} onClose={closeModal} />}
      </div>
      <div className="hidden md:block h-1 w-2/3 bg-amber-400 mb-4 rounded-lg mb-40"></div>
    </div>
  );
};

export default MyProjects;
