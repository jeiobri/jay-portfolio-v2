import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveLink?: string;
  githubLink?: string;
}

export function ProjectCard({ title, description, tech, image, liveLink, githubLink }: ProjectCardProps) {
  return (
    <div className="group relative bg-[rgba(20,20,30,0.7)] backdrop-blur-sm border border-[rgba(100,100,120,0.2)] rounded-2xl overflow-hidden hover:border-[rgba(99,102,241,0.5)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]">
      <div className="relative h-48 overflow-hidden bg-[#1e1e2e]">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,15,0.9)] to-transparent opacity-60" />
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-[#f5f5f7]">{title}</h3>
        <p className="text-[#9ca3af]">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 bg-[rgba(99,102,241,0.1)] text-[#6366f1] rounded-lg border border-[rgba(99,102,241,0.3)]"
            >
              {item}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 pt-2">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#06b6d4] to-[#6366f1] text-white rounded-xl hover:shadow-lg hover:shadow-[rgba(99,102,241,0.3)] transition-all duration-300"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[rgba(100,100,120,0.1)] text-[#f5f5f7] rounded-xl hover:bg-[rgba(100,100,120,0.2)] transition-all duration-300"
            >
              <Github size={16} />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
