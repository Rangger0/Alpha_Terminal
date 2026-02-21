import { useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { ArrowUpRight } from 'lucide-react';

interface NodeStats {
  label: string;
  value: string;
  icon: React.ReactNode;
}

interface NodeCardProps {
  id: string;
  name: string;
  icon: React.ReactNode;
  handle: string;
  url: string;
  description: string;
  color: string;
  index: number;
  stats?: NodeStats[];
}

export function NodeCard({ 
  id, 
  name, 
  icon, 
  handle, 
  url, 
  description, 
  color, 
  index,
  stats = [] 
}: NodeCardProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isHovered, setIsHovered] = useState(false);

const isEven = index % 2 === 0;
const offsetClass = isEven 
  ? 'md:-translate-x-8 lg:-translate-x-16'  // Kiri
  : 'md:translate-x-40 lg:translate-x-48';   // Kanan  // Kanan mentok (persentase dari container) // Kanan, width 70%  // Dorong ke kanan mentok // Kanan mentok // Tambah geser kanan lebih banyak
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block mb-6 ${offsetClass} transition-all duration-500 ease-out
  hover:scale-[1.02] hover:-translate-y-1`}
      style={{ animationDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="relative p-6 rounded-lg border transition-all duration-300
          hover:border-opacity-100 hover:shadow-lg overflow-hidden"
        style={{ 
          borderColor: isDark ? 'rgba(0, 255, 136, 0.3)' : 'rgba(37, 99, 235, 0.3)',
          background: isDark 
            ? 'rgba(15, 23, 42, 0.6)' 
            : 'rgba(255, 255, 255, 0.8)',
          boxShadow: isHovered 
            ? `0 0 30px ${color}20` 
            : 'none',
        }}
      >
        {/* Animated Background Glow */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${color}15 0%, transparent 70%)`,
          }}
        />

        {/* Status Pulse Indicator */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-mono"
            style={{ 
              background: isDark ? 'rgba(0, 255, 136, 0.1)' : 'rgba(37, 99, 235, 0.1)',
              color: color,
            }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ backgroundColor: color }} />
              <span className="relative inline-flex rounded-full h-2 w-2"
                style={{ backgroundColor: color }} />
            </span>
            <span>ONLINE</span>
          </div>
        </div>

        <div className="relative flex items-start gap-4">
          {/* Icon Box */}
          <div 
            className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center
              transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
            style={{ 
              background: isDark 
                ? 'rgba(0, 255, 136, 0.1)' 
                : 'rgba(37, 99, 235, 0.1)',
              border: `2px solid ${isDark ? 'rgba(0, 255, 136, 0.3)' : 'rgba(37, 99, 235, 0.3)'}`,
              color: color,
              boxShadow: isDark 
                ? `0 0 20px ${color}30` 
                : `0 0 20px ${color}30`,
            }}
          >
            {icon}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span 
                className="px-2 py-0.5 rounded text-xs font-mono"
                style={{ 
                  background: isDark 
                    ? 'rgba(0, 255, 136, 0.1)' 
                    : 'rgba(37, 99, 235, 0.1)',
                  color: color,
                }}
              >
                NODE_{id}
              </span>
              <span className="text-xs font-mono text-alpha-text-muted">
                {handle}
              </span>
            </div>
            
            <h3 className="font-mono text-lg font-bold text-alpha-text-primary mb-2 
              group-hover:text-alpha-neon transition-colors">
              {name}
            </h3>
            
            <p className="text-sm text-alpha-text-secondary mb-3 line-clamp-2">
              {description}
            </p>

            {/* Stats Row - Shows on Hover */}
            <div className={`flex gap-4 transition-all duration-300 overflow-hidden
              ${isHovered ? 'max-h-20 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs font-mono"
                  style={{ color: isDark ? '#94A3B8' : '#64748B' }}>
                  {stat.icon}
                  <span>{stat.value}</span>
                  <span className="opacity-60">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Connect Link */}
            <div className="flex items-center gap-1 text-sm font-mono mt-3"
              style={{ color }}>
              <span>Connect</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </div>
        </div>

        {/* Animated Progress Bar */}
        <div 
          className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-700 ease-out"
          style={{ background: color }}
        />
      </div>
    </a>
  );
}