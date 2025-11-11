import React from 'react'

const RadialGlowShape = ({ 
  size = 200, 
  width, 
  height, 
  color = 'rgba(190, 242, 100, 1)', 
  rays = 16,
  className = ''
}) => {
  const finalWidth = width || size
  const finalHeight = height || size
  
  return (
    <div className={`relative ${className}`} style={{ width: finalWidth, height: finalHeight }}>
      {/* Rays */}
      {[...Array(rays)].map((_, i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 origin-center"
          style={{
            width: `${Math.max(finalWidth, finalHeight) / 2}px`,
            height: '2px',
            transform: `translate(-50%, -50%) rotate(${i * (360 / rays)}deg)`,
          }}
        >
          <div 
            className="w-full h-full rounded-full"
            style={{
              background: `linear-gradient(to right, ${color} 80%, ${color} 0)`,
              filter: 'blur(3px)',
            }}
          />
        </div>
      ))}
      
      {/* Center glow - outer */}
      <div 
        className="absolute top-1/2 left-1/2 rounded-full"
        style={{
          width: `${Math.min(finalWidth, finalHeight) * 0.5}px`,
          height: `${Math.min(finalWidth, finalHeight) * 0.5}px`,
          transform: 'translate(-50%, -50%)',
          background: `radial-gradient(circle, ${color} 60%, ${color} 30%, transparent)`,
          filter: 'blur(8px)',
        }}
      />
      
      {/* Center glow - middle */}
      <div 
        className="absolute top-1/2 left-1/2 rounded-full"
        style={{
          width: `${Math.min(finalWidth, finalHeight) * 0.35}px`,
          height: `${Math.min(finalWidth, finalHeight) * 0.35}px`,
          transform: 'translate(-50%, -50%)',
          background: `radial-gradient(circle, ${color} 80%, ${color} 40%)`,
          filter: 'blur(6px)',
        }}
      />
      
      {/* Center core */}
      <div 
        className="absolute top-1/2 left-1/2 rounded-full"
        style={{
          width: `${Math.min(finalWidth, finalHeight) * 0.2}px`,
          height: `${Math.min(finalWidth, finalHeight) * 0.2}px`,
          transform: 'translate(-50%, -50%)',
          backgroundColor: color,
          boxShadow: `0 0 20px ${color}`,
        }}
      />
    </div>
  )
}

export default RadialGlowShape