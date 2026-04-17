import plus2 from "./image/plus2.jpg";
import bachelor from "./image/bachelor.jpg";
function Education() {
  return (
<section id="education" className="min-h-screen mx-auto  bg-gray-700 text-white px-6">
    
      <p className="flex justify-center mb-10 font-bold text-2xl md:text-4xl flex justify-center">MY ACADEMIC JOURNEY</p>

      <div className="md:flex">
       <p className="hidden md:block">Lorem ipsum dolor sit amet consectetur adipisicing elit.Impedit, aspernatur.</p>
        <img
          src={plus2}
          alt="Neha"
          className="w-80 h-80 object-cover rounded-[60px] shadow-xl"
        />
          <p className="md:hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit.Impedit, aspernatur.</p>
      </div>

      <div className=" justify-center md:flex mt-8  gap-10">
          <img
          src={bachelor}
          alt="Neha"
          className="w-80 h-80 object-cover rounded-[60px] shadow-xl mb-5"
        />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.Sunt, officia?</p>
      

      </div>

    </section>

  );
}

export default Education;