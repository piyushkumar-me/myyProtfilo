import BlurText from '@/components/BlurText'
import React from 'react'

function Education() {
    return (
        <div className="relative text-white">
            <span className="absolute -left-7 top-2 w-3 h-3 rounded-full 
        bg-white shadow-[0_0_12px_white]">
            </span>

            <BlurText
                text="Education"
                animateBy="letter"
                className="text-2xl sm:text-3xl font-bold mb-3"
            />

            <p className="text-sm sm:text-base text-white/80 m-4">
                Diploma in Computer Science & Engineering <br />
                Govt Polytechnic Mawanakhurd, Meerut <br />
                <span className="text-gray-400">(2023 – 2026)</span>
            </p>

            <p className="text-sm sm:text-base text-white/80 m-4">
                Bachelor of Arts <br />
                A.S.P.G. College, Mawana (Anglo Sanskrit Post Graduate College) <br />
                <span className="text-gray-400">(2023 – 2026)</span>
            </p>



        </div>
    )
}

export default Education