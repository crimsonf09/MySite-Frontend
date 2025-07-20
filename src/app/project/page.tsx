"use client";

import SearchBar from "@/components/SearchBar";
import { useState, useEffect, useRef } from "react";
import { getAllProjects } from "../services/projectService";
import ProjectCard from "./components/projectCard";

export interface projectStructure {
    id: string;
    title: string;
    shortDescription: string;
    description: string;
    techStack: string[];
    url: string;
    type: string[];
    images: string[];
    shortMedia: string;
}

export default function Project() {
    const [search, setSearch] = useState("");
    const [projects, setProjects] = useState<projectStructure[]>([]);
    const projectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        getAllProjects()
            .then((data) => setProjects(data))
            .catch((err) => console.error(err));
    }, []);

    const scrollToProjects = () => {
        projectRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main className="relative min-h-screen bg-[#020617] text-white overflow-x-hidden">
            {/* 🎨 Background Effects */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-cyan-500/20 blur-[180px] rounded-full animate-pulse-slow" />
                <div className="absolute bottom-[-15%] right-[-10%] w-[500px] h-[500px] bg-indigo-400/20 blur-[160px] rounded-full animate-blob" />
                <div className="absolute top-[50%] left-[40%] w-[300px] h-[300px] bg-blue-300/10 blur-[120px] rounded-full animate-pulse-slower" />

                {/* 🌟 Floating shimmer particles */}
                {[...Array(40)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 90}%`, // clamp to 90% max to avoid overflow
                            animationDuration: `${2 + Math.random() * 4}s`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            {/* 👋 Hero Section */}
            <section className="relative z-10 h-screen flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-6xl md:text-7xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-sky-200 animate-touchPulse">
                    🌊 Projects Showcase
                </h1>
                <p className="mt-6 text-lg text-white/70 max-w-xl mx-auto">
                    Discover unique projects crafted with code and creativity.
                </p>

                {/* 🔽 Scroll Button */}
                <button
                    onClick={scrollToProjects}
                    className="mt-14 px-6 py-3 text-white/80 border border-white/20 rounded-full hover:bg-white/10 backdrop-blur-md transition shadow-md animate-bounce"
                >
                    ↓ Explore Projects
                </button>
            </section>

            {/* 💼 Projects Section */}
            <section ref={projectRef} className="relative z-10 px-8 py-24">
                <div className="flex justify-center mb-14">
                    <SearchBar value={search} onChange={setSearch} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 px-2 sm:px-4 max-w-7xl mx-auto h-fit">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="transition duration-300 hover:-translate-y-2 hover:scale-[1.02] animate-fadeUp"
                        >
                            <ProjectCard project={project} index={index} />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
