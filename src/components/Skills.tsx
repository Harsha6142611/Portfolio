// import React from 'react';

// const Skills: React.FC = () => (
//   <div>
//     <h2 className="text-3xl font-bold mb-6">Skills</h2>
//     <div className="space-y-4">
//       <div className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm border border-gray-700/50">
//         <h3 className="font-semibold mb-2">Blockchain</h3>
//         <p className="text-gray-300">Ethereum, Solidity, Ganache, Hardhat, Truffle</p>
//       </div>
//       <div className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm border border-gray-700/50">
//         <h3 className="font-semibold mb-2">Languages</h3>
//         <p className="text-gray-300">English, Hindi, Telugu</p>
//       </div>
//     </div>
//   </div>
// );

// export default Skills;


import React from 'react';
import { FaEthereum, FaLanguage } from 'react-icons/fa';

const Skills: React.FC = () => (
  <div className="p-6 max-w-lg mx-auto">
    <h2 className="text-4xl font-extrabold text-center text-white mb-8">Skills</h2>
    <div className="grid grid-cols-1 gap-6">
      <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-3">
          <FaEthereum className="text-blue-400 text-2xl mr-3 animate-pulse" />
          <h3 className="font-semibold text-xl text-gray-100">Blockchain</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {['Ethereum', 'Solidity', 'Ganache', 'Hardhat', 'Truffle'].map(skill => (
            <span
              key={skill}
              className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm font-medium transition-transform transform hover:-translate-y-1 hover:shadow-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-3">
          <FaLanguage className="text-green-400 text-2xl mr-3 animate-bounce" />
          <h3 className="font-semibold text-xl text-gray-100">Languages</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {['English', 'Hindi', 'Telugu'].map(language => (
            <span
              key={language}
              className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm font-medium transition-transform transform hover:-translate-y-1 hover:shadow-lg"
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
