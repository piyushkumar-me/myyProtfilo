import React from 'react'
import pImg from "../../assets/p.jpg"
import AnimatedContent from '../AnimatedContent'
import BlurText from '../BlurText'
import TiltedCard from '../TiltedCard'
import StarBorder from '../StarBorder';
import { Link } from "react-router-dom";
import SocialIcons from '../SocialIcons'
import {
    Github,
    Linkedin,
    Mail,
    Instagram,
    Twitter
} from "lucide-react";

function About() {
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

     const items = [
        {
            icon: <Github size={18} />,
            label: "GitHub",
            onClick: () => window.open("https://github.com/yourusername", "_blank"),
        },
        {
            icon: <Linkedin size={18} />,
            label: "LinkedIn",
            onClick: () => window.open("https://linkedin.com/in/yourusername", "_blank"),
        },
        {
            icon: <Instagram size={18} />,
            label: "Instagram",
            onClick: () => window.open("https://instagram.com/yourusername", "_blank"),
        },
        {
            icon: <Twitter size={18} />,
            label: "Twitter",
            onClick: () => window.open("https://twitter.com/yourusername", "_blank"),
        },
        {
            icon: <Mail size={18} />,
            label: "Email",
            onClick: () => (window.location.href = "mailto:you@email.com"),
        },
    ];
    return (
        <div className="w-full h-[calc(100vh-4rem)] text-white   px-4">

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10  p-10">

                {/* LEFT COLUMN */}
                <div className="flex flex-col items-center md:items-start
                w-full md:w-1/3 gap-8
                md:sticky md:top-20">


                    <TiltedCard
                        imageSrc={pImg}
                        altText="Kendrick Lamar - GNX Album Cover"
                        captionText="Piyush Kumar"
                        containerHeight="250px"
                        containerWidth="200px"
                        imageHeight="250px"
                        imageWidth="200px"
                        rotateAmplitude={12}
                        scaleOnHover={1.2}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={true}
                        overlayContent={
                            <p className="tilted-card-demo-text text-black">
                                Piyush Kumar - Soft.en
                            </p>
                        }
                    />
                    {/* Skills */}
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

                    {/* Buttons */}
                    <div className="flex gap-4 flex-wrap justify-center md:justify-start">
                        <StarBorder as={Link} to="/projects" color="white" thickness={2}>
                            Projects
                        </StarBorder>
                        <StarBorder as={Link} to="/contact" color="white" thickness={2}>
                            Contact
                        </StarBorder>
                    </div>
                </div>

               

                {/* ================= RIGHT COLUMN ================= */}
                <div className="relative w-full md:w-2/3 pr-4
                h-[calc(80vh-4rem)]
                overflow-y-auto overflow-x-hidden">


                    

                    <div className="space-y-14 pl-10">

                        {/* 🌿 ABOUT */}
                        <div className="relative text-white">
                            <span className="absolute -left-7 top-2 w-3 h-3 rounded-full 
        bg-white shadow-[0_0_12px_white]">
                            </span>

                            <BlurText
                                text="About Me"
                                animateBy="letter"
                                className="text-2xl sm:text-3xl font-bold mb-3"
                            />

                            <p className="text-sm sm:text-base leading-relaxed text-white/80">
                                I am a passionate Full Stack Developer focused on building scalable,
                                clean and user-friendly web applications using modern technologies.
                            </p>
                        </div>

                        {/* 🌿 EDUCATION */}
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
                                <span className="text-gray-400">(2022 – 2025)</span>
                            </p>
                           
                            <p className="text-sm sm:text-base text-white/80 m-4">
                                Diploma in Computer Science & Engineering <br />
                                Govt Polytechnic Mawanakhurd, Meerut <br />
                                <span className="text-gray-400">(2022 – 2025)</span>
                            </p>
                           
                          
                           
                        </div>

                        {/* 🌿 PROJECTS */}
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
                              Internship at <b>TechWithMD</b> and creator of <b>SmarStudies</b>,
                                a platform for diploma students to share notes securely.
                            </p>
                        </div>

                        <div className="relative text-white">
                            <span className="absolute -left-7 top-2 w-3 h-3 rounded-full 
        bg-white shadow-[0_0_12px_white]">
                            </span>

                            <BlurText
                                text="Social Media"
                                animateBy="letter"
                                className="text-2xl sm:text-3xl font-bold mb-3"
                            />

                             <SocialIcons items={items} />
                        </div>

                    </div>
                </div>

            </div>
        </div>


    )
}

export default About