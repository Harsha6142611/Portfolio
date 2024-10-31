// import React from 'react';
// import { Trophy } from 'lucide-react';

// const Achievements: React.FC = () => (
//   <div>
//     <h2 className="text-3xl font-bold mb-6">Achievements</h2>
//     <div className="flex space-x-4"> 
//       <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700/50 flex-1">
//         <Trophy className="w-8 h-8 text-yellow-400 mb-4" />
//         <p className="text-gray-300">
//           Published patent on "A Healthcare Data Management Optimization System Using Blockchain"
//         </p>
//       </div>
//       <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700/50 flex-1">
//         <Trophy className="w-8 h-8 text-blue-400 mb-4" />
//         <p className="text-gray-300">
//           Participated in Hacker House Goa - Blockchain Innovation Hackathon
//         </p>
//       </div>
//     </div>
//   </div>
// );

// export default Achievements;

import React from 'react';
import { Trophy } from 'lucide-react';

const Achievements: React.FC = () => (
  <div className="p-6 max-w-2xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-white mb-10">Achievements</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="relative bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:border-gray-500">
        <div className="flex items-center space-x-4 mb-4">
          <Trophy className="text-yellow-400 w-8 h-8" />
          <h3 className="text-lg font-semibold text-white">Patent</h3>
        </div>
        <p className="text-gray-300 text-sm">
          Published patent on "A Healthcare Data Management Optimization System Using Blockchain and a Method Thereof."
        </p>
      </div>
      
      <div className="relative bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:border-gray-500">
        <div className="flex items-center space-x-4 mb-4">
          <Trophy className="text-blue-400 w-8 h-8" />
          <h3 className="text-lg font-semibold text-white">Hackathon</h3>
        </div>
        <p className="text-gray-300 text-sm">
          Participated in Hacker House Goa - Blockchain Innovation Hackathon
        </p>
      </div>
    </div>
  </div>
);

export default Achievements;
