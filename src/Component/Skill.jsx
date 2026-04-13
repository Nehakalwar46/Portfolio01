import { FaHtml5, FaCss3Alt, FaReact, FaJs } from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

function Skill() {
  return (
    <>
      {/* DESKTOP */}
      <section id="skill">
      <div  className="hidden md:block bg-gray-900 text-white p-10">
        <h2 className="text-3xl font-bold mb-6">My Skills</h2>

        {/* HTML */}
        <div className="mb-5">
          <div className="flex justify-between items-center mb-1">
            <span className="flex items-center gap-2">
              <FaHtml5 className="text-orange-500" /> HTML
            </span>
            <span>90%</span>
          </div>

          <div className="w-full bg-gray-700 h-2 rounded">
            <div className="bg-orange-500 h-2 rounded" style={{ width: "90%" }}></div>
          </div>
        </div>

        {/* CSS */}
        <div className="mb-5">
          <div className="flex justify-between items-center mb-1">
            <span className="flex items-center gap-2">
              <FaCss3Alt className="text-blue-500" /> CSS
            </span>
            <span>80%</span>
          </div>

          <div className="w-full bg-gray-700 h-2 rounded">
            <div className="bg-blue-500 h-2 rounded" style={{ width: "80%" }}></div>
          </div>
        </div>

        {/* JS */}
        <div className="mb-5">
          <div className="flex justify-between items-center mb-1">
            <span className="flex items-center gap-2">
              <FaJs className="text-emerald-300" /> JS
            </span>
            <span>60%</span>
          </div>

          <div className="w-full bg-gray-700 h-2 rounded">
            <div className="bg-emerald-700 h-2 rounded" style={{ width: "60%" }}></div>
          </div>
        </div>

        {/* React */}
        <div className="mb-5">
          <div className="flex justify-between items-center mb-1">
            <span className="flex items-center gap-2">
              <FaReact className="text-cyan-400" /> React
            </span>
            <span>70%</span>
          </div>

          <div className="w-full bg-gray-700 h-2 rounded">
            <div className="bg-cyan-400 h-2 rounded" style={{ width: "70%" }}></div>
          </div>
        </div>

        {/* MySQL */}
        <div className="mb-5">
          <div className="flex justify-between items-center mb-1">
            <span className="flex items-center gap-2">
              <SiMysql className="text-cyan-400" /> MySQL
            </span>
            <span>70%</span>
          </div>

          <div className="w-full bg-gray-700 h-2 rounded">
            <div className="bg-cyan-400 h-2 rounded" style={{ width: "70%" }}></div>
          </div>
        </div>

        {/* MongoDB */}
        <div className="mb-5">
          <div className="flex justify-between items-center mb-1">
            <span className="flex items-center gap-2">
              <SiMongodb className="text-blue-500" /> MongoDB
            </span>
            <span>80%</span>
          </div>

          <div className="w-full bg-gray-700 h-2 rounded">
            <div className="bg-blue-500 h-2 rounded" style={{ width: "80%" }}></div>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <section  className="md:hidden min-h-screen items-center bg-gray-700 text-white px-6">
        <h2 className="text-3xl font-bold mb-6">My Skills</h2>

        <div className="flex justify-center gap-15">
          <div>
            <div className="w-32 h-32 mb-8 bg-amber-50 rounded-2xl">
              <CircularProgressbarWithChildren value={90}>
                <FaHtml5 className="text-orange-500 text-7xl" />
              </CircularProgressbarWithChildren>
              <p className="text-center mb-8">90%</p>
            </div>

            <div className="w-32 h-32 mb-8 bg-amber-50 rounded-2xl">
              <CircularProgressbarWithChildren value={80}>
                <FaCss3Alt className="text-blue-800 text-7xl" />
              </CircularProgressbarWithChildren>
              <p className="text-center mb-8">80%</p>
            </div>

            <div className="w-32 h-32 mb-8 bg-amber-50 rounded-2xl">
              <CircularProgressbarWithChildren value={60}>
                <FaReact className="text-blue-500 text-7xl" />
              </CircularProgressbarWithChildren>
              <p className="text-center mb-8">60%</p>
            </div>
          </div>

          <div>
            <div className="w-32 h-32 mb-8 bg-amber-50 rounded-2xl">
              <CircularProgressbarWithChildren value={60}>
                <FaJs className="text-orange-500 text-7xl" />
              </CircularProgressbarWithChildren>
              <p className="text-center mb-10">60%</p>
            </div>

            <div className="w-32 h-32 mb-8 bg-amber-50 rounded-2xl">
              <CircularProgressbarWithChildren value={90}>
                <SiMongodb className="text-orange-500 text-7xl" />
              </CircularProgressbarWithChildren>
              <p className="text-center mb-8">80%</p>
            </div>

            <div className="w-32 h-32 mb-8 bg-amber-50 rounded-2xl">
              <CircularProgressbarWithChildren value={90}>
                <SiMysql className="text-orange-500 text-7xl" />
              </CircularProgressbarWithChildren>
              <p className="text-center mb-8">70%</p>
            </div>
          </div>
        </div>
      </section>
      </section>
    </>
  );
}

export default Skill;