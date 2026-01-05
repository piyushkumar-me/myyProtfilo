import React from 'react'
import Skill from './Skill'
import pImg from "../../../assets/p.jpg"
import TiltedCard from '@/components/TiltedCard'
import StarBorder from '@/components/StarBorder'
import { Link } from 'react-router-dom'

function Left() {
    return (
        <div className="
  w-full md:w-1/3
  flex flex-col items-center md:items-start gap-8
  md:sticky md:top-24
">
            <TiltedCard
                imageSrc={pImg}
                captionText="Piyush Kumar"
                containerHeight="250px"
                containerWidth="200px"
                imageHeight="250px"
                imageWidth="200px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip
                displayOverlayContent
            />

            <Skill />

            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
                <StarBorder as={Link} to="/" color="white" thickness={2}>
                    Previous
                </StarBorder>
                <StarBorder as={Link} to="/projects" color="white" thickness={2}>
                    Next
                </StarBorder>
            </div>
        </div>

    )
}

export default Left