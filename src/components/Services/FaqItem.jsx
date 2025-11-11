import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-md border border-white/10 hover:border-primary/30 transition-all duration-300">
      <button
        className="w-full text-left flex justify-between items-center p-4 sm:p-5 md:p-6"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base sm:text-lg font-semibold text-white pr-4">{faq.question}</span>
        <ChevronDownIcon
          className={`w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 sm:p-5 md:p-6 pt-0 text-gray-300">
          <p className="text-sm sm:text-base leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
