
import AnimatedContent from "@/components/AnimatedContent";
import GlareHover from "@/components/GlareHover";
import StarBorder from "@/components/StarBorder";
import TrueFocus from "@/components/TrueFocus";
import { Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

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
                        <StarBorder as={Link} to="/projects" color="white" thickness={2}>
                            Projects
                        </StarBorder>

                        <StarBorder as={Link} to="/contact" color="white" thickness={2}>
                            Contact
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
                        {projects.map((p, i) => (
                            <div key={i} className="mb-5 w-full">
                                <GlareHover
                                    glareColor="white"
                                    glareOpacity={0.15}
                                    glareSize={400}
                                    borderRadius={16}
                                >
                                    <div
                                        className="
                  w-full
                  min-h-[350px]
                  md:h-[350px]
                  rounded-xl
                  bg-white/5
                  border border-white/15
                  backdrop-blur-md
                  p-5 sm:p-6
                  flex
                  flex-col
                  justify-between
                "
                                    >
                                        {/* ===== TOP ===== */}
                                        <div className="space-y-2">
                                            <h3 className="text-lg font-semibold">
                                                {p.title}
                                            </h3>

                                            <span
                                                className="
                      inline-block
                      text-xs
                      px-3
                      py-1
                      rounded-full
                      bg-white/10
                      border border-white/20
                    "
                                            >
                                                {p.type}
                                            </span>

                                            <p className="text-sm text-white/80 leading-relaxed">
                                                {p.description}
                                            </p>
                                        </div>

                                        {/* ===== MIDDLE ===== */}
                                        <div className="space-y-2 mt-3">
                                            <div className="flex flex-wrap gap-2 text-xs">
                                                {p.tech.map((t, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="
                          px-3
                          py-1
                          rounded-full
                          bg-white/10
                          border border-white/20
                        "
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>

                                            <span className="text-xs text-white/70">
                                                👤 Role:{" "}
                                                <b className="text-white">{p.role}</b>
                                            </span>
                                        </div>

                                        {/* ===== BOTTOM ===== */}
                                        <div className="flex flex-wrap gap-3 mt-4">
                                            <StarBorder
                                                as="a"
                                                href={p.live}
                                                target="_blank"
                                                color="white"
                                                thickness={1.5}
                                                className="flex items-center gap-2 text-sm px-3 py-1.5"
                                            >
                                                View Live
                                                <ExternalLink size={14} />
                                            </StarBorder>

                                            <StarBorder
                                                as="a"
                                                href={p.github}
                                                target="_blank"
                                                color="white"
                                                thickness={1.5}
                                                className="flex items-center gap-2 text-sm px-3 py-1.5"
                                            >
                                                <Github size={14} />
                                                GitHub
                                            </StarBorder>
                                        </div>
                                    </div>
                                </GlareHover>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    );
}
