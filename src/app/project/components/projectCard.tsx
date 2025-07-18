'use client';
import React, { useState, useEffect } from 'react';
import { projectStructure } from '@/app/project/page';

interface ProjectCardProps {
  project: projectStructure;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const hasVideo = project.shortMedia?.endsWith('.mp4');

  // Staggered effect
  const offset = (index % 3) * 2; // e.g. 0px, 2px, 4px shift

  useEffect(() => {
    if (!hasVideo && project.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % project.images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [project.images, hasVideo]);

  return (
    <div
      className="w-[300px] bg-white rounded-2xl shadow-md overflow-hidden transform transition hover:scale-105"
      style={{ marginTop: `${offset}rem` }}
    >
      <div className="h-48 w-full bg-gray-200 relative">
        {hasVideo ? (
          <video
            src={project.shortMedia}
            controls
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={project.images[currentImage]}
            alt={project.title}
            className="w-full h-full object-cover transition-opacity duration-700"
          />
        )}
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <p className="text-sm text-gray-600 mb-3">{project.shortDescription}</p>

        <div className="flex flex-wrap gap-1 mb-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-1 mb-2">
          {project.type.map((t) => (
            <span
              key={t}
              className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-1">
          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
            ID: {project.id}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
