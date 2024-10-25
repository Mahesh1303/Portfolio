import SocialIcons from "@/Components/PgComponets/Dockcomp"; // Make sure this path matches your actual file structure

export default function About() {
  return (
    <section id="about" className="mt-10 pt-20">
      <div className="relative min-h-screen">
        <section className="flex flex-col md:flex-row items-center justify-center w-full h-screen p-6 bg-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg"></div>

          {/* Main Content Container */}
          <div className="flex-1 z-10 text-center md:text-left p-8 py-16 space-y-14">
            {" "}
            {/* Added vertical padding */}
            <h2 className="text-5xl font-extrabold text-amber-500 mb-4 text-center">
              About Me
            </h2>
            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg text-gray-700 transition-all duration-300 hover:text-amber-400">
                I am a passionate web developer. So far, I have focused on React
                and related technologies. While I may not excel in creativity, I
                have a strong grasp of the logic behind React.
              </p>
              <p className="text-lg text-gray-700 transition-all duration-300 hover:text-amber-400">
                Currently, I am learning backend development to expand my skill
                set, and I am also diving into Web3 technologies.
              </p>
              <p className="text-lg text-gray-700 transition-all duration-300 hover:text-amber-400">
                I'm excited about the possibilities of combining my frontend
                knowledge with backend skills and exploring new frontiers in
                development.
              </p>
            </div>
          {/* Education Section */}
<div className="space-y-8 mt-8">
<h3 className="text-4xl font-bold text-amber-500 text-center mb-6">Education</h3>

<div className="flex items-center justify-center">
  <div className="flex flex-col items-center p-6">
    <h4 className="text-3xl font-semibold text-gray-800">Secondary Education</h4>
    <p className="text-gray-700 text-lg mt-1">CBSE, Pune</p>
    <p className="text-gray-500 text-base italic mt-1">Completed</p>
  </div>
  
  <div className="h-24 border-l-2 border-gray-300 mx-6"></div> {/* Vertical line */}

  <div className="flex flex-col items-center p-6">
    <h4 className="text-3xl font-semibold text-gray-800">Bachelor of Computer Engineering</h4>
    <p className="text-gray-700 text-lg mt-1">Savitribai Phule Pune University</p>
    <p className="text-gray-500 text-base italic mt-1">In Progress</p>
  </div>
</div>
</div>



            {/* Download Resume Button */}
            <div className="mt-6">
              <a
                href="/path/to/resume.pdf"
                download
                className="bg-amber-500 text-white px-4 py-2 rounded-lg shadow hover:bg-amber-600 transition duration-300"
              >
                Download Resume
              </a>
            </div>
            {/* Decorative Element */}
            <div className="hidden md:block h-1 w-full bg-amber-400 mt-4 mb-4 rounded-lg"></div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center items-center p-4 z-10 mb-">
            <div className="relative w-80 h-80 md:w-96 md:h-96 transition-transform duration-300 hover:scale-110">
              <img
                src="/public/Profile.jpg" // Replace with your actual image URL
                alt="Mahesh Divate"
                className="object-cover w-full h-full rounded-full shadow-lg border-4 border-white transition duration-300 hover:shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Social Dock */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <SocialIcons />
        </div>
      </div>
    </section>
  );
}
