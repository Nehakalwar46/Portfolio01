import profile from "./image/profile.jpg";

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gray-700 text-white px-6">

      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/*LEFT SIDE */}
        <div className="w-full md:w-1/2 text-center md:text-left">

          {/* Mobile Image */}
          <div className="md:hidden flex justify-center mb-6">
            <img
              src={profile}
              alt="Neha"
              className="w-40 h-40 rounded-full object-cover"
            />
          </div>

          <h1 className="text-3xl md:text-5xl font-bold">
            Hi, I'm
          </h1>

          <h2 className="text-2xl md:text-4xl font-bold text-blue-300 mt-2">
            NEHA KALWAR
          </h2>

          <p className="mt-4 text-sm md:text-base text-gray-200 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, modi
            repellat laborum iusto quo nulla tempore officiis? Vitae, ad laboriosam.
          </p>

        </div>

        {/* RIGHT SIDE (Desktop Image) */}
        <div className="hidden md:flex w-full md:w-1/2 justify-center">
          <img
            src={profile}
            alt="Neha"
            className="w-80 h-80 object-cover rounded-[60px] shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}  


export default Hero; 


