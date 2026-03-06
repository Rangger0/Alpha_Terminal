import { ArrowUpRight, Code2, Github, Radar, ScrollText, Send, Twitter, Wallet } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { ScrollReveal } from '@/components/ScrollReveal';
import HeroSection from '@/home/HeroSection';
import { projects } from '@/home/data/Projects';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const pillars = [
  {
    title: 'Airdrop Intelligence',
    description: 'Saya suka bekerja di area riset, eligibility, dan claim readiness yang butuh disiplin lebih dari sekadar FOMO.',
    icon: Radar,
  },
  {
    title: 'Finance Notes',
    description: 'Portfolio ini sekarang punya arah baru: catatan keuangan yang rapi, privat, dan mudah direview.',
    icon: Wallet,
  },
  {
    title: 'Product Shipping',
    description: 'Bukan hanya ikut tren Web3. Saya juga suka membungkus workflow jadi interface yang premium dan usable.',
    icon: Code2,
  },
];

const workflow = [
  {
    step: '01',
    title: 'Research first',
    description: 'Baca ecosystem, lihat quality campaign, dan pilih hanya peluang yang layak waktu.',
  },
  {
    step: '02',
    title: 'Track execution',
    description: 'Pisahkan campaign aktif, quest cadence, dan status claim supaya tidak ada blind spot.',
  },
  {
    step: '03',
    title: 'Log capital',
    description: 'Catat biaya, exposure, dan alasan keputusan agar modal tidak bergerak tanpa memori.',
  },
  {
    step: '04',
    title: 'Ship clean UI',
    description: 'Semua workflow dibungkus jadi product surface yang terasa rapi, meyakinkan, dan beda.',
  },
];

const channels = [
  { name: 'GitHub', href: 'https://github.com/Rangger0', handle: '@Rangger0', icon: Github },
  { name: 'X', href: 'https://x.com/rinzx_', handle: '@rinzx_', icon: Twitter },
  { name: 'Telegram', href: 'https://t.me/+MGzRobr9cp4yMTk1', handle: 'Alpha Community', icon: Send },
  { name: 'TikTok', href: 'https://www.tiktok.com/@rinzzx0', handle: '@rinzzx0', icon: TikTokIcon },
];

export function Home() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const accent = isDark ? '#67e8f9' : '#0f766e';

  const featuredProjects = projects.filter((project) => project.status !== 'Roadmap').slice(0, 3);
  const liveProjects = projects.filter((project) => project.status === 'Live');

  return (
    <div className="page-transition min-h-screen pb-16 pt-28">
      <div className="section-container space-y-12 md:space-y-16">
        <HeroSection />

        <ScrollReveal delay={60}>
        <section className="grid gap-4 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <div key={pillar.title} className="terminal-card p-5 md:p-6">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-2xl"
                  style={{ background: isDark ? 'rgba(103, 232, 249, 0.1)' : 'rgba(15, 118, 110, 0.08)' }}
                >
                  <Icon className="h-5 w-5" style={{ color: accent }} />
                </div>
                <h2 className="mt-5 text-2xl font-semibold text-alpha-text-primary">{pillar.title}</h2>
                <p className="mt-3 text-sm leading-7 text-alpha-text-secondary">{pillar.description}</p>
              </div>
            );
          })}
        </section>
        </ScrollReveal>

        <ScrollReveal variant="left" delay={80}>
        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-panel p-6 md:p-8">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="alpha-kicker">Featured Nodes</p>
                <h2 className="mt-2 text-3xl font-semibold text-alpha-text-primary">Flagship builds inside Alpha Terminal</h2>
              </div>
              <a href="/projects" className="alpha-button secondary">
                All projects
              </a>
            </div>

            <div className="mt-6 space-y-4">
              {featuredProjects.map((project) => (
                <a
                  key={project.id}
                  href={project.link ?? '/projects'}
                  target={project.link ? '_blank' : undefined}
                  rel={project.link ? 'noopener noreferrer' : undefined}
                  className="block rounded-[1.4rem] border border-alpha-border p-4 transition-transform hover:-translate-y-1 md:p-5"
                  style={{
                    background: `linear-gradient(135deg, ${project.accent}16 0%, transparent 62%), ${isDark ? 'rgba(9, 14, 28, 0.78)' : 'rgba(255,255,255,0.78)'}`,
                  }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em]" style={{ color: project.accent }}>
                        {project.nodeId}
                      </span>
                      <h3 className="mt-2 text-xl font-semibold text-alpha-text-primary">{project.name}</h3>
                      <p className="mt-2 text-sm leading-7 text-alpha-text-secondary">{project.summary}</p>
                    </div>
                    <ArrowUpRight className="mt-1 h-4 w-4" style={{ color: project.accent }} />
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="glass-panel p-6 md:p-8">
            <p className="alpha-kicker">Operator Note</p>
            <h2 className="mt-2 text-3xl font-semibold text-alpha-text-primary">Portfolio ini diarahkan jadi proof of work, bukan brosur.</h2>
            <p className="mt-4 text-sm leading-8 text-alpha-text-secondary">
              Yang saya kejar bukan layout keren saja, tapi surface yang benar-benar mewakili workflow saya: memfilter signal,
              mengeksekusi campaign, dan menyimpan catatan modal dengan lebih disiplin.
            </p>

            <div className="mt-6 space-y-3">
              <div className="rounded-[1.3rem] border border-alpha-border px-4 py-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-alpha-text-muted">Live nodes</p>
                <p className="mt-2 text-2xl font-semibold text-alpha-text-primary">{liveProjects.length}</p>
                <p className="mt-2 text-sm text-alpha-text-secondary">Dua sistem live jadi tulang punggung portfolio ini hari ini.</p>
              </div>
              <div className="rounded-[1.3rem] border border-alpha-border px-4 py-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-alpha-text-muted">Next expansion</p>
                <p className="mt-2 text-lg font-semibold text-alpha-text-primary">Finance journal + research desk</p>
                <p className="mt-2 text-sm text-alpha-text-secondary">Itu sebabnya saya tambahkan roadmap dan README-style detail di halaman project.</p>
              </div>
            </div>
          </div>
        </section>
        </ScrollReveal>

        <ScrollReveal variant="right" delay={90}>
        <section className="glass-panel p-6 md:p-8">
          <div className="flex items-center gap-3">
            <ScrollText className="h-5 w-5" style={{ color: accent }} />
            <p className="alpha-kicker">Execution Loop</p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {workflow.map((item) => (
              <div key={item.step} className="rounded-[1.3rem] border border-alpha-border px-4 py-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em]" style={{ color: accent }}>
                  Step {item.step}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-alpha-text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-alpha-text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        </ScrollReveal>

        <ScrollReveal delay={100}>
        <section>
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <p className="alpha-kicker">Media Links</p>
              <h2 className="mt-2 text-3xl font-semibold text-alpha-text-primary">Where Alpha Terminal stays active</h2>
            </div>
            <a href="/media" className="alpha-button secondary">
              Open media room
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {channels.map((channel) => {
              const Icon = channel.icon;

              return (
                <a
                  key={channel.name}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="terminal-card p-5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-2xl"
                      style={{ background: isDark ? 'rgba(103, 232, 249, 0.1)' : 'rgba(15, 118, 110, 0.08)' }}
                    >
                      <Icon className="h-5 w-5" style={{ color: accent }} />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-alpha-text-muted" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-alpha-text-primary">{channel.name}</h3>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-alpha-text-muted">{channel.handle}</p>
                </a>
              );
            })}
          </div>
        </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
