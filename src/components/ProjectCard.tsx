import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Github } from 'lucide-react';
interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  githubLink?: string;
  icon: React.ReactNode;
  image?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, link, icon, githubLink, image }) => {
  return (
    <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700/50 transition-colors relative">
      {/* {image && <img src={image} alt={title} className="w-full h-32 object-cover rounded-t-lg mb-4" />} */}
      {/* {image && (
  <div className="overflow-visible rounded-t-lg mb-4 relative group">
    <img
      src={image}
      alt={title}
      className="w-full h-32 object-cover transition-transform duration-300"
    />
    <div className="absolute top-0 left-0 hidden group-hover:flex items-center justify-center w-full h-full">
      <img
        src={image}
        alt={title}
        className="w-[400px] h-[300px] object-cover transition-transform duration-300 transform -translate-x-1/2 -translate-y-1/2"
        style={{ position: 'absolute', top: '50%', left: '50%', zIndex: 10 }}
      />
    </div>
  </div>
)} */}
<div className="overflow-visible rounded-t-lg mb-4 relative group">
  <img
    src={image}
    alt={title}
    className="w-full h-32 object-cover transition-transform duration-300"
  />
  <div className="absolute top-0 left-0 hidden group-hover:flex items-center justify-center w-full h-full">
    <img
      src={image}
      alt={title}
      className="object-cover transition-transform duration-300 transform group-hover:scale-150 -translate-x-1/2 -translate-y-1/2"
      style={{ position: 'absolute', top: '50%', left: '50%', zIndex: 10 }}
    />
  </div>
</div>


      <div className="flex items-center justify-between mb-4">
        {/* <div className="text-blue-400">{icon}</div> */}
        <a href={link} className="text-gray-400 hover:text-blue-400 transition-colors">
          <ExternalLink className="w-5 h-5" />
        </a>
        {githubLink && (
        <a href={githubLink} className="hover:text-blue-400 transition-colors flex items-center gap-2 hover:scale-110 transform duration-200">
          <Github className="w-5 h-5" />
          </a>
        )}
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