// src/components/about/StatsSection.tsx
import { Calendar, FolderGit2, Github, Star } from 'lucide-react';

const stats = [
  {
    icon: Calendar,
    label: 'Years Experience',
    value: '4+',
    color: 'text-blue-600 dark:text-blue-400'
  },
  {
    icon: FolderGit2,
    label: 'Projects Completed',
    value: '50+',
    color: 'text-green-600 dark:text-green-400'
  },
  {
    icon: Github,
    label: 'GitHub Repos',
    value: '120+',
    color: 'text-purple-600 dark:text-purple-400'
  },
  {
    icon: Star,
    label: 'GitHub Stars',
    value: '500+',
    color: 'text-yellow-600 dark:text-yellow-400'
  }
];

export default function StatsSection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div 
            key={stat.label}
            className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4 text-center hover:border-blue-300 dark:hover:border-green-500/50 transition-colors"
          >
            <Icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">
              {stat.value}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-500 font-mono">
              {stat.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}