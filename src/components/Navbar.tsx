"use client";

import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const navItems = ["Home", "About", "Services", "Contact"];
  const [active, setActive] = useState("Home");

  // State to store underline position and width
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  // Refs for nav buttons
  const navRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Update underline position on active change or window resize
  useEffect(() => {
    function updateUnderline() {
      const activeBtn = navRefs.current[active];
      if (activeBtn) {
        setUnderlineStyle({
          left: activeBtn.offsetLeft,
          width: activeBtn.offsetWidth,
        });
      }
    }
    updateUnderline();
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [active]);

  return (
    <div className="w-full h-[82px] fixed top-0 left-0 z-50 backdrop-blur-xl bg-[#0a0a0a]/70 border-b border-gray-800">
      <div className="max-w-7xl mx-auto h-full flex justify-between items-center px-6 relative">
        {/* Logo with animated cyan gradient text */}
        <div className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent animate-gradient-x cursor-pointer select-none">
          Touch
        </div>

        {/* Navigation Menu */}
        <nav className="relative flex h-full gap-6">
          {navItems.map((item) => (
            <button
              key={item}
              ref={(el) => { navRefs.current[item] = el; }}
              onClick={() => setActive(item)}
              className={`relative z-10 px-6 py-3 rounded-md text-sm font-semibold uppercase tracking-wide transition-transform duration-300
                ${
                  active === item
                    ? "text-white"
                    : "text-gray-400 hover:text-white hover:scale-105"
                }`}
              type="button"
            >
              {item}
            </button>
          ))}

          {/* Animated underline */}
          <span
            className="absolute bottom-0 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 transition-all duration-500 ease-out"
            style={{
              left: underlineStyle.left,
              width: underlineStyle.width,
            }}
          />
        </nav>
      </div>

      {/* Add custom animation for gradient text */}
      <style jsx>{`
        @keyframes gradient-x {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 4s linear infinite;
        }
      `}</style>
    </div>
  );
}
