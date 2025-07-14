"use client";

import SearchBar from "@/components/SearchBar";
import { useState } from "react";


export default function Project(){
    const [search,setSearch] = useState('')
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col justify-center px-4 py-16 mt-20 gap-4">
            <div className='text-2xl'>Project</div>
            <SearchBar value={search} onChange={setSearch}/>
            
            
        </main>
    )
}