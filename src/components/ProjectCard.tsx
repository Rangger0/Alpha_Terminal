import { ArrowUpRight, FileText, Flag } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import type { Project } from '@/home/data/Projects';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const statusTone: Record<Project['status'], string> = {
  Live: '#10b981',
  Building: '#67e8f9',
  Roadmap: '#f5c26b',
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const borderTone = `${project.accent}44`;

  return (
    <article
      className="terminal-card overflow-hidden"
      style={{
        animation: `page-enter 0.45s ease-out ${index * 80}ms both`,
      }}
    >
      <div className="relative p-5 md:p-6">
        <div
          className="relative overflow-hidden rounded-[1.4rem] border p-5 md:p-6"
          style={{
            borderColor: borderTone,
            background: `linear-gradient(135deg, ${project.accent}1f 0%, transparent 58%), ${isDark ? 'rgba(10, 16, 32, 0.92)' : 'rgba(255, 255, 255, 0.92)'}`,
          }}
        >
          <div
            className="absolute inset-y-0 right-0 w-1/2 opacity-60"
            style={{
              background: `radial-gradient(circle at center, ${project.accent}24 0%, transparent 62%)`,
            }}
          />

          <div className="relative flex items-start justify-between gap-3">
            <div>
              <span className="alpha-chip" style={{ color: project.accent, borderColor: borderTone }}>
                {project.nodeId}
              </span>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: project.accent }}>
                {project.coverLabel}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-alpha-text-primary md:text-[2rem]">{project.name}</h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-alpha-text-secondary">{project.summary}</p>
            </div>

            <div className="flex flex-col items-end gap-2">
              <span
                className="rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em]"
                style={{
                  background: `${statusTone[project.status]}18`,
                  color: statusTone[project.status],
                }}
              >
                {project.status}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-alpha-text-muted">{project.category}</span>
            </div>
          </div>

          <div className="relative mt-8 grid gap-3 md:grid-cols-3">
            {project.coverStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border p-3"
                style={{
                  borderColor: borderTone,
                  background: isDark ? 'rgba(7, 12, 24, 0.68)' : 'rgba(255, 255, 255, 0.72)',
                }}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-alpha-text-muted">{stat.label}</p>
                <p className="mt-2 text-sm font-medium text-alpha-text-primary">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 border-t border-alpha-border px-5 pb-6 pt-5 md:px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="alpha-kicker">Overview</p>
          <p className="mt-3 text-sm leading-7 text-alpha-text-secondary">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-alpha-border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-alpha-text-secondary"
              >
                {item}
              </span>
            ))}
          </div>

          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-alpha-border px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-alpha-text-primary transition-transform hover:-translate-y-0.5"
            >
              Open live build
              <ArrowUpRight className="h-4 w-4" style={{ color: project.accent }} />
            </a>
          ) : (
            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-alpha-border px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-alpha-text-muted">
              Private build / not public yet
            </span>
          )}
        </div>

        <div className="space-y-5">
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em]" style={{ color: project.accent }}>
              <FileText className="h-4 w-4" />
              README
            </div>
            <div className="mt-3 space-y-2">
              {project.readme.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: project.accent }} />
                  <p className="text-sm leading-7 text-alpha-text-secondary">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em]" style={{ color: project.accent }}>
              <Flag className="h-4 w-4" />
              Roadmap
            </div>
            <div className="mt-3 space-y-3">
              {project.roadmap.map((item, roadmapIndex) => (
                <div key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full font-mono text-[10px]"
                    style={{
                      background: `${project.accent}20`,
                      color: project.accent,
                    }}
                  >
                    0{roadmapIndex + 1}
                  </span>
                  <p className="text-sm leading-7 text-alpha-text-secondary">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
