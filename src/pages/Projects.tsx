import { useState, useEffect } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { ProjectCard } from '@/components/ProjectCard';
import { projects, type Project } from '@/home/data/Projects';
import { Grid3X3, List } from 'lucide-react';

type CategoryFilter = 'All' | 'Finance' | 'Web3' | 'Infrastructure';
type StatusFilter = 'All' | 'Live' | 'Development' | 'Soon';

export function Projects() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('All');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isChanging, setIsChanging] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = `projects.filter --category=${categoryFilter.toLowerCase()} --status=${statusFilter.toLowerCase()}`;
  
  useEffect(() => {
    setTypedText('');
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [categoryFilter, statusFilter]);

  const filteredProjects = projects.filter((project: Project) => {
    const categoryMatch = categoryFilter === 'All' || project.category === categoryFilter;
    const statusMatch = statusFilter === 'All' || project.status === statusFilter;
    return categoryMatch && statusMatch;
  });

  const handleFilterChange = (type: 'category' | 'status', value: string) => {
    setIsChanging(true);
    setTimeout(() => {
      if (type === 'category') setCategoryFilter(value as CategoryFilter);
      else setStatusFilter(value as StatusFilter);
      setIsChanging(false);
    }, 150);
  };

  const categories: CategoryFilter[] = ['All', 'Finance', 'Web3', 'Infrastructure'];
  const statuses: StatusFilter[] = ['All', 'Live', 'Development', 'Soon'];

  return (
    <div className="page-transition min-h-screen pt-24 pb-16">
      <div className="section-container">
        <section className="py-8 animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <span 
              className="font-mono text-sm animate-pulse"
              style={{ color: isDark ? '#00FF88' : '#2563EB' }}
            >
              $
            </span>
            <span className="font-mono text-sm text-alpha-text-muted typing-effect">
              projects.list --all
            </span>
          </div>
          <h1 className="font-mono text-3xl md:text-4xl font-bold text-alpha-text-primary mb-4 tracking-tight">
            PROJECT NODES
          </h1>
          <p className="text-alpha-text-secondary max-w-2xl leading-relaxed">
            Daftar semua node sistem ALPHA_TERMINAL. Setiap node merepresentasikan modul 
            independen yang saling terintegrasi dalam ekosistem Web3.
          </p>
        </section>

        <section className="py-6 border-y border-alpha-border animate-fade-in" style={{ animationDelay: '100ms' }}>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs text-alpha-text-muted mr-2">
                CATEGORY:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleFilterChange('category', cat)}
                  className="relative px-3 py-1.5 rounded font-mono text-xs transition-all duration-300 overflow-hidden group"
                  style={{
                    color: categoryFilter === cat ? (isDark ? '#0a0a0a' : '#ffffff') : 'var(--alpha-text-secondary)',
                    background: categoryFilter === cat 
                      ? (isDark ? '#00FF88' : '#2563EB') 
                      : 'transparent',
                    border: `1px solid ${categoryFilter === cat 
                      ? (isDark ? '#00FF88' : '#2563EB') 
                      : 'var(--alpha-border)'}`,
                  }}
                >
                  <span className="relative z-10">{cat}</span>
                  {categoryFilter === cat && (
                    <span 
                      className="absolute inset-0 animate-pulse opacity-50"
                      style={{
                        background: isDark ? '#00FF88' : '#2563EB',
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs text-alpha-text-muted mr-2">
                STATUS:
              </span>
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() => handleFilterChange('status', status)}
                  className="relative px-3 py-1.5 rounded font-mono text-xs transition-all duration-300 overflow-hidden"
                  style={{
                    color: statusFilter === status ? (isDark ? '#0a0a0a' : '#ffffff') : 'var(--alpha-text-secondary)',
                    background: statusFilter === status 
                      ? (isDark ? '#00FF88' : '#2563EB') 
                      : 'transparent',
                    border: `1px solid ${statusFilter === status 
                      ? (isDark ? '#00FF88' : '#2563EB') 
                      : 'var(--alpha-border)'}`,
                  }}
                >
                  <span className="relative z-10">{status}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 p-1 rounded-lg" style={{ background: 'var(--alpha-bg-secondary)' }}>
              <button
                onClick={() => setViewMode('grid')}
                className="relative p-2 rounded transition-all duration-300"
                style={{ 
                  color: viewMode === 'grid' ? (isDark ? '#00FF88' : '#2563EB') : 'var(--alpha-text-muted)',
                }}
              >
                {viewMode === 'grid' && (
                  <span 
                    className="absolute inset-0 rounded bg-alpha-card border transition-all duration-300"
                    style={{ borderColor: isDark ? '#00FF8830' : '#2563EB30' }}
                  />
                )}
                <Grid3X3 className="w-4 h-4 relative z-10" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className="relative p-2 rounded transition-all duration-300"
                style={{ 
                  color: viewMode === 'list' ? (isDark ? '#00FF88' : '#2563EB') : 'var(--alpha-text-muted)',
                }}
              >
                {viewMode === 'list' && (
                  <span 
                    className="absolute inset-0 rounded bg-alpha-card border transition-all duration-300"
                    style={{ borderColor: isDark ? '#00FF8830' : '#2563EB30' }}
                  />
                )}
                <List className="w-4 h-4 relative z-10" />
              </button>
            </div>
          </div>
        </section>

        <div className="py-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <span className="font-mono text-xs text-alpha-text-muted">
            Showing <span className="text-alpha-neon font-bold">{filteredProjects.length}</span> of {projects.length} nodes
          </span>
        </div>

        <section className="py-6">
          <div 
            className={`transition-all duration-300 ${
              isChanging ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
            } ${
              viewMode === 'grid' 
                ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' 
                : 'flex flex-col gap-4'
            }`}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                nodeId={project.nodeId}
                name={project.name}
                category={project.category}
                status={project.status}
                description={project.description}
                link={project.link}
                index={index}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 animate-fade-in">
              <p className="font-mono text-alpha-text-muted text-lg mb-2">
                No nodes match the selected filters.
              </p>
              <p className="font-mono text-alpha-text-muted text-sm opacity-60">
                Try adjusting your filter criteria.
              </p>
            </div>
          )}
        </section>

        <section className="py-8 border-t border-alpha-border animate-fade-in" style={{ animationDelay: '300ms' }}>
          <div className="font-mono text-xs">
            <span style={{ color: isDark ? '#00FF88' : '#2563EB' }}>$</span>{' '}
            <span className="text-alpha-text-muted">{typedText}</span>
            <span className="inline-block w-2 h-4 ml-1 animate-pulse" style={{ 
              background: isDark ? '#00FF88' : '#2563EB',
              opacity: 0.7,
            }} />
          </div>
        </section>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .typing-effect::after {
          content: '|';
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}