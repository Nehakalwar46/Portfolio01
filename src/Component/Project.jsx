import port from "./image/port.png";
import pic3 from "./image/pic3.png";

function Project() {
  return (
    <section
      id="project"
      className="bg-gray-900 text-white px-6 py-16"
    >
     
      <h1 className="text-4xl text-blue-400 text-center mb-12 font-bold">
        My Projects
      </h1>

      <div className="space-y-16">

        
        <div className="md:flex items-center gap-10">

        
          <img
            src={port}
            alt="Portfolio Project"
            className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-lg"
          />

          <div className="mt-6 md:mt-0">
            <h2 className="text-2xl text-blue-300 font-semibold mb-3">
              Personal Portfolio Website
            </h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              This is my personal portfolio website where I showcase my
              skills, projects, and achievements. It is designed using
              React and Tailwind CSS with a clean and modern UI. The
              website is fully responsive and provides a smooth user
              experience across different devices.
            </p>

          
            <div className="flex gap-4">
              <button className="bg-blue-400 text-black px-4 py-2 rounded-lg hover:bg-blue-500 transition">
                Live Demo
              </button>

              <button className="border border-blue-400 px-4 py-2 rounded-lg hover:bg-blue-400 hover:text-black transition">
                Source Code
              </button>
            </div>
          </div>
        </div>

       
        <div className="md:flex items-center gap-10 flex-row-reverse">

       
          <img
            src={pic3}
            alt="Weather App"
            className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-lg"
          />

     
          <div className="mt-6 md:mt-0">
            <h2 className="text-2xl text-blue-300 font-semibold mb-3">
              Weather App (API Based)
            </h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              This project is a weather application that fetches real-time
              weather data using an API. Users can search for any city and
              get current temperature, weather conditions, and other
              details. It is built using JavaScript and API integration,
              focusing on functionality and user interaction.
            </p>

         
            <div className="flex gap-4">
              <button className="bg-blue-400 text-black px-4 py-2 rounded-lg hover:bg-blue-500 transition">
                Live Demo
              </button>

              <button className="border border-blue-400 px-4 py-2 rounded-lg hover:bg-blue-400 hover:text-black transition">
                Source Code
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Project;