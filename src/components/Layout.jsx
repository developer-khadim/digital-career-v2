import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Footer from '../pages/Footer';
import WhatsAppButton from './UI/WhatsAppButton';
import ScrollToTopButton from './UI/ScrollToTopButton';

const Layout = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    // Scroll to top when navigating
    window.scrollTo(0, 0);
  };

  return (
    <div className=" text-white" style={{ cursor: "url('/cursor.png'), auto" }}  >
      <Navigation 
        currentPage={currentPage}
        navigateTo={navigateTo}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollY={scrollY}
      />
      <main className="pt-20 bg-black" >
        {children}
      </main>
      <Footer navigateTo={navigateTo} />
      
      {/* Scroll to Top Button */}
      <ScrollToTopButton />
      
      {/* WhatsApp Floating Button */}
      <WhatsAppButton 
        phoneNumber="923188973096" 
        message="Hello! I'd like to know more about your services."
      />
    </div>
  );
};

export default Layout;