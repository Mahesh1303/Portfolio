


const Education=()=> {
    

  return (
    <section id='Education' className="bg-gray-900">
          <div className="space-y-8  p-52">
            <h3 className="text-4xl font-bold text-amber-500 text-center mb-6">
              Education
            </h3>

            <div className="flex items-center justify-center ">
              <div className="flex flex-col items-center p-6">
                <h4 className="text-3xl font-semibold text-white">
                  Secondary Education
                </h4>
                <p className=" text-lg mt-1 text-white">CBSE, Pune</p>
                <p className="text-gray-500 text-base italic mt-1">
                  Completed
                </p>
              </div>
              <div className="h-24 border-l-2 border-gray-300 mx-6"></div>{" "}
              <div className="flex flex-col items-center p-6 text-white">
                <h4 className="text-3xl font-semibold">
                  Bachelor of Computer Engineering
                </h4>
                <p className=" text-lg mt-1 text-white">
                  Savitribai Phule Pune University
                </p>
                <p className="text-gray-500 text-base italic mt-1">
                  In Progress
                </p>
              </div>
            </div>
          </div>
        </section>
      
  )
}

export default Education