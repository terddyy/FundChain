export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  status: "active" | "inactive";
  joinDate: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  requestedAmount: number;
  raisedAmount: number;
  sectorId: string;
  status: "pending" | "approved" | "rejected";
  proposerId: string;
  proposerName: string;
  createdAt: string;
  votes: number;
  fundingDeadline: string;
}

export interface Sector {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  projectCount: number;
}

export interface Developer {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  github?: string;
  linkedin?: string;
}

// Mock data
export const mockUsers: User[] = [
  {
    id: "1",
    name: "Alex Chen",
    email: "alex.chen@fundchain.com",
    role: "admin",
    status: "active",
    joinDate: "2024-01-15",
  },
  {
    id: "2",
    name: "Sarah Williams",
    email: "sarah.w@email.com",
    role: "user",
    status: "active",
    joinDate: "2024-02-03",
  },
  {
    id: "3",
    name: "Marcus Johnson",
    email: "marcus.j@email.com",
    role: "user",
    status: "inactive",
    joinDate: "2024-01-28",
  },
  {
    id: "4",
    name: "Elena Rodriguez",
    email: "elena.r@email.com",
    role: "user",
    status: "active",
    joinDate: "2024-02-10",
  },
];

export const mockSectors: Sector[] = [
  {
    id: "1",
    name: "Technology",
    description:
      "Innovative tech solutions and digital transformation projects",
    icon: "Cpu",
    color: "neon-cyan",
    projectCount: 12,
  },
  {
    id: "2",
    name: "Agriculture",
    description: "Sustainable farming and food security initiatives",
    icon: "Wheat",
    color: "green-500",
    projectCount: 8,
  },
  {
    id: "3",
    name: "Education",
    description: "Learning platforms and educational technology",
    icon: "GraduationCap",
    color: "neon-purple",
    projectCount: 15,
  },
  {
    id: "4",
    name: "Health",
    description: "Healthcare innovation and medical research",
    icon: "Heart",
    color: "red-500",
    projectCount: 10,
  },
  {
    id: "5",
    name: "Environment",
    description: "Climate solutions and environmental protection",
    icon: "Leaf",
    color: "emerald-500",
    projectCount: 6,
  },
  {
    id: "6",
    name: "Finance",
    description: "Fintech and blockchain financial solutions",
    icon: "DollarSign",
    color: "yellow-500",
    projectCount: 9,
  },
];

export const mockProjects: Project[] = [
  {
    id: "1",
    name: "QuantumAI Learning Platform",
    description:
      "An AI-powered educational platform that adapts to individual learning styles using quantum computing principles.",
    requestedAmount: 150000,
    raisedAmount: 45000,
    sectorId: "3",
    status: "approved",
    proposerId: "2",
    proposerName: "Sarah Williams",
    createdAt: "2024-01-20",
    votes: 128,
    fundingDeadline: "2024-04-20",
  },
  {
    id: "2",
    name: "AgriChain Supply Tracker",
    description:
      "Blockchain-based supply chain tracking for organic farming, ensuring transparency from farm to table.",
    requestedAmount: 89000,
    raisedAmount: 23000,
    sectorId: "2",
    status: "approved",
    proposerId: "4",
    proposerName: "Elena Rodriguez",
    createdAt: "2024-02-01",
    votes: 97,
    fundingDeadline: "2024-05-01",
  },
  {
    id: "3",
    name: "Neural Health Diagnostics",
    description:
      "AI-powered early detection system for neurological disorders using advanced brain imaging analysis.",
    requestedAmount: 250000,
    raisedAmount: 0,
    sectorId: "4",
    status: "pending",
    proposerId: "3",
    proposerName: "Marcus Johnson",
    createdAt: "2024-02-15",
    votes: 0,
    fundingDeadline: "2024-06-15",
  },
  {
    id: "4",
    name: "EcoToken Carbon Credits",
    description:
      "Decentralized carbon credit trading platform for environmental sustainability projects worldwide.",
    requestedAmount: 180000,
    raisedAmount: 67000,
    sectorId: "5",
    status: "approved",
    proposerId: "2",
    proposerName: "Sarah Williams",
    createdAt: "2024-01-10",
    votes: 156,
    fundingDeadline: "2024-04-10",
  },
  {
    id: "5",
    name: "DeFi Insurance Protocol",
    description:
      "Smart contract-based insurance protocol for DeFi platforms, providing automated claims processing.",
    requestedAmount: 320000,
    raisedAmount: 95000,
    sectorId: "6",
    status: "approved",
    proposerId: "4",
    proposerName: "Elena Rodriguez",
    createdAt: "2024-01-25",
    votes: 203,
    fundingDeadline: "2024-05-25",
  },
  {
    id: "6",
    name: "Quantum Encryption Network",
    description:
      "Ultra-secure communication network using quantum encryption for enterprise and government use.",
    requestedAmount: 500000,
    raisedAmount: 0,
    sectorId: "1",
    status: "rejected",
    proposerId: "3",
    proposerName: "Marcus Johnson",
    createdAt: "2024-02-05",
    votes: 45,
    fundingDeadline: "2024-07-05",
  },
];

export const mockDevelopers: Developer[] = [
  {
    id: "1",
    name: "Dr. Zara Okafor",
    role: "Blockchain Architect",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b3ad1de9?w=400",
    bio: "Leading blockchain architect with 8+ years in decentralized systems. PhD in Cryptography from MIT.",
    github: "zara-okafor",
    linkedin: "zara-okafor",
  },
  {
    id: "2",
    name: "Kai Nakamura",
    role: "AI/ML Engineer",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    bio: "AI specialist focused on quantum machine learning and neural networks. Former Tesla AI team member.",
    github: "kai-nakamura",
    linkedin: "kai-nakamura",
  },
  {
    id: "3",
    name: "Maya Patel",
    role: "Full-Stack Developer",
    avatar:
      "https://images.unsplash.com/photo-1508836454842-70e4dad698c0?w=400",
    bio: "Full-stack developer specializing in Web3 technologies and decentralized applications.",
    github: "maya-patel",
    linkedin: "maya-patel",
  },
  {
    id: "4",
    name: "Viktor Petrov",
    role: "Smart Contract Auditor",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    bio: "Security expert with extensive experience in smart contract auditing and DeFi protocols.",
    github: "viktor-petrov",
    linkedin: "viktor-petrov",
  },
];

// Helper functions
export const getSectorById = (id: string): Sector | undefined => {
  return mockSectors.find((sector) => sector.id === id);
};

export const getProjectsBySector = (sectorId: string): Project[] => {
  return mockProjects.filter((project) => project.sectorId === sectorId);
};

export const getApprovedProjects = (): Project[] => {
  return mockProjects.filter((project) => project.status === "approved");
};

export const getPendingProjects = (): Project[] => {
  return mockProjects.filter((project) => project.status === "pending");
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const calculateFundingProgress = (
  raised: number,
  requested: number
): number => {
  return Math.round((raised / requested) * 100);
};
