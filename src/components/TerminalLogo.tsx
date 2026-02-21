import { useTheme } from '@/hooks/useTheme';

interface TerminalLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  tagline?: string;
  className?: string;
  variant?: 'default' | 'tracker';
}

export function TerminalLogo({ 
  size = 'md', 
  showTagline = false, 
  tagline = 'Web3 System Node',
  className = '',
  variant = 'default'
}: TerminalLogoProps) {
  const { theme } = useTheme();
  
  const isDark = theme === 'dark';
  
  const colors = {
    primary: isDark ? '#00FF88' : '#2564eb',      // ALPHA color
    secondary: isDark ? '#ffffff' : '#1e293b',    // TERMINAL color
    accent: isDark ? '#00FF88' : '#2563EB',       // Cursor color
    boxBorder: isDark ? '#00FF88' : '#2563EB',
    boxBg: isDark ? 'rgba(255, 0, 0, 0)' : 'rgba(37, 100, 235, 0)',
  };

  if (variant === 'tracker') {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        {/* Box Terminal */}
        <div 
          className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-lg border-2 mb-4"
          style={{ 
            borderColor: colors.boxBorder,
            backgroundColor: isDark ? '#0F172A' : '#FFFFFF',
          }}
        >
          <svg 
            viewBox="0 0 24 24" 
            className="w-10 h-10 md:w-12 md:h-12"
            fill="none"
            stroke={colors.primary}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 8 13 12 9 16" />
            <line x1="13" y1="16" x2="17" y2="16" />
          </svg>
        </div>

        {/* Teks ALPHA_TERMINAL dengan cursor berkedip */}
        <div className="flex items-center font-mono font-bold text-2xl md:text-3xl tracking-tight">
          <span style={{ color: colors.primary }}>ALPHA</span>
          <span style={{ color: colors.secondary }}>_TERMINAL</span>
          {/* Cursor underscore berkedip */}
          <span 
            className="cursor-blink ml-0.5"
            style={{ 
              color: colors.accent,
              textShadow: `0 0 10px ${colors.accent}`,
            }}
          >
            _
          </span>
        </div>

        {showTagline && (
          <span 
            className="text-xs md:text-sm font-mono mt-2 tracking-wider uppercase"
            style={{ color: isDark ? '#64748B' : '#6B7280' }}
          >
            {tagline}
          </span>
        )}
      </div>
    );
  }

  // Variant default (horizontal - untuk navbar)
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl md:text-3xl',
  };

  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-7 h-7',
    lg: 'w-9 h-9',
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Logo Terminal Box */}
      <div 
        className={`${iconSizes[size]} flex items-center justify-center rounded border-2`}
        style={{ 
          borderColor: colors.boxBorder,
          backgroundColor: colors.boxBg,
        }}
      >
        <svg 
          viewBox="0 0 24 24" 
          className="w-3/4 h-3/4"
          fill="none"
          stroke={colors.primary}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 8 13 12 9 16" />
          <line x1="13" y1="16" x2="17" y2="16" />
        </svg>
      </div>

      {/* Teks ALPHA_TERMINAL dengan cursor berkedip */}
      <div className="flex items-center">
        <span 
          className={`font-mono font-bold tracking-tight ${sizeClasses[size]}`}
          style={{ 
            color: colors.primary,
            textShadow: isDark ? '0 0 20px rgba(0, 255, 136, 0.4)' : 'none'
          }}
        >
          ALPHA_TERMINAL
        </span>
        {/* Cursor underscore berkedip */}
        <span 
          className="cursor-blink ml-0.5 font-mono font-bold"
          style={{ 
            color: colors.accent,
            fontSize: 'inherit',
            textShadow: `0 0 10px ${colors.accent}`,
          }}
        >
          _
        </span>
      </div>
    </div>
  );
}