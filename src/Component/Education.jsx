import plus2 from "./image/plus2.jpg";
import bachelor from "./image/bachelor.jpg";

function Education() {
  return (
    <section
      id="education"
      className="min-h-screen bg-gray-800 text-white px-6 py-10"
    >
      <h1 className="text-4xl text-blue-400 text-center mb-12 font-bold">
        My Academy Journey
      </h1>

      {/* Plus 2 */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
        <img
          src={plus2}
          alt="Plus 2"
          className="w-64 h-64 object-cover rounded-xl shadow"
        />
        <div>
<h4 className=" text-2xl md:text-4xl text-blue-300 text-left mb-12 font-bold ">
  Birgunj Public College(senior high school)
     
      <p className=" text-[15px]  md:text-xl text-blue-300 text-left  ">
      Panitanki,Birgunj-10
      </p>
      </h4>
        <p className="text-center md:text-left">
          I completed my higher secondary education (+2) in Management from Birgunj Public College. During this period, I built a strong foundation in core business subjects such as accounting, economics, and business studies. Along with academic learning, I also developed important skills like communication, teamwork, and time management. This phase played a significant role in shaping my interest in the management field and helped me gain confidence to pursue higher education with a clear direction. It also improved my analytical thinking and understanding of real-world business concepts.
         </p>
         </div>
      </div>

      {/* Bachelor */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={bachelor}
          alt="Bachelor"
          className="w-64 h-64 object-cover rounded-xl shadow"
        />
        <div>
<h4 className=" text-xl md:text-4xl text-blue-300 text-left mb-12 font-bold">
     Birgunj Institute Of Management(Graduate college)
    
      <p className=" text-[15px] md:text-xl text-blue-300 text-left  ">
     Murlichowk,Birgunj-10
      </p>
        </h4>
        <p className="text-center md:text-left">
          I pursued my bachelor's degree in BIT-M (Bachelor in Information Technology and Management) from Birgunj Public College. This program provided me with a balanced understanding of both technical and management fields. I gained knowledge in web development, programming, and database concepts along with business and management principles. During my studies, I worked on practical projects that enhanced my problem-solving abilities, creativity, and technical skills. This experience helped me become more confident in building real-world applications and prepared me to grow as a professional in the IT industry.
          </p>
          </div>
      </div>
    </section>
  );
}

export default Education;