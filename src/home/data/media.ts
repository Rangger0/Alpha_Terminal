export interface MediaLink {
  id: string;
  platform: string;
  handle: string;
  description: string;
  link: string;
  iconType: 'tiktok' | 'x' | 'github' | 'telegram';
}

export const mediaLinks: MediaLink[] = [
  {
    id: 'tiktok',
    platform: 'TikTok',
    handle: '@rinzzx0',
    description: 'Short-form content on Web3 trends, crypto insights, and digital culture.',
    link: 'https://www.tiktok.com/@rinzzx0',
    iconType: 'tiktok',
  },
  {
    id: 'x',
    platform: 'X',
    handle: '@rinzx_',
    description: 'Real-time updates, market analysis, and Web3 ecosystem discussions.',
    link: 'https://x.com/rinzx_',
    iconType: 'x',
  },
  {
    id: 'github',
    platform: 'GitHub',
    handle: '@Rangger0',
    description: 'Open source contributions, project repositories, and code experiments.',
    link: 'https://github.com/Rangger0',
    iconType: 'github',
  },
  {
    id: 'telegram',
    platform: 'Telegram',
    handle: 'ALPHA Community',
    description: 'Join the community for alpha calls, discussions, and early access updates.',
    link: 'https://t.me/+MGzRobr9cp4yMTk1',
    iconType: 'telegram',
  },
];