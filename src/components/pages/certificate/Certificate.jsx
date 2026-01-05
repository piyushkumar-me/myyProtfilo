import AnimatedContent from '@/components/AnimatedContent'
import Carousel from '@/components/Carousel'
import StarBorder from '@/components/StarBorder';
import { Award, BadgeCheck, GraduationCap } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom';
const certificateItems = [
    {
        id: 1,
        title: "Full Stack Development",
        description: "Internship & hands-on project experience with MERN & .NET.",
        icon: <GraduationCap size={28} />,
    },

    {
        id: 2,
        title: "React & Modern UI",
        description: "Advanced React, Tailwind CSS & animation-based UI design.",
        icon: <Award size={28} />,
    },
    {
        id: 3,
        title: ".NET MVC Internship",
        description: "45-day internship at TechWithMD with real-world projects.",
        icon: <BadgeCheck size={28} />,
    },

];

function Certificate() {
    return (
        <section className="w-full min-h-screen text-white px-4 pt-28 pb-16">

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 justify-around items-center md:items-start">

                {/* ================= LEFT SIDE ================= */}
                <div className="w-full md:w-1/3 space-y-6">

                    <AnimatedContent animateOpacity>
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                            Certifications
                        </h2>
                    </AnimatedContent>

                    <p className="text-white/70 text-sm sm:text-base max-w-md">
                        Skills, certifications and hands-on experience gained through
                        learning, internships and real-world projects.
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4 flex-wrap">
                        <StarBorder as={Link} to="/projects" color="white" thickness={2}>
                            Previous
                        </StarBorder>
                        <StarBorder as={Link} to="/contact" color="white" thickness={2}>
                            Next
                        </StarBorder>

                    </div>
                </div>

                {/* ================= RIGHT SIDE (Dashboard) ================= */}
                <div className="w-[80%]md:w-1/2 flex justify-center">

                    <div className="
            rounded-2xl 
            border border-white/10 
            bg-white/5 
            backdrop-blur-xl 
           
            shadow-[0_0_40px_rgba(255,255,255,0.05)]
          ">
                        <Carousel
                            items={certificateItems}
                            baseWidth={400}          // ✅ desktop
                            autoplay
                            autoplayDelay={1000}
                            pauseOnHover
                            loop
                            round={false}
                        />
                    </div>

                </div>
            </div>

            {/* ✅ Mobile width control */}
            <style>
                {`
          @media (max-width: 640px) {
            .carousel-container {
              width: 300px !important;
            }
          }
        `}

            </style>

        </section>
    )
}

export default Certificate