import BlurText from '@/components/BlurText'
import React from 'react'

function Intro() {
    return (
        <div className="relative text-white">
            <span className="absolute -left-7 top-2 w-3 h-3 rounded-full 
        bg-white shadow-[0_0_12px_white]">
            </span>

            <BlurText
                text="About Me"
                animateBy="letter"
                className="text-2xl sm:text-3xl font-bold mb-3"
            />
  
            <p className="text-sm sm:text-base leading-relaxed text-white/80">
                I am a passionate Full Stack Developer focused on building scalable,
                clean and user-friendly web applications using modern technologies.
            </p>
        </div>
    )
}

export default Intro