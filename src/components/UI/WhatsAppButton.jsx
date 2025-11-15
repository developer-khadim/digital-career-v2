import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { ImWhatsapp } from "react-icons/im";



const WhatsAppButton = ({ phoneNumber = "923188973096", message = "Hello! I'm interested in your services." }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 group">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg whitespace-nowrap animate-fade-in">
            Chat with us on WhatsApp
            <div className="absolute top-full right-6 -mt-1 w-3 h-3 bg-gray-900 transform rotate-45"></div>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={handleClick}
          onMouseEnter={() => {
            setIsHovered(true);
            setShowTooltip(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            setShowTooltip(false);
          }}
          className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          {/* Ripple Effect */}
          <div className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping"></div>
          
          {/* Icon */}
          <ImWhatsapp className={`relative w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} />
          
          {/* Notification Badge */}
          <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 border-2 border-white rounded-full flex items-center justify-center">
            <span className="text-[8px] sm:text-[10px] font-bold text-white">1</span>
          </span>
        </button>

        {/* Pulsing Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-green-400 opacity-50 animate-pulse pointer-events-none"></div>
      </div>
    </>
  );
};

export default WhatsAppButton;
