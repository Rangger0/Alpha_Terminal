// src/components/about/ContactCTA.tsx
import { Mail, Github, Twitter, Send, ArrowRight } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'allgazali011@gmail.com',
    href: 'mailto:allgazali011@gmail.com',
    color: 'hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@Rangger0',
    href: 'https://github.com/Rangger0',
    color: 'hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100'
  },
  {
    icon: Twitter,
    label: 'X (Twitter)',
    value: '@rinzx_',
    href: 'https://x.com/rinzx_',
    color: 'hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400'
  },
  {
    icon: Send,
    label: 'Telegram',
    value: 'ALPHA Community',
    href: 'https://t.me/+MGzRobr9cp4yMTk1',
    color: 'hover:bg-cyan-50 dark:hover:bg-cyan-900/20 hover:text-cyan-600 dark:hover:text-cyan-400'
  }
];

export default function ContactCTA() {
  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20 p-6 md:p-8">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
          Let's Build Something Together
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          Open for freelance projects, collaborations, and Web3 consulting.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {contactLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 transition-all ${link.color}`}
            >
              <Icon className="w-5 h-5" />
              <div className="text-left">
                <p className="text-xs text-slate-500">{link.label}</p>
                <p className="text-sm font-medium truncate">{link.value}</p>
              </div>
            </a>
          );
        })}
      </div>

      <div className="text-center">
        <a
          href="mailto:allgazali011@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 dark:bg-green-600 text-white rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-green-700 transition-colors"
        >
          <Mail className="w-4 h-4" />
          Hire Me
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
