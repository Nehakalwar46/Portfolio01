import { FaHtml5, FaCss3Alt, FaReact, FaJs } from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

function Skill() {
  return (
    <section id="skill" className="bg-gray-900 text-white px-6 py-10">

      {/* DESKTOP */}
      <div className="hidden md:block max-w-2xl mx-auto">
   <h1 className="text-4xl text-blue-400 text-center mb-12  mt-8 font-bold">
        My Skills
      </h1>

        {/* Skill Item */}
        <div className="mb-5">
          <div className="flex justify-between mb-1">
            <span className="flex items-center gap-2">
              <FaHtml5 className="text-orange-500" /> HTML
            </span>
            <span>90%</span>
          </div>
          <div className="w-full bg-gray-700 h-2 rounded">
            <div className="bg-orange-500 h-2 rounded" style={{ width: "90%" }}></div>
          </div>
        </div>

        <div className="mb-5">
          <div className="flex justify-between mb-1">
            <span className="flex items-center gap-2">
              <FaCss3Alt className="text-blue-500" /> CSS
            </span>
            <span>80%</span>
          </div>
          <div className="w-full bg-gray-700 h-2 rounded">
            <div className="bg-blue-500 h-2 rounded" style={{ width: "80%" }}></div>
          </div>
        </div>

        <div className="mb-5">
          <div className="flex justify-between mb-1">
            <span className="flex items-center gap-2">
              <FaJs className="text-yellow-400" /> JS
            </span>
            <span>60%</span>
          </div>
          <div className="w-full bg-gray-700 h-2 rounded">
            <div className="bg-yellow-400 h-2 rounded" style={{ width: "60%" }}></div>
          </div>
        </div>

        <div className="mb-5">
          <div className="flex justify-between mb-1">
            <span className="flex items-center gap-2">
              <FaReact className="text-cyan-400" /> React
            </span>
            <span>70%</span>
          </div>
          <div className="w-full bg-gray-700 h-2 rounded">
            <div className="bg-cyan-400 h-2 rounded" style={{ width: "70%" }}></div>
          </div>
        </div>

        <div className="mb-5">
          <div className="flex justify-between mb-1">
            <span className="flex items-center gap-2">
              <SiMysql className="text-blue-400" /> MySQL
            </span>
            <span>70%</span>
          </div>
          <div className="w-full bg-gray-700 h-2 rounded">
            <div className="bg-blue-400 h-2 rounded" style={{ width: "70%" }}></div>
          </div>
        </div>

        <div className="mb-5">
          <div className="flex justify-between mb-1">
            <span className="flex items-center gap-2">
              <SiMongodb className="text-green-500" /> MongoDB
            </span>
            <span>65%</span>
          </div>
          <div className="w-full bg-gray-700 h-2 rounded">
            <div className="bg-green-500 h-2 rounded" style={{ width: "65%" }}></div>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden">
        <h1 className="text-4xl text-blue-400 text-center mb-12 mt-7 font-bold">
        My Skills
      </h1>
        

        <div className="flex flex-wrap justify-center gap-6">
          
          {/* Skill Circle */}
          <div className="w-28 text-center">
            <CircularProgressbarWithChildren value={90}>
              <FaHtml5 className="text-orange-500 text-4xl" />
            </CircularProgressbarWithChildren>
            <p className="mt-2">90%</p>
          </div>

          <div className="w-28 text-center">
            <CircularProgressbarWithChildren value={80}>
              <FaCss3Alt className="text-blue-500 text-4xl" />
            </CircularProgressbarWithChildren>
            <p className="mt-2">80%</p>
          </div>

          <div className="w-28 text-center">
            <CircularProgressbarWithChildren value={60}>
              <FaJs className="text-yellow-400 text-4xl" />
            </CircularProgressbarWithChildren>
            <p className="mt-2">60%</p>
          </div>

          <div className="w-28 text-center">
            <CircularProgressbarWithChildren value={70}>
              <FaReact className="text-cyan-400 text-4xl" />
            </CircularProgressbarWithChildren>
            <p className="mt-2">70%</p>
          </div>

          <div className="w-28 text-center">
            <CircularProgressbarWithChildren value={65}>
              <SiMongodb className="text-green-500 text-4xl" />
            </CircularProgressbarWithChildren>
            <p className="mt-2">65%</p>
          </div>

          <div className="w-28 text-center">
            <CircularProgressbarWithChildren value={70}>
              <SiMysql className="text-blue-400 text-4xl" />
            </CircularProgressbarWithChildren>
            <p className="mt-2">70%</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skill;