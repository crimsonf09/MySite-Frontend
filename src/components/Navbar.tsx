"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";

export default function Navbar() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Project", href: "/project" },
    { label: "Contact", href: "/contact" },
  ];

  const navRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [lastClicked, setLastClicked] = useState<string | null>(null);
  const [underlineStyle, setUnderlineStyle] = useState({
    left: 0,
    width: 0,
    visible: false,
  });

  // Update underline position only on lastClicked change or window resize
  useEffect(() => {
    function updateUnderline() {
      if (!lastClicked) {
        setUnderlineStyle((s) => ({ ...s, visible: false }));
        return;
      }
      const el = navRefs.current[lastClicked];
      if (el) {
        setUnderlineStyle({
          left: el.offsetLeft,
          width: el.offsetWidth,
          visible: true,
        });
      } else {
        setUnderlineStyle((s) => ({ ...s, visible: false }));
      }
    }

    updateUnderline();
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [lastClicked]);

  return (
    <div className="w-full h-[82px] fixed top-0 left-0 z-50 backdrop-blur-xl bg-[#0a0a0a]/70 border-b border-gray-800">
      <div className="max-w-7xl mx-auto h-full flex justify-between items-center px-6 relative">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setLastClicked("Home")}
          className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent animate-gradient-x cursor-pointer select-none"
        >
          Touch
        </Link>

        {/* Navigation Menu */}
        <nav className="relative flex h-full gap-6">
          {navItems.map(({ label, href }) => {
            const isActive = label === lastClicked;
            return (
              <Link
                key={label}
                href={href}
                ref={(el) => {
                  navRefs.current[label] = el;
                }}
                onClick={() => setLastClicked(label)}
                className={`relative z-10 px-6 py-3 rounded-md text-sm font-semibold uppercase tracking-wide flex justify-center items-center transition-transform duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-gray-400 hover:text-white hover:scale-105"
                }`}
              >
                {label}
              </Link>
            );
          })}

          {/* Animated underline */}
          <span
            className={`absolute bottom-0 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 transition-all duration-500 ease-out ${
              underlineStyle.visible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              left: underlineStyle.left,
              width: underlineStyle.width,
            }}
          />
        </nav>
      </div>

      {/* Gradient animation for the logo */}
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
