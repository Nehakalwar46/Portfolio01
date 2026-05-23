import profile from "./image/profile.jpg";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gray-900 text-white px-6 overflow-hidden"
    >

     
      <div className="absolute inset-0 grid grid-cols-6 gap-10 p-10 text-gray-500 opacity-10 text-6xl animate-pulse">
        <FaHtml5 />
        <FaCss3Alt />
        <FaJs />
        <FaReact />
        <SiMongodb />
        <SiMysql />

        <FaReact />
        <FaJs />
        <FaHtml5 />
        <FaCss3Alt />
        <SiMysql />
        <SiMongodb />

        <FaHtml5 />
        <FaReact />
        <FaJs />
        <FaCss3Alt />
        <SiMongodb />
        <SiMysql />

        <FaHtml5 />
        <FaReact />
        <FaJs />
        <FaCss3Alt />
        <SiMongodb />
        <SiMysql />
      </div>

  
      <div className="relative w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

  
        <div className="w-full md:w-1/2 text-center md:text-left">

          {/* Mobile Image */}
          <div className="md:hidden flex justify-center mb-6">
            <img
              src={profile}
              alt="Neha"
              className="w-40 h-40 rounded-full object-cover shadow-lg animate-float"
            />
          </div>

          <h1 className="animate-fade-in text-3xl md:text-5xl font-bold">
            Hi, I'm
          </h1>

          <h2 className="animate-fade-in text-2xl md:text-4xl font-bold text-blue-400 mt-2">
            NEHA KALWAR
          </h2>

          <p className="animate-fade-in mt-4 text-sm md:text-base text-gray-300 leading-relaxed">
            I am a hardworking and curious individual passionate about web development.
            I enjoy turning ideas into reality through code and creating simple,
            attractive, and user-friendly websites. I am constantly learning and
            improving myself to become a better developer every day.
          </p>
        </div>

        {/* RIGHT SIDE (Desktop Image) */}
        <div className="hidden md:flex w-full md:w-1/2 justify-center">
          <img
            src={profile}
            alt="Neha"
            className="w-80 h-80 object-cover rounded-[60px] shadow-xl animate-float transition duration-300 hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;