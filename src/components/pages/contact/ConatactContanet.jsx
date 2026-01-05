import SocialIcons from '@/components/SocialIcons'
import StarBorder from '@/components/StarBorder'
import TrueFocus from '@/components/TrueFocus'
import React from 'react'

import { Link } from 'react-router-dom';

function ConatactContanet() {
   
    return (
        <div className="flex flex-col gap-6">

            {/* Heading */}
            <TrueFocus
                sentence="Connect With Me"
                manualMode={false}
                blurAmount={5}
                borderColor="white"
                animationDuration={0.5}
                pauseBetweenAnimations={1}
                className="text-3xl sm:text-4xl font-bold"
            />


            {/* Paragraph */}
            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-md">
                Feel free to reach out for collaboration, project discussion,
                or just to say hello. I am always open to new opportunities
                and ideas.
            </p>


            <SocialIcons />
            <div className="flex gap-4 flex-wrap justify-center md:justify-start m-2">
                
                <StarBorder as={Link} to="/" color="white" thickness={2}>
                 Naxt
                </StarBorder>

              
            </div>

        </div>
    )
}

export default ConatactContanet