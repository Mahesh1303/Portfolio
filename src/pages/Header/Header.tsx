import  { useState } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const NavLinks = () => (
    <>
      <Link 
        to="/#about" 
        onClick={closeSidebar}
        className="text-lg sm:text-xl text-white hover:text-amber-200 transition duration-200 transform hover:scale-105 font-semibold"
      >
        About Me
      </Link>
      <Link 
        to="/#skills" 
        onClick={closeSidebar}
        className="text-lg sm:text-xl text-white hover:text-amber-200 transition duration-200 transform hover:scale-105 font-semibold"
      >
        My Skills
      </Link>
      <Link 
        to="/#projects" 
        onClick={closeSidebar}
        className="text-lg sm:text-xl text-white hover:text-amber-200 transition duration-200 transform hover:scale-105 font-semibold"
      >
        My Projects
      </Link>
      <Link 
        to="/#contact" 
        onClick={closeSidebar}
        className="text-lg sm:text-xl text-white hover:text-amber-200 transition duration-200 transform hover:scale-105 font-semibold"
      >
        My Contact
      </Link>
    </>
  );

  return (
    <Router>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-30 hidden sm:flex flex-col sm:flex-row justify-between items-center p-6 bg-amber-500 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="flex flex-col sm:flex-row sm:space-x-8 sm:mb-0">
          <Link 
            to="/#about"
            className="text-lg sm:text-xl text-white hover:text-amber-200 transition duration-200 transform hover:scale-105 font-semibold"
          >
            About Me
          </Link>
          <Link 
            to="/#skills"
            className="text-lg sm:text-xl text-white hover:text-amber-200 transition duration-200 transform hover:scale-105 font-semibold"
          >
            My Skills
          </Link>
        </div>
        
        <Link 
          to="/#about"
          className="text-xl sm:text-3xl font-bold text-white mb-2 sm:mb-0 font-logo transition duration-300 transform hover:scale-105"
        >
          MAHESH DIVATE
        </Link>
        
        <div className="flex flex-col sm:flex-row sm:space-x-8">
          <Link 
            to="/#projects"
            className="text-lg sm:text-xl text-white hover:text-amber-200 transition duration-200 transform hover:scale-105 font-semibold"
          >
            My Projects
          </Link>
          <Link 
            to="/#contact"
            className="text-lg sm:text-xl text-white hover:text-amber-200 transition duration-200 transform hover:scale-105 font-semibold"
          >
            My Contact
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-30 sm:hidden bg-amber-500 p-4 flex justify-between items-center">
        <Link 
          to="/#about"
          className="text-xl font-bold text-white font-logo"
        >
          MAHESH DIVATE
        </Link>
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
          onClick={closeSidebar}
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
    </Router>
  );
}