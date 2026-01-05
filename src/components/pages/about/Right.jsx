import React from 'react'
import Intro from './Intro'
import Education from './Education'
import Social from './Social'
import Experience from './Experience'

function Right() {
    return (
        <div className="
  w-full md:w-2/3
  rounded-2xl
  border border-white/10 
  bg-white/5
  p-9
  md:max-h-[calc(100vh-160px)]
  md:overflow-y-auto
">
            <div className="space-y-14">
                <Intro />
                <Education />
                <Experience />
                <Social />
            </div>
        </div>

    )
}

export default Right