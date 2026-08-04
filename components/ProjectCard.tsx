"use client";

import Link from 'next/link';
import { Project } from '../data/projects';
import { useState } from 'react';

export function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      href={`/projects/${project.slug}`} 
      className="block h-full outline-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      data-project={isHovered ? project.slug : undefined}
    >
      <div className={`project-card-inner h-full flex flex-col border rounded-[22px] p-6 sm:p-8 overflow-hidden relative z-10 ${isHovered ? 'shadow-2xl shadow-accent/20 scale-[1.02]' : ''}`}>
        <div className="flex justify-between items-start mb-6 relative z-20">
          <h3 className="project-card-title text-2xl font-bold">{project.title}</h3>
          <span className="project-card-tag text-xs border rounded-full px-3 py-1 font-bold">{project.category}</span>
        </div>
        <p className="project-card-desc text-lg font-medium mb-4 leading-relaxed relative z-20">{project.oneLiner}</p>
        <p className="project-card-desc-dim text-sm mb-8 line-clamp-3 leading-relaxed relative z-20">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto relative z-20">
          {project.stack.map(tech => (
            <span key={tech} className="project-card-tag text-xs font-semibold px-3 py-1.5 rounded border">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
