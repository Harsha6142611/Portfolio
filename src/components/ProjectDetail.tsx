import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

interface ProjectDetails {
  title: string;
  description: string;
  longDescription: string[];
  tags: string[];
  link: string;
  githubLink: string;
  image: string;
  features: string[];
  technologies: string[];
  workflowSteps: { title: string; details: string[] }[];
  advantages: string[];
}

const projectsData: Record<string, ProjectDetails> = {
  'google-drive-3': {
    title: 'Google Drive 3.0',
    description: 'Decentralized storage solution using IPFS, and AES Encryption',
    longDescription: [
      'A decentralized platform designed to store confidential files with unmatched security and privacy.',
      'Built with cutting-edge blockchain technology and IPFS (InterPlanetary File System), ensuring your data remains safe, tamper-proof, and completely under your control.',
      'Combines AES encryption, IPFS storage, and blockchain technology to provide a secure, decentralized file storage solution.'
    ],
    workflowSteps: [
      {
        title: 'File Upload and Encryption',
        details: [
          'Files undergo encryption using AES (Advanced Encryption Standard)',
          'Encrypted files are uploaded to IPFS using Pinata',
          'Even if tampered with, only encrypted data is accessible'
        ]
      },
      {
        title: 'Decentralized Storage on IPFS',
        details: [
          'Unique CID (Content Identifier) generated for each file',
          'CID acts as a fingerprint ensuring data integrity',
          'Distributed storage across the IPFS network'
        ]
      },
      {
        title: 'Smart Contract Integration',
        details: [
          'Deployed on Polygon Testnet for metadata management',
          'Stores file CID, metadata, and access permissions',
          'Eliminates centralized database dependencies'
        ]
      },
      {
        title: 'File Sharing and Access Control',
        details: [
          'Direct file sharing via username',
          'Automatic file appearance in recipients Retrieve File section',
          'Granular access control with instant grant/revoke capabilities'
        ]
      }
    ],
    advantages: [
      'Unmatched security with pre-upload encryption',
      'True ownership with blockchain-backed access controls',
      'Effortless sharing without insecure links',
      'Complete transparency through smart contracts',
      'Decentralized architecture for global availability'
    ],
    technologies: [
      'AES(Advanced Encryption Standard) Encryption',
      'IPFS (InterPlanetary File System)',
      'Pinata SDK',
      'Solidity',
      'Polygon Network',
      'React.js',
      'Web3.js',
      'Tailwind CSS'
    ],
    tags: ['IPFS', 'Pinata', 'IPFS', 'AES', 'React', 'Blockchain', 'Web3'],
    link: 'https://googledrive3-0.netlify.app/',
    githubLink: 'https://github.com/Harsha6142611/GoogleDrive3.0',
    image: '/images/googledrive3.png',
    features: []
  },
  'voting-dapp': {
  title: 'Decentralized Voting DApp',
  description: 'A blockchain-based voting platform ensuring security, transparency, and immutability in elections',
  longDescription: [
    'A revolutionary decentralized voting platform that addresses the challenges of traditional voting system through blockchain technology.',
    'Built to ensure trust and transparency in electoral processes while eliminating vulnerabilities like tampering, lack of transparency, and centralized control.',
    'Leverages smart contracts on the Polygon network to provide a secure, transparent, and efficient voting system suitable for various real-world applications.'
  ],
  workflowSteps: [
    {
      title: 'Election Setup',
      details: [
        'Election Commission deploys smart contract on blockchain',
        'Sets election duration and parameters',
        'Registers eligible candidates and voters',
        'Initializes secure voting environment'
      ]
    },
    {
      title: 'Voter Registration & Authentication',
      details: [
        'MetaMask wallet integration for secure authentication',
        'Voter eligibility verification through smart contracts',
        'One-wallet-one-vote enforcement',
        'Immutable record of registered voters'
      ]
    },
    {
      title: 'Vote Casting Process',
      details: [
        'Secure vote submission through MetaMask',
        'Real-time vote recording on blockchain',
        'Encrypted vote storage for privacy',
        'Prevention of double voting'
      ]
    },
    {
      title: 'Result Declaration',
      details: [
        'Automatic vote tallying through smart contracts',
        'Real-time result updates',
        'Transparent winner declaration',
        'Immutable election results'
      ]
    }
  ],
  advantages: [
    'Immutable and tamper-proof voting records',
    'Complete transparency in the election process',
    'Decentralized architecture eliminating single points of failure',
    'Real-time vote tracking and result declaration',
    'Cost-effective and environmentally friendly',
    'Enhanced accessibility for remote voting'
  ],
  technologies: [
    'Solidity',
    'Ethereum Network',
    'Web3.js',
    'React.js',
    'MetaMask',
    'Smart Contracts',
    'Tailwind CSS',
    'Hardhat'
  ],
  tags: ['Blockchain', 'Voting', 'DApp', 'Web3', 'Solidity', 'React', 'Smart Contracts'],
  link: 'https://harshavoting.netlify.app/',
  githubLink: 'https://github.com/Harsha6142611/VotingServer',
  image: '/images/voting.png',
  features: []
},
  'show-game': {
    title: 'SHOW GAME',
    description: 'A real-time multiplayer card game featuring customizable themes, AI bots, and integrated video/audio chat',
    longDescription: [
      'An innovative online multiplayer card game that combines strategic gameplay with real-time social interaction.',
      'Features customizable card themes, AI-powered bots, and seamless communication through integrated video/audio chat.',
      'Built with Socket.io for real-time updates and Jitsi for video conferencing, creating an immersive gaming experience.'
    ],
    workflowSteps: [
      {
        title: 'Room Management',
        details: [
          'Create or join custom game rooms',
          'Set player count (2-6 players)',
          'Customize card themes (Marvel, Harry Potter, GTA, etc.)',
          'Add AI-powered bots for incomplete rooms'
        ]
      },
      {
        title: 'Gameplay Mechanics',
        details: [
          'Turn-based card game with real-time updates',
          'Strategic card drawing and discarding',
          'Win condition: Collect four identical cards',
          'Instant winner announcements and rematch options'
        ]
      },
      {
        title: 'Real-Time Communication',
        details: [
          'Integrated video/audio chat via Jitsi',
          'Group text chat using Socket.io',
          'Live game state updates',
          'Seamless player interaction'
        ]
      },
      {
        title: 'AI Bot System',
        details: [
          'Probability-based decision making',
          'Strategic gameplay algorithms',
          'Automatic player replacement',
          'Challenging computer opponents'
        ]
      }
    ],
    advantages: [
      'Fully customizable card themes and gameplay',
      'Real-time multiplayer interaction',
      'Integrated video, audio, and text chat',
      'Intelligent AI-powered bots',
      'Cross-platform compatibility',
      'Stunning neon-themed interface'
    ],
    technologies: [
      'Socket.io',
      'Node.js',
      'Express',
      'React.js',
      'Jitsi SDK',
      'JavaScript'
    ],
    tags: ['Socket.io', 'Real-time', 'Multiplayer', "Video Audio chat", "Group text chat",'Game', 'Node.js'],
    link: 'https://show-game.netlify.app/',
    githubLink: 'https://github.com/Harsha6142611/ShowGame',
    image: '/images/showgame.png',
    features: []
  },
  'zkauth': {
    title: 'ZKAuth',
    description: 'Zero-Knowledge Proof Authentication System for Privacy-Preserving Identity Verification',
    longDescription: [
      'A secure authentication system leveraging zero-knowledge proofs for private and tamper-resistant user verification.',
      'Features a robust registration process, secure login mechanism, and foolproof account recovery system.',
      'Implements advanced cryptographic protocols to ensure user privacy while maintaining high security standards.'
    ],
    workflowSteps: [
      {
        title: 'Registration Process',
        details: [
          'User selects a secret key for account creation',
          'Backend generates public-private key pair',
          'Creation of secure user vault',
          'Generation and issuance of recovery phrase',
          'Secure storage of recovery information'
        ]
      },
      {
        title: 'Login Process',
        details: [
          'User provides secret key for authentication',
          'Backend generates authentication challenge',
          'Private key used for challenge resolution',
          'Proof verification without exposing secret key',
          'Secure session establishment'
        ]
      },
      {
        title: 'Account Recovery',
        details: [
          'Recovery initiated using secure recovery phrase',
          'Verification of recovery phrase authenticity',
          'Option to set new secret key',
          'Secure vault access restoration'
        ]
      }
    ],
    advantages: [
      'Complete privacy preservation - no exposure of sensitive data',
      'Robust tamper resistance through ZKP implementation',
      'Decentralized data storage reducing attack vectors',
      'Secure recovery mechanism for lost credentials',
      'No central storage of sensitive information',
      'Enhanced protection against common attack patterns'
    ],
    technologies: [
      'Advanced Cryptography',
      'Zero-Knowledge Proofs',
      'Secure Vaults',
      'Node.js',
      'Cryptographic Libraries',
      'Secure Storage Solutions'
    ],
    tags: ['ZKP', 'Authentication', 'Privacy','NPM Sass', 'Cryptography', 'Security', 'Decentralized'],
    link: 'https://github.com/Harsha6142611/zkAuth-SDK/tree/main/zkauth-sdk',
    githubLink: 'https://github.com/Harsha6142611/zkAuth-SDK/tree/main/zkauth-sdk',
    image: '/images/Zero-Knowledge-Proofs.jpg',
    features: [
      'Secure key pair generation',
      'Challenge-based authentication',
      'Recovery phrase system',
      'Zero-knowledge proof verification',
      'Secure vault management',
      'Privacy-preserving authentication'
    ]
  },
  // Add other projects here...
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsData[id] : null;

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Portfolio
        </Link>

        <div className="bg-gray-800/50 rounded-lg p-8 space-y-12">
          {/* Header Section */}
          <div className="space-y-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-80 object-cover rounded-lg"
            />

            <div className="flex justify-between items-center">
              <h1 className="text-4xl font-bold">{project.title}</h1>
              <div className="flex gap-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Overview Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Overview</h2>
            <div className="space-y-4">
              {project.longDescription.map((desc, index) => (
                <p key={index} className="text-gray-300 leading-relaxed">{desc}</p>
              ))}
            </div>
          </div>

          {/* Workflow Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">How It Works</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.workflowSteps.map((step, index) => (
                <div key={index} className="bg-gray-700/30 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">{`${index + 1}. ${step.title}`}</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-300">{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Advantages Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Key Advantages</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.advantages.map((advantage, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="text-blue-400">•</div>
                  <p className="text-gray-300">{advantage}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-700/50 rounded-lg text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
