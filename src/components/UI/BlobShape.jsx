import React from 'react'

const BlobShape = ({ 
  className = '', 
  
  color = 'bg-gray-200',
  opacity = '100'
}) => {
  return (
    <div className={`relative ${className}`}>
      <div 
        className={`w-full h-full ${color} opacity-${opacity}`}
        style={{
          borderRadius: '63% 47% 54% 46% / 55% 48% 52% 45%',
          animation: '',
        }}
      ></div>
      
      {/* Add animation keyfra      mes */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
          }
          25% {
            border-radius: 48% 52% 68% 32% / 42% 28% 72% 58%;
          }
          50% {
            border-radius: 40% 60% 70% 30% / 47% 62% 38% 53%;
          }
          75% {
            border-radius: 55% 45% 38% 62% / 60% 49% 51% 40%;
          }
        }
      `}</style>
    </div>
  )
}

export default BlobShape
