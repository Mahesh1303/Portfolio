import React from 'react';
import Marquee from '../ui/marquee'; // Adjust the import path as necessary

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

interface DialogBoxProps {
  project: Project;
  onClose: () => void;
}

const DialogBox: React.FC<DialogBoxProps> = ({ project, onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose} // Close on overlay click
    >
      <div
        className="bg-white rounded-lg p-6 max-w-3xl w-full shadow-lg transition-transform transform hover:scale-105"
        onClick={(e) => e.stopPropagation()} // Prevent close on dialog click
      >
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">{project.title}</h2>
        
        {/* Scrollable description area */}
        <div className="mb-4 max-h-60 overflow-y-auto">
          <p className="text-gray-700 whitespace-pre-line">{project.description}</p>
        </div>

        <div className="h-48 w-full overflow-hidden mb-6">
          <Marquee singleItem={true}>
            {project.logos.map((logo, idx) => (
              <img key={idx} src={logo.img} alt={logo.name} className="h-48 w-64 mx-auto" />
            ))}
          </Marquee>
        </div>
        
        <div className="mt-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Links:</h3>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-600 hover:underline mb-1 transition duration-300 ease-in-out transform hover:scale-105"
          >
            GitHub Repository
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-600 hover:underline transition duration-300 ease-in-out transform hover:scale-105"
          >
            Live Project
          </a>
        </div>
        
        <button
          className="mt-6 w-full px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 transition duration-300 ease-in-out"
          onClick={onClose} // Close on button click
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DialogBox;
