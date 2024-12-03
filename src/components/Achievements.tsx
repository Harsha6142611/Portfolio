import React from 'react';
import { Trophy } from 'lucide-react';

const Achievements: React.FC = () => (
  <div className="p-6 max-w-2xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-white mb-10">Achievements</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="relative bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-md 
        hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 
        hover:bg-gradient-to-br hover:from-purple-900 hover:to-gray-800 
        hover:border-purple-500 group">
        <div className="flex items-center space-x-4 mb-4">
          <Trophy className="text-yellow-400 w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-200">Patent</h3>
        </div>
        <p className="text-gray-300 text-sm group-hover:text-purple-100">
          Published patent on "A Healthcare Data Management Optimization System Using Blockchain and a Method Thereof."
        </p>
      </div>
      
      <div className="relative bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-md 
        hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 
        hover:bg-gradient-to-br hover:from-blue-900 hover:to-gray-800 
        hover:border-blue-500 group">
        <div className="flex items-center space-x-4 mb-4">
          <Trophy className="text-blue-400 w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
          <h3 className="text-lg font-semibold text-white group-hover:text-blue-200">Hackathon</h3>
        </div>
        <p className="text-gray-300 text-sm group-hover:text-blue-100">
          Participated in Hacker House Goa - Blockchain Innovation Hackathon
        </p>
      </div>
    </div>
  </div>
);

export default Achievements;
