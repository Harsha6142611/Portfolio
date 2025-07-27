import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  githubLink?: string;
  icon: React.ReactNode;
  image?: string;
  id: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, link, icon, githubLink, image, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${id}`);
  };

  return (
    <div 
  className="bg-gray-800/50 p-6 rounded-2xl hover:bg-gray-700/60 transition-all duration-300 ease-in-out cursor-pointer shadow-lg hover:shadow-2xl transform hover:scale-[1.02]"
  onClick={handleClick}
>
  <div className="overflow-hidden rounded-xl mb-4 relative group">
    <img
      src={image}
      alt={title}
      className="w-full h-40 object-cover rounded-xl transition-transform duration-500 ease-in-out group-hover:scale-105"
    />
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
  </div>

  <div className="flex items-center justify-between mb-4">
    <a href={link} className="text-gray-400 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
      <ExternalLink className="w-5 h-5" />
    </a>
    {githubLink && (
      <a href={githubLink} className="hover:text-blue-400 transition-all transform duration-300 flex items-center gap-2 hover:scale-110" target="_blank" rel="noopener noreferrer">
        <Github className="w-5 h-5" />
      </a>
    )}
  </div>

  <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{description}</p>

  <div className="flex flex-wrap gap-2">
    {tags.map((tag) => (
      <span
        key={tag}
        className="px-3 py-1 bg-gray-700/80 text-gray-300 rounded-full text-xs tracking-wide font-medium hover:bg-blue-600 hover:text-white transition-all duration-200"
      >
        #{tag}
      </span>
    ))}
  </div>
</div>

  );
};

export default ProjectCard;