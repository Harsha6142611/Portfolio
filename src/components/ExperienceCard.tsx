import React from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  icon: React.ReactNode;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  period,
  description,
  icon,
}) => {
  return (
    <div className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl 
                    border border-gray-700/50 backdrop-blur-sm
                    transition-all duration-500 hover:shadow-2xl hover:border-blue-500/50
                    before:absolute before:inset-0 before:bg-blue-500/5 before:rounded-xl before:opacity-0
                    before:transition-opacity hover:before:opacity-100">
      <div className="flex items-start gap-4 relative">
        <div className="flex-shrink-0 p-3 bg-blue-500/10 rounded-lg 
                      transform transition-all duration-300 group-hover:scale-110
                      group-hover:bg-blue-500/20">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-1 
                       transform transition-colors duration-300 
                       group-hover:text-blue-400">
            {title}
          </h3>
          <p className="text-blue-400 text-lg font-semibold mb-1">{company}</p>
          <p className="text-gray-400 mb-4 font-medium">{period}</p>
          <ul className="space-y-3">
            {description.map((item, index) => (
              <li key={index} 
                  className="flex items-start gap-3 text-gray-300 
                           group-hover:text-gray-200 transition-colors duration-300">
                <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-400"></span>
                <span className="flex-1 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;