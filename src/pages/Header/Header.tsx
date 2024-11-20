import  { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const NavLinks = () => (
    <>
      {['About Me', 'My Skills', 'My Projects', 'My Contact'].map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase().replace(/\s+/g, '')}`}
          className="text-lg text-white hover:bg-amber-700 px-6 py-3 rounded-lg transition duration-200 transform hover:scale-105 font-semibold block w-full text-center"
        >
          {link}
        </a>
      ))}
    </>
  );

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-30 bg-amber-500 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="p-6 flex flex-col sm:flex-row justify-between items-center relative">
          {/* Left Navigation Links */}
          <div className="hidden sm:flex space-x-8 absolute left-6">
            <a
              href="#about"
              className="text-lg sm:text-xl text-white hover:text-amber-200 transition duration-200 transform hover:scale-105 font-semibold"
            >
              About Me
            </a>
            <a
              href="#skills"
              className="text-lg sm:text-xl text-white hover:text-amber-200 transition duration-200 transform hover:scale-105 font-semibold"
            >
              My Skills
            </a>
          </div>

          {/* Centered Name */}
          <a
            href="#about"
            className="text-xl sm:text-3xl font-bold text-white absolute left-1/2 transform -translate-x-1/2 font-logo transition duration-300 hover:scale-105"
          >
            MAHESH DIVATE
          </a>

          {/* Mobile Menu Toggle - Vertically Centered on Right */}
          <button 
            onClick={toggleSidebar} 
            className="sm:hidden absolute top-1/2 right-6 transform -translate-y-1/2 z-50"
            aria-label="Toggle sidebar"
          >
            {isSidebarOpen ? <X color="white" /> : <Menu color="white" />}
          </button>

          {/* Right Navigation Links */}
          <div className="hidden sm:flex space-x-8 absolute right-6">
            <a
              href="#projects"
              className="text-lg sm:text-xl text-white hover:text-amber-200 transition duration-200 transform hover:scale-105 font-semibold"
            >
              My Projects
            </a>
            <a
              href="#contact"
              className="text-lg sm:text-xl text-white hover:text-amber-200 transition duration-200 transform hover:scale-105 font-semibold"
            >
              My Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`
        fixed top-0 right-0 h-full w-64 bg-amber-500 z-40 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col h-full pt-24 space-y-6 items-center">
          <NavLinks />
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
        />
      )}
    </>
  );
}