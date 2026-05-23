import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white text-center py-8">
      <p className="text-lg mb-3">Follow me</p>

      <div className="flex justify-center gap-6 text-2xl">
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaFacebook />
        </a>

        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
          <FaInstagram />
        </a>

        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
          <FaTwitter />
        </a>

        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FaLinkedin />
        </a>

        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FaGithub />
        </a>
      </div>

      <p className="mt-4 text-sm text-gray-400">
        © 2026 Neha kalwar.
      </p>
    </footer>
  );
}

export default Footer;