import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Github, Menu, X } from "lucide-react";
import GradientText from "../GradientText";

const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
];

export default function Navbar() {
    const { pathname } = useLocation();
    const [stars, setStars] = useState(0);
    const [open, setOpen] = useState(false);

    const GITHUB_REPO = "facebook/react"; // 🔁 apna repo

    useEffect(() => {
        fetch(`https://api.github.com/repos/${GITHUB_REPO}`)
            .then(res => res.json())
            .then(data => setStars(data.stargazers_count || 0))
            .catch(() => setStars(0));
    }, []);

    return (
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur border-b border-white/10 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex h-16 items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="text-xl font-bold text-white">
                        <GradientText
                            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                            animationSpeed={3}
                            showBorder={true}
                            className="custom-class"
                        >
                            Hyy Piyush
                        </GradientText>
                        
                    </Link>

                    {/* Desktop */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map(item => {
                            const isActive = pathname === item.path;
                            return (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`relative font-medium transition
                    ${isActive
                                            ? "text-blue-500"
                                            : "text-gray-400 hover:text-white"}
                  `}
                                >
                                    {item.name}

                                    {/* underline */}
                                    <span
                                        className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                                    />
                                </Link>
                            );
                        })}

                        {/* GitHub */}
                        <a
                            href={`https://github.com/${GITHUB_REPO}`}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 rounded-full border border-white/10
                         px-4 py-1.5 text-sm text-white
                         hover:bg-white/10 transition"
                        >
                            <Github size={16} />
                            <span>{stars}</span>
                        </a>
                    </div>

                    {/* Mobile button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-white"
                    >
                        {open ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="md:hidden pb-4 space-y-2">
                        {navItems.map(item => {
                            const isActive = pathname === item.path;
                            return (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setOpen(false)}
                                    className={`block px-3 py-2 rounded-md font-medium
                    ${isActive
                                            ? "bg-blue-500/10 text-blue-400"
                                            : "text-gray-300 hover:bg-white/10"}
                  `}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}

                        <a
                            href={`https://github.com/${GITHUB_REPO}`}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-3 py-2 text-gray-300"
                        >
                            <Github size={16} />
                            <span>{stars} Stars</span>
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
}
