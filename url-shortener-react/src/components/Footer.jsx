import { FaGithub, FaLinkedin, FaVoicemail } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-2">
        <p>© {new Date().getFullYear()} Linkly. All rights reserved by shubham kumar</p>

        <div className="flex gap-6 text-xl">
          <a href="https://github.com/Shubhamkumar2703" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-white cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/shubham-kumar27034/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-white cursor-pointer" />
          </a>
          <a href="mailto:shubham27034@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaVoicemail className="hover:text-white cursor-pointer" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

