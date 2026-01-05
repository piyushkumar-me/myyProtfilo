import React from 'react'

import BlurText from '@/components/BlurText';
import SocialIcons from '@/components/SocialIcons';

function Social() {
    
    return (
        <div className="relative text-white">
            <span className="absolute -left-7 top-2 w-3 h-3 rounded-full 
        bg-white shadow-[0_0_12px_white]">
            </span>
    
    
            <BlurText
                text="Social Media"
                animateBy="letter"
                className="text-2xl sm:text-3xl font-bold mb-3"
            />
            
            <SocialIcons  />
        </div>
    )
}

export default Social