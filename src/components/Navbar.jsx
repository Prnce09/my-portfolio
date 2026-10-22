
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `relative text-sm font-medium transition-colors duration-200
     focus-visible:outline-2 focus-visible:outline-offset-4
     focus-visible:outline-cyan-400 ${
       isActive
         ? "text-cyan-300"
         : "text-zinc-300 hover:text-white"
     }`;

  return (
    <nav
      aria-label="Main navigation"
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050A12]/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        {/* Personal brand */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="inline-flex shrink-0 items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
          aria-label="Prince Yadav — Home"
        >
          <span className="text-lg font-black tracking-tight text-white sm:text-xl">
            PRINCE
          </span>
          <span
            aria-hidden="true"
            className="h-5 w-px bg-cyan-400/60"
          />
          <span className="text-lg font-black tracking-tight text-cyan-400 sm:text-xl">
            YADAV
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 md:flex lg:gap-9">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={navClass}
            >
              {({ isActive }) => (
                <span className="relative">
                  {item.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-cyan-400"
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-2xl text-cyan-300 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 md:hidden"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`absolute inset-x-0 top-full overflow-hidden border-b border-white/10 bg-[#050A12]/95 backdrop-blur-xl transition-[max-height,padding] duration-300 md:hidden ${
          open
            ? "max-h-96 px-5 py-5"
            : "max-h-0 px-5 py-0"
        }`}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="flex flex-col gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-cyan-400/10 text-cyan-300"
                    : "text-zinc-300 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
