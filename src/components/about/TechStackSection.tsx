// src/components/about/TechStackSection.tsx
import { Code2, Layers, Wrench, Blocks } from 'lucide-react';

const techCategories = [
  {
    name: 'Languages',
    icon: Code2,
    skills: [
      { name: 'TypeScript', level: 95 },
      { name: 'JavaScript', level: 95 },
      { name: 'Solidity', level: 85 },
      { name: 'Rust', level: 70 },
      { name: 'Python', level: 80 }
    ]
  },
  {
    name: 'Frameworks',
    icon: Layers,
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'Node.js / Express', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Hardhat / Foundry', level: 85 }
    ]
  },
  {
    name: 'Tools',
    icon: Wrench,
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'AWS / Vercel', level: 80 },
      { name: 'PostgreSQL / MongoDB', level: 85 }
    ]
  },
  {
    name: 'Blockchain',
    icon: Blocks,
    skills: [
      { name: 'Ethereum / EVM', level: 90 },
      { name: 'Solana', level: 75 },
      { name: 'Smart Contracts', level: 85 },
      { name: 'DeFi Protocols', level: 80 }
    ]
  }
];

export default function TechStackSection() {
  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
        <span className="text-sm font-mono text-slate-600 dark:text-slate-400">{'>'} skill.stack --visual</span>
      </div>
      
      <div className="p-4 md:p-6 grid md:grid-cols-2 gap-6">
        {techCategories.map((category) => {
          const Icon = category.icon;
          return (
            <div key={category.name} className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Icon className="w-5 h-5 text-blue-600 dark:text-green-400" />
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">{category.name}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-700 dark:text-slate-300 font-mono">{skill.name}</span>
                      <span className="text-slate-500 dark:text-slate-500 text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}