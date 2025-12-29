import React from "react";

import {
    Github,
    Linkedin,
    Mail,
    Instagram,
    Twitter
} from "lucide-react";


import AnimatedContent from "@/components/AnimatedContent";
import TrueFocus from "@/components/TrueFocus";
import Dock from "@/components/Dock";
import GlassIcons from "@/components/GlassIcons";
import SocialIcons from "@/components/SocialIcons";
import StarBorder from "@/components/StarBorder";
import { Link } from "react-router-dom";

function Contact() {

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
        <div className="w-full min-h-screen text-white px-4 pt-28 pb-16">
            <div className="max-w-6xl mx-auto">

                <AnimatedContent
                    distance={60}
                    direction="vertical"
                    duration={0.8}
                    animateOpacity
                >
                    {/* GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                        {/* ================= LEFT SIDE ================= */}
                        {/* ================= LEFT SIDE ================= */}
                        <div className="flex flex-col gap-6">

                            {/* Heading */}
                            <TrueFocus
                                sentence="Connect With Me"
                                manualMode={false}
                                blurAmount={5}
                                borderColor="white"
                                animationDuration={0.5}
                                pauseBetweenAnimations={1}
                                className="text-3xl sm:text-4xl font-bold"
                            />


                            {/* Paragraph */}
                            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-md">
                                Feel free to reach out for collaboration, project discussion,
                                or just to say hello. I am always open to new opportunities
                                and ideas.
                            </p>

                            {/* Social Icons (FIXED POSITION) */}

                            {/* Social Icons */}

                            <SocialIcons items={items} />
                            <div className="flex gap-4 flex-wrap justify-center md:justify-start m-2">
                                <StarBorder as={Link} to="/projects" color="white" thickness={2}>
                                    Projects
                                </StarBorder>
                                <StarBorder as={Link} to="/contact" color="white" thickness={2}>
                                    Contact
                                </StarBorder>

                              
                            </div>

                        </div>


                        {/* ================= RIGHT SIDE ================= */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                            <form className="space-y-4">

                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 rounded-md bg-black/40 border border-white/20 text-white outline-none"
                                />

                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-3 rounded-md bg-black/40 border border-white/20 text-white outline-none"
                                />

                                <textarea
                                    rows="4"
                                    placeholder="Your Message"
                                    className="w-full px-4 py-3 rounded-md bg-black/40 border border-white/20 text-white outline-none resize-none"
                                />

                                <button
                                    type="submit"
                                    className="w-full py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition"
                                >
                                    Send Message
                                </button>

                            </form>
                        </div>

                    </div>
                </AnimatedContent>

            </div>
        </div>
    );
}

export default Contact;
