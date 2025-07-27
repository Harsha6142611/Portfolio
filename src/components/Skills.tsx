import React from 'react';
import { FaEthereum, FaLanguage } from 'react-icons/fa';

const Skills: React.FC = () => (
  <div className="p-8 max-w-4xl mx-auto">
    <h2 className="text-5xl font-bold text-center text-white mb-12 relative">
      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
        Skills & Expertise
      </span>
    </h2>
    
    <div className="grid md:grid-cols-2 gap-8">
      <div className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-gray-700/50 
                    backdrop-blur-lg transform transition-all duration-300 hover:scale-105">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-blue-500/20 rounded-lg">
            <FaEthereum className="text-blue-400 text-3xl group-hover:animate-spin-slow" />
          </div>
          <h3 className="font-bold text-2xl ml-4 text-gray-100">Blockchain</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {['Ethereum', 'Solidity', 'Ganache', 'Hardhat'].map(skill => (
            <span
              key={skill}
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-gray-200 
                       px-4 py-2 rounded-lg text-sm font-medium border border-gray-700/30
                       transform transition-all duration-300 hover:scale-110 hover:border-blue-500/50"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-gray-700/50 
                    backdrop-blur-lg transform transition-all duration-300 hover:scale-105">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-green-500/20 rounded-lg">
            <FaLanguage className="text-green-400 text-3xl group-hover:animate-bounce" />
          </div>
          <h3 className="font-bold text-2xl ml-4 text-gray-100">Languages</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {['English', 'Hindi', 'Telugu'].map(language => (
            <span
              key={language}
              className="bg-gradient-to-r from-green-500/10 to-teal-500/10 text-gray-200 
                       px-4 py-2 rounded-lg text-sm font-medium border border-gray-700/30
                       transform transition-all duration-300 hover:scale-110 hover:border-green-500/50"
            >
              {language}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Skills;