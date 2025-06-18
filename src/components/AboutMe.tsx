import React from 'react';
import {
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaLaptopCode,
} from 'react-icons/fa';

const AboutMe: React.FC = () => {
  return (
    <section className="bg-gradient-to- via-gray-800 to-gray-900 py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
          About Me
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12">
          I’m a BTech Computer Science student at <strong className="text-blue-400">SRM AP University</strong> with strong skills in web and blockchain development. As a core blockchain developer at <strong className="text-green-400">DCODEBLOCK</strong>, I built <strong className="text-purple-400">NFTs, Testnets, SDKs, and a Solidity Compiler</strong>. I also co-authored a patent titled <em className="text-yellow-400">"A Healthcare Data Management Optimization System Using Blockchain and a Method Thereof."</em> Active in hackathons like <strong className="text-pink-400">Hacker House Goa</strong>, I enjoy solving real-world problems through code.
        </p>

        {/* Icon Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-10">
          <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <FaGraduationCap className="text-blue-400 text-5xl mb-3 drop-shadow-xl" />
            <span className="text-white text-sm tracking-wide uppercase">Education</span>
          </div>

          <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <FaBriefcase className="text-green-400 text-5xl mb-3 drop-shadow-xl" />
            <span className="text-white text-sm tracking-wide uppercase">Experience</span>
          </div>

          <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <FaCertificate className="text-purple-400 text-5xl mb-3 drop-shadow-xl" />
            <span className="text-white text-sm tracking-wide uppercase">Patent</span>
          </div>

          <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <FaLaptopCode className="text-yellow-400 text-5xl mb-3 drop-shadow-xl" />
            <span className="text-white text-sm tracking-wide uppercase">Hackathons</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
