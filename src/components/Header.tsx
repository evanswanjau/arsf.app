import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-2xl border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <Link to="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="ARSF logo"
              className="w-10 h-10 object-contain"
            />
          </Link>

          <div className="hidden md:flex space-x-1 bg-white rounded-full p-1 border border-gray-200">
            <Link
              to="/"
              className={`capitalize font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                location.pathname === "/"
                  ? "text-white bg-[#02463D]"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`capitalize font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                location.pathname === "/about"
                  ? "text-white bg-[#02463D]"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              About
            </Link>
            <Link
              to="/products"
              className={`capitalize font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                location.pathname === "/products"
                  ? "text-white bg-[#02463D]"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              Products
            </Link>
            <Link
              to="/farm-tours"
              className={`capitalize font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                location.pathname === "/farm-tours"
                  ? "text-white bg-[#02463D]"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              Farm Tours
            </Link>
            <Link
              to="/contact"
              className={`capitalize font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                location.pathname === "/contact"
                  ? "text-white bg-[#02463D]"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
