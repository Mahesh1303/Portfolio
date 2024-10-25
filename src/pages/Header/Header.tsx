export default function Header() {
  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center py-4 px-6 m-4 bg-gradient-to-r from-amber-500 to-amber-300 shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl">
      <div className="flex flex-col sm:flex-row sm:space-x-8 sm:mb-0">
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

      <a 
        href="#about" 
        className="text-xl sm:text-3xl font-bold text-white mb-2 sm:mb-0 font-logo transition duration-300 transform hover:scale-105"
      >
        MAHESH DIVATE
      </a>

      <div className="flex flex-col sm:flex-row sm:space-x-8">
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
    </nav>
  );
}
