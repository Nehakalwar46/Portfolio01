import web from "./image/web.png";
import software from "./image/software.jpg";
function Service() {
  return (
<section id="service" className="min-h-screen   bg-gray-700 text-white px-6 ">
    
      <p className="text-4xl font-bold mb-10 ">SERVICE</p>
<div className="  md:flex justify-center">
<div className="mb-10">
          <img
              src={web}
              alt="Neha"
              className="w-40 h-40"
            />

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio earum similique voluptate magni dolorem facere perspiciatis quae dolor? Velit, ducimus.</p>
</div>
<div>
            <img
              src={software}
              alt="Neha"
              className="w-40 h-40"
            />
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eligendi sit quia debitis incidunt reprehenderit perspiciatis enim minus. Maxime, culpa?</p>
</div>

</div>
    
    </section>

  );
}

export default Service;