import { Link, useLocation, useNavigate } from "react-router-dom";
import { useStoreContext } from "../contextApi/ContextApi.jsx";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const { token, setToken } = useStoreContext();
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const [open, setOpen] = useState(false);

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("JWT_TOKEN");
    navigate("/login");
  };

  const linkStyle = (route) =>
    `relative transition duration-300 hover:text-indigo-400 ${
      path === route ? "text-indigo-400 font-semibold" : "text-white"
    }`;

  return (
    <header className="  sticky top-0 z-50
  bg-gradient-to-r
  from-indigo-900
  via-indigo-900/80
  to-indigo-900
  backdrop-blur-xl
  shadow-[0_4px_30px_rgba(79,70,229,0.25)]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-white tracking-wide"
        >
          <span className="text-indigo-400">Link</span>ly
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-8 items-center font-medium">
          <Link className={linkStyle("/")} to="/">Home</Link>
          <Link className={linkStyle("/about")} to="/about">About</Link>
          <Link className={linkStyle("/contact")} to="/contact">Contact</Link>

          {token && (
            <Link className={linkStyle("/dashboard")} to="/dashboard">
              Dashboard
            </Link>
          )}

          {!token && (
            <Link
              to="/register"
              className="bg-indigo-500 hover:bg-indigo-900 transition px-4 py-2 rounded-xl text-white shadow-md"
            >
              Sign Up
            </Link>
          )}

          {token && (
            <button
              onClick={logoutHandler}
              className="bg-rose-600 hover:bg-rose-700 transition px-4 py-2 rounded-xl text-white shadow-md"
            >
              Logout
            </button>
          )}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-white text-3xl"
        >
          {open ? <RxCross2 /> : <IoIosMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="sm:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10">
          <div className="flex flex-col items-center gap-6 py-6 font-medium">

            <Link onClick={() => setOpen(false)} className={linkStyle("/")} to="/">Home</Link>
            <Link onClick={() => setOpen(false)} className={linkStyle("/about")} to="/about">About</Link>
            <Link onClick={() => setOpen(false)} className={linkStyle("/contact")} to="/contact">Contact</Link>

            {token && (
              <Link
                onClick={() => setOpen(false)}
                className={linkStyle("/dashboard")}
                to="/dashboard"
              >
                Dashboard
              </Link>
            )}

            {!token && (
              <Link
                onClick={() => setOpen(false)}
                to="/register"
                className="bg-indigo-500 hover:bg-indigo-600 transition px-4 py-2 rounded-xl text-white shadow-md"
              >
                Sign Up
              </Link>
            )}

            {token && (
              <button
                onClick={() => {
                  logoutHandler();
                  setOpen(false);
                }}
                className="bg-rose-600 hover:bg-rose-700 transition px-4 py-2 rounded-xl text-white shadow-md"
              >
                Logout
              </button>
            )}

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
