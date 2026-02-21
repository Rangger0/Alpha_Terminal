import { useTheme } from '@/hooks/useTheme';
import { ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface ProjectCardProps {
  nodeId: string;
  name: string;
  category: string;
  status: 'Live' | 'Development' | 'Planned' | 'Soon';
  description: string;
  link?: string;
  index?: number;
}

export function ProjectCard({ 
  nodeId, 
  name, 
  category, 
  status, 
  description, 
  link,
  index = 0 
}: ProjectCardProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isHovered, setIsHovered] = useState(false);

  const statusColors = {
    Live: isDark ? '#00FF88' : '#22c55e',
    Development: isDark ? '#fbbf24' : '#f59e0b',
    Planned: isDark ? '#60a5fa' : '#3b82f6',
    Soon: isDark ? '#a78bfa' : '#8b5cf6',
  };

  return (
    <div
      className="group relative"
      style={{
        animation: `fade-in-up 0.01s ease-out ${index * 10}ms both`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect - simplified */}
      <div 
        className="absolute inset-0 rounded-xl transition-all duration-300"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${statusColors[status]}15, transparent 70%)`,
          opacity: isHovered ? 1 : 0,
          filter: 'blur(15px)',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        }}
      />

      <div
        className="relative overflow-hidden rounded-xl border bg-alpha-card/50 backdrop-blur-sm transition-all duration-300"
        style={{
          borderColor: isHovered ? statusColors[status] : 'var(--alpha-border)',
          boxShadow: isHovered 
            ? `0 10px 40px -10px ${statusColors[status]}30, 0 0 0 1px ${statusColors[status]}20` 
            : '0 4px 20px -5px rgba(0, 0, 0, 0.07)',
          transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        }}
      >
        {/* Subtle gradient overlay on hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${statusColors[status]}05 0%, transparent 50%)`,
          }}
        />

        <div className="relative p-6 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <span 
                className="font-mono text-xs px-2 py-1 rounded transition-colors duration-300"
                style={{
                  background: isHovered 
                    ? (isDark ? `${statusColors[status]}20` : `${statusColors[status]}10`)
                    : (isDark ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.05)'),
                  color: isDark ? '#00FF88' : '#2563EB',
                  border: `1px solid ${isDark ? '#00FF8830' : '#2563EB30'}`,
                }}
              >
                {nodeId}
              </span>
              
              {/* Status with pulse for Live */}
              <div className="flex items-center gap-2">
                {status === 'Live' && (
                  <span className="relative flex h-2 w-2">
                    <span 
                      className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                      style={{ backgroundColor: statusColors[status] }}
                    />
                    <span 
                      className="relative inline-flex rounded-full h-2 w-2"
                      style={{ backgroundColor: statusColors[status] }}
                    />
                  </span>
                )}
                <span 
                  className="font-mono text-xs transition-colors duration-300"
                  style={{ color: statusColors[status] }}
                >
                  {status}
                </span>
              </div>
            </div>

            <span 
              className="font-mono text-xs text-alpha-text-muted transition-all duration-300"
              style={{ 
                opacity: isHovered ? 1 : 0.6,
                transform: isHovered ? 'translateX(0)' : 'translateX(5px)',
              }}
            >
              {category}
            </span>
          </div>

          {/* Title */}
          <h3 
            className="font-mono text-xl font-bold mb-3 transition-all duration-300"
            style={{
              color: isDark ? '#ffffff' : '#1a1a1a',
              transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
            }}
          >
            {name}
          </h3>

          {/* Description */}
          <p className="text-alpha-text-secondary text-sm mb-6 flex-grow leading-relaxed transition-opacity duration-300"
             style={{ opacity: isHovered ? 0.9 : 0.7 }}
          >
            {description}
          </p>

          {/* Launch Link */}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm group/link w-fit"
              style={{ color: statusColors[status] }}
            >
              <span className="relative">
                Launch
                <span 
                  className="absolute -bottom-0.5 left-0 w-0 h-0.5 group-hover/link:w-full transition-all duration-300"
                  style={{ backgroundColor: statusColors[status] }}
                />
              </span>
              <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(15px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
      `}</style>
    </div>
  );
}