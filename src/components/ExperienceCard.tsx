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
    <div className="bg-gray-800/50 p-6 rounded-lg mb-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">{icon}</div>
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-blue-400 mb-2">{company}</p>
          <p className="text-gray-400 mb-4">{period}</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;