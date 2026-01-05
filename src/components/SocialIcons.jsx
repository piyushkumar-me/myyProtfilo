import React from "react";
import {
    Github,
    Linkedin,
    Mail,
    Instagram,
    Twitter
} from "lucide-react";

const SocialIcons = () => {

   const items = [
        {
            icon: <Github size={18} />,
            label: "GitHub",
            onClick: () => window.open("https://github.com/heypiyushhh", "_blank"),
        },
        {
            icon: <Linkedin size={18} />,
            label: "LinkedIn",
            onClick: () => window.open("https://linkedin.com/in/heypiyushhh", "_blank"),
        },
        {
            icon: <Instagram size={18} />,
            label: "Instagram",
            onClick: () => window.open("https://instagram.com/___piyu.shhh__", "_blank"),
        },
        {
            icon: <Twitter size={18} />,
            label: "Twitter",
            onClick: () => window.open("https://x.com/HeyPiyushhh", "_blank"),
        },
        {
            icon: <Mail size={18} />,
            label: "Email",
            onClick: () => (window.location.href = "mailto:piyushmalwa456@email.com"),
        },
    ];
  return (
    <div className="flex gap-3 items-center">
      {items.map((item, index) => (
        <button
          key={index}
          onClick={item.onClick}
          className="
            group
            relative
            w-10 h-10
            flex items-center justify-center
            rounded-xl
            bg-white/5
            border border-white/10
            backdrop-blur-md
            transition-all duration-300
            hover:scale-110
            hover:bg-white/10
            hover:shadow-[0_0_15px_rgba(255,255,255,0.35)]
          "
        >
          {/* ICON */}
          <span className="text-white transition-transform duration-300 group-hover:scale-110">
            {item.icon}
          </span>

          {/* TOOLTIP */}
          <span
            className="
              absolute -bottom-8
              text-xs px-2 py-1
              rounded-md
              bg-black/80 text-white
              opacity-0 scale-95
              transition-all duration-300
              group-hover:opacity-100 group-hover:scale-100
              pointer-events-none
              whitespace-nowrap
            "
          >
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default SocialIcons;
