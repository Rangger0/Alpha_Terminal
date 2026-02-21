import { useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { TerminalLogo } from './TerminalLogo';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Media', href: '/media' },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isDark = theme === 'dark';
  const accentColor = isDark ? '#00FF88' : '#2563EB';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-alpha-bg/80 backdrop-blur-md border-b border-alpha-border">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Kiri */}
          <a 
            href="/" 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity animate-in fade-in slide-in-from-left-4 duration-500"
          >
            <TerminalLogo size="sm" />
          </a>

          {/* Right Side: Nav Links + Theme Toggle (Deketin!) */}
          <div className="flex items-center gap-2">
            
            {/* Desktop Navigation - Geser ke kanan, deket toggle */}
            <div className="hidden md:flex items-center gap-1 mr-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-3 py-2 font-mono text-sm text-alpha-text-secondary hover:text-alpha-neon transition-all duration-300 group"
                  style={{ 
                    animationDelay: `${index * 75}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  {/* Hover background effect */}
                  <span 
                    className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-10 transition-opacity" 
                    style={{ 
                      backgroundColor: accentColor,
                      transitionDuration: '300ms'
                    }} 
                  />
                  
                  {/* Text */}
                  <span className="relative">
                    {link.label}
                  </span>
                  
                  {/* Underline animation on hover */}
                  <span 
                    className="absolute bottom-1 left-3 right-3 h-px scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                    style={{ 
                      backgroundColor: accentColor,
                      transitionDuration: '300ms'
                    }}
                  />
                  
                  {/* Active indicator dot */}
                  <span 
                    className="absolute -bottom-px left-1/2 -translate-x-1/2 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 animate-pulse"
                    style={{ backgroundColor: accentColor }}
                  />
                </a>
              ))}
            </div>

            {/* Theme Toggle - Deket nav links */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-alpha-border hover:border-alpha-neon hover:scale-110 hover:rotate-12 transition-all"
              style={{ 
                transitionDuration: '300ms',
                animationDelay: '300ms',
                animationFillMode: 'both'
              }}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-4 h-4" style={{ color: '#00FF88' }} />
              ) : (
                <Moon className="w-4 h-4" style={{ color: '#2563EB' }} />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-alpha-border hover:border-alpha-neon transition-all"
              style={{ transitionDuration: '300ms' }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden bg-alpha-surface border-t border-alpha-border"
          style={{ animation: 'slideInFromTop 0.3s ease-out' }}
        >
          <div className="section-container py-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-mono text-sm text-alpha-text-secondary hover:text-alpha-neon transition-colors py-3 px-3 rounded-lg hover:bg-alpha-bg"
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    transitionDuration: '300ms'
                  }}
                >
                  <span style={{ color: accentColor }} className="mr-2">$</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}