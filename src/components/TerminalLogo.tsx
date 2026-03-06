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
  tagline = 'Web3 Portfolio OS',
  className = '',
  variant = 'default',
}: TerminalLogoProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const colors = {
    primary: isDark ? '#67e8f9' : '#0f766e',
    secondary: isDark ? '#f8fafc' : '#0f172a',
    accent: isDark ? '#f5c26b' : '#c9832a',
    boxBorder: isDark ? 'rgba(103, 232, 249, 0.4)' : 'rgba(15, 118, 110, 0.28)',
    boxBg: isDark ? 'rgba(8, 13, 28, 0.92)' : 'rgba(255, 255, 255, 0.64)',
    muted: isDark ? '#7f8ca8' : '#64748b',
  };
  const logoSrc = '/icon-192.png';

  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl md:text-3xl',
  };

  const iconSizes = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
  };

  if (variant === 'tracker') {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        <div
          className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border md:h-20 md:w-20"
          style={{
            borderColor: colors.boxBorder,
            backgroundColor: colors.boxBg,
            boxShadow: isDark ? '0 16px 40px rgba(2, 6, 23, 0.4)' : '0 16px 36px rgba(15, 23, 42, 0.08)',
          }}
        >
          <img
            src={logoSrc}
            alt="Alpha Terminal logo"
            className="h-10 w-10 object-contain md:h-12 md:w-12"
          />
        </div>
        <div className="flex items-center gap-2 text-2xl font-bold md:text-3xl">
          <span style={{ color: colors.primary }}>ALPHA</span>
          <span style={{ color: colors.secondary }}>TERMINAL</span>
          <span
            className="cursor-blink ml-0.5 font-mono"
            style={{ color: colors.accent, textShadow: `0 0 14px ${colors.accent}` }}
          >
            _
          </span>
        </div>
        {showTagline && (
          <span className="mt-2 font-mono text-xs uppercase tracking-[0.24em] md:text-sm" style={{ color: colors.muted }}>
            {tagline}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className={`${iconSizes[size]} flex items-center justify-center rounded-2xl border`}
        style={{
          borderColor: colors.boxBorder,
          backgroundColor: colors.boxBg,
          boxShadow: isDark ? '0 10px 28px rgba(2, 6, 23, 0.35)' : '0 10px 22px rgba(15, 23, 42, 0.08)',
        }}
      >
        <img
          src={logoSrc}
          alt="Alpha Terminal logo"
          className="h-3/4 w-3/4 object-contain"
        />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className={`font-semibold tracking-[0.12em] ${sizeClasses[size]}`} style={{ color: colors.primary }}>
            ALPHA
          </span>
          <span className={`font-semibold tracking-[0.12em] ${sizeClasses[size]}`} style={{ color: colors.secondary }}>
            TERMINAL
          </span>
        </div>
        {showTagline && (
          <span className="font-mono text-[10px] uppercase tracking-[0.24em]" style={{ color: colors.muted }}>
            {tagline}
          </span>
        )}
      </div>
    </div>
  );
}
