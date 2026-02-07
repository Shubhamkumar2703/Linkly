import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Linkly. All rights reserved.</p>

        <div className="flex gap-6 text-xl">
          <FaGithub className="hover:text-white cursor-pointer" />
          <FaLinkedin className="hover:text-white cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

