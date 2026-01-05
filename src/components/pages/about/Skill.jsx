import BlurText from '@/components/BlurText';
import React from 'react'

function Skill() {

     const skills = [
        "React",
        "Tailwind CSS",
        "JavaScript",
        ".NET MVC",
        "C#",
        "SQL Server",
        "Bootstrap",
        "Git & GitHub",
    ];

   
    return (
        <div className="w-full">
            <BlurText
                text="Skills"
                animateBy="letter"
                className="text-2xl font-semibold mb-3"
            />

            <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                    <span
                        key={skill}
                        className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>

    )
}

export default Skill