"use client";

import SearchBar from "@/components/SearchBar";
import { useState, useEffect } from "react";
import { getAllProjects } from "../services/projectService";
import ProjectCard from "./components/projectCard";

export interface projectStructure {
    "id": string,
    "title": string,
    "shortDescription": string,
    "description": string,
    "techStack": [string],
    "url": string,
    "type": [string],
    "images": [string],
    "shortMedia": string

}
export default function Project() {
    const [search, setSearch] = useState('')
    const [projects, setProjects] = useState<projectStructure[]>([])
    useEffect(() => {
        getAllProjects().then(data => {
            setProjects(data);
            console.log("Fetched projects:", data);
        })
            .catch(err => console.log(err));
    }, [])
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col justify-center px-4 py-16 mt-20 gap-4">
            <div className='text-2xl'>Project</div>
            <SearchBar value={search} onChange={setSearch} />
            {projects.map((p, idx) => (
                <ProjectCard key={p.id} project={p} index={idx} />
            ))}

        </main>
    )
}