import exper from "./image/exper.pdf";
function Experience() {
  return (
    <section id="exper" className="min-h-screen   bg-gray-700 text-white px-6 ">

      <p className="text-4xl font-bold mb-10 ">Experience</p>
  <div className="mb-8">
            <p className=" text-3xl underline decoration-2 md:text-4xl underline decoration-3 flex justify-center">New Popular English Language and Computer
              Institute,Birgunj
            </p>
          </div>

        <div className=" gap-10 md:flex">
          <iframe
            src={exper}
            className="w-110 h-125"
            title="Experience"
          />
           <div className="mt-4">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, suscipit?
            </p>
          </div>

      </div>

    </section>

  );
}

export default Experience;