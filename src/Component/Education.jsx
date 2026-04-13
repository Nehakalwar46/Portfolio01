import plus2 from "./image/plus2.jpg";
import bachelor from "./image/bachelor.jpg";
function Education() {
  return (
<section id="education" className="min-h-screen items-center  bg-gray-700 text-white px-6">
    
      <p className="flex justify-center mb-10 font-bold text-2xl md:text-4xl">MY ACADEMIC JOURNEY</p>

      <div className="flex text-center md:mx-80">
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Impedit, aspernatur.</p>
        <img
          src={plus2}
          alt="Neha"
          className="w-80 h-80 object-cover rounded-[60px] shadow-xl"
        />
      </div>

      <div className="flex mt-8 text-center md:mx-80 gap-10">
          <img
          src={bachelor}
          alt="Neha"
          className="w-80 h-80 object-cover rounded-[60px] shadow-xl mb-20"
        />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.Sunt, officia?</p>
      

      </div>



    </section>

  );
}

export default Education;