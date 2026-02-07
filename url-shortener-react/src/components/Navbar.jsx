import { Link, useLocation, useNavigate } from "react-router-dom";
import { useStoreContext } from "../contextApi/ContextApi";
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

  return (
    <header className="sticky top-0 z-50 bg-linear-to-r from-indigo-950 to-violet-600">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white italic">
          Linkly
        </Link>

        <ul className={`sm:flex gap-8 items-center text-white font-medium
          ${open ? "absolute top-16 left-0 w-full bg-indigo-600 flex flex-col py-6" : "hidden sm:flex"}`}>
          <Link className={path === "/" ? "font-semibold" : ""} to="/">Home</Link>
          <Link className={path === "/about" ? "font-semibold" : ""} to="/about">About</Link>

          {token && <Link to="/dashboard">Dashboard</Link>}

          {!token && (
            <Link
              to="/register"
              className="bg-white text-indigo-600 px-4 py-2 rounded-md font-semibold"
            >
              Sign Up
            </Link>
          )}

          {token && (
            <button
              onClick={logoutHandler}
              className="bg-rose-500 px-4 py-2 rounded-md"
            >
              Logout
            </button>
          )}
        </ul>

        <button onClick={() => setOpen(!open)} className="sm:hidden text-white text-3xl">
          {open ? <RxCross2 /> : <IoIosMenu />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
