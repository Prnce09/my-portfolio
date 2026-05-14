import { Link } from "react-router-dom";
import { useState } from "react";

import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-3xl font-black tracking-widest text-cyan-400">
          WELCOME TO MY PORTFOLIO
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          <Link
            to="/"
            className="text-white hover:text-cyan-400 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-white hover:text-cyan-400 transition duration-300"
          >
            About
          </Link>

          <Link
            to="/skills"
            className="text-white hover:text-cyan-400 transition duration-300"
          >
            Skills
          </Link>

          <Link
            to="/projects"
            className="text-white hover:text-cyan-400 transition duration-300"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            className="text-white hover:text-cyan-400 transition duration-300"
          >
            Contact
          </Link>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-4xl text-cyan-400"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${
          open ? "max-h-[500px] py-6" : "max-h-0"
        }`}
      >

        <div className="flex flex-col items-center gap-6 text-lg font-semibold">

          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="text-white hover:text-cyan-400 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="text-white hover:text-cyan-400 transition duration-300"
          >
            About
          </Link>

          <Link
            to="/skills"
            onClick={() => setOpen(false)}
            className="text-white hover:text-cyan-400 transition duration-300"
          >
            Skills
          </Link>

          <Link
            to="/projects"
            onClick={() => setOpen(false)}
            className="text-white hover:text-cyan-400 transition duration-300"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="text-white hover:text-cyan-400 transition duration-300"
          >
            Contact
          </Link>

        </div>
      </div>

    </nav>
  );
}