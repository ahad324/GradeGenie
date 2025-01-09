import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import logo from "/logo.png"; // Adjust path to your logo

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);

  // Centralized Navigation Links Configuration
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Tools",
      submenu: [
        { name: "GPA Calculator", path: "/gpa-calculator" },
        { name: "CGPA Calculator", path: "/cgpa-calculator" },
        { name: "Converter", path: "/converter" },
      ],
    },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleToolsDropdown = () => {
    setToolsDropdownOpen(!toolsDropdownOpen);
  };

  return (
    <nav className="bg-accent shadow-lg">
      <div className="container mx-auto px-2 md:px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="GradeGenie Logo" className="h-12 w-auto" />
          </Link>
          <Link to="/" className="text-3xl font-bold text-lightText">
            GradeGenie
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-lg items-center">
          {links.map((link, index) =>
            link.submenu ? (
              <div key={index} className="relative">
                <button
                  onClick={toggleToolsDropdown}
                  className="text-lightText flex items-center hover:text-secondary transition duration-300"
                >
                  {link.name} <FaChevronDown className="ml-2" />
                </button>

                {toolsDropdownOpen && (
                  <div className="absolute top-10 left-0 bg-secondary shadow-lg rounded-md w-48 z-50 ">
                    {link.submenu.map((sublink, subIndex) => (
                      <Link
                        key={subIndex}
                        to={sublink.path}
                        className="block px-3 py-2 hover:bg-gray-100 rounded-b-lg border-b border-dark transition"
                        onClick={() => setToolsDropdownOpen(false)}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={index}
                className="text-lightText hover:text-secondary transition duration-300"
                to={link.path}
              >
                {link.name}
              </Link>
            )
          )}
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-lightText text-4xl focus:outline-none"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:hidden bg-primary transition-all`}
      >
        <div className="flex flex-col items-center space-y-6 py-6">
          {links.map((link, index) =>
            link.submenu ? (
              <div key={index} className="relative w-full text-center">
                <button
                  onClick={toggleToolsDropdown}
                  className="text-lightText flex justify-center items-center w-full py-3 hover:text-secondary transition duration-300"
                  aria-label={
                    toolsDropdownOpen
                      ? "Close tools dropdown"
                      : "Open tools dropdown"
                  }
                >
                  {link.name} <FaChevronDown className="ml-2" />
                </button>

                {toolsDropdownOpen && (
                  <div className="w-full bg-secondary shadow-lg rounded-md z-50">
                    {link.submenu.map((sublink, subIndex) => (
                      <Link
                        key={subIndex}
                        to={sublink.path}
                        className="block px-6 py-3 hover:bg-gray-100 border-b border-dark rounded-b-lg  transition"
                        onClick={toggleMenu}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={index}
                className="text-lightText hover:text-secondary transition duration-300 text-xl"
                to={link.path}
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
