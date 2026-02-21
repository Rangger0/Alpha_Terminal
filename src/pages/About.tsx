// src/pages/About.tsx
import { useTheme } from '@/hooks/useTheme';
import { 
  Terminal, Cpu, Shield, Zap, Database, Globe, Code,
  MapPin, Calendar, FolderGit2, Github, Star, Mail,
  ArrowRight, Quote, User, Copy, Check, Briefcase
} from 'lucide-react';
import type { ReactNode } from 'react';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// ============================================
// DATA DEFINITIONS
// ============================================

const stats = [
  { icon: Calendar, label: 'Years Experience', value: '4+' },
  { icon: FolderGit2, label: 'Projects Completed', value: '50+' },
  { icon: Github, label: 'GitHub Repos', value: '120+' },
  { icon: Star, label: 'GitHub Stars', value: '500+' },
];

const experiences = [
  {
    title: 'Web3 Developer',
    company: 'Freelance / Self Employed',
    period: '2022 - Present',
    description: 'Building DeFi protocols, smart contracts, and Web3 applications on Ethereum and Solana.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Tech Startup',
    period: '2020 - 2022',
    description: 'Developed scalable web applications and API integrations.',
  }
];

const features = [
  {
    icon: Database,
    title: 'Structured Financial System',
    description: 'Sistem tracking keuangan terstruktur dengan analytics real-time dan reporting otomatis.',
  },
  {
    icon: Globe,
    title: 'Web3 Execution Dashboard',
    description: 'Interface terpadu untuk mengelola interaksi dengan blockchain dan protokol DeFi.',
  },
  {
    icon: Code,
    title: 'Personal System Architecture',
    description: 'Arsitektur modular yang memungkinkan integrasi dan ekspansi komponen dengan mudah.',
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Implementasi best practices keamanan untuk melindungi aset dan data sensitif.',
  },
];

const skillStack = [
  { category: 'BLOCKCHAIN', items: ['Ethereum', 'Solana', 'Layer 2', 'Smart Contracts'] },
  { category: 'FRONTEND', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'BACKEND', items: ['Node.js', 'PostgreSQL', 'Redis', 'GraphQL'] },
  { category: 'DEVOPS', items: ['Docker', 'AWS', 'Vercel', 'CI/CD'] },
];

const commands = [
  { cmd: 'cat about.txt', output: 'Web3 developer passionate about blockchain technology.' },
  { cmd: 'ls skills/', output: '[blockchain, defi, smart-contracts, react, nodejs]' },
  { cmd: 'pwd', output: '/home/rose-alpha/web3-developer' },
  { cmd: 'contact --email', output: 'rangger@alpha-terminal.dev' },
];

const testimonials = [
  {
    quote: "Rose Alpha delivered exceptional work on our DeFi protocol. Clean, well-tested smart contracts.",
    author: "Crypto Startup Founder",
    role: "DeFi Project"
  },
  {
    quote: "Professional, communicative, and technically skilled. Highly recommended for Web3 development.",
    author: "Tech Lead",
    role: "Blockchain Company"
  }
];

// ============================================
// ANIMATED SECTION COMPONENT
// ============================================

interface AnimatedSectionProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  className?: string;
}

function AnimatedSection({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = '' 
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const directions = {
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
    up: { x: 0, y: 100 },
    down: { x: 0, y: -100 }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directions[direction] }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// MAIN COMPONENT
// ============================================

export function About() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [copied, setCopied] = useState<string | null>(null);

  const neonColor = isDark ? '#00FF88' : '#2563EB';
  const mutedColor = isDark ? 'text-slate-400' : 'text-slate-500';

  const copyToClipboard = (text: string, cmd: string) => {
    navigator.clipboard.writeText(text);
    setCopied(cmd);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="page-transition min-h-screen pt-24 pb-16 overflow-hidden">
      <div className="section-container space-y-8">
        
        {/* 1. HERO SECTION - Slide dari kiri */}
        <AnimatedSection direction="left">
          <section className="terminal-card overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="relative group">
                  <div 
                    className="absolute -inset-1 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"
                    style={{ background: neonColor }}
                  />
                  <div className="relative w-32 h-32 rounded-lg overflow-hidden border-2"
                    style={{ borderColor: isDark ? '#000000' : '#cbd5e1' }}
                  >
                    <img 
                      src="/profile.jpg" 
                      alt="Rangger" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div 
                    className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 animate-pulse"
                    style={{ background: '#22c55e', borderColor: isDark ? '#0f172a3d' : '#ffffff' }}
                  />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <Terminal className="w-5 h-5" style={{ color: neonColor }} />
                    <span className="font-mono text-sm" style={{ color: neonColor }}>user@alpha-terminal</span>
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold font-mono mb-2" style={{ color: isDark ? '#f8fafc' : '#0f172a' }}>
                    ROESE_ALPHA
                  </h1>
                  <p className={`text-lg mb-4 font-mono ${mutedColor}`}>
                    Full Stack Developer | Web3 Engineer | Blockchain Specialist
                  </p>
                  <div className={`flex items-center justify-center md:justify-start gap-2 text-sm ${mutedColor}`}>
                    <MapPin className="w-4 h-4" />
                    <span>Indonesia / Remote</span>
                    <span className="mx-2">|</span>
                    <span style={{ color: '#22c55e' }}>●</span>
                    <span>Open to work</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* 2. STATS SECTION - Slide dari kanan */}
        <AnimatedSection direction="right" delay={0.1}>
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={stat.label}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="terminal-card p-4 text-center"
                  style={{ borderColor: isDark ? 'rgba(51, 65, 85, 0.5)' : 'rgba(203, 213, 225, 0.5)' }}
                >
                  <Icon className="w-6 h-6 mx-auto mb-2" style={{ color: neonColor }} />
                  <div className="text-2xl font-bold font-mono mb-1" style={{ color: isDark ? '#f8fafc' : '#0f172a' }}>
                    {stat.value}
                  </div>
                  <div className={`text-xs font-mono ${mutedColor}`}>{stat.label}</div>
                </motion.div>
              );
            })}
          </section>
        </AnimatedSection>

        {/* 3. TIMELINE SECTION - Slide dari kiri */}
        <AnimatedSection direction="left" delay={0.2}>
          <section className="terminal-card">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Briefcase className="w-5 h-5" style={{ color: neonColor }} />
                <span className={`font-mono text-sm ${mutedColor}`}>{'>'} experience.log</span>
              </div>
              <div className="space-y-6">
                {experiences.map((exp, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="relative pl-6 pb-6 border-l-2 last:pb-0"
                    style={{ borderColor: isDark ? '#334155' : '#e2e8f0' }}
                  >
                    <div 
                      className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2"
                      style={{ background: neonColor, borderColor: isDark ? '#0f172a' : '#ffffff' }}
                    />
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-2">
                      <h3 className="font-semibold font-mono" style={{ color: isDark ? '#f8fafc' : '#0f172a' }}>
                        {exp.title}
                      </h3>
                      <span className={`text-xs font-mono ${mutedColor}`}>{exp.period}</span>
                    </div>
                    <p className={`text-sm mb-2 ${mutedColor}`}>{exp.company}</p>
                    <p className="text-sm" style={{ color: isDark ? '#94a3b8' : '#64748b' }}>{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* 4. FEATURES - Slide dari kanan */}
        <AnimatedSection direction="right" delay={0.3}>
          <section className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <motion.div 
                key={feature.title}
                whileHover={{ scale: 1.02 }}
                className="terminal-card p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: isDark ? 'rgba(0, 255, 136, 0.1)' : 'rgba(37, 99, 235, 0.1)' }}
                  >
                    <feature.icon className="w-5 h-5" style={{ color: neonColor }} />
                  </div>
                  <h3 className="font-mono text-lg font-semibold" style={{ color: isDark ? '#f8fafc' : '#0f172a' }}>
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm" style={{ color: isDark ? '#94a3b8' : '#64748b' }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </section>
        </AnimatedSection>

        {/* 5. SKILL STACK - Slide dari kiri */}
        <AnimatedSection direction="left" delay={0.4}>
          <section className="terminal-card p-6">
            <div className="flex items-center gap-2 mb-6">
              <Cpu className="w-5 h-5" style={{ color: neonColor }} />
              <span className={`font-mono text-sm ${mutedColor}`}>skill.stack</span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {skillStack.map((stack, idx) => (
                <motion.div 
                  key={stack.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-mono text-sm mb-3" style={{ color: isDark ? '#f8fafc' : '#0f172a' }}>
                    {stack.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {stack.items.map((item) => (
                      <motion.span
                        key={item}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 rounded font-mono text-xs cursor-default"
                        style={{ 
                          background: isDark ? 'rgba(0, 255, 136, 0.1)' : 'rgba(37, 99, 235, 0.1)',
                          color: neonColor
                        }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* 6. TERMINAL COMMANDS - Slide dari kanan */}
        <AnimatedSection direction="right" delay={0.5}>
          <section className="rounded-xl overflow-hidden" style={{ background: '#0c1021cb', border: '1px solid #000000' }}>
            <div className="px-4 py-3 border-b flex items-center justify-between" style={{ borderColor: '#222b38', background: '#1e293b' }}>
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-slate-200" />
                <span className="font-mono text-sm text-slate-800">interactive.terminal</span>
              </div>
              <span className="text-xs text-slate-800 font-mono">bash</span>
            </div>
            <div className="p-4 space-y-4 font-mono text-sm">
              {commands.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between group">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">$</span>
                      <span className="text-slate-300">{item.cmd}</span>
                    </div>
                    <button
                      onClick={() => copyToClipboard(item.output, item.cmd)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-slate-800 rounded"
                    >
                      {copied === item.cmd ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-slate-100" />}
                    </button>
                  </div>
                  <div className="pl-4 text-slate-300 border-l-2 border-slate-600">
                    {item.output}
                  </div>
                </motion.div>
              ))}
              <div className="flex items-center gap-2 pt-2">
                <span className="text-green-400">$</span>
                <span className="w-2 h-4 bg-green-400 animate-pulse" />
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* 7. TESTIMONIALS - Slide dari kiri */}
        <AnimatedSection direction="left" delay={0.6}>
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Quote className="w-5 h-5" style={{ color: neonColor }} />
              <span className={`font-mono text-sm ${mutedColor}`}>{'>'} testimonials.log</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {testimonials.map((testi, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="terminal-card p-5 relative"
                >
                  <Quote className="w-8 h-8 absolute top-4 right-4 opacity-10" style={{ color: isDark ? '#fff' : '#000' }} />
                  <p className="text-sm mb-4 italic relative z-10" style={{ color: isDark ? '#94a3b8' : '#64748b' }}>
                    "{testi.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ background: isDark ? '#334155' : '#e2e8f0' }}
                    >
                      <User className="w-5 h-5" style={{ color: isDark ? '#64748b' : '#94a3b8' }} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold font-mono" style={{ color: isDark ? '#f8fafc' : '#0f172a' }}>
                        {testi.author}
                      </p>
                      <p className="text-xs" style={{ color: isDark ? '#64748b' : '#94a3b8' }}>{testi.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* 8. CONTACT CTA - Slide dari kanan */}
        <AnimatedSection direction="right" delay={0.7}>
          <section className="terminal-card p-6 md:p-8 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl font-bold font-mono mb-2" 
              style={{ color: isDark ? '#f8fafc' : '#0f172a' }}
            >
              Let's Build Something Together
            </motion.h2>
            <p className="text-sm mb-6" style={{ color: isDark ? '#94a3b8' : '#64748b' }}>
              Open for freelance projects, collaborations, and Web3 consulting.
            </p>
            <motion.a
              href="mailto:rangger@alpha-terminal.dev"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white transition-colors"
              style={{ background: neonColor }}
            >
              <Mail className="w-4 h-4" />
              <span className="font-mono">Hire Me</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </section>
        </AnimatedSection>

        {/* Footer */}
        <AnimatedSection direction="up" delay={0.8}>
          <section className="py-8 border-t" style={{ borderColor: isDark ? '#334155' : '#e2e8f0' }}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="font-mono text-xs" style={{ color: isDark ? '#64748b' : '#94a3b8' }}>
                <span style={{ color: neonColor }}>$</span> system.status --check
              </div>
              <div className="flex items-center gap-4">
                <Zap className="w-4 h-4" style={{ color: neonColor }} />
                <span className="font-mono text-xs" style={{ color: isDark ? '#64748b' : '#94a3b8' }}>
                  Powered by Rose Alpha
                </span>
              </div>
            </div>
          </section>
        </AnimatedSection>

      </div>
    </div>
  );
}