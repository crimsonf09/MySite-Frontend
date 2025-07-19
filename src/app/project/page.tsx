"use client";

import SearchBar from "@/components/SearchBar";
import { useState, useEffect } from "react";
import { getAllProjects } from "../services/projectService";
import ProjectCard from "./components/projectCard";
import Image from "next/image";


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

    useEffect(() => {
        getAllProjects()
            .then((data) => setProjects(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <main className="min-h-screen bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1a1a] text-white px-8 py-20 mt-20 relative overflow-hidden">
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-fuchsia-600/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-cyan-400/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="text-4xl mb-10 font-extrabold text-white drop-shadow-lg text-center tracking-wide">
                ✨ Projects Showcase
            </div>

            <div className="flex justify-center mb-10">
                <SearchBar value={search} onChange={setSearch} />
            </div>

            <div className="relative flex flex-wrap justify-center gap-y-20 gap-x-10">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
            <Image
                src={"/projects/AI/ella1.png"}
                alt={"ss"}
                width={400}
                height={225}
                className="w-full h-full object-cover transition-all duration-700 rounded-xl"
            />
        </main>
    );
}
