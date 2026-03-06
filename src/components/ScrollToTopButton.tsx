import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { ArrowUp } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const VISIBILITY_THRESHOLD = 320;

interface ScrollMetrics {
  progress: number;
  visible: boolean;
}

function getScrollMetrics(): ScrollMetrics {
  const top = window.scrollY;
  const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);

  return {
    progress: Math.min(top / maxScroll, 1),
    visible: top > VISIBILITY_THRESHOLD,
  };
}

export function ScrollToTopButton() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const accent = isDark ? '#67e8f9' : '#0f766e';
  const ringTrack = isDark ? 'rgba(103, 232, 249, 0.14)' : 'rgba(15, 23, 42, 0.12)';
  const [metrics, setMetrics] = useState<ScrollMetrics>({ progress: 0, visible: false });

  useEffect(() => {
    let frameId = 0;

    const syncMetrics = () => {
      frameId = 0;
      setMetrics((current) => {
        const next = getScrollMetrics();

        if (
          current.visible === next.visible &&
          Math.abs(current.progress - next.progress) < 0.002
        ) {
          return current;
        }

        return next;
      });
    };

    const queueSync = () => {
      if (frameId !== 0) {
        return;
      }

      frameId = window.requestAnimationFrame(syncMetrics);
    };

    queueSync();
    window.addEventListener('scroll', queueSync, { passive: true });
    window.addEventListener('resize', queueSync);

    return () => {
      window.removeEventListener('scroll', queueSync);
      window.removeEventListener('resize', queueSync);

      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const handleScrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  const ringStyle = {
    background: `conic-gradient(${accent} 0deg, ${accent} ${Math.max(metrics.progress, 0.04) * 360}deg, ${ringTrack} ${Math.max(metrics.progress, 0.04) * 360}deg, ${ringTrack} 360deg)`,
    boxShadow: isDark
      ? '0 18px 38px rgba(2, 6, 23, 0.4)'
      : '0 18px 38px rgba(15, 23, 42, 0.12)',
  } satisfies CSSProperties;

  return (
    <div className={`scroll-top-shell ${metrics.visible ? 'is-visible' : ''}`}>
      <div className="scroll-top-ring" style={ringStyle}>
        <button
          type="button"
          onClick={handleScrollToTop}
          className="scroll-top-button"
          aria-label="Scroll ke atas"
          title="Scroll ke atas"
        >
          <ArrowUp className="h-4 w-4" style={{ color: accent }} />
          <span className="scroll-top-label">Top</span>
        </button>
      </div>
    </div>
  );
}
