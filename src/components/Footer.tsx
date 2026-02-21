// src/components/Footer.tsx
import { Github, Twitter, Send, Terminal } from 'lucide-react';

// TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const socialLinks = [
  { 
    name: 'GitHub', 
    icon: Github, 
    url: 'https://github.com/Rangger0',
    handle: '@Rangger0'
  },
  { 
    name: 'X (Twitter)', 
    icon: Twitter, 
    url: 'https://x.com/rinzx_',
    handle: '@rinzx_'
  },
  { 
    name: 'Telegram', 
    icon: Send, 
    url: 'https://t.me/+MGzRobr9cp4yMTk1',
    handle: 'ALPHA Community'
  },
  { 
    name: 'TikTok', 
    icon: TikTokIcon,
    url: 'https://tiktok.com/@rinzzx0',
    handle: '@rinzzx0'
  }
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200/50 dark:border-slate-800/50 bg-white/10 dark:bg-slate-950/10 backdrop-blur-md py-6 mt-auto relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 items-center gap-4">
          
          {/* KIRI: Social Links */}
          <div className="flex items-center gap-1 justify-start">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-lg 
                           hover:bg-slate-100/50 dark:hover:bg-slate-900/50 
                           transition-all duration-300"
                  title={`${social.name} - ${social.handle}`}
                >
                  <Icon className="w-5 h-5 text-slate-600 dark:text-slate-400 
                                  group-hover:text-blue-600 dark:group-hover:text-green-400 
                                  transition-all duration-300" />
                  
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 
                                 px-2 py-1 rounded bg-slate-900 dark:bg-white 
                                 text-white dark:text-slate-900 text-xs font-mono
                                 opacity-0 group-hover:opacity-100 
                                 transition-all duration-300 pointer-events-none
                                 whitespace-nowrap z-50">
                    {social.handle}
                  </span>
                </a>
              );
            })}
          </div>

          {/* KANAN: Rose Alpha */}
          <div className="flex items-center gap-3 justify-end">
            {/* Icon Terminal dengan background transparan */}
            <div className="p-2 rounded-lg bg-blue-100/50 dark:bg-green-900/20 backdrop-blur-sm">
              <Terminal className="w-5 h-5 text-blue-600 dark:text-green-400" strokeWidth={2} />
            </div>
            
            {/* Text Info */}
            <div className="flex flex-col items-start">
              <span className="text-sm font-bold text-slate-800 dark:text-slate-200 font-mono">
                Rose Alpha
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-500 font-mono">
                v1.0.0 | Build 2024.02.20
              </span>
            </div>
            
            {/* Status */}
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500 font-mono ml-2">
              <span className="text-green-500 animate-pulse">●</span>
              <span>online</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}