// src/pages/Home.tsx
import { useTheme } from '@/hooks/useTheme';
import { ExternalLink, Activity, TrendingUp, Github, Twitter, Send } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import HeroSection from '@/home/HeroSection';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const systemNodes = [
  {
    id: 'PROJECT 01',
    name: 'ALPHA CAPITAL',
    description: 'Financial tracking dashboard for portfolio management and analytics.',
    link: 'https://alpha-capital-one.vercel.app/login',
    icon: TrendingUp,
  },
  {
    id: 'PROJECT 02',
    name: 'ALPHA TRACKER',
    description: 'Airdrop monitoring dashboard for eligibility and claim tracking.',
    link: 'https://alpha-trecker-18xx.vercel.app/dashboard',
    icon: Activity,
  },
];

const mediaNodes = [
  { 
    name: 'TIKTOK', 
    link: 'https://www.tiktok.com/@rinzzx0',
    icon: TikTokIcon,
    handle: '@rinzzx0',
    description: 'Short-form content & tutorials',
    side: 'left',
  },
  { 
    name: 'X', 
    link: 'https://x.com/rinzx_',
    icon: Twitter,
    handle: '@rinzx_',
    description: 'Real-time updates & alpha calls',
    side: 'right',
  },
  { 
    name: 'GITHUB', 
    link: 'https://github.com/Rangger0',
    icon: Github,
    handle: '@Rangger0',
    description: 'Open source & repositories',
    side: 'left',
  },
  { 
    name: 'TELEGRAM', 
    link: 'https://t.me/+MGzRobr9cp4yMTk1',
    icon: Send,
    handle: 'ALPHA Community',
    description: 'Community discussions',
    side: 'right',
  },
];

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

export function Home() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { ref: mediaRef, isVisible: mediaVisible } = useScrollAnimation();

  const leftNodes = mediaNodes.filter(n => n.side === 'left');
  const rightNodes = mediaNodes.filter(n => n.side === 'right');

  return (
    <div className="page-transition min-h-screen pt-24 pb-16">
      <div className="section-container">
        
        {/* Hero Section */}
        <HeroSection />
        
        {/* System Status Section */}
        <section className="py-12">
          <div className="flex items-center gap-3 mb-8">
            <div 
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: isDark ? '#00FF88' : '#10B981' }}
            />
            <h2 className="font-mono text-lg text-[var(--alpha-text-primary)]">
              SYSTEM STATUS
            </h2>
            <span className="font-mono text-xs text-[var(--alpha-text-muted)]">
              [ONLINE]
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {systemNodes.map((node) => (
              <div 
                key={node.id}
                className="terminal-card p-6 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ 
                        background: isDark ? 'rgba(0, 255, 136, 0.1)' : 'rgba(37, 99, 235, 0.1)',
                        color: isDark ? '#00FF88' : '#2563EB'
                      }}
                    >
                      <node.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span 
                        className="font-mono text-xs px-2 py-0.5 rounded"
                        style={{ 
                          background: isDark ? 'rgba(0, 255, 136, 0.1)' : 'rgba(37, 99, 235, 0.1)',
                          color: isDark ? '#00FF88' : '#2563EB'
                        }}
                      >
                        {node.id}
                      </span>
                    </div>
                  </div>
                  <span className="status-live">
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    LIVE
                  </span>
                </div>

                <h3 className="font-mono text-xl font-semibold text-[var(--alpha-text-primary)] mb-2">
                  {node.name}
                </h3>
                <p className="text-sm text-[var(--alpha-text-secondary)] mb-4">
                  {node.description}
                </p>

                <a
                  href={node.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-sm transition-colors group/link"
                  style={{ color: isDark ? '#00FF88' : '#2563EB' }}
                >
                  <span className="group-hover/link:underline">Access Dashboard</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Media Nodes Section */}
        <section className="py-12 overflow-hidden" ref={mediaRef}>
          <div className="flex items-center gap-3 mb-12 justify-center">
            <span className="font-mono text-lg text-[var(--alpha-text-primary)]">
              MEDIA_NODES
            </span>
            <span className="font-mono text-xs text-[var(--alpha-text-muted)]">
              [4 CONNECTIONS]
            </span>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Kolom Kiri */}
            <div className="space-y-4">
              {leftNodes.map((media, index) => {
                const IconComponent = media.icon;
                const delay = index * 150;
                
                return (
                  <a
                    key={media.name}
                    href={media.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group block transition-all duration-700 ease-out
                      hover:scale-[1.02] hover:-translate-y-1
                      ${mediaVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
                    style={{
                      marginLeft: `${index * 40}px`,
                      transitionDelay: `${delay}ms`,
                    }}
                  >
                    <div 
                      className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-300
                        hover:border-[var(--alpha-neon)] hover:shadow-lg hover:shadow-[var(--alpha-neon)]/10"
                      style={{ 
                        borderColor: isDark ? 'rgba(0, 255, 136, 0.3)' : 'rgba(37, 99, 235, 0.3)',
                        background: isDark 
                          ? 'rgba(15, 23, 42, 0.6)' 
                          : 'rgba(255, 255, 255, 0.8)',
                      }}
                    >
                      <div 
                        className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center
                          transition-all duration-300 group-hover:scale-110"
                        style={{ 
                          background: isDark 
                            ? 'rgba(0, 255, 136, 0.15)' 
                            : 'rgba(37, 99, 235, 0.15)',
                          border: `2px solid ${isDark ? 'rgba(0, 255, 136, 0.4)' : 'rgba(37, 99, 235, 0.4)'}`,
                          color: isDark ? '#00FF88' : '#2563EB',
                        }}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono font-bold text-[var(--alpha-text-primary)] group-hover:text-[var(--alpha-neon)] transition-colors">
                            {media.name}
                          </span>
                        </div>
                        <span className="font-mono text-xs text-[var(--alpha-text-muted)] block mb-1">
                          {media.handle}
                        </span>
                        <p className="text-sm text-[var(--alpha-text-secondary)]">
                          {media.description}
                        </p>
                      </div>

                      <ExternalLink 
                        className="w-5 h-5 text-[var(--alpha-text-muted)] transition-all duration-300 
                          group-hover:text-[var(--alpha-neon)] group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0"
                      />
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Kolom Kanan */}
            <div className="space-y-4 md:mt-12">
              {rightNodes.map((media, index) => {
                const IconComponent = media.icon;
                const delay = index * 150;
                
                return (
                  <a
                    key={media.name}
                    href={media.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group block transition-all duration-700 ease-out
                      hover:scale-[1.02] hover:-translate-y-1
                      ${mediaVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
                    style={{
                      marginRight: `${index * 40}px`,
                      marginLeft: 'auto',
                      transitionDelay: `${delay}ms`,
                    }}
                  >
                    <div 
                      className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-300
                        hover:border-[var(--alpha-neon)] hover:shadow-lg hover:shadow-[var(--alpha-neon)]/10"
                      style={{ 
                        borderColor: isDark ? 'rgba(0, 255, 136, 0.3)' : 'rgba(37, 99, 235, 0.3)',
                        background: isDark 
                          ? 'rgba(15, 23, 42, 0.6)' 
                          : 'rgba(255, 255, 255, 0.8)',
                      }}
                    >
                      <div 
                        className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center
                          transition-all duration-300 group-hover:scale-110"
                        style={{ 
                          background: isDark 
                            ? 'rgba(0, 255, 136, 0.15)' 
                            : 'rgba(37, 99, 235, 0.15)',
                          border: `2px solid ${isDark ? 'rgba(0, 255, 136, 0.4)' : 'rgba(37, 99, 235, 0.4)'}`,
                          color: isDark ? '#00FF88' : '#2563EB',
                        }}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono font-bold text-[var(--alpha-text-primary)] group-hover:text-[var(--alpha-neon)] transition-colors">
                            {media.name}
                          </span>
                        </div>
                        <span className="font-mono text-xs text-[var(--alpha-text-muted)] block mb-1">
                          {media.handle}
                        </span>
                        <p className="text-sm text-[var(--alpha-text-secondary)]">
                          {media.description}
                        </p>
                      </div>

                      <ExternalLink 
                        className="w-5 h-5 text-[var(--alpha-text-muted)] transition-all duration-300 
                          group-hover:text-[var(--alpha-neon)] group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0"
                      />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Terminal Footer */}
        <section className="py-8 border-t border-[var(--alpha-border)] mt-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="font-mono text-xs text-[var(--alpha-text-muted)]">
              <span className="text-[var(--alpha-neon)]">$</span> system.status --check
            </div>
            <div className="font-mono text-xs text-[var(--alpha-text-muted)]">
              v1.0.0 | Build 2024.02.20
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}