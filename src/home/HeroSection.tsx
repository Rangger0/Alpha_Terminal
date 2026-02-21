// src/home/HeroSection.tsx
import { useEffect, useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { Terminal, ArrowRight, ChevronRight, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { TypewriterText } from '@/components/media/TypewriterText'; // Import TypewriterText

const typingTexts = [
  'Web3 Developer',
  'Blockchain Engineer',
  'Full Stack Developer',
  'DeFi Specialist',
];

export default function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copied, setCopied] = useState(false);

  const neonColor = isDark ? '#00FF88' : '#2563EB';

  // Description text untuk typewriter
  const descriptionText = `Alpha_Terminal is a Web3 AI control hub built for structured execution 
and digital asset oversight. This system integrates financial tracking, 
airdrop project management, and on-chain activity monitoring into a 
unified command interface. Every module is designed for precision, 
clarity, and operational efficiency.`;

  useEffect(() => {
    const text = typingTexts[currentTextIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < text.length) {
          setCurrentText(text.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Grid Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: isDark 
              ? 'radial-gradient(circle at 1px 1px, rgba(0, 255, 136, 0.06) 1px, transparent 0)'
              : 'radial-gradient(circle at 1px 1px, rgba(37, 100, 235, 0.05) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Animated Lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-full"
            style={{
              top: `${20 + i * 15}%`,
              background: `linear-gradient(90deg, transparent, ${neonColor}, transparent)`,
              opacity: 0.3,
            }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
          style={{ 
            background: isDark ? 'rgba(0,255,136,0.1)' : 'rgba(37,99,235,0.1)',
            border: `1px solid ${isDark ? 'rgba(0,255,136,0.3)' : 'rgba(37,99,235,0.3)'}`,
          }}
        >
          <span 
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: neonColor }}
          />
          <span className="text-sm font-mono" style={{ color: neonColor }}>
            System Online
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold font-mono mb-6"
          style={{ color: isDark ? '#f8fafc' : '#0f172a' }}
        >
          WELCOME
        </motion.h1>

        {/* Description - DIBUAT TYPEWRITER */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-10 max-w-2xl mx-auto"
        >
          <div 
            className="font-mono text-sm md:text-base leading-relaxed"
            style={{ color: isDark ? '#7d7d86' : '#76797d' }}
          >
            <TypewriterText 
              text={descriptionText}
              speed={30}
              delay={600}
              className="block whitespace-pre-line"
              showCursor={true}
              cursorChar="▋"
            />
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="/projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-medium text-white transition-all hover:scale-105"
            style={{ background: neonColor }}
          >
            <Terminal className="w-5 h-5" />
            <span className="font-mono">Explore Nodes</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="/about"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-medium transition-all hover:scale-105"
            style={{ 
              background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
              color: isDark ? '#f8fafc' : '#0f172a',
            }}
          >
            <span className="font-mono">System Info</span>
            <ChevronRight className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="rounded-xl border overflow-hidden mx-auto max-w-2xl text-left"
          style={{ 
            background: '#0f172a',
            borderColor: isDark ? 'rgba(0,255,136,0.3)' : 'rgba(37,99,235,0.3)',
            boxShadow: `0 0 40px ${isDark ? 'rgba(0,255,136,0.1)' : 'rgba(37,99,235,0.1)'}`,
          }}
        >
          {/* Terminal Header */}
          <div className="px-4 py-3 border-b border-slate-800 bg-slate-900 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div 
                className="w-8 h-8 flex items-center justify-center rounded border-2"
                style={{ borderColor: neonColor }}
              >
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-5 h-5"
                  fill="none"
                  stroke={neonColor}
                  strokeWidth="2.5"
                >
                  <polyline points="9 8 13 12 9 16" />
                  <line x1="13" y1="16" x2="17" y2="16" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-mono font-semibold text-slate-200">
                  Alpha_Terminal
                </span>
                <span className="text-xs font-mono text-slate-500">v2.0.1</span>
              </div>
            </div>
            <span className="text-xs text-slate-600 font-mono">bash</span>
          </div>
          
          {/* Terminal Content */}
          <div className="p-6 space-y-4 font-mono text-sm">
            {/* Command 1: whoami */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span style={{ color: neonColor }}>$</span>
                <span className="text-slate-300">whoami</span>
              </div>
              <div className="pl-4 text-slate-400 border-l-2 border-slate-800">
                <span style={{ color: neonColor }}>{'>'}</span> {currentText}
                <span className="inline-block w-0.5 h-5 ml-1 animate-pulse" style={{ background: neonColor }} />
              </div>
            </div>

            {/* Command 2: system.status */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span style={{ color: neonColor }}>$</span>
                <span className="text-slate-300">system.status</span>
              </div>
              <div className="pl-4 text-slate-400 border-l-2 border-slate-800 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span>Database connected</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span>Blockchain nodes synced</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span>Smart contracts loaded</span>
                </div>
              </div>
            </div>

            {/* Command 3: contact --email */}
            <div className="space-y-2">
              <div className="flex items-center justify-between group">
                <div className="flex items-center gap-2">
                  <span style={{ color: neonColor }}>$</span>
                  <span className="text-slate-300">contact --email</span>
                </div>
                <button
                  onClick={() => copyToClipboard('rangger@alpha-terminal.dev')}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-slate-800 rounded"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-slate-500" />
                  )}
                </button>
              </div>
              <div className="pl-4 text-slate-400 border-l-2 border-slate-800">
                rangger@alpha-terminal.dev
              </div>
            </div>

            {/* Cursor */}
            <div className="flex items-center gap-2 pt-2">
              <span style={{ color: neonColor }}>$</span>
              <span className="w-2 h-4 animate-pulse" style={{ background: neonColor }} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}