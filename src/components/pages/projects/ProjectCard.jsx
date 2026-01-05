import React from 'react'
import { Link } from 'react-router-dom'
import { Github, ExternalLink } from "lucide-react";
import StarBorder from '@/components/StarBorder';
import GlareHover from '@/components/GlareHover';

function ProjectCard({ title, description, type, tech, role ,live,github }) {
    return (
        <div>
             
            <div className="mb-5 w-full">
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
                                {title}
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
                                {type}
                            </span>

                            <p className="text-sm text-white/80 leading-relaxed">
                                {description}
                            </p>
                        </div>

                        {/* ===== MIDDLE ===== */}
                        <div className="space-y-2 mt-3">
                            <div className="flex flex-wrap gap-2 text-xs">
                                {tech.map((t, idx) => (
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
                                <b className="text-white">{role}</b>
                            </span>
                        </div>

                        {/* ===== BOTTOM ===== */}
                        <div className="flex flex-wrap gap-3 mt-4">
                            <StarBorder
                                as={Link}
                                href={live}
                                target="_blank"
                                color="white"
                                thickness={1.5}
                                className="flex items-center gap-2 text-sm px-3 py-1.5"
                            >
                                View Live
                                <ExternalLink size={14} />
                            </StarBorder>
  
                            <StarBorder
                                as={Link}
                                href={github}
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
        </div>
    )
}

export default ProjectCard