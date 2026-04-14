import pic4 from "./image/pic4.png";
import pic3 from "./image/pic3.png";
function Project() {
  return (
    <section id="project" className="min-h-screen  items-center bg-gray-700 text-white px-6">

      <p className="text-4xl mb-10">Project</p>
      
      <div>

        <div className=" md:flex gap-10">

          <img
            src={pic4}
            alt="Neha"
            className="w-130 h-60 "
          />
          <p className="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, dolores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, laudantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, possimus.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, placeat.</p>

        </div>
        <button className=" rounded-2xl text-yellow-300 text-2xl mb-10 ">See More</button>

        <div className=" md:flex gap-10">
          <p className="hidden md:block">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, itaque!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, placeat Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, ad.</p>
          <img
            src={pic3}
            alt="Neha"
            className="w-130 h-60 mb-5"
          />
          <p className="md:hidden">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, itaque!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, placeat Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, ad.</p>

        </div>
        <button className=" rounded-2xl text-yellow-300 text-2xl mb-20 mt-5">See More</button>



      </div>
    </section>

  );
}

export default Project;