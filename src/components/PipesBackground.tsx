import { useTheme } from '@/hooks/useTheme';

export function PipesBackground() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const backdrop = isDark
    ? 'linear-gradient(180deg, #060913 0%, #081022 42%, #040815 100%)'
    : 'linear-gradient(180deg, #f6f1e7 0%, #f4efe7 42%, #ebe5d9 100%)';
  const gridColor = isDark ? 'rgba(103, 232, 249, 0.08)' : 'rgba(15, 118, 110, 0.08)';
  const beam = isDark ? 'rgba(245, 194, 107, 0.18)' : 'rgba(201, 131, 42, 0.12)';
  const orbPrimary = isDark ? 'rgba(103, 232, 249, 0.08)' : 'rgba(15, 118, 110, 0.07)';
  const orbSecondary = isDark ? 'rgba(245, 194, 107, 0.09)' : 'rgba(201, 131, 42, 0.07)';

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0" style={{ background: backdrop }} />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(${gridColor} 1px, transparent 1px), linear-gradient(90deg, ${gridColor} 1px, transparent 1px)`,
          backgroundSize: '72px 72px',
        }}
      />
      <div
        className="absolute inset-x-[-10%] top-24 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${beam}, transparent)` }}
      />
      <div
        className="absolute left-[8%] top-[10%] h-[22rem] w-[22rem] rounded-full"
        style={{ background: orbPrimary }}
      />
      <div
        className="absolute right-[6%] top-[20%] h-[18rem] w-[18rem] rounded-full"
        style={{ background: orbSecondary }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at top, rgba(255,255,255,0.05), transparent 28%)',
        }}
      />
    </div>
  );
}
