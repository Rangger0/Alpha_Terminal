import { ArrowUpRight, Github, Send, Twitter } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { ActivityTicker } from '@/components/media/ActivityTicker';
import { ScrollReveal } from '@/components/ScrollReveal';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const channels = [
  {
    id: '01',
    title: 'GitHub',
    handle: '@Rangger0',
    href: 'https://github.com/Rangger0',
    description: 'Tempat paling pas untuk lihat build, struktur project, dan eksperimen UI yang saya kerjakan.',
    bestFor: 'Code and release notes',
    tempo: 'Product-focused',
    icon: Github,
  },
  {
    id: '02',
    title: 'X',
    handle: '@rinzx_',
    href: 'https://x.com/rinzx_',
    description: 'Untuk update cepat, observasi Web3, dan potongan thought process yang lebih real-time.',
    bestFor: 'Fast signal',
    tempo: 'Realtime',
    icon: Twitter,
  },
  {
    id: '03',
    title: 'Telegram',
    handle: 'Alpha Community',
    href: 'https://t.me/+MGzRobr9cp4yMTk1',
    description: 'Kanal yang lebih dekat untuk ngobrol, share update, dan bangun audience yang relevan.',
    bestFor: 'Community flow',
    tempo: 'Conversational',
    icon: Send,
  },
  {
    id: '04',
    title: 'TikTok',
    handle: '@rinzzx0',
    href: 'https://www.tiktok.com/@rinzzx0',
    description: 'Ruang untuk format pendek: tutorial, vibe, dan highlight dari workflow yang lagi dijalankan.',
    bestFor: 'Short-form content',
    tempo: 'Visual',
    icon: TikTokIcon,
  },
];

const mediaNotes = [
  {
    title: 'Code first',
    description: 'Kalau ingin nilai teknis, mulai dari GitHub dan halaman projects.',
  },
  {
    title: 'Signal next',
    description: 'Untuk konteks cepat dan pengamatan sehari-hari, X lebih cocok.',
  },
  {
    title: 'Community layer',
    description: 'Telegram dan TikTok dipakai untuk bentuk hubungan yang lebih dekat dan santai.',
  },
];

export function Media() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const accent = isDark ? '#67e8f9' : '#0f766e';

  return (
    <div className="page-transition min-h-screen pb-16 pt-28">
      <div className="section-container space-y-10 md:space-y-12">
        <ScrollReveal delay={40}>
        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="glass-panel p-6 md:p-8">
            <span className="alpha-chip">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              media room / active
            </span>
            <p className="alpha-kicker mt-6">External presence</p>
            <h1 className="mt-2 text-4xl font-semibold text-alpha-text-primary md:text-6xl">Satu brand, beberapa jalur komunikasi.</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-alpha-text-secondary">
              Halaman ini saya rapikan supaya jadi hub yang lebih premium. Setiap kanal punya fungsi yang berbeda: code,
              real-time signal, community, atau short-form content.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-[1.3rem] border border-alpha-border px-4 py-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-alpha-text-muted">Channels</p>
                <p className="mt-2 text-3xl font-semibold text-alpha-text-primary">04</p>
              </div>
              <div className="rounded-[1.3rem] border border-alpha-border px-4 py-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-alpha-text-muted">Primary mode</p>
                <p className="mt-2 text-lg font-semibold text-alpha-text-primary">Build + signal</p>
              </div>
              <div className="rounded-[1.3rem] border border-alpha-border px-4 py-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-alpha-text-muted">Response style</p>
                <p className="mt-2 text-lg font-semibold text-alpha-text-primary">Selective and clear</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <ActivityTicker />
            <div className="glass-panel p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em]" style={{ color: accent }}>
                connection.note
              </p>
              <p className="mt-4 text-sm leading-8 text-alpha-text-secondary">
                Saya tidak ingin semua platform terasa sama. GitHub dan projects page untuk proof of work. X untuk tempo
                cepat. Telegram dan TikTok untuk audience layer yang lebih cair.
              </p>
            </div>
          </div>
        </section>
        </ScrollReveal>

        <ScrollReveal variant="left" delay={80}>
        <section className="grid gap-4 md:grid-cols-2">
          {channels.map((channel) => {
            const Icon = channel.icon;

            return (
              <a
                key={channel.id}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-card p-5 md:p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ background: isDark ? 'rgba(103, 232, 249, 0.1)' : 'rgba(15, 118, 110, 0.08)' }}
                  >
                    <Icon className="h-5 w-5" style={{ color: accent }} />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-alpha-text-muted" />
                </div>

                <div className="mt-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-alpha-text-muted">{channel.handle}</p>
                  <h2 className="mt-2 text-2xl font-semibold text-alpha-text-primary">{channel.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-alpha-text-secondary">{channel.description}</p>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.2rem] border border-alpha-border px-4 py-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-alpha-text-muted">Best for</p>
                    <p className="mt-2 text-sm font-medium text-alpha-text-primary">{channel.bestFor}</p>
                  </div>
                  <div className="rounded-[1.2rem] border border-alpha-border px-4 py-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-alpha-text-muted">Tempo</p>
                    <p className="mt-2 text-sm font-medium text-alpha-text-primary">{channel.tempo}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </section>
        </ScrollReveal>

        <ScrollReveal variant="right" delay={100}>
        <section className="glass-panel p-6 md:p-8">
          <p className="alpha-kicker">Protocol</p>
          <h2 className="mt-2 text-3xl font-semibold text-alpha-text-primary">How to read my media ecosystem</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {mediaNotes.map((note) => (
              <div key={note.title} className="rounded-[1.3rem] border border-alpha-border px-4 py-4">
                <h3 className="text-xl font-semibold text-alpha-text-primary">{note.title}</h3>
                <p className="mt-3 text-sm leading-7 text-alpha-text-secondary">{note.description}</p>
              </div>
            ))}
          </div>
        </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
