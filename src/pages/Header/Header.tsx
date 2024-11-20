import  { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Close sidebar
    setIsSidebarOpen(false);
    
    // Get the href and scroll to the section
    const targetId = (e.target as HTMLAnchorElement).getAttribute('href');
    
    if (targetId) {
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        
        // Prevent default anchor behavior
        e.preventDefault();
      }
    }
  };

  const NavLinks = () => (
    <>
      <a
        href="#about"
        onClick={handleNavigation}
        className="text-lg sm:text-xl text-white hover:text-amber-200 transition duration-200 transform hover:scale-105 font-semibold"
      >
        About Me
      </a>
      <a
        href="#skills"
        onClick={handleNavigation}
        className="text-lg sm:text-xl text-white hover:text-amber-200 transition duration-200 transform hover:scale-105 font-semibold"
      >
        My Skills
      </a>
      <a
        href="#projects"
        onClick={handleNavigation}
        className="text-lg sm:text-xl text-white hover:text-amber-200 transition duration-200 transform hover:scale-105 font-semibold"
      >
        My Projects
      </a>
      <a
        href="#contact"
        onClick={handleNavigation}
        className="text-lg sm:text-xl text-white hover:text-amber-200 transition duration-200 transform hover:scale-105 font-semibold"
      >
        My Contact
      </a>
    </>
  );

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-30 hidden sm:flex flex-col sm:flex-row justify-between items-center p-6 bg-amber-500 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="flex flex-col sm:flex-row sm:space-x-8 sm:mb-0">
          <a
            href="#about"
            onClick={handleNavigation}
            className="text-lg sm:text-xl text-white hover:text-amber-200 transition duration-200 transform hover:scale-105 font-semibold"
          >
            About Me
          </a>
          <a
            href="#skills"
            onClick={handleNavigation}
            className="text-lg sm:text-xl text-white hover:text-amber-200 transition duration-200 transform hover:scale-105 font-semibold"
          >
            My Skills
          </a>
        </div>
        
        <a
          href="#about"
          onClick={handleNavigation}
          className="text-xl sm:text-3xl font-bold text-white mb-2 sm:mb-0 font-logo transition duration-300 transform hover:scale-105"
        >
          MAHESH DIVATE
        </a>
        
        <div className="flex flex-col sm:flex-row sm:space-x-8">
          <a
            href="#projects"
            onClick={handleNavigation}
            className="text-lg sm:text-xl text-white hover:text-amber-200 transition duration-200 transform hover:scale-105 font-semibold"
          >
            My Projects
          </a>
          <a
            href="#contact"
            onClick={handleNavigation}
            className="text-lg sm:text-xl text-white hover:text-amber-200 transition duration-200 transform hover:scale-105 font-semibold"
          >
            My Contact
          </a>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-30 sm:hidden bg-amber-500 p-4 flex justify-between items-center">
        <a
          href="#about"
          onClick={handleNavigation}
          className="text-xl font-bold text-white font-logo"
        >
          MAHESH DIVATE
        </a>
        <button 
          onClick={toggleSidebar}
          className="text-white focus:outline-none"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-40"
          onClick={toggleSidebar}
        >
          <div 
            className="fixed top-0 right-0 w-64 h-full bg-amber-500 shadow-lg p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-4">
              <NavLinks />
            </div>
          </div>
        </div>
      )}
    </>
  );
}