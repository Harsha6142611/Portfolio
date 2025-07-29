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
    tags: ['Socket.io', 'Real-time', 'Multiplayer', 'Video Audio chat', 'Group text chat', 'Game', 'Node.js'],
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
  'chat-app': {
  title: 'Enterprise Chat Application',
  description: 'Production-grade chat system with real-time messaging, media sharing, and workspace collaboration',
  longDescription: [
    'A robust and feature-rich chat application built for enterprise use cases during my first company experience.',
    'Designed with scalability, performance, and real-world usability in mind—supporting 1-on-1 and group chats, document exchange, participant management, and more.',
    'Focused on modular architecture and production-readiness using WebSockets, Redis, Elasticsearch, and S3-compatible MinIO storage.'
  ],
  workflowSteps: [
    {
      title: 'Real-Time Messaging',
      details: [
        'Supports 1-on-1 and group messaging',
        'Edit, reply, delete, and recall messages',
        'Typing indicators and online/offline status updates'
      ]
    },
    {
      title: 'Chat and Workspace Features',
      details: [
        'Workspaces to organize group and team chats',
        'Frequent contacts and user status tracking',
        'Pagination for chat history and infinite scroll'
      ]
    },
    {
      title: 'Media and File Management',
      details: [
        'Document and image sharing',
        'Image preview component with modal viewer',
        'MinIO S3 object storage for files and media'
      ]
    },
    {
      title: 'Group Management and Search',
      details: [
        'Manage group participants (add/remove/view)',
        'Elasticsearch integration for lightning-fast chat search',
        'Clear chat and delete chat functionality'
      ]
    }
  ],
  advantages: [
    'Production-ready architecture and codebase',
    'Highly scalable and modular backend',
    'Rich feature set for modern messaging experiences',
    'Secure file handling using object storage',
    'Fast and efficient search using Elasticsearch'
  ],
  technologies: [
    'Angular',
    'Node.js',
    'Express',
    'Socket.io',
    'Redis',
    'Elasticsearch',
    'MinIO (S3)',
    'PostgreSQL',
    'Tailwind CSS'
  ],
  tags: ['Chat App', 'Sockets', 'Elasticsearch', 'Angular', 'Redis', 'MinIO', '1v1', 'Group Chat', 'Typing', 'Online Status'],
  link: '', // Add Netlify or deployment link if available
  githubLink: '', // Add GitHub repo link if public
  image: '/images/chat-app.jpeg', // Add actual image to your /images folder
  features: [
    '1v1 and Group Chat',
    'Send, Edit, Reply, Delete, Recall Messages',
    'Typing Indicators and Online Status',
    'Document and Image Sharing',
    'Clear/Delete Chat',
    'Manage Group Participants',
    'Workspaces and Frequent Contacts',
    'Chat Pagination',
    'Image Preview Modal',
    'Elasticsearch Chat Search'
  ]
}

  // Add other projects here...
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsData[id] : null;

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white">
  <div className="container mx-auto px-4 py-12 max-w-6xl">
    <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-10 transition">
      <ArrowLeft className="w-5 h-5 mr-2" />
      Back to Portfolio
    </Link>

    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 space-y-16 border border-white/10 shadow-xl hover:shadow-2xl transition-shadow duration-300">

      {/* Header Section */}
      <div className="space-y-6">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-80 object-cover rounded-xl shadow-md transition-transform duration-500 hover:scale-[1.01]"
        />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <h1 className="text-4xl font-extrabold tracking-tight">{project.title}</h1>
          <div className="flex flex-wrap gap-4">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm">GitHub</span>
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                <span className="text-sm">Live Demo</span>
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs font-medium tracking-wide hover:bg-blue-500/30 transition"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Overview Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Overview</h2>
        <div className="space-y-4 text-gray-300 text-base leading-relaxed">
          {project.longDescription.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>
      </section>

      {/* Workflow Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">How It Works</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {project.workflowSteps.map((step, index) => (
            <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-xl transition hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-3">{`${index + 1}. ${step.title}`}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
                {step.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Advantages Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Key Advantages</h2>
        <div className="grid md:grid-cols-2 gap-5 text-gray-300 text-sm">
          {project.advantages.map((advantage, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="text-blue-400 text-lg">•</div>
              <p>{advantage}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Technologies Used</h2>
        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-700/40 rounded-full text-sm text-gray-200 tracking-wide hover:bg-gray-600/60 transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  </div>
</div>

  );
};

export default ProjectDetail;
