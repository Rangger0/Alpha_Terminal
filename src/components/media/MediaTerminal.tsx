import { useEffect, useState } from 'react';
import { useTheme } from '@/hooks/useTheme';


interface TerminalLine {
  text: string;
  type: 'command' | 'output' | 'success' | 'error';
  delay?: number;
}

export function MediaTerminal() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentLine, setCurrentLine] = useState(0);

  const terminalLines: TerminalLine[] = [
    { text: 'media.nodes --scan', type: 'command', delay: 500 },
    { text: 'Initializing network scan...', type: 'output', delay: 800 },
    { text: '> Scanning 4 nodes...', type: 'output', delay: 600 },
    { text: '> GitHub: ONLINE [ping: 12ms]', type: 'success', delay: 400 },
    { text: '> X (Twitter): ONLINE [ping: 8ms]', type: 'success', delay: 400 },
    { text: '> Telegram: ONLINE [ping: 15ms]', type: 'success', delay: 400 },
    { text: '> TikTok: ONLINE [ping: 23ms]', type: 'success', delay: 400 },
    { text: '> All systems operational', type: 'success', delay: 600 },
    { text: 'Ready for connection.', type: 'output', delay: 0 },
  ];

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    
    const typeLine = (index: number) => {
      if (index >= terminalLines.length) return;
      
      setCurrentLine(index);
      setLines(prev => [...prev, terminalLines[index]]);
      
      const delay = terminalLines[index].delay || 500;
      timeout = setTimeout(() => typeLine(index + 1), delay);
    };

    timeout = setTimeout(() => typeLine(0), 300);
    
    return () => clearTimeout(timeout);
  }, []);

  const getLineColor = (type: string) => {
    switch (type) {
      case 'command': return isDark ? '#00FF88' : '#2563EB';
      case 'success': return isDark ? '#00FF88' : '#059669';
      case 'error': return '#EF4444';
      default: return isDark ? '#94A3B8' : '#64748B';
    }
  };

  return (
    <div 
      className="w-full rounded-lg overflow-hidden border font-mono text-sm mb-8 animate-in fade-in slide-in-from-top-4 duration-700"
      style={{ 
        borderColor: isDark ? 'rgba(0, 255, 136, 0.3)' : 'rgba(37, 99, 235, 0.3)',
        background: isDark ? 'rgba(2, 6, 23, 0.9)' : 'rgba(248, 250, 252, 0.9)',
      }}
    >
      {/* Terminal Header - GANTI LOGO */}
      <div 
        className="flex items-center gap-3 px-4 py-3 border-b"
        style={{ 
          borderColor: isDark ? 'rgba(0, 255, 136, 0.2)' : 'rgba(37, 99, 235, 0.2)',
          background: isDark ? 'rgba(0, 255, 136, 0.05)' : 'rgba(37, 99, 235, 0.05)',
        }}
      >
    
        {/* LOGO BARU: >_ */}
        <div className="flex items-center gap-1 ml-2 opacity-80">
          <span className="text-lg" style={{ color: isDark ? '#00FF88' : '#2563EB' }}>&gt;</span>
          <span className="text-lg" style={{ color: isDark ? '#00FF88' : '#2563EB' }}>_</span>
        </div>
        <span className="text-xs opacity-60 ml-1">alpha_terminal.exe</span>
      </div>

      {/* Terminal Content */}
      <div className="p-4 space-y-1 min-h-[200px]">
        {lines.map((line, index) => (
          <div 
            key={index} 
            className="flex items-start gap-2 animate-in fade-in slide-in-from-left-2 duration-300"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {line.type === 'command' && (
              <span style={{ color: isDark ? '#00FF88' : '#2563EB' }}>$</span>
            )}
            <span style={{ color: getLineColor(line.type) }}>
              {line.text}
            </span>
            {index === currentLine && index < terminalLines.length - 1 && (
              <span className="inline-block w-2 h-4 bg-current animate-pulse ml-1" 
                style={{ color: getLineColor(line.type) }} />
            )}
          </div>
        ))}
        {lines.length === terminalLines.length && (
          <div className="flex items-center gap-2 mt-2 animate-in fade-in">
            <span style={{ color: isDark ? '#00FF88' : '#2563EB' }}>$</span>
            <span className="inline-block w-2 h-4 bg-current animate-pulse" 
              style={{ color: isDark ? '#00FF88' : '#2563EB' }} />
          </div>
        )}
      </div>
    </div>
  );
}