

import { Github } from "lucide-react";
import React, { useState } from "react";
import CountUp from "../CountUp";


const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

function Nav() {
    const [active, setActive] = useState("Home");
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 h-16">
            <div className="relative flex items-center justify-between max-w-7xl mx-auto h-full">


                {/* Left – Logo */}
                <div className="text-white font-semibold text-lg">
                    <span className="tracking-wide">Hyy Piyush</span>
                </div>

                {/* Center – Small Pill Nav */}
                <div className="absolute left-1/2 -translate-x-1/2
                        bg-white/10 backdrop-blur-md
                        border border-white/20
                        rounded-full px-2 py-1">

                    <div className="flex gap-1">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setActive(item.label)}
                                className={`
                  px-3 py-1.5 rounded-full text-sm font-medium transition
                  ${active === item.label
                                        ? "bg-white text-black"
                                        : "text-white/80 hover:bg-white/20"
                                    }
                `}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right – GitHub Star */}
                <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2
                     px-3 py-2 rounded-full
                     bg-white/15 text-white
                     hover:bg-white/25 transition text-sm"
                >
                    <Github size={18} />
                    <span className="hidden sm:inline">
                        <CountUp
                            from={0}
                            to={100}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text"
                        />    </span>
                </a>

            </div>
        </nav>
    )
}

export default Nav