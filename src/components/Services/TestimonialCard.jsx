import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 border border-white/10 hover:border-primary/30 group">
      {/* Star Rating */}
      <div className="flex mb-4 sm:mb-5">
        {[...Array(testimonial.rating)].map((_, i) => (
          <StarIcon key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
        ))}
      </div>
      
      {/* Quote */}
      <p className="text-gray-300 italic mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed group-hover:text-white transition-colors">
        "{testimonial.quote}"
      </p>
      
      {/* Author Info */}
      <div className="border-t border-white/10 pt-4">
        <p className="font-bold text-white text-base sm:text-lg group-hover:text-primary transition-colors">{testimonial.author}</p>
        <p className="text-xs sm:text-sm text-gray-400">{testimonial.company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
