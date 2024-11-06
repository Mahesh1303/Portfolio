export function MyContact() {
  return (
    <section id='contact' className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      {/* Decorative line - responsive width */}
      <div className="hidden md:block h-1 w-3/4 bg-amber-400 mx-auto my-8 lg:my-12 rounded-lg"></div>

      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-amber-500 mb-8 sm:mb-12 text-center">
        Contact Me
      </h2>

      {/* Main Container */}
      <div className="flex items-center justify-center min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] ">
        <div className="w-full max-w-4xl  shadow-lg rounded-lg p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Get in Touch Section */}
            <div className="p-4 sm:p-6 bg-gray-300 rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02]">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 font-extrabold text-center mb-6 sm:mb-8">
                Get in Touch
              </h3>

              {/* Social Links */}
              <div className="flex flex-col items-center space-y-6 text-gray-600">
                {/* X/Twitter Link */}
                <div className="flex items-center w-full max-w-xs transform transition-transform duration-300 hover:translate-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <a
                    href="http://x.com/Mahesh1561332"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 text-sm sm:text-base lg:text-lg tracking-wide font-semibold hover:text-blue-500 transition-colors duration-300"
                  >
                    X
                  </a>
                </div>

                {/* LinkedIn Link */}
                <div className="flex items-center w-full max-w-xs transform transition-transform duration-300 hover:translate-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <a
                    href="https://www.linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 text-sm sm:text-base lg:text-lg tracking-wide font-semibold hover:text-blue-500 transition-colors duration-300"
                  >
                    LinkedIn
                  </a>
                </div>

                {/* Email Link */}
                <div className="flex items-center w-full max-w-xs transform transition-transform duration-300 hover:translate-x-2">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a
                    href="mailto:maheshddivate@gmail.com"
                    className="ml-4 text-sm sm:text-base lg:text-lg tracking-wide font-semibold hover:text-blue-500 transition-colors duration-300"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>

            {/* Additional Info Section */}
            <div className="flex flex-col items-center justify-center p-4 sm:p-6 bg-gray-100 rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02]">
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-800 mb-4 sm:mb-6 text-center">
                You Can Also Contact Me Via My Profiles
              </h2>
              <p className="text-center text-gray-600 text-sm sm:text-base lg:text-lg">
                Feel free to reach out through the above links or send me a message!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}