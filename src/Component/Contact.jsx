import { FaMapMarkerAlt, FaPhoneAlt, FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function Contact() {
  return (
    <section id="contact" className="min-h-screen items-center bg-gray-700 text-white px-6">

      <p className="flex justify-center text-blue-300 text-2xl md:text-4xl">GET IN TOUCH</p>
      <p className="flex justify-center mb-10  text-3xl md:text-5xl">Any Question?Feel free to Contact</p>
      <div className=" mx-30 md:mx-90">
        <p className="flex items-center gap-3 my-5 text-2xl">
          <FaMapMarkerAlt /> Chandigarh,India
        </p>

        <p className="flex items-center gap-3  my-5 text-2xl">
          <FaPhoneAlt /> +977-9824282474
        </p>

        <p className="flex items-center gap-3  my-5 text-2xl">
          <MdEmail /> nehakalwar192@gmail.com
        </p>

        <p className="flex items-center gap-3  my-5 text-2xl">
          <FaHome />Gahawa-08 (Birgunj), Nepal
        </p>
      </div>
<form className=" bg-gray-800  rounded-2xl text-center md:text-center ">
<h1 className=" flex justify-center text-xl text-blue-300 font-bold ">Contact me</h1>
        <input type="text" placeholder="Name" className="  w-90 border-2 my-3"></input><br></br>
 <input type="email" placeholder="E-mail"className=" w-90 border-2 my-3" ></input><br></br>
<input type="number" placeholder="Mobile No." className=" w-90 border-2 my-3"></input><br></br>
<input type="message" placeholder="Message"className=" w-90 h-30 border-2 my-3" ></input><br></br>
<button className=" mx-35 w-30 h-10 border-2 mt-2 rounded-2xl bg-blue-300 ">Submit</button>

      </form>

    
    </section>
    

  );
}

export default Contact;