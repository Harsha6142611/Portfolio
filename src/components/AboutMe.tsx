// import React from 'react';

// const AboutMe: React.FC = () => {
//   return (
//     <section className="container mx-auto px-4 py-16">
//       <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
//       <p className="text-gray-300 text-center max-w-2xl mx-auto">
//       I'm a BTech Computer Science student at <strong>SRM AP University</strong> with strong skills in web and blockchain development. As a core blockchain developer at <strong>DCODEBLOCK</strong>, I built <strong>NFTs, Testnets, SDKs, and a Solidity Compiler</strong>. I also co-authored a patent titled <strong>"A Healthcare Data Management Optimization System Using Blockchain and a Method Thereof."</strong> Active in hackathons, like <strong>Hacker House Goa</strong>, I enjoy applying my knowledge to solve real-world challenges.
//       </p>
//     </section>
//   );
// };

// export default AboutMe;


import React from 'react';
import { FaGraduationCap, FaBriefcase, FaCertificate, FaLaptopCode } from 'react-icons/fa';

const AboutMe: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-20 rounded-lg  overflow-hidden relative">
      <div className="relative text-center max-w-3xl mx-auto p-10">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-white mb-8 animate-fadeIn">
          About Me
        </h2>

        {/* Description */}
        <p className="text-white text-lg leading-relaxed mb-10 animate-fadeIn text-opacity-90">
          I'm a BTech Computer Science student at <strong>SRM AP University</strong> with strong skills in web and blockchain development. As a core blockchain developer at <strong>DCODEBLOCK</strong>, I built <strong>NFTs, Testnets, SDKs, and a Solidity Compiler</strong>. I also co-authored a patent titled <strong>"A Healthcare Data Management Optimization System Using Blockchain and a Method Thereof."</strong> Active in hackathons, like <strong>Hacker House Goa</strong>, I enjoy applying my knowledge to solve real-world challenges.
        </p>
        
        {/* Icons Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fadeIn">
          <div className="flex flex-col items-center">
            <FaGraduationCap className="text-blue-500 text-4xl mb-2 shadow-lg" />
            <span className="text-white text-opacity-90">Education</span>
          </div>
          <div className="flex flex-col items-center">
            <FaBriefcase className="text-green-500 text-4xl mb-2 shadow-lg" />
            <span className="text-white text-opacity-90">Experience</span>
          </div>
          <div className="flex flex-col items-center">
            <FaCertificate className="text-purple-500 text-4xl mb-2 shadow-lg" />
            <span className="text-white text-opacity-90">Patent</span>
          </div>
          <div className="flex flex-col items-center">
            <FaLaptopCode className="text-yellow-500 text-4xl mb-2 shadow-lg" />
            <span className="text-white text-opacity-90">Hackathons</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
