const Education = () => {
  return (
    <section id='Education' className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-4xl font-bold text-amber-600 text-center mb-16">
          Education
        </h3>

        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Secondary Education Card */}
          <div className="relative w-full md:w-1/3 p-8 mb-8 md:mb-0 bg-gray-50 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
            <div className="absolute -top-6 -left-6 h-12 w-12 rounded-full bg-amber-500 flex items-center justify-center">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h4 className="text-2xl font-semibold text-gray-800 mb-2">
              Secondary Education
            </h4>
            <p className="text-lg text-gray-600 mb-1">CBSE, Pune</p>
            <p className="text-amber-600 text-base font-medium mt-4">
              Completed • 2021
            </p>
          </div>

          {/* Divider - Visible only on medium screens and up */}
          <div className="hidden md:block h-32 w-1 bg-gradient-to-b from-amber-400 to-amber-600 mx-8 rounded-full"></div>

          {/* Bachelor's Degree Card */}
          <div className="relative w-full md:w-1/3 p-8 bg-gray-50 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
            <div className="absolute -top-6 -left-6 h-12 w-12 rounded-full bg-amber-500 flex items-center justify-center">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <h4 className="text-2xl font-semibold text-gray-800 mb-2">
              Bachelor of Computer Engineering
            </h4>
            <p className="text-lg text-gray-600 mb-1">
              Savitribai Phule Pune University
            </p>
            <p className="text-amber-600 text-base font-medium mt-4">
              In Progress • Expected 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education