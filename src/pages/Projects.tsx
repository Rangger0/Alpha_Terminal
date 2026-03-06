import { useEffect, useState } from 'react';
import { LayoutPanelTop, Sparkles } from 'lucide-react';
import { ProjectCard } from '@/components/ProjectCard';
import { ScrollReveal } from '@/components/ScrollReveal';
import { projects, roadmapPhases, type ProjectCategory, type ProjectStatus } from '@/home/data/Projects';
import { useTheme } from '@/hooks/useTheme';

type CategoryFilter = 'All' | ProjectCategory;
type StatusFilter = 'All' | ProjectStatus;

const categories: CategoryFilter[] = ['All', 'Finance', 'Airdrop', 'Intelligence', 'Infrastructure'];
const statuses: StatusFilter[] = ['All', 'Live', 'Building', 'Roadmap'];

function TypingCommand({ text, accent }: { text: string; accent: string }) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setVisibleCount((current) => {
        if (current >= text.length) {
          window.clearInterval(timer);
          return current;
        }

        return current + 1;
      });
    }, 26);

    return () => window.clearInterval(timer);
  }, [text]);

  return (
    <div className="font-mono text-xs text-alpha-text-muted">
      <span style={{ color: accent }}>$</span> {text.slice(0, visibleCount)}
      <span className="ml-1 inline-block h-4 w-2 animate-pulse" style={{ background: accent }} />
    </div>
  );
}

export function Projects() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const accent = isDark ? '#67e8f9' : '#0f766e';

  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('All');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('All');

  const fullText = `showcase.filter --category=${categoryFilter.toLowerCase()} --status=${statusFilter.toLowerCase()}`;

  const filteredProjects = projects.filter((project) => {
    const categoryMatch = categoryFilter === 'All' || project.category === categoryFilter;
    const statusMatch = statusFilter === 'All' || project.status === statusFilter;
    return categoryMatch && statusMatch;
  });

  return (
    <div className="page-transition min-h-screen pb-16 pt-28">
      <div className="section-container space-y-10 md:space-y-12">
        <ScrollReveal delay={40}>
        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <span className="alpha-chip">
              <Sparkles className="h-4 w-4" style={{ color: accent }} />
              project vault
            </span>
            <div>
              <p className="alpha-kicker">Premium build collection</p>
              <h1 className="mt-2 text-4xl font-semibold text-alpha-text-primary md:text-6xl">Projects that reflect the actual workflow.</h1>
            </div>
            <p className="max-w-2xl text-base leading-8 text-alpha-text-secondary">
              Saya tambahkan preview visual, README-style notes, dan roadmap di setiap card supaya halaman project terasa lebih
              kaya dan lebih jujur terhadap apa yang sedang dibangun.
            </p>
          </div>

          <div className="glass-panel p-6 md:p-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em]" style={{ color: accent }}>
              readme.md
            </p>
            <div className="mt-5 space-y-4 text-sm leading-8 text-alpha-text-secondary">
              <p>
                Alpha Terminal bukan template portfolio biasa. Halaman ini menggabungkan project preview, catatan fungsi, dan
                arah pengembangan supaya visitor langsung paham value setiap build.
              </p>
              <p>
                Fokus utamanya tetap sama: Web3 execution, airdrop intelligence, dan finance notes yang bisa tumbuh menjadi
                operating system pribadi.
              </p>
            </div>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              <div className="rounded-[1.3rem] border border-alpha-border px-4 py-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-alpha-text-muted">Total nodes</p>
                <p className="mt-2 text-3xl font-semibold text-alpha-text-primary">{projects.length}</p>
              </div>
              <div className="rounded-[1.3rem] border border-alpha-border px-4 py-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-alpha-text-muted">Live today</p>
                <p className="mt-2 text-3xl font-semibold text-alpha-text-primary">{projects.filter((project) => project.status === 'Live').length}</p>
              </div>
            </div>
          </div>
        </section>
        </ScrollReveal>

        <ScrollReveal variant="left" delay={70}>
        <section className="glass-panel p-5 md:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-alpha-text-muted">Category</span>
              {categories.map((category) => {
                const active = categoryFilter === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setCategoryFilter(category)}
                    className="rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] transition-all"
                    style={{
                      color: active ? '#04111f' : 'var(--alpha-text-secondary)',
                      background: active ? accent : 'transparent',
                      border: `1px solid ${active ? accent : 'var(--alpha-border)'}`,
                    }}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-alpha-text-muted">Status</span>
              {statuses.map((status) => {
                const active = statusFilter === status;

                return (
                  <button
                    key={status}
                    type="button"
                    onClick={() => setStatusFilter(status)}
                    className="rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] transition-all"
                    style={{
                      color: active ? '#04111f' : 'var(--alpha-text-secondary)',
                      background: active ? accent : 'transparent',
                      border: `1px solid ${active ? accent : 'var(--alpha-border)'}`,
                    }}
                  >
                    {status}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-5 flex items-center gap-2 font-mono text-xs text-alpha-text-muted">
            <LayoutPanelTop className="h-4 w-4" style={{ color: accent }} />
            showing {filteredProjects.length} of {projects.length} project nodes
          </div>
        </section>
        </ScrollReveal>

        <ScrollReveal variant="right" delay={90}>
        <section className="grid gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </section>
        </ScrollReveal>

        {filteredProjects.length === 0 && (
          <ScrollReveal delay={100}>
          <section className="glass-panel p-8 text-center">
            <p className="text-lg font-semibold text-alpha-text-primary">Tidak ada project yang cocok dengan filter ini.</p>
            <p className="mt-2 text-sm text-alpha-text-secondary">Coba ubah kategori atau status untuk melihat node lain.</p>
          </section>
          </ScrollReveal>
        )}

        <ScrollReveal delay={110}>
        <section className="glass-panel p-6 md:p-8">
          <p className="alpha-kicker">Roadmap</p>
          <h2 className="mt-2 text-3xl font-semibold text-alpha-text-primary">Arah perluasan Alpha Terminal</h2>
          <div className="mt-6 grid gap-4 xl:grid-cols-3">
            {roadmapPhases.map((phase) => (
              <div key={phase.id} className="rounded-[1.4rem] border border-alpha-border px-5 py-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em]" style={{ color: accent }}>
                  phase {phase.id} / {phase.title}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-alpha-text-primary">{phase.description}</h3>
                <div className="mt-4 space-y-2">
                  {phase.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: accent }} />
                      <p className="text-sm leading-7 text-alpha-text-secondary">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        </ScrollReveal>

        <ScrollReveal variant="left" delay={60}>
        <section className="border-t border-alpha-border pt-6">
          <TypingCommand key={fullText} text={fullText} accent={accent} />
        </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
