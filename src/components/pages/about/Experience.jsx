import BlurText from '@/components/BlurText'
import React from 'react'

function Experience() {
    return (
        <div className="relative text-white">
            <span className="absolute -left-7 top-2 w-3 h-3 rounded-full 
        bg-white shadow-[0_0_12px_white]">
            </span>

            <BlurText
                text="Experience & Projects"
                animateBy="letter"
                className="text-2xl sm:text-3xl font-bold mb-3"
            />
                  
            <p className="text-sm sm:text-base leading-relaxed text-white/80">
                Internship at <b>TechWithMD</b> <br />
                Completed a 45-day internship at TechWithMD, where I gained hands-on experience in software development, worked on real-world projects, and strengthened my problem-solving and coding skills.

            </p>
        </div>
    )
}

export default Experience