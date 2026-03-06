import { useState } from 'react';
import { ArrowUpRight, Briefcase, Check, Code2, Copy, Cpu, Globe, Mail, MapPin, Shield, TerminalSquare, Wallet, Workflow } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useTheme } from '@/hooks/useTheme';
import { projects } from '@/home/data/Projects';

const principles = [
  {
    title: 'Signal over hype',
    description: 'Saya lebih suka campaign yang jelas kualitasnya daripada mengejar semua hal yang ramai di timeline.',
    icon: Shield,
  },
  {
    title: 'Systematic execution',
    description: 'Tracking, note-taking, dan review saya bungkus dalam workflow yang bisa diulang dengan tenang.',
    icon: Workflow,
  },
  {
    title: 'Product-minded shipping',
    description: 'Saya suka mengubah proses teknis yang kompleks menjadi surface yang elegan dan gampang dipahami.',
    icon: Code2,
  },
];

const timeline = [
  {
    period: '2020 - 2021',
    title: 'Foundation in web building',
    detail: 'Membangun dasar frontend, backend, dan product thinking yang sekarang saya bawa ke workflow Web3.',
  },
  {
    period: '2022 - sekarang',
    title: 'Airdrop and on-chain execution',
    detail: 'Fokus ke riset campaign, watchlist eligibility, wallet activity, dan disiplin operational.',
  },
  {
    period: 'Sekarang',
    title: 'Alpha Terminal ecosystem',
    detail: 'Membentuk portfolio menjadi operating system yang menampilkan build, notes, dan roadmap yang hidup.',
  },
];

const stackGroups = [
  { title: 'Frontend', items: ['React', 'TypeScript', 'Tailwind', 'Motion systems'] },
  { title: 'Workflow', items: ['Airdrop tracking', 'Finance notes', 'Structured review', 'Signal scoring'] },
  { title: 'Infrastructure', items: ['Vite', 'Node.js', 'CLI thinking', 'Vercel deploys'] },
  { title: 'Web3 Context', items: ['Ethereum', 'Solana', 'Layer 2', 'Wallet operations'] },
];

const contactRows = [
  { label: 'email', value: 'allgazali011@gmail.com' },
  { label: 'github', value: 'github.com/Rangger0' },
  { label: 'x', value: 'x.com/rinzx_' },
  { label: 'telegram', value: 't.me/+MGzRobr9cp4yMTk1' },
];

export function About() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const accent = isDark ? '#67e8f9' : '#0f766e';
  const [copied, setCopied] = useState<string | null>(null);

  const liveProjects = projects.filter((project) => project.status === 'Live').length;

  const handleCopy = async (value: string, label: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(label);
    window.setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="page-transition min-h-screen pb-16 pt-28">
      <div className="section-container space-y-10 md:space-y-12">
        <ScrollReveal delay={40}>
        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="glass-panel overflow-hidden">
            <div className="alpha-grid-surface border-b border-alpha-border px-6 py-5">
              <p className="alpha-kicker">Operator Profile</p>
              <h1 className="mt-2 text-4xl font-semibold text-alpha-text-primary md:text-5xl">Rose Alpha</h1>
            </div>

            <div className="grid gap-6 p-6 md:grid-cols-[auto_1fr] md:p-8">
              <div className="relative w-fit">
                <div
                  className="absolute -inset-3 rounded-[2rem] blur-2xl"
                  style={{ background: isDark ? 'rgba(103, 232, 249, 0.12)' : 'rgba(15, 118, 110, 0.12)' }}
                />
                <img
                  src="/profile.jpg"
                  alt="Rose Alpha"
                  className="relative h-32 w-32 rounded-[1.7rem] border border-alpha-border object-cover md:h-40 md:w-40"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em]" style={{ color: accent }}>
                  <TerminalSquare className="h-4 w-4" />
                  user@alpha-terminal
                </div>
                <p className="text-lg leading-8 text-alpha-text-secondary">
                  Full stack developer yang bergerak di area Web3, airdrop execution, dan sistem catatan keuangan. Saya suka
                  membungkus workflow yang kompleks menjadi interface yang terasa mahal, rapi, dan jelas fungsinya.
                </p>
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-alpha-text-muted">
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4" style={{ color: accent }} />
                    Indonesia / remote
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    open to collaborate
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="terminal-card p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-alpha-text-muted">Experience lane</p>
              <p className="mt-3 text-3xl font-semibold text-alpha-text-primary">4+ years</p>
              <p className="mt-2 text-sm leading-7 text-alpha-text-secondary">Berangkat dari web building dan sekarang dipakai untuk workflow Web3 yang lebih spesifik.</p>
            </div>
            <div className="terminal-card p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-alpha-text-muted">Live systems</p>
              <p className="mt-3 text-3xl font-semibold text-alpha-text-primary">{liveProjects}</p>
              <p className="mt-2 text-sm leading-7 text-alpha-text-secondary">Alpha Capital dan Alpha Tracker jadi basis paling aktif dari portfolio ini.</p>
            </div>
            <div className="terminal-card p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-alpha-text-muted">Focus lanes</p>
              <p className="mt-3 text-3xl font-semibold text-alpha-text-primary">3</p>
              <p className="mt-2 text-sm leading-7 text-alpha-text-secondary">Web3 execution, finance notes, dan product interface yang terasa premium.</p>
            </div>
            <div className="terminal-card p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-alpha-text-muted">Working style</p>
              <p className="mt-3 text-3xl font-semibold text-alpha-text-primary">Calm ops</p>
              <p className="mt-2 text-sm leading-7 text-alpha-text-secondary">Saya lebih suka sistem yang tenang, rapi, dan bisa diaudit ulang daripada chaos yang cepat.</p>
            </div>
          </div>
        </section>
        </ScrollReveal>

        <ScrollReveal variant="left" delay={70}>
        <section className="grid gap-4 lg:grid-cols-3">
          {principles.map((principle) => {
            const Icon = principle.icon;

            return (
              <div key={principle.title} className="terminal-card p-5 md:p-6">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-2xl"
                  style={{ background: isDark ? 'rgba(103, 232, 249, 0.1)' : 'rgba(15, 118, 110, 0.08)' }}
                >
                  <Icon className="h-5 w-5" style={{ color: accent }} />
                </div>
                <h2 className="mt-5 text-2xl font-semibold text-alpha-text-primary">{principle.title}</h2>
                <p className="mt-3 text-sm leading-7 text-alpha-text-secondary">{principle.description}</p>
              </div>
            );
          })}
        </section>
        </ScrollReveal>

        <ScrollReveal variant="right" delay={90}>
        <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="glass-panel p-6 md:p-8">
            <div className="flex items-center gap-3">
              <Briefcase className="h-5 w-5" style={{ color: accent }} />
              <p className="alpha-kicker">Timeline</p>
            </div>
            <div className="mt-6 space-y-5">
              {timeline.map((item) => (
                <div key={item.title} className="flex gap-4 rounded-[1.3rem] border border-alpha-border px-4 py-4">
                  <div className="mt-1 h-3 w-3 rounded-full" style={{ background: accent }} />
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-alpha-text-muted">{item.period}</p>
                    <h3 className="mt-2 text-xl font-semibold text-alpha-text-primary">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-alpha-text-secondary">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-6 md:p-8">
            <div className="flex items-center gap-3">
              <Cpu className="h-5 w-5" style={{ color: accent }} />
              <p className="alpha-kicker">Stack Matrix</p>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {stackGroups.map((group) => (
                <div key={group.title} className="rounded-[1.3rem] border border-alpha-border px-4 py-4">
                  <h3 className="text-lg font-semibold text-alpha-text-primary">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-alpha-border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-alpha-text-secondary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        </ScrollReveal>

        <ScrollReveal delay={100}>
        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel p-6 md:p-8">
            <div className="flex items-center gap-3">
              <Workflow className="h-5 w-5" style={{ color: accent }} />
              <p className="alpha-kicker">Current Focus</p>
            </div>
            <div className="mt-6 space-y-4">
              <div className="rounded-[1.3rem] border border-alpha-border px-4 py-4">
                <div className="flex items-center gap-2">
                  <Wallet className="h-4 w-4" style={{ color: accent }} />
                  <h3 className="text-lg font-semibold text-alpha-text-primary">Finance note layer</h3>
                </div>
                <p className="mt-2 text-sm leading-7 text-alpha-text-secondary">Memperdalam sisi portfolio sebagai tempat review modal yang lebih disiplin.</p>
              </div>
              <div className="rounded-[1.3rem] border border-alpha-border px-4 py-4">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4" style={{ color: accent }} />
                  <h3 className="text-lg font-semibold text-alpha-text-primary">Cross-ecosystem research</h3>
                </div>
                <p className="mt-2 text-sm leading-7 text-alpha-text-secondary">Merapikan cara memilah campaign dan mengubah riset jadi keputusan yang jelas.</p>
              </div>
              <div className="rounded-[1.3rem] border border-alpha-border px-4 py-4">
                <div className="flex items-center gap-2">
                  <Code2 className="h-4 w-4" style={{ color: accent }} />
                  <h3 className="text-lg font-semibold text-alpha-text-primary">Premium UI direction</h3>
                </div>
                <p className="mt-2 text-sm leading-7 text-alpha-text-secondary">Mencari bahasa visual yang terasa lebih eksklusif daripada terminal neon yang umum.</p>
              </div>
            </div>
          </div>

          <div className="glass-panel p-6 md:p-8">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5" style={{ color: accent }} />
              <p className="alpha-kicker">Contact Console</p>
            </div>
            <div
              className="mt-6 overflow-hidden rounded-[1.4rem] border"
              style={{
                borderColor: isDark ? 'rgba(103, 232, 249, 0.18)' : 'rgba(15, 118, 110, 0.16)',
                background: isDark ? 'rgba(7, 12, 24, 0.88)' : 'rgba(255, 255, 255, 0.9)',
              }}
            >
              <div className="border-b border-alpha-border px-4 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-alpha-text-muted">
                contact.sh
              </div>

              <div className="space-y-4 p-4">
                {contactRows.map((row) => (
                  <div key={row.label} className="space-y-2 rounded-2xl border border-alpha-border px-4 py-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em]">
                        <span style={{ color: accent }}>$</span>
                        <span className="text-alpha-text-primary">{row.label}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy(row.value, row.label)}
                        className="rounded-full border border-alpha-border p-2"
                        aria-label={`Copy ${row.label}`}
                      >
                        {copied === row.label ? <Check className="h-4 w-4" style={{ color: accent }} /> : <Copy className="h-4 w-4 text-alpha-text-muted" />}
                      </button>
                    </div>
                    <p className="border-l border-alpha-border pl-4 text-sm leading-7 text-alpha-text-secondary">{row.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="mailto:allgazali011@gmail.com"
              className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-alpha-text-primary"
            >
              Send email
              <ArrowUpRight className="h-4 w-4" style={{ color: accent }} />
            </a>
          </div>
        </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
