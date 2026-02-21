import { useTheme } from '@/hooks/useTheme';
import { ExternalLink } from 'lucide-react';

interface MediaCardProps {
  platform: string;
  handle: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}

export function MediaCard({ platform, handle, description, link, icon }: MediaCardProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div 
      className="terminal-card p-6 flex flex-col gap-4"
      style={{
        borderColor: isDark ? 'rgba(0, 255, 136, 0.1)' : undefined,
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <div 
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ 
            background: isDark ? 'rgba(0, 255, 136, 0.1)' : 'rgba(37, 99, 235, 0.1)',
            color: isDark ? '#00FF88' : '#2563EB'
          }}
        >
          {icon}
        </div>
        <div>
          <h3 className="font-mono text-lg font-semibold text-alpha-text-primary">
            {platform}
          </h3>
          <span className="font-mono text-xs text-alpha-text-muted">
            {handle}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-alpha-text-secondary leading-relaxed flex-1">
        {description}
      </p>

      {/* Action */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline inline-flex items-center justify-center gap-2 font-mono text-sm"
      >
        <span>Connect</span>
        <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}
