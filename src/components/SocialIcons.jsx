import React from "react";

const SocialIcons = ({ items }) => {
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
