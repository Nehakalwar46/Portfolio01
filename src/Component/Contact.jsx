import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {

  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const phone = e.target[2].value;
    const message = e.target[3].value;

    if (!name || !email || !phone || !message) {
      setError("Please fill all fields!");
      setMsg("");
      return;
    }

    setError("");
    setMsg("✅ Message Sent Successfully!");

    setTimeout(() => {
      setMsg("");
    }, 2000);
  };

  return (
    <section className="min-h-screen bg-gray-800 text-white px-6 py-10">

      <form 
        onSubmit={handleSubmit}
        className="bg-gray-800 rounded-lg p-6 max-w-xl mx-auto mt-6"
      >
        <h1 className="text-center text-xl text-blue-300 font-bold mb-4">
          Contact Me
        </h1>

        <input type="text" placeholder="Name" className="w-full p-2 border mb-3 text-black" />
        <input type="email" placeholder="E-mail" className="w-full p-2 border mb-3 text-black" />
        <input type="number" placeholder="Mobile No." className="w-full p-2 border mb-3 text-black" />
        <textarea placeholder="Message" className="w-full p-2 border mb-3 text-black h-24"></textarea>

        <button className="w-full py-2 bg-blue-300 text-black rounded">
          Submit
        </button>

        {error && (
          <p className="text-center mt-4 text-red-400">
            {error}
          </p>
        )}

        
        {msg && (
          <p className="text-center mt-4 text-green-400">
            {msg}
          </p>
        )}

      </form>
    </section>
  );
}

export default Contact;