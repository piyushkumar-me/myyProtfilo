import React from 'react'
import AnimatedContent from "@/components/AnimatedContent";
import StarBorder from "@/components/StarBorder";
import TrueFocus from "@/components/TrueFocus";

import { Link } from "react-router-dom";
import ProjectCard from './ProjectCard';

const projects = [
    {
        title: "SmarStudies",
        description:
            "A smart academic platform for diploma students to upload and access notes year-wise with secure authentication.",
        type: "Full Stack Web Application",

        tech: [
            "React",
            ".NET MVC",
            "SQL Server",
            "Bootstrap",
            "Authentication"
        ],

        role: "Full Stack Developer (Solo)",
        live: "https://smarstudies.live",
        github: "https://github.com/yourusername/smarstudies",
    },

    {
        title: "Portfolio Website",
        description:
            "A modern animated portfolio showcasing projects, skills, and contact information using ReactBits components.",
        type: "Personal Portfolio",

        tech: [
            "React",
            "Tailwind CSS",
            "ReactBits",
            "Framer Motion"
        ],

        role: "Frontend Developer (Solo)",
        live: "https://yourportfolio.live",
        github: "https://github.com/yourusername/portfolio",
    },

    {
        title: "Admin Dashboard",
        description:
            "A responsive admin panel with authentication, charts, and role-based access control.",
        type: "Admin Dashboard",

        tech: [
            "React",
            "Chart.js",
            "JWT Auth",
            "REST API"
        ],

        role: "Frontend + Backend Developer",
        live: "#",
        github: "#",
    },
];


export default function Projects() {
    return (
        <section
            className="
    w-full
    min-h-screen
    flex
    
    overflow-x-hidden
    text-white
    px-4 sm:px-6
    mt-16
    pb-6
  "
        >
            <div
                className="
      max-w-7xl
      mx-auto
      w-full
      flex
         justify-around
      flex-col
      md:flex-row
      gap-10
    "
            >
                {/* ================= LEFT SIDE ================= */}
                <div className="w-full md:w-1/3 space-y-6  my-3">
                    <AnimatedContent animateOpacity>

                        <TrueFocus
                            sentence="MY PROJETS"
                            manualMode={false}
                            blurAmount={5}
                            borderColor="white"
                            animationDuration={0.5}
                            pauseBetweenAnimations={1}
                            className="text-3xl sm:text-4xl font-bold"
                        />

                    </AnimatedContent>

                    <p className="text-white/80 text-sm sm:text-base">
                        A collection of projects showcasing my skills in full-stack
                        development, UI design, and modern web technologies.
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4 flex-wrap">
                        <StarBorder as={Link} to="/about" color="white" thickness={2}>
                            Previous
                        </StarBorder>

                        <StarBorder as={Link} to="/certificates" color="white" thickness={2}>
                          Next
                        </StarBorder>
                    </div>
                </div>

                {/* ================= RIGHT SIDE ================= */}
                <div className="w-full md:w-1/2 flex">
                    <div
                        className="
          w-full
          max-h-[70vh]
          md:max-h-[500px]
          overflow-y-auto
          overflow-x-auto
          pr-1
        "
                    >
                        {projects.map((p, idx) => (
                            <ProjectCard
                                key={idx}
                                title={p.title}
                                description={p.description}
                                type={p.type}
                                tech={p.tech}
                                role={p.role}
                                live={p.live}
                                github={p.github}

                            />

                        ))}
                    </div>
                </div>
            </div>
        </section>

    );
}
