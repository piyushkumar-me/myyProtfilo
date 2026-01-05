import React from 'react'
import { Link } from "react-router-dom";

import AnimatedContent from '../../AnimatedContent'
import BlurText from '../../BlurText'
import TiltedCard from '../../TiltedCard'
import StarBorder from '../../StarBorder';
import SocialIcons from '../../SocialIcons'

import Left from './Left';
import Right from './Right';

function About() {



    return (
       <div className="w-full min-h-screen text-white px-4 pt-24 pb-32">


           <AnimatedContent
             distance={80}
                    direction="vertical"
                    duration={3}
                    animateOpacity>
           <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">

            
                <Left />
                <Right />

            </div>
           </AnimatedContent>

        </div>


    )
}

export default About