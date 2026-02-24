import { useTheme } from '@/hooks/useTheme';
import { Github, Twitter, Send, Activity, Users, GitCommit, Hash } from 'lucide-react';
import { MediaTerminal } from '@/components/media/MediaTerminal';
import { NodeCard } from '@/components/media/NodeCard';
import { NetworkGraph } from '@/components/media/NetworkGraph';
import { ActivityTicker } from '@/components/media/ActivityTicker';
import { TypewriterText } from '@/components/media/TypewriterText';
import { NyanCatAnimation } from '@/components/media/NyanCatAnimation';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

interface MediaNode {
  id: string;
  name: string;
  icon: React.ReactNode;
  handle: string;
  url: string;
  description: string;
  stats: { label: string; value: string; icon: React.ReactNode }[];
}

export function Media() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const mediaNodes: MediaNode[] = [
    {
      id: '01',
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      handle: '@Rangger0',
      url: 'https://github.com/Rangger0',
      description: 'Open source contributions, project repositories, and code experiments.',
      stats: [
        { label: 'repos', value: '12', icon: <GitCommit className="w-3 h-3" /> },
        { label: 'stars', value: '48', icon: <Activity className="w-3 h-3" /> },
      ],
    },
    {
      id: '02',
      name: 'X (Twitter)',
      icon: <Twitter className="w-6 h-6" />,
      handle: '@rinzx',
      url: 'https://x.com/rinzx_',
      description: 'Real-time updates, alpha calls, and community discussions.',
      stats: [
        { label: 'followers', value: '1.2K', icon: <Users className="w-3 h-3" /> },
        { label: 'tweets', value: '342', icon: <Hash className="w-3 h-3" /> },
      ],
    },
    {
      id: '03',
      name: 'Telegram',
      icon: <Send className="w-6 h-6" />,
      handle: 'ALPHA Community',
      url: 'https://t.me/+MGzRobr9cp4yMTk1',
      description: 'Join the community for alpha calls, discussions, and early access updates.',
      stats: [
        { label: 'members', value: '856', icon: <Users className="w-3 h-3" /> },
        { label: 'online', value: '124', icon: <Activity className="w-3 h-3" /> },
      ],
    },
    {
      id: '04',
      name: 'TikTok',
      icon: <TikTokIcon className="w-6 h-6" />,
      handle: '@rinzzx0',
      url: 'https://tiktok.com/@rinzzx0',
      description: 'Short-form content, tutorials, and behind-the-scenes updates.',
      stats: [
        { label: 'followers', value: '2.4K', icon: <Users className="w-3 h-3" /> },
        { label: 'likes', value: '12K', icon: <Activity className="w-3 h-3" /> },
      ],
    },
  ];

  const color = isDark ? '#00FF88' : '#2563EB';

  const descriptionText =  `Welcome to the media hub of ALPHA_TERMINAL.
This interface aggregates all external communication channels into a unified dashboard.
Connect with me across multiple platforms - from code repositories on GitHub to real-time updates on X,
community discussions on Telegram, and educational content on TikTok.
Each node is monitored in real-time with live activity feeds and network statistics.
All connections are encrypted and optimized for the best experience.
Select any node below to establish a direct connection.`;
  const bootMessages = [
    { text: '[ OK ] Started kernel.', delay: 3500 },
    { text: '[ OK ] Mounted /dev/sda1.', delay: 3800 },
    { text: '[ OK ] Started Network Manager.', delay: 4100 },
    { text: '[ OK ] Reached target Network.', delay: 4400 },
    { text: '[ OK ] Started ALPHA_TERMINAL daemon.', delay: 4700, showCursor: true },
  ];

  return (
    <div className="page-transition min-h-screen pt-24 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 h-[800px] opacity-40 pointer-events-none">
        <NetworkGraph />
      </div>

      <div className="section-container relative z-10">
        <section className="py-8">
          <MediaTerminal />
        </section>
<div className="grid lg:grid-cols-3 gap-8 py-8 items-start">
  <div className="lg:col-span-2">
    <div className="flex items-center gap-3 mb-4 animate-in fade-in slide-in-from-left-4 duration-500">
      <span className="font-mono text-sm" style={{ color }}>$</span>
      <span className="font-mono text-sm text-alpha-text-muted">
        media.nodes --list
      </span>
    </div>
    <h1 className="font-mono text-3xl md:text-4xl font-bold text-alpha-text-primary mb-4 animate-in fade-in slide-in-from-left-4 duration-500 delay-100">
      MEDIA_NODES
    </h1>
    <div className="font-mono text-sm text-alpha-text-secondary max-w-2xl mb-6">
      <TypewriterText 
        text={descriptionText}
        speed={40}
        delay={500}
        className="block whitespace-pre-line leading-relaxed"
        showCursor={true}
        cursorChar="▋"
      />
    </div>
    <div className="mb-6 animate-in fade-in slide-in-from-left-4 duration-500 delay-200">
      <NyanCatAnimation />
    </div>
    <div className="font-mono text-xs space-y-1 opacity-60 min-h-[120px]">
      {bootMessages.map((msg, idx) => (
        <TypewriterText 
          key={idx}
          text={msg.text}
          speed={20}
          delay={msg.delay}
          className="block"
          showCursor={msg.showCursor || false}
          cursorChar="_"
        />
      ))}
    </div>
  </div>
  <div className="lg:col-span-1">
    <div className="sticky top-24 space-y-6">
      <div className="animate-in fade-in slide-in-from-right-4 duration-700">
        <ActivityTicker />
      </div>
      <div 
        className="p-5 rounded-lg border animate-in fade-in slide-in-from-right-4 duration-700 delay-200"
        style={{ 
          borderColor: isDark ? 'rgba(0, 255, 136, 0.2)' : 'rgba(37, 99, 235, 0.2)',
          background: isDark ? 'rgba(2, 6, 23, 0.8)' : 'rgba(248, 250, 252, 0.8)',
        }}
      >
        <h4 
          className="font-mono text-xs font-bold mb-4 pb-2 border-b"
          style={{ 
            color,
            borderColor: isDark ? 'rgba(0, 255, 136, 0.2)' : 'rgba(37, 99, 235, 0.2)',
          }}
        >
          NETWORK_STATS
        </h4>
        <div className="space-y-3 font-mono text-xs">
          {[
            { label: 'Total Nodes', value: '4', highlight: false },
            { label: 'Online', value: '4/4', highlight: true },
            { label: 'Avg Latency', value: '14.5ms', highlight: false },
            { label: 'Uptime', value: '99.9%', highlight: false },
          ].map((stat) => (
            <div 
              key={stat.label} 
              className="flex justify-between items-center"
            >
              <span className="text-alpha-text-muted">{stat.label}</span>
              <span 
                className={stat.highlight ? 'font-bold' : 'text-alpha-text-primary font-bold'} 
                style={stat.highlight ? { color } : undefined}
              >
                {stat.value}
              </span>
                  </div>
                  ))}
               </div>
              </div>
            </div>
           </div>
          </div>

        <div className="py-8">
          <div className="relative max-w-4xl">
            {mediaNodes.map((node, index) => (
              <NodeCard
                key={node.id}
                id={node.id}
                name={node.name}
                icon={node.icon}
                handle={node.handle}
                url={node.url}
                description={node.description}
                color={color}
                index={index}
                stats={node.stats}
              />
            ))}
          </div>
        </div>

        <section className="py-8 border-t border-alpha-border">
          <div className="font-mono text-xs text-alpha-text-muted flex items-center gap-2">
            <span style={{ color }}>$</span>
            <span>connect --list | grep "active"</span>
            <span className="inline-block w-2 h-4 bg-current animate-pulse" style={{ color }} />
          </div>
        </section>
      </div>
    </div>
  );
}