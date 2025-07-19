"use client";

import { projectStructure } from "../page";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { Suspense } from "react";

const ReactPlayer = React.lazy(() => import("react-player"));

interface Props {
  project: projectStructure;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const { title, shortDescription, techStack, type, images, shortMedia } = project;

  const isVideo = shortMedia && shortMedia.length > 0;
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (isVideo) {
      const timeout = setTimeout(() => setShowVideo(true), 500);
      return () => clearTimeout(timeout);
    }
  }, [isVideo]);

  // Artsy random style
  const rotation = (index % 7) * 3 - 6;
  const translateY = (index % 5) * 12 - 15;
  const translateX = (index % 4) * 6 - 10;
  const scale = 0.95 + ((index % 4) * 0.02);

  return (
    <motion.div
      className="relative w-[270px] sm:w-[250px] backdrop-blur-2xl p-5 rounded-3xl overflow-hidden transition-all duration-700 hover:scale-[1.06] hover:shadow-[0_20px_80px_rgba(0,255,255,0.3)]"
      style={{
        transform: `rotate(${rotation}deg) translate(${translateX}px, ${translateY}px) scale(${scale})`,
        zIndex: 20 - (index % 10),
      }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, type: "spring", stiffness: 60 }}
    >
      {/* ✨ Wavy Background Effect */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(0,172,238,0.15)_0%,_transparent_70%)] animate-pulse" />

      {/* 💧 Hover Ripple Animation */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-400/10 via-blue-400/5 to-indigo-500/10 transition-all duration-700 group-hover:blur-md group-hover:scale-105" />

      {/* Media (video or image swiper) */}
      <div className="relative z-10 aspect-video w-full mb-4 overflow-hidden rounded-xl border border-white/10 shadow-inner">
        {showVideo ? (
          <Suspense fallback={<div className="text-center text-xs">Loading video...</div>}>
            <ReactPlayer width="100%" height="100%" controls />
          </Suspense>
        ) : (
          <Swiper spaceBetween={10} loop>
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={img.startsWith("/") ? img : `/projects/${img}`}
                  alt={`${title}-${i}`}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover rounded-xl transition-all duration-700 brightness-95 hover:brightness-110"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      {/* Title */}
      <h2 className="text-lg font-extrabold tracking-wider bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent mb-2">
        {title}
      </h2>

      {/* Description */}
      <p className="text-sm text-white/70 mb-3">{shortDescription}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-2">
        {type.map((t, i) => (
          <span
            key={i}
            className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 text-purple-200 text-[11px] px-3 py-1 rounded-full border border-purple-500/30"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, i) => (
          <span
            key={i}
            className="bg-blue-600/10 text-blue-300 text-[11px] px-3 py-1 rounded-full border border-blue-500/20"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Glow Edge */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none border border-white/10 shadow-[inset_0_0_30px_rgba(255,255,255,0.04)]" />
    </motion.div>
  );
}
