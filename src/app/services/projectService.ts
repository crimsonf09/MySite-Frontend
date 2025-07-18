import { projectStructure } from "@/app/project/page";
export async function getAllProjects(): Promise<projectStructure[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/projects`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    if (!res.ok) {
        throw new Error(`Failed to fetch all projects: ${res.status}`);
    }
    return res.json();
}