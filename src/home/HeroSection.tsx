import { useEffect, useState } from 'react';
import { ArrowRight, Check, Copy, LineChart, Radar, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';

const rotatingTitles = ['Web3 Operator', 'Airdrop Researcher', 'Full Stack Builder', 'Finance Note Architect'];

const signalMetrics = [
  { label: 'Live systems', value: '02', helper: 'Capital + Tracker' },
  { label: 'Focus lanes', value: '03', helper: 'Web3 / finance / shipping' },
  { label: 'Work style', value: 'Daily', helper: 'Signal, notes, review' },
];

const commandDeck = [
  { command: 'brand.name', value: 'Alpha Terminal' },
  { command: 'focus[0]', value: 'airdrop intelligence + eligibility' },
  { command: 'focus[1]', value: 'finance notes + capital discipline' },
  { command: 'focus[2]', value: 'premium product shipping' },
];

const miniPanels = [
  {
    title: 'Airdrop Ops',
    description: 'Research, quest cadence, claim readiness.',
    icon: Radar,
  },
  {
    title: 'Finance Notes',
    description: 'Balance log, review ritual, execution memory.',
    icon: Wallet,
  },
  {
    title: 'Signal Review',
    description: 'Decision layer before time and capital move.',
    icon: LineChart,
  },
];

export default function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copied, setCopied] = useState(false);

  const accent = isDark ? '#67e8f9' : '#0f766e';

  useEffect(() => {
    const text = rotatingTitles[currentTextIndex];
    const speed = isDeleting ? 45 : 90;

    const timer = window.setTimeout(() => {
      if (!isDeleting && currentText.length < text.length) {
        setCurrentText(text.slice(0, currentText.length + 1));
        return;
      }

      if (!isDeleting) {
        window.setTimeout(() => setIsDeleting(true), 1400);
        return;
      }

      if (currentText.length > 0) {
        setCurrentText(currentText.slice(0, -1));
        return;
      }

      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTitles.length);
    }, speed);

    return () => window.clearTimeout(timer);
  }, [currentText, currentTextIndex, isDeleting]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText('allgazali011@gmail.com');
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="relative overflow-hidden py-8 md:py-12">
      <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="space-y-8"
        >
          <span className="alpha-chip">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Alpha Terminal / premium portfolio
          </span>

          <div className="space-y-5">
            <p className="alpha-kicker">Web3 Portfolio / Command Layer</p>
            <div className="space-y-3">
              <h1 className="max-w-3xl text-5xl font-semibold leading-[0.92] text-alpha-text-primary md:text-7xl">
                Alpha Terminal
              </h1>
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-alpha-text-secondary">
                role.active = {currentText}
                <span className="ml-1 inline-block h-4 w-0.5 animate-pulse" style={{ background: accent }} />
              </p>
            </div>
            <p className="max-w-2xl text-base leading-8 text-alpha-text-secondary md:text-lg">
              Portfolio ini saya arahkan seperti operating system pribadi: tempat untuk menampilkan build Web3, dashboard
              airdrop, catatan keuangan, dan cara berpikir di balik setiap eksekusi.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="/projects" className="alpha-button primary">
              Open project vault
              <ArrowRight className="h-4 w-4" />
            </a>
            <button type="button" onClick={handleCopy} className="alpha-button secondary">
              {copied ? <Check className="h-4 w-4" style={{ color: accent }} /> : <Copy className="h-4 w-4" style={{ color: accent }} />}
              {copied ? 'Email copied' : 'Copy contact email'}
            </button>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {signalMetrics.map((metric) => (
              <div key={metric.label} className="terminal-card p-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-alpha-text-muted">{metric.label}</p>
                <p className="mt-3 text-3xl font-semibold text-alpha-text-primary">{metric.value}</p>
                <p className="mt-2 text-sm text-alpha-text-secondary">{metric.helper}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-panel overflow-hidden"
        >
          <div className="alpha-grid-surface border-b border-alpha-border px-5 py-4 md:px-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em]" style={{ color: accent }}>
                  operator.snapshot
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-alpha-text-primary">Built for signal, not noise</h2>
              </div>
              <span className="status-live">
                <span className="h-2 w-2 rounded-full bg-current" />
                Active
              </span>
            </div>
          </div>

          <div className="p-5 md:p-6">
            <div
              className="overflow-hidden rounded-[1.4rem] border"
              style={{
                borderColor: isDark ? 'rgba(103, 232, 249, 0.18)' : 'rgba(15, 118, 110, 0.16)',
                background: isDark ? 'rgba(7, 12, 24, 0.88)' : 'rgba(255, 255, 255, 0.9)',
              }}
            >
              <div className="flex items-center justify-between border-b border-alpha-border px-4 py-3">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-alpha-text-muted">command deck</p>
                  <p className="mt-1 font-mono text-sm text-alpha-text-primary">alpha-terminal.sh</p>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-alpha-text-muted">bash</span>
              </div>

              <div className="space-y-4 p-4 font-mono text-sm">
                {commandDeck.map((line) => (
                  <div key={line.command} className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span style={{ color: accent }}>$</span>
                      <span className="text-alpha-text-primary">{line.command}</span>
                    </div>
                    <div className="border-l border-alpha-border pl-4 text-alpha-text-secondary">{line.value}</div>
                  </div>
                ))}
                <div className="flex items-center gap-2 pt-2">
                  <span style={{ color: accent }}>$</span>
                  <span className="h-4 w-2 animate-pulse" style={{ background: accent }} />
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-3">
              {miniPanels.map((panel) => {
                const Icon = panel.icon;

                return (
                  <div key={panel.title} className="rounded-[1.2rem] border border-alpha-border px-4 py-4">
                    <div className="flex items-start gap-3">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-2xl"
                        style={{ background: isDark ? 'rgba(103, 232, 249, 0.1)' : 'rgba(15, 118, 110, 0.08)' }}
                      >
                        <Icon className="h-4 w-4" style={{ color: accent }} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-alpha-text-primary">{panel.title}</h3>
                        <p className="mt-1 text-sm leading-7 text-alpha-text-secondary">{panel.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
