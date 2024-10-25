
export function MyContact() {
  return (
    <section id='contact'>
    <h2 className="text-5xl font-extrabold text-amber-500 mb-4 -mt-10 text-center">Contact Me</h2>
      <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
                <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                  Get in touch:
                </h1>
                <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                  Fill in the form to start a conversation
                </p>

                {/* Social Links */}
                <div className="flex items-center mt-8 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path d="M22.46 6c-1.48.66-3.06 1.1-4.74 1.3a8.32 8.32 0 003.65-4.6c-1.6.94-3.36 1.62-5.22 2a4.14 4.14 0 00-7.05 3.76C7.69 8.16 4.07 6.12 1.64 3.16c-1.05 1.8-.52 4.19 1.13 5.39A4.1 4.1 0 01.64 8.6c0 .05 0 .1.01.15 0 2.04 1.46 3.75 3.42 4.15-.65.17-1.33.17-2 0 .5 1.55 1.96 2.68 3.68 2.72-1.35 1.06-3.06 1.68-4.88 1.68-.32 0-.65-.02-.96-.06C4.41 19.14 7.65 21 11.14 21c7.63 0 11.77-6.3 11.77-11.75 0-.18 0-.35-.01-.52A8.34 8.34 0 0022.46 6z" />
                  </svg>
                  <a
                    href="https://x.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 text-md tracking-wide font-semibold w-40"
                  >
                    X 
                  </a>
                </div>

                <div className="flex items-center mt-4 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path d="M12 2.25c-5.3 0-9.75 4.45-9.75 9.75S6.7 21 12 21s9.75-4.45 9.75-9.75S17.3 2.25 12 2.25zm-2.5 14.5h-2v-8h2v8zm-1-9.25c-.688 0-1.25-.56-1.25-1.25s.562-1.25 1.25-1.25 1.25.56 1.25 1.25-.562 1.25-1.25 1.25zM19.25 17.5h-2v-4.25c0-1.063-.375-1.75-1.25-1.75-.688 0-1.062.438-1.25.875-.062.125-.062.25-.062.375v5.25h-2v-8h2v1.125c.25-.438.875-1.125 2-1.125 1.25 0 2.25.875 2.25 2.5v5.5z" />
                  </svg>
                  <a
                    href="https://www.linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 text-md tracking-wide font-semibold w-40"
                  >
                    LinkedIn
                  </a>
                </div>

                <div className="flex items-center mt-4 text-gray-600">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:maheshddivate@gmail.com"
                    className="ml-4 text-md tracking-wide font-semibold w-40"
                  >
                    Email
                  </a>
                </div>
              </div>

              <form className="p-6 flex flex-col justify-center">
                <div className="flex flex-col">
                  <label htmlFor="name" className="hidden">
                    Full Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label htmlFor="email" className="hidden">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label htmlFor="tel" className="hidden">
                    Number
                  </label>
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    placeholder="Telephone Number"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 text-center md:text-left p-2 transition-transform duration-500 hover:scale-105 space-y-2">
        <h2 className="text-2xl text-gray-800 mb-4 animate-fade-in text-center">
          You Can Also Contact Me Via My Profiles 
        </h2>
      </div>
    </section>
  );
}
