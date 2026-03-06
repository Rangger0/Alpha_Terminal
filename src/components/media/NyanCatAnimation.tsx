import { useEffect, useState } from 'react';
import { useTheme } from '@/hooks/useTheme';

const bootMessages = [
  '[ OK ] Started kernel.',
  '[ OK ] Mounted /dev/sda1.',
  '[ OK ] Started Network Manager.',
  '[ OK ] Reached target Network.',
  '[ OK ] Started Alpha Terminal daemon.',
];

const getFrame = (offset: number) => `
${'  '.repeat(offset)}🟥🟧🟨🟩🟦⬛
${'  '.repeat(offset)}    /\\_/\\  
${'  '.repeat(offset)}   ( o.o ) 
${'  '.repeat(offset)}    > ^ <  `;

const nyanFrames = [
  getFrame(0),
  getFrame(1),
  getFrame(2),
  getFrame(1),
];

export function NyanCatAnimation() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const color = isDark ? '#00FF88' : '#2563EB';
  
  const [frame, setFrame] = useState(0);
  const [showBoot, setShowBoot] = useState(true);
  const [bootLines, setBootLines] = useState(0);

  useEffect(() => {
    bootMessages.forEach((_, index) => {
      setTimeout(() => {
        setBootLines((prev) => prev + 1);
      }, 500 + (index * 300));
    });

    setTimeout(() => {
      setShowBoot(false);
    }, 2500);

    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % nyanFrames.length);
    }, 250);

    return () => clearInterval(interval);
  }, []);

  if (showBoot) {
    return (
      <div className="font-mono text-xs space-y-1 opacity-60 min-h-[120px]">
        {bootMessages.slice(0, bootLines).map((msg, idx) => (
          <div key={idx} className="text-alpha-text-secondary">{msg}</div>
        ))}
        {bootLines < bootMessages.length && (
          <span className="inline-block w-2 h-3 animate-pulse ml-1" style={{ backgroundColor: color }}/>
        )}
      </div>
    );
  }

  return (
    <div className="flex gap-5 items-start min-h-[120px]">
      {/* Nyan Cat */}
      <pre 
        className="text-[13px] leading-[1.1] whitespace-pre font-mono"
        style={{ color: isDark ? '#fff' : '#000' }}
      >
        {nyanFrames[frame]}
      </pre>
      
      {/* Info Panel (ala neofetch) */}
      <div className="font-mono text-[10px] space-y-0.5 pt-1">
        <div style={{ color }} className="font-bold">ALPHA TERMINAL</div>
        <div className="text-alpha-text-muted">----------------</div>
        <div><span className="text-alpha-text-secondary">OS:</span> Alpha Terminal v2.0.1</div>
        <div><span className="text-alpha-text-secondary">Host:</span> x86_64</div>
        <div><span className="text-alpha-text-secondary">Kernel:</span> 5.15.0-nyan</div>
        <div><span className="text-alpha-text-secondary">Uptime:</span> 99.9%</div>
        <div><span className="text-alpha-text-secondary">Packages:</span> 6 (nodes)</div>
        <div><span className="text-alpha-text-secondary">Theme:</span> {isDark ? 'dark' : 'light'}</div>
        <div className="flex gap-1 mt-1">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }}></span>
          <span className="text-[9px] text-alpha-text-secondary">ONLINE</span>
        </div>
      </div>
    </div>
  );
}
