import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import RadialGlowShape from "./UI/RadialGlowShape";

const Navigation = ({ scrollY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const location = useLocation();

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Smooth page load animation
  useEffect(() => {
    // Trigger page load animation
    setIsPageLoaded(false);
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Projects" },
    { path: "/careers", label: "Careers" },
    { path: "/contact", label: "Contact" },
  ];

  const shouldShowBlackBackground = () => {
    if (location.pathname !== "/") {
      return true;
    }
    const heroHeight = window.innerHeight * 0.85;
    return scrollY > heroHeight;
  };

  const isBlackBackground = shouldShowBlackBackground();

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 transition-all duration-700 ease-out ${
          isPageLoaded
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        } ${
          isMenuOpen
            ? "bg-black lg:bg-white"
            : isBlackBackground
            ? "bg-black"
            : "bg-white"
        }`}
      >
        <div
          className={`
            max-w-8xl container mx-auto
            bg-black  
            rounded-full
            px-14 py-1
            border border-lime-400
            shadow-2xl
            backdrop-blur-sm
            relative
            transition-all duration-500 ease-out
            ${isPageLoaded ? "scale-100" : "scale-95"}
          `}
        >
          <div className="flex items-center justify-between">
            {/* Left Nav Links */}
            <div className="hidden lg:flex items-center gap-16">
              {navLinks.slice(0, 3).map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-all duration-500 hover:text-lime-400 relative group ${
                    isActive(link.path) ? "text-lime-400" : "text-white"
                  } ${
                    isPageLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${index * 100 + 200}ms`,
                  }}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-lime-400 transition-all duration-300 ${
                      isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Logo with Glow Effect */}
            <div
              className={`flex items-center justify-center relative gap-1 transition-all duration-700 ease-out ${
                isPageLoaded
                  ? "scale-100 opacity-100"
                  : "scale-75 opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="relative">
                <RadialGlowShape
                  width={20}
                  height={60}
                  color="rgba(190, 242, 100, 0.7)"
                  rays={12}
                />
              </div>
              <Link to="/" className="group">
                <div className="relative">
                  <img
                    src="./dc.png"
                    alt="Digital Career Logo"
                    className="h-14 w-auto transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </Link>
            </div>

            {/* Right Nav Links + Theme Toggle */}
            <div className="hidden lg:flex items-center gap-12">
              {navLinks.slice(3).map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-all duration-500 hover:text-lime-400 relative group ${
                    isActive(link.path) ? "text-lime-400" : "text-white"
                  } ${
                    isPageLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${index * 100 + 500}ms`,
                  }}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-lime-400 transition-all duration-300 ${
                      isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}

              {/* Dark Mode Toggle - Desktop */}
              <button
                onClick={toggleDarkMode}
                className={`relative w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-500 hover:scale-110 group ${
                  isPageLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: "700ms" }}
                aria-label="Toggle theme"
              >
                <Sun
                  className={`w-5 h-5 text-lime-400 absolute transition-all duration-500 ${
                    darkMode
                      ? "rotate-90 scale-0 opacity-0"
                      : "rotate-0 scale-100 opacity-100"
                  }`}
                />
                <Moon
                  className={`w-5 h-5 text-lime-400 absolute transition-all duration-500 ${
                    darkMode
                      ? "rotate-0 scale-100 opacity-100"
                      : "-rotate-90 scale-0 opacity-0"
                  }`}
                />
              </button>
            </div>

            {/* Mobile Menu Button & Theme Toggle */}
            <div className="lg:hidden flex items-center gap-4">
              {/* Dark Mode Toggle - Mobile */}
              <button
                onClick={toggleDarkMode}
                className="relative w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300"
                aria-label="Toggle theme"
              >
                <Sun
                  className={`w-5 h-5 text-lime-400 absolute transition-all duration-500 ${
                    darkMode
                      ? "rotate-90 scale-0 opacity-0"
                      : "rotate-0 scale-100 opacity-100"
                  }`}
                />
                <Moon
                  className={`w-5 h-5 text-lime-400 absolute transition-all duration-500 ${
                    darkMode
                      ? "rotate-0 scale-100 opacity-100"
                      : "-rotate-90 scale-0 opacity-0"
                  }`}
                />
              </button>

              {/* Hamburger Menu */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-lime-400 transition-colors z-[60] relative"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black z-40 lg:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Animated Background Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`absolute top-1/4 left-1/4 w-96 h-96 bg-lime-400/20 rounded-full blur-3xl transition-all duration-700 ${
              isMenuOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
          ></div>
          <div
            className={`absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-400/20 rounded-full blur-3xl transition-all duration-700 delay-150 ${
              isMenuOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
          ></div>
        </div>

        {/* Menu Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-8">
          {/* Navigation Links */}
          <nav className="flex flex-col items-center space-y-8 w-full max-w-md">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-3xl md:text-4xl font-bold transition-all duration-500 hover:text-lime-400 hover:scale-110 relative group ${
                  isActive(link.path) ? "text-lime-400" : "text-white"
                }`}
                style={{
                  transitionDelay: isMenuOpen
                    ? `${index * 100 + 200}ms`
                    : "0ms",
                  transform: isMenuOpen
                    ? "translateX(0) scale(1)"
                    : "translateX(-50px) scale(0.8)",
                  opacity: isMenuOpen ? 1 : 0,
                }}
              >
                {link.label}
                {/* Animated underline */}
                <span
                  className={`absolute -bottom-2 left-0 h-1 bg-lime-400 rounded-full transition-all duration-300 ${
                    isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Bottom Text/Copyright */}
          <div
            className={`absolute bottom-12 text-center transition-all duration-700 delay-500 ${
              isMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <p className="text-gray-400 text-sm">© 2024 Digital Career</p>
            <p className="text-lime-400 text-sm font-semibold mt-1">
              Made with ❤️ by Khadim Ali
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
