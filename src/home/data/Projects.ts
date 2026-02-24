export interface Project {
  id: string;
  nodeId: string;
  name: string;
  category: 'Finance' | 'Web3' | 'Infrastructure' | 'Airdrop';
  status: 'Live' | 'Development' | 'Planned' | 'Soon';
  description: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: 'alpha-capital',
    nodeId: 'NODE 01',
    name: 'ALPHA CAPITAL',
    category: 'Finance',
    status: 'Live',
    description: 'Financial tracking dashboard for portfolio management, real-time analytics, and investment monitoring.',
    link: 'https://alpha-capital-one.vercel.app/login',
  },
  {
    id: 'alpha-tracker',
    nodeId: 'NODE 02',
    name: 'ALPHA TRACKER',
    category: 'Web3',
    status: 'Live',
    description: 'Airdrop monitoring dashboard for tracking eligibility, claim status, and token distributions.',
    link: 'https://alpha-trecker-18xx.vercel.app/dashboard',
  },
  {
    id: 'alpha-bridge',
    nodeId: 'NODE 03',
    name: 'ALPHA BRIDGE',
    category: 'Infrastructure',
    status: 'Soon',
    description: ' Cross-chain asset bridge enabling seamless transfers between Ethereum, Solana, and Layer 2 networks.',
  },
  {
    id: 'alpha-agent',
    nodeId: 'NODE 04',
    name: 'ALPHA GUARD',
    category: 'Web3',
    status: 'Soon',
    description: ' Smart contract security scanner and audit platform for Web3 protocols.',
  },
  {
    id: 'alpha-swap',
    nodeId: 'NODE 05',
    name: 'ALPHA SWAP',
    category: 'Finance',
    status: 'Soon',
    description: ' Decentralized exchange aggregator with optimal routing and minimal slippage.',
  },
  {
    id: 'alpha-analytics',
    nodeId: 'NODE 06',
    name: 'ALPHA ANALYTICS',
    category: 'Infrastructure',
    status: 'Soon',
    description: ' On-chain data analytics platform with custom dashboards and real-time alerts.',
  },
];