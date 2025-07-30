import React from 'react';
import {
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaLaptopCode,
} from 'react-icons/fa';

const AboutMe: React.FC = () => {
  return (
    <section className="from-gray-900 via-gray-800 to-gray-900 py-5 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight">
          About Me
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-14 backdrop-blur-md px-4 py-6 rounded-lg bg-white/5 shadow-inner">
          I'm <span className="text-blue-400 font-semibold">Harsha</span>, a passionate software developer with{" "}
          <span className="text-green-400 font-semibold">production-level experience</span> in building scalable,
          reliable, and optimized systems. I’ve designed and developed full-stack solutions that perform in real-world
          environments under heavy load.
          <br /><br />
          Previously, I worked as a <span className="text-purple-400 font-semibold">blockchain developer</span>, where I built{" "}
          NFTs, Web3 tools, SDKs, and even a <span className="text-yellow-400 font-semibold">Solidity compiler</span>. Whether it’s web, API,
          real-time chat apps, or decentralized systems — I enjoy solving complex problems through clean architecture.
        </p>

      </div>
    </section>
  );
};

export default AboutMe;
