import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Blocks, Trophy, Code } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import ExperienceCard from './components/ExperienceCard';
import TypewriterText from './components/TypewriterText';
import MatrixBackground from './components/MatrixBackground';
import CursorEffect from './components/CursorEffect';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
            <MatrixBackground />
            <CursorEffect />
            
            <div className="relative z-10">
              {/* Hero Section */}
              <header className="container mx-auto px-4 py-20">
                <div className="max-w-4xl mx-auto backdrop-blur-sm bg-gray-900/30 p-8 rounded-xl border border-gray-700/50">
                  <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                    Harsha Pasupula
                  </h1>
                  <h2 className="text-3xl font-bold mb-6 text-gray-300 flex items-center gap-2">
                    <TypewriterText 
                      texts={[
                        "Blockchain Developer",
                        "MERN Developer"
                      ]}
                    />
                  </h2>
                  <p className="text-s text-gray-300 mb-8">
                    Specializing in Blockchain, Smart Contracts, DApps, and Decentralized systems
                  </p>
                  <div className="flex gap-6">
                    <a href="https://github.com/Harsha6142611/" className="hover:text-blue-400 transition-colors flex items-center gap-2 hover:scale-110 transform duration-200" target='_blank'>
                      <Github className="w-5 h-5" />
                      <span className="text-sm">GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/harsha-pasupula-b59a8b249/" className="hover:text-blue-400 transition-colors flex items-center gap-2 hover:scale-110 transform duration-200" target='_blank'>
                      <Linkedin className="w-5 h-5" />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                    <a href="https://leetcode.com/u/Harsha614261/" className="hover:text-blue-400 transition-colors flex items-center gap-2 hover:scale-110 transform duration-200">
                      <Code className="w-5 h-5" />
                      <span className="text-sm">LeetCode</span>
                    </a>
                    <a href="mailto:pasupulaharsha7006@gmail.com" className="hover:text-blue-400 transition-colors flex items-center gap-2 hover:scale-110 transform duration-200">
                      <Mail className="w-5 h-5" />
                      <span className="text-sm">Email</span>
                    </a>
                  </div>
                </div>
              </header>

              <AboutMe />
              {/* Experience Section */}
              <section className="container mx-auto px-4 py-5">
                <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
                <div className="max-w-4xl mx-auto">
                  <ExperienceCard
                    title="Blockchain Developer"
                    company="DCODEBLOCKS"
                    period="Jun 2024 - Present"
                    description={[
                      "Core Blockchain Developer at DCODEBLOCK",
                      "Implemented and integrated multiple testnets, including Polygon, Ethereum, BNB, and Scroll etc..",
                      "Worked on NFT deployments across platforms",
                      "Integrated SDKs like Solana for enhanced blockchain functionality",
                      "Developed and integrated a Solidity compiler for streamlined smart contract development"
                    ]}
                    icon={<Blocks className="w-8 h-8 text-blue-400" />}
                  />
                </div>
              </section>

              {/* Projects Section */}
              <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <ProjectCard
                    title="ZKP Authentication"
                    description="Zero-Knowledge Proof Authentication System for Privacy-Preserving Identity Verification"
                    tags={["Zero knowledge Proof", "NPM JS", "Authentication", "Cryptography"]}
                    link="https://github.com/Harsha6142611/zkAuth-SDK/tree/main/zkauth-sdk"
                    githubLink="https://github.com/Harsha6142611/zkAuth-SDK/tree/main/zkauth-sdk"
                    icon={<Code2 className="w-6 h-6" />}
                    image="images/Zero-Knowledge-Proofs.jpg"
                    id="zkauth"
                  />
                  <ProjectCard
                    id="google-drive-3"
                    title="Google Drive 3.0"
                    description="Decentralized storage solution using IPFS with Pinata, featuring AES encryption and real-time tracking"
                    tags={["IPFS", "Pinata", "AES", "React"]}
                    link="https://googledrive3-0.netlify.app/"
                    githubLink="https://github.com/Harsha6142611/GoogleDrive3.0"
                    icon={<Code2 className="w-6 h-6" />}
                    image="images/googledrive3.png"
                  />
                  <ProjectCard
                    title="Voting DApp"
                    description="Secure decentralized voting system with Metamask integration and smart contract implementation"
                    tags={["Solidity", "JavaScript", "Node.js", "Web3"]}
                    link="https://harshavoting.netlify.app/"
                    githubLink="https://github.com/Harsha6142611/VotingServer"
                    icon={<Code2 className="w-6 h-6" />}
                    image="images/voting.png"
                    id="voting-dapp"
                  />
                  <ProjectCard
                    title="Multiplayer Show Card Game"
                    description="Real-time multiplayer card game with video conferencing and AI-powered bots"
                    tags={["Node.js", "Socket.io", "React", "Jitsi"]}
                    link="https://showgame1.netlify.app/"
                    githubLink="https://github.com/Harsha6142611/Show-Game"
                    icon={<Code2 className="w-6 h-6" />}
                    image="images/showgame.png"
                    id="multiplayer-show-card-game"
                  />
                  
                </div>
              </section>

              {/* Hackathon Section */}
              <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold mb-12 text-center">Hackathon Experience</h2>
                <div className="max-w-4xl mx-auto bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm border border-gray-700/50">
                  <div className="aspect-w-16 aspect-h-9 relative">
                    <img
                      src="images/hackerHouseGoa.png"
                      alt="Hacker House Goa"
                      className="object-cover w-full h-[400px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Hacker House Goa</h3>
                    <p className="text-gray-300 mb-4">
                      Participated in an intensive blockchain hackathon focused on developing innovative solutions
                      for decentralized applications. Collaborated with fellow developers and blockchain enthusiasts
                      to create cutting-edge solutions in the Web3 space.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Blockchain', 'Web3', 'DApps', 'Smart Contracts'].map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Skills & Achievements */}
              <section className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto space-y-12">
                  <Skills />
                  <Achievements />
                </div>
              </section>

              {/* Footer */}
              <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
                <p>© 2024 Harsha Pasupula. All rights reserved.</p>
              </footer>
            </div>
          </div>
        } />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;