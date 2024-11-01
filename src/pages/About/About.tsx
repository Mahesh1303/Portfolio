import SocialIcons from "@/Components/PgComponets/Dockcomp"; 

export default function About() {
  return (
    <section id="about" className="mt-10 pt-20">
      <div className="relative min-h-screen">
        <section className="flex flex-col md:flex-row items-center justify-center w-full h-screen p-6 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg"></div>

          <div className="flex-1 z-10 text-center md:text-left p-8 py-16 space-y-14">
            {" "}
            <h2 className="text-5xl font-extrabold text-amber-500 mb-4 text-center">
              About Me
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-700 transition-all duration-300 hover:text-amber-400">
                I am a passionate web developer. So far, I have focused on
                Frontend and related technologies. While I may not excel in
                creativity, I have a strong grasp of the logic behind it.
              </p>
              <p className="text-lg text-gray-700 transition-all duration-300 hover:text-amber-400">
                Currently, I am learning backend development to expand my skill
                set, and I am also diving into Web3 technologies.
              </p>
              <p className="text-lg text-gray-700 transition-all duration-300 hover:text-amber-400">
                I'm excited about the possibilities of combining knowledge with
                my skills and exploring new Challenges in development.
              </p>
            </div>
            
            <div className="mt-6">
              <a
                href="/MaheshCV.pdf"
                download
                className="bg-amber-500 text-white px-4 py-2 rounded-lg shadow hover:bg-amber-600 transition duration-300"
              >
                Download Resume
              </a>
            </div>
            <div className="hidden md:block h-1 w-full bg-amber-400 mt-4 mb-4 rounded-lg"></div>
          </div>

          <div className="flex-1 flex justify-center items-center p-4 z-10 mb-">
            <div className="relative w-80 h-80 md:w-96 md:h-96 transition-transform duration-300 hover:scale-110">
              <img
                src="/public/Profile.png"
                alt="Mahesh Divate"
                className="object-cover w-full h-full rounded-full shadow-lg border-4 border-white transition duration-300 hover:shadow-2xl"
              />
            </div>
          </div>
        </section>

        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <SocialIcons />
        </div>
      </div>
    </section>
  );
}
