import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import SocialIcons from "../SocialIcons";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between gap-8">

          {/* Left */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Piyush Kumar
            </h3>
            <p className="text-sm text-white/60 max-w-sm mt-2">
              Full Stack Developer focused on building modern, scalable and
              user-friendly web applications.
            </p>
          </div>

          {/* Middle */}
          <div>
            <h4 className="text-sm font-medium text-white mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link to="/#projects" className="hover:text-white transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/#certificates" className="hover:text-white transition">
                  Certificates
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right */}
          <div>
            <h4 className="text-sm font-medium text-white mb-3">
              Connect
            </h4>
            <div className="flex gap-4">
            <SocialIcons/>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} Piyush Kumar. All rights reserved.</p>

          <p className="flex items-center gap-1">
            Built with <Heart size={14} className="text-red-500" /> using React
          </p>
        </div>

      </div>
    </footer>
  );
}
