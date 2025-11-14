import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import navimg from "../assets/Rakesh-Datta.png";
import { Links } from "react-router";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Roles", path: "/roles" },
    { name: "Awards", path: "/award" },
    { name: "Media Coverage", path: "/media" },
    { name: "Invited Judges", path: "/judges" },
    { name: "Public Speaking", path: "/public" },
    { name: "Publications", path: "/publications" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  // Prevent background scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <header className="sticky top-0 bg-base-100 bg-black text-white shadow-md z-[3000]">
      <div className="flex items-center justify-between px-[5%] py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={navimg} alt="Logo" className="h-20 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">
          <ul className="flex gap-5 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="hover:text-yellow-400 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl cursor-pointer  text-white"
          onClick={() => setOpen(true)}
          aria-label="Open Menu"
        >
          <FaBars />
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-[2500] transition-opacity duration-300"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Mobile Drawer (slides from left, full screen on mobile) */}
      <div
        className={`fixed top-0 left-0 h-full w-full sm:w-full md:w-3/4 lg:hidden bg-black text-white transform transition-transform duration-300 ease-in-out z-[2600] ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <a href="/">  <img src={navimg} alt="Logo" className="h-20 w-auto" /></a>
          <FaTimes
            className="text-2xl cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        <ul className="flex flex-col gap-6 p-6 text-lg font-medium text-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="block hover:text-yellow-400"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
