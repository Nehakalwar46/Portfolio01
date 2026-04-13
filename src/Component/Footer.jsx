import { FaFacebook, FaInstagram, FaTwitter , FaLinkedin, FaGithub} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white text-center p-10">
      <p>Follow me</p>

      <div className="flex justify-center gap-7 mt-2 text-5xl">
       <a href="#" target="_blank">
        <FaFacebook /></a>
        <a href="#" target="_blank">
        <FaInstagram /></a>
        <a href="#" target="_blank">
        <FaTwitter /></a>
        <a href="#" target="_blank">
        <FaLinkedin /></a>
        <a href="#" target="_blank">
        <FaGithub /></a>
      </div>
    </footer>
  );
}

export default Footer;