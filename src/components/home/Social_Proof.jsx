import React from 'react'
import CountUp from '../UI/CountUp'
import { Sparkles } from 'lucide-react';


const Social_Proof = () => {
  const stats = [
    {
      id: 1,
      targetNumber: 50,
      suffix: <Sparkles />,
      label: 'Projects Delivered'
    },
    {
      id: 2,
      targetNumber: 2,
      suffix: <Sparkles/>,
      label: 'Years Experience'
    },
    {
      id: 3,
      targetNumber: 30,
      suffix: <Sparkles/>,
      label: 'Active Clients'
    },
    {
      id: 4,
      targetNumber: 98,
      suffix: '%',
      label: 'Client Satisfaction'
    }
  ]

  return (
    <div className="
      max-w-8xl container mx-auto 
      my-8 sm:my-10 md:my-16
      px-6 sm:px-8 md:px-10 lg:px-2
      
    ">
      <div className="
        relative
        h-auto py-5 sm:py-6 md:py-7 
        
        /* Glassmorphism Effect */
        bg-white/10
        backdrop-blur-xl
        backdrop-saturate-150
        
        /* Border & Shadow */
        border
        border-primary
        rounded-[30px] sm:rounded-[35px] md:rounded-[40px]
        shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]
        
        /* Subtle gradient overlay */
        before:absolute before:inset-0 
        before:rounded-[30px] sm:before:rounded-[35px] md:before:rounded-[40px]
        before:bg-gradient-to-br before:from-white/20 before:to-transparent
        before:pointer-events-none before:-z-10
        
        /* Inner glow */
        after:absolute after:inset-[1px]
        after:rounded-[29px] sm:after:rounded-[34px] md:after:rounded-[39px]
        after:bg-gradient-to-b after:from-white/10 after:to-transparent
        after:pointer-events-none after:-z-10
        
        overflow-hidden
        group
      ">
        {/* Animated background gradient on hover */}
        <div className="
          absolute inset-0 
          bg-gradient-to-r from-lime-400/10 via-emerald-400/10 to-lime-400/10
          opacity-0 group-hover:opacity-100
          transition-opacity duration-700
          blur-3xl
          -z-20
        " />

        {/* Stats Grid */}
        <div className="
          relative z-10
          grid grid-cols-2 md:grid-cols-4 
          gap-4 sm:gap-6 md:gap-8 lg:gap-10
        ">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="
                flex flex-col items-center justify-center
                text-center
                group/stat
                transition-transform duration-300
                hover:scale-105
              "
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Number Container with subtle glow */}
              <div className="
                relative
                mb-1 sm:mb-2
              ">
                {/* Glow effect behind number */}
                <div className="
                  absolute inset-0 
                  bg-lime-400/20 
                  blur-2xl 
                  opacity-0 group-hover/stat:opacity-100
                  transition-opacity duration-500
                  scale-150
                " />
                
                {/* CountUp Number */}
                <div className="relative flex items-baseline justify-center">
                  <CountUp 
                    from={0}
                    to={stat.targetNumber}
                    separator=","
                    direction="up"
                    duration={2.5}
                    className="
                      text-xl sm:text-2xl md:text-3xl lg:text-4xl
                      font-bold 
                      text-white
                      drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]
                      group-hover/stat:text-lime-400
                      transition-colors duration-300
                    "
                  />
                  <span className="
                    text-xl sm:text-2xl md:text-3xl lg:text-4xl
                    font-bold 
                    text-primary
                    ml-1
                    drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]
                    group-hover/stat:text-primaryHigh
                    transition-colors duration-300
                  ">
                    {stat.suffix}
                  </span>
                </div>
              </div>

              {/* Label with line separator */}
              <div className="
                flex flex-col items-center
                space-y-1 sm:space-y-1.5
              ">
                {/* Decorative line */}
                <div className="
                  w-6 sm:w-8 h-[2px] 
                  bg-gradient-to-r from-transparent via-white/40 to-transparent
                  group-hover/stat:via-lime-400
                  transition-colors duration-300
                " />
                
                {/* Label Text */}
                <p className="
                  text-[10px] sm:text-xs md:text-sm lg:text-base
                  text-white/90
                  font-medium
                  leading-tight
                  max-w-[100px] sm:max-w-[120px] md:max-w-none
                  group-hover/stat:text-white
                  transition-colors duration-300
                ">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle corner accents - reduced size */}
        <div className="
          absolute top-0 right-0 
          w-24 h-24 
          bg-lime-400/10 
          rounded-bl-full 
          blur-2xl
          opacity-50
          pointer-events-none
        " />
        <div className="
          absolute bottom-0 left-0 
          w-24 h-24 
          bg-emerald-400/10 
          rounded-tr-full 
          blur-2xl
          opacity-50
          pointer-events-none
        " />
      </div>
    </div>
  )
}

export default Social_Proof
