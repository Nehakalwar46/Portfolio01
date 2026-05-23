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
      setError("⚠️ Please fill all fields!");
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

      {/* 🔷 HEADING */}
      <p className="text-center text-blue-300 text-2xl md:text-4xl animate-fade-in">
        GET IN TOUCH
      </p>

      <p className="text-center mb-10 text-3xl md:text-5xl animate-fade-in">
        Any Question? Feel free to Contact
      </p>

      {/* 🔷 CONTACT INFO */}
      <div className="max-w-xl mx-auto animate-fade-in">
        <p className="flex items-center gap-3 my-4 text-lg">
          <FaMapMarkerAlt /> Chandigarh, India
        </p>

        <p className="flex items-center gap-3 my-4 text-lg">
          <FaPhoneAlt /> +977-9824282474
        </p>

        <p className="flex items-center gap-3 my-4 text-lg">
          <MdEmail /> nehakalwar192@gmail.com
        </p>

        <p className="flex items-center gap-3 my-4 text-lg">
          <FaHome /> Gahawa-08 (Birgunj), Nepal
        </p>
      </div>

      {/* 🔷 FORM */}
      <form 
        onSubmit={handleSubmit}
        className="bg-gray-900 rounded-lg p-6 max-w-xl mx-auto mt-6 animate-fade-in shadow-lg"
      >
        <h1 className="text-center text-xl text-blue-300 font-bold mb-4">
          Contact Me
        </h1>

        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border mb-3 text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

        <input
          type="email"
          placeholder="E-mail"
          className="w-full p-2 border mb-3 text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

        <input
          type="number"
          placeholder="Mobile No."
          className="w-full p-2 border mb-3 text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

        <textarea
          placeholder="Message"
          className="w-full p-2 border mb-3 text-black h-24 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
        ></textarea>

        <button className="w-full py-2 bg-blue-300 text-black rounded transition duration-300 hover:scale-105">
          Submit
        </button>

        {/* ❌ Error */}
        {error && (
          <p className="text-center mt-4 text-red-400">
            {error}
          </p>
        )}

        {/* ✅ Success */}
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