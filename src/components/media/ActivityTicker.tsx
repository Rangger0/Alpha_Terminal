import { useEffect, useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { Github, Twitter, Send } from 'lucide-react';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

interface Activity {
  id: string;
  platform: string;
  action: string;
  time: string;
  icon: React.ReactNode;
}

export function ActivityTicker() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const platformIcons: Record<string, React.ReactNode> = {
    'GitHub': <Github className="w-3 h-3" />,
    'X': <Twitter className="w-3 h-3" />,
    'Telegram': <Send className="w-3 h-3" />,
    'TikTok': <TikTokIcon className="w-3 h-3" />,
  };

  const generateActivity = (): Activity => {
    const platforms = ['GitHub', 'X', 'Telegram', 'TikTok'];
    const actions = [
      'New commit pushed',
      'Repository starred',
      'Tweet posted',
      'Community update',
      'Video uploaded',
      'Follower milestone',
      'Alpha call shared',
    ];

    const platform = platforms[Math.floor(Math.random() * platforms.length)];
    
    return {
      id: Math.random().toString(36).substr(2, 9),
      platform,
      action: actions[Math.floor(Math.random() * actions.length)],
      time: 'Just now',
      icon: platformIcons[platform],
    };
  };

  useEffect(() => {
    setIsVisible(true);
    setActivities(Array.from({ length: 6 }, () => generateActivity()));

    const interval = setInterval(() => {
      setActivities(prev => {
        const newActivity = generateActivity();
        return [newActivity, ...prev.slice(0, 5)];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className={`w-full rounded-lg border overflow-hidden transition-all duration-700 transform
        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
      style={{ 
        borderColor: isDark ? 'rgba(0, 255, 136, 0.2)' : 'rgba(37, 99, 235, 0.2)',
        background: isDark ? 'rgba(2, 6, 23, 0.8)' : 'rgba(248, 250, 252, 0.8)',
      }}
    >
      {/* Header */}
      <div 
        className="flex items-center justify-between px-4 py-3 border-b"
        style={{ 
          borderColor: isDark ? 'rgba(0, 255, 136, 0.2)' : 'rgba(37, 99, 235, 0.2)',
          background: isDark ? 'rgba(0, 255, 136, 0.05)' : 'rgba(37, 99, 235, 0.05)',
        }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: isDark ? '#00FF88' : '#2563EB' }} />
          <span className="font-mono text-xs font-bold" style={{ color: isDark ? '#00FF88' : '#2563EB' }}>
            LIVE FEED
          </span>
        </div>
        <span className="font-mono text-xs text-alpha-text-muted">
          activity.stream --realtime
        </span>
      </div>

      {/* Ticker Content */}
      <div className="p-4 space-y-3 max-h-56 overflow-hidden relative">
        <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-background to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-background to-transparent z-10" />
        
        {activities.map((activity, index) => (
          <div 
            key={activity.id}
            className="flex items-center gap-3 text-xs font-mono transition-all duration-500"
            style={{ 
              animationDelay: `${index * 100}ms`,
              opacity: 1 - (index * 0.15),
              transform: `translateX(${index === 0 ? 0 : 4}px)`,
            }}
          >
            <div className="flex-shrink-0 w-6 h-6 rounded flex items-center justify-center transition-transform hover:scale-110"
              style={{ 
                background: isDark ? 'rgba(0, 255, 136, 0.1)' : 'rgba(37, 99, 235, 0.1)',
                color: isDark ? '#00FF88' : '#2563EB',
              }}>
              {activity.icon}
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-alpha-text-primary truncate block">
                [{activity.platform}] {activity.action}
              </span>
            </div>
            <span className="text-alpha-text-muted flex-shrink-0 text-[10px]">
              {activity.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}