import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  icon: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, link, icon }) => {
  return (
    <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700/50 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <div className="text-blue-400">{icon}</div>
        <a href={link} className="text-gray-400 hover:text-blue-400 transition-colors">
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;