"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "../app/globals.css"
export default function Navbar() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Chat", href: "/chat" },
    { label: "About Me", href: "/aboutme" },
    { label: "Project", href: "/project" },
    { label: "Contact", href: "/contact" },
  ];

  const navRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [underlineStyle, setUnderlineStyle] = useState({
    left: 0,
    width: 0,
    visible: false,
  });

  const pathname = usePathname();

  // Get current label based on path
  const currentLabel = navItems.find((item) => item.href === pathname)?.label;

  // Update underline position when path or window changes
  useEffect(() => {
    function updateUnderline() {
      if (!currentLabel) {
        setUnderlineStyle((s) => ({ ...s, visible: false }));
        return;
      }
      const el = navRefs.current[currentLabel];
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
  }, [currentLabel]);

  return (
    <div className="w-full h-[82px] fixed top-0 left-0 z-50 backdrop-blur-xl bg-[#0a0a0a]/70 border-b border-gray-800">
      <div className="max-w-7xl mx-auto h-full flex justify-between items-center px-6 relative">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent animate-gradient-x cursor-pointer select-none transform transition-transform duration-300 hover:scale-110 touch-float"
        >
          Touch
        </Link>

        {/* Navigation */}
        <nav className="relative flex h-full gap-6">
          {navItems.map(({ label, href }) => {
            const isActive = label === currentLabel;
            return (
              <Link
                key={label}
                href={href}
                ref={(el) => {
                  navRefs.current[label] = el;
                }}
                className={`relative z-10 px-6 py-3 rounded-md text-sm font-semibold uppercase tracking-wide flex justify-center items-center transition duration-300 ${isActive
                  ? "text-white"
                  : "text-gray-400 hover:text-white hover:scale-105"
                  }`}
              >
                {label}
              </Link>
            );
          })}

          {/* Underline */}
          <span
            className={`absolute bottom-0 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 transition-all duration-500 ease-out ${underlineStyle.visible ? "opacity-100" : "opacity-0"
              }`}
            style={{
              left: underlineStyle.left,
              width: underlineStyle.width,
            }}
          />
        </nav>
      </div>

      {/* Gradient animation for the logo */}
      <style jsx global>{`
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
