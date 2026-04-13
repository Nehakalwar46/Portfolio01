import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-black fixed w-full top-0 left-0 shadow-md z-50">
      
      <div className="flex justify-between items-center p-4">
      
        <h1 className="text-xl font-bold">Neha</h1>

     
        <ul className="hidden md:flex gap-10 text-lg font-semibold">
          <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
          <li><a href="#education" className="hover:text-yellow-400">Education</a></li>
          <li><a href="#service" className="hover:text-yellow-400">Service</a></li>
          <li><a href="#skill" className="hover:text-yellow-400">Skill</a></li>
          <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
        </ul>

      
        <button 
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

     
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 pb-4 bg-black  text-amber-50 text-lg">
          <li><a href="#home">Home</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#skill">Skill</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      )}

    </nav>
  );
}

export default Navbar;