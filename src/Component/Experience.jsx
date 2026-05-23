import exper from "./image/exper.pdf";

function Experience() {
  return (
    <section className="bg-gray-900 text-white px-6 py-16">

    
      <h1 className="text-4xl text-blue-400 text-center mb-12 font-bold">
        My Experience
      </h1>

      <div className="md:flex items-center gap-10">

       {/*pdf*/}
        <iframe
          src={exper}
          title="Experience"
          className="w-full md:w-1/2 h-80 border rounded-lg shadow-lg"
        ></iframe>

   
        <div className="mt-6 md:mt-0">

          <h2 className="text-2xl text-blue-300 font-semibold mb-3">
            Accountant Experience
          </h2>

          <p className="text-gray-300 leading-relaxed mb-4">
            Dedicated and competent Accountant with over two years of experience
            at a leading educational institute. Proven track record in managing
            complex accounts, implementing efficient financial systems, and
            maintaining accurate records.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Recognized for strong work ethics, responsibility, and loyalty toward
            organizational goals. Skilled in teamwork, problem-solving, and
            maintaining financial discipline in professional environments.
          </p>

       
          <button className="bg-blue-400 text-black px-4 py-2 rounded-lg hover:bg-blue-500 transition">
            View Certificate
          </button>

        </div>

      </div>
    </section>
  );
}

export default Experience;