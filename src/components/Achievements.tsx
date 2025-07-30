import React from 'react';
import { Trophy, Star, Award } from 'lucide-react';

const Achievements: React.FC = () => (
  <div className="p-8 max-w-4xl mx-auto">
    <h2 className="text-5xl font-bold text-center mb-12 relative">
      <span className="bg-gradient-to-r text-white text-3xl text-transparent bg-clip-text">
        Achievements
      </span>
    </h2>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="achievement-card">
        <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 rounded-xl 
          border border-gray-700/50 backdrop-blur-sm shadow-lg
          hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 
          hover:border-yellow-500/50 group">
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-3 bg-yellow-500/20 rounded-lg">
              <Trophy className="text-yellow-400 w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-yellow-200">Patent Publication</h3>
          </div>
          <p className="text-gray-300 leading-relaxed group-hover:text-yellow-100">
            Published patent on "A Healthcare Data Management Optimization System Using Blockchain and a Method Thereof."
          </p>
        </div>
      </div>
      
      <div className="achievement-card">
        <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 rounded-xl 
          border border-gray-700/50 backdrop-blur-sm shadow-lg
          hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 
          hover:border-blue-500/50 group">
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-3 bg-blue-500/20 rounded-lg">
              <Trophy className="text-blue-400 w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-blue-200">Hackathon Success</h3>
          </div>
          <p className="text-gray-300 leading-relaxed group-hover:text-blue-100">
            Participated in Hacker House Goa - Blockchain Innovation Hackathon
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Achievements;