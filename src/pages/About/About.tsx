import SocialIcons from "@/Components/PgComponets/Dockcomp";

export default function About() {
  return (
    <section id="about" className="mt-10 lg:mt-2 pt-4  lg:pt-2">
      <div className="relative min-h-screen">
        <section className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen px-4 sm:px-6 sm:mt-14 lg:px-8 xl:px-16 bg-gray-900">
          <div className="bg-gray-700 rounded-lg"></div>

          <div className="flex-1 z-10 text-center md:text-left p-4 sm:p-6 lg:p-8 xl:p-10 space-y-8 lg:space-y-12 max-w-2xl mx-auto md:mx-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-amber-500 mb-6 lg:mb-8 text-center md:text-left">
              About Me
            </h2>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-300 transition-all duration-300 hover:text-amber-400 leading-relaxed">
                I am a passionate web developer. So far, I have focused on
                Frontend and related technologies. While I may not excel in
                creativity, I have a strong grasp of the logic behind it.
              </p>
              <p className="text-base sm:text-lg text-gray-300 transition-all duration-300 hover:text-amber-400 leading-relaxed">
                Currently, I am learning backend development to expand my skill
                set, and I am also diving into Web3 technologies.
              </p>
              <p className="text-base sm:text-lg text-gray-300 transition-all duration-300 hover:text-amber-400 leading-relaxed">
                I'm excited about the possibilities of combining knowledge with
                my skills and exploring new challenges in development.
              </p>
            </div>

            <div className="mt-8 sm:mt-10">
              <a
                href="/MaheshCV.pdf"
                download
                className="inline-block bg-amber-500 text-white px-6 py-3 rounded-lg shadow hover:bg-amber-600 transition duration-300 font-medium"
              >
                Download Resume
              </a>
            </div>

            <div className="hidden md:block h-1 w-full bg-amber-400 my-6 lg:my-8 rounded-lg"></div>
          </div>

          <div className="flex-1 flex justify-center items-center p-4 sm:p-6 lg:p-8 xl:p-10 z-10 mt-8 md:mt-0">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-88 md:h-88 lg:w-96 lg:h-96 xl:w-104 xl:h-104 transition-transform duration-300 hover:scale-110">
              <img
                src="/Profile.png"
                alt="Mahesh Divate"
                className="object-cover w-full h-full rounded-full shadow-lg border-4 border-gray-800 transition duration-300 hover:shadow-2xl"
              />
            </div>
          </div>
        </section>

        <div className="fixed bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <SocialIcons />
        </div>
      </div>
    </section>
  );
}
