import React from 'react'
import TextType from '../TextType'
import { Link } from "react-router-dom";



import StarBorder from '../StarBorder';

function Home() {
    return (
        <section className="w-full h-screen flex flex-col items-center justify-center text-center px-4">

            {/* 🔥 Main Heading with Type Effect */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white">
                <TextType
                    text={[
                        "Hi, I'm Piyush Kumar",
                        "I build web apps",
                        "Full Stack Developer",
                    ]}
                    typingSpeed={100}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="_"
                />
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg text-gray-300 max-w-xl">
                Full-stack developer specializing in React, Tailwind, and .NET.
            </p>

            {/* 🔘 Buttons */}
            <div className="   relative mt-4 flex gap-4 flex-wrap justify-center">

                <StarBorder
                    as={Link}
                    to="/projects"
                    color="white"
                    thickness="3"
                    speed="1s"
                >
                    View My Work
                </StarBorder>

                <StarBorder
                    as={Link}
                    to="/about"
                    color="white"
                    thickness={3}
                    speed="1"
                >
                    About Me
                </StarBorder>





            </div>


        </section>

    )
}

export default Home