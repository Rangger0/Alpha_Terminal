import { Github, Mail, Send, Twitter } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/Rangger0', handle: '@Rangger0' },
  { name: 'X', icon: Twitter, url: 'https://x.com/rinzx_', handle: '@rinzx_' },
  { name: 'Telegram', icon: Send, url: 'https://t.me/+MGzRobr9cp4yMTk1', handle: 'Alpha Community' },
  { name: 'TikTok', icon: TikTokIcon, url: 'https://tiktok.com/@rinzzx0', handle: '@rinzzx0' },
];

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const accent = isDark ? '#67e8f9' : '#0f766e';
  const logoSrc = '/icon-192.png';

  return (
    <footer className="relative mt-auto border-t border-alpha-border py-8">
      <div className="section-container">
        <div className="glass-panel grid gap-6 px-6 py-6 md:grid-cols-[1.2fr_0.8fr] md:px-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-alpha-border"
                style={{ background: isDark ? 'rgba(8, 13, 28, 0.92)' : 'rgba(255,255,255,0.7)' }}
              >
                <img src={logoSrc} alt="Alpha Terminal logo" className="h-7 w-7 object-contain" />
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-alpha-text-muted">Alpha Terminal</p>
                <h3 className="text-lg font-semibold text-alpha-text-primary">Portfolio OS for Web3 execution</h3>
              </div>
            </div>

            <p className="max-w-xl text-sm leading-7 text-alpha-text-secondary">
              Dibangun untuk menampilkan cara kerja saya: riset airdrop, pencatatan keuangan, dan shipping product
              interface yang rapi, cepat, dan terukur.
            </p>

            <a
              href="mailto:allgazali011@gmail.com"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-alpha-text-secondary transition-colors hover:text-alpha-text-primary"
            >
              <Mail className="h-4 w-4" style={{ color: accent }} />
              allgazali011@gmail.com
            </a>
          </div>

          <div className="flex flex-col justify-between gap-5">
            <div className="flex flex-wrap items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative rounded-2xl border border-alpha-border p-3 transition-transform duration-300 hover:-translate-y-1"
                    title={`${social.name} - ${social.handle}`}
                    style={{ background: isDark ? 'rgba(8, 13, 28, 0.7)' : 'rgba(255,255,255,0.62)' }}
                  >
                    <Icon className="h-5 w-5 transition-colors duration-300" style={{ color: accent }} />
                    <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-slate-900 px-3 py-1 font-mono text-[10px] text-white opacity-0 transition-all duration-300 group-hover:opacity-100 dark:bg-white dark:text-slate-900">
                      {social.handle}
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-alpha-border pt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-alpha-text-muted">
              <span>Rose Alpha / Indonesia / Remote</span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                system online
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
