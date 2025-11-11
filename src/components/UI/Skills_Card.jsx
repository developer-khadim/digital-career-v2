import { ArrowRight } from 'lucide-react'
import React from 'react'

const Skills_Card = ({
  title,
  number,
  className
}) => {
    return (
        <div className={`  group w-96 h-20 bg-white/10 backdrop-blur-lg flex items-center justify-center rounded-full border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer ${className}`}>
            <div className='flex items-center justify-between w-full px-8'>
                <span className='text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300'>{number}  </span>
                <span className='text-lg font-medium'>{title}</span>
                <div className='bg-primary/10 p-2 rounded-full group-hover:bg-primary group-hover:text-white transition-all duration-300'>
                    <ArrowRight size={20} className='group-hover:translate-x-1 transition-transform duration-300' />
                </div>
            </div>
        </div>
    )
}

export default Skills_Card
