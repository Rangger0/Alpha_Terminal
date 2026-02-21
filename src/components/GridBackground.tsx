import { useTheme } from '@/hooks/useTheme';

export function GridBackground() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        backgroundImage: `
          linear-gradient(${isDark ? 'rgba(0, 255, 136, 0.03)' : 'rgba(37, 99, 235, 0.03)'} 1px, transparent 1px),
          linear-gradient(90deg, ${isDark ? 'rgba(0, 255, 136, 0.03)' : 'rgba(37, 99, 235, 0.03)'} 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }}
    />
  );
}
