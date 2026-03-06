import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { TerminalLogo } from './TerminalLogo';

type Page = 'home' | 'projects' | 'about' | 'media';

interface NavbarProps {
  currentPage: Page;
}

const navLinks = [
  { label: 'Home', href: '/', page: 'home' as Page },
  { label: 'Projects', href: '/projects', page: 'projects' as Page },
  { label: 'About', href: '/about', page: 'about' as Page },
  { label: 'Media', href: '/media', page: 'media' as Page },
];

export function Navbar({ currentPage }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isDark = theme === 'dark';
  const accentColor = isDark ? '#67e8f9' : '#0f766e';
  const activeBackground = isDark ? 'rgba(103, 232, 249, 0.08)' : 'rgba(15, 118, 110, 0.08)';
  const activeBorder = isDark ? 'rgba(103, 232, 249, 0.24)' : 'rgba(15, 118, 110, 0.18)';

  useEffect(() => {
    const syncScrollState = () => setIsScrolled(window.scrollY > 18);

    syncScrollState();
    window.addEventListener('scroll', syncScrollState, { passive: true });

    return () => window.removeEventListener('scroll', syncScrollState);
  }, []);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50">
      <div className="section-container">
        <div
          className={`flex items-center justify-between border px-4 transition-all duration-500 ${
            isScrolled ? 'mt-3 rounded-[1.75rem] py-2.5' : 'mt-4 rounded-full py-3'
          }`}
          style={{
            background: isScrolled ? 'var(--alpha-surface)' : 'var(--alpha-bg-secondary)',
            borderColor: isScrolled ? 'var(--alpha-border-strong)' : 'var(--alpha-border)',
            boxShadow: isScrolled
              ? isDark
                ? '0 18px 42px rgba(2, 6, 23, 0.34)'
                : '0 18px 42px rgba(15, 23, 42, 0.1)'
              : 'none',
            backdropFilter: 'blur(18px)',
          }}
        >
          <a href="/" className="transition-opacity hover:opacity-85">
            <TerminalLogo size="sm" />
          </a>

          <div className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] transition-all duration-300"
                  style={{
                    color: isActive ? accentColor : 'var(--alpha-text-secondary)',
                    background: isActive ? activeBackground : 'transparent',
                    border: `1px solid ${isActive ? activeBorder : 'transparent'}`,
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden rounded-full border border-alpha-border px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-alpha-text-muted lg:flex lg:items-center lg:gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Web3 / Airdrop / Finance
            </div>
            <button
              onClick={toggleTheme}
              className="rounded-full border border-alpha-border p-3 transition-transform hover:-translate-y-0.5"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-4 w-4" style={{ color: '#f5c26b' }} /> : <Moon className="h-4 w-4" style={{ color: accentColor }} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-full border border-alpha-border p-3 transition-transform hover:-translate-y-0.5 md:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="section-container md:hidden">
          <div
            className="mt-3 rounded-3xl border border-alpha-border p-3"
            style={{ background: 'var(--alpha-surface)' }}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = currentPage === link.page;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-2xl px-4 py-3 font-mono text-xs uppercase tracking-[0.18em] transition-colors"
                    style={{
                      color: isActive ? accentColor : 'var(--alpha-text-secondary)',
                      background: isActive ? activeBackground : 'transparent',
                    }}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
