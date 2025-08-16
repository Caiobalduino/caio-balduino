import React from "react";

export function ProjectCard({ image, title, techs, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md overflow-hidden hover:scale-[1.02] transition-transform duration-200"
    >
    
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover"
      />

      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>

        
        <div className="flex flex-wrap gap-2">
          {techs.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-md bg-blue-500/20 text-blue-300 border border-blue-400/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}