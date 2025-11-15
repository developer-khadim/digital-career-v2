import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-primaryHigh hover:from-primaryHigh hover:to-primary text-gray-900 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 animate-fade-in"
          aria-label="Scroll to top"
        >
          {/* Icon */}
          <ArrowUp className="w-6 h-6 sm:w-7 sm:h-7 font-bold" />
          
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-primary/30 blur-md -z-10"></div>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
