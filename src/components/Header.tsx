import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

interface HeaderProps {
  onOpenPartner?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenPartner }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setMobileOpen(false);
  }, [location.pathname]);

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <a
      href={href}
      className={`capitalize font-medium px-4 py-2 rounded-full transition-all duration-300 ${
        location.pathname === href
          ? "text-white bg-[#02463D]"
          : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
      }`}
    >
      {label}
    </a>
  );

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
          <a href="/" className="flex items-center">
            <img
              src={isScrolled ? "/images/logo.png" : "/images/logo-white.png"}
              alt="ARSF logo"
              className="w-32 h-auto object-contain transition-opacity duration-300"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="flex space-x-1 bg-white rounded-full p-1 border border-gray-200">
              <NavLink href="/" label="Home" />
              <NavLink href="/about" label="About" />
              <NavLink href="/products" label="Products" />
              <NavLink href="/farm-tours" label="Farm Tours" />
              <NavLink href="/gallery" label="Gallery" />
              <NavLink href="/sustainability" label="Sustainability" />
              <NavLink href="/partners" label="Partners" />
            </div>
            <button
              onClick={onOpenPartner}
              className="ml-3 rounded-full bg-[#02463D] text-white cursor-pointer px-5 py-3 text-sm font-bold hover:bg-[#A4BE66] transition-all duration-300 transform"
            >
              Become a partner
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className="block w-6 h-0.5 bg-current mb-1"></span>
            <span className="block w-6 h-0.5 bg-current mb-1"></span>
            <span className="block w-6 h-0.5 bg-current"></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-3 grid gap-1">
            <NavLink href="/" label="Home" />
            <NavLink href="/about" label="About" />
            <NavLink href="/products" label="Products" />
            <NavLink href="/farm-tours" label="Farm Tours" />
            <NavLink href="/gallery" label="Gallery" />
            <NavLink href="/sustainability" label="Sustainability" />
            <NavLink href="/partners" label="Partners" />
            <button
              onClick={() => {
                onOpenPartner?.();
                setMobileOpen(false);
              }}
              className="mt-2 rounded-lg bg-[#02463D] text-white px-4 py-2 text-sm font-semibold"
            >
              Become a partner
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
